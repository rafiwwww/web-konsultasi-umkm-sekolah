import { NextResponse } from "next/server";
import { and, asc, eq, inArray } from "drizzle-orm";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { consultationBookings, lecturerAvailabilities, lecturers } from "@/db/schema";

const availabilitySchema = z.object({
  lecturerId: z.uuid(),
  semesterId: z.uuid(),
  dayOfWeek: z.enum(["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]),
  timeSlots: z.array(z.object({ id: z.string().optional(), startTime: z.string(), endTime: z.string() })).min(1),
  isActive: z.boolean().default(true),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lecturerId = searchParams.get("lecturerId");
  const semesterId = searchParams.get("semesterId");
  const filters = [eq(lecturerAvailabilities.isActive, true)];
  if (lecturerId) filters.push(eq(lecturerAvailabilities.lecturerId, lecturerId));
  if (semesterId) filters.push(eq(lecturerAvailabilities.semesterId, semesterId));
  const availabilities = await getDatabase().select().from(lecturerAvailabilities)
    .where(and(...filters))
    .orderBy(asc(lecturerAvailabilities.dayOfWeek), asc(lecturerAvailabilities.lecturerId));
  return NextResponse.json({ availabilities });
}

export async function POST(request: Request) {
  const { session, response } = await requireSession(["Admin", "Dosen"]);
  if (response) return response;
  const parsed = availabilitySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Data jadwal tidak valid." }, { status: 400 });
  const { lecturerId, semesterId, dayOfWeek, timeSlots, isActive } = parsed.data;
  const [lecturer] = await getDatabase().select({ userId: lecturers.userId }).from(lecturers).where(eq(lecturers.id, lecturerId)).limit(1);
  if (!lecturer) return NextResponse.json({ error: "Dosen tidak ditemukan." }, { status: 404 });
  if (session!.role === "Dosen" && lecturer.userId !== session!.userId) {
    return NextResponse.json({ error: "Anda hanya dapat mengatur jadwal sendiri." }, { status: 403 });
  }

  const [availability] = await getDatabase().insert(lecturerAvailabilities)
    .values({ lecturerId, semesterId, dayOfWeek, timeSlots, isActive })
    .onConflictDoUpdate({
      target: [lecturerAvailabilities.lecturerId, lecturerAvailabilities.semesterId, lecturerAvailabilities.dayOfWeek],
      set: { timeSlots, isActive },
    })
    .returning();
  return NextResponse.json({ availability }, { status: 201 });
}

export async function DELETE(request: Request) {
  const { session, response } = await requireSession(["Admin", "Dosen"]);
  if (response) return response;
  const id = new URL(request.url).searchParams.get("id");
  if (!id || !z.uuid().safeParse(id).success) {
    return NextResponse.json({ error: "ID jadwal tidak valid." }, { status: 400 });
  }
  const db = getDatabase();
  const [availability] = await db.select({
    id: lecturerAvailabilities.id,
    lecturerId: lecturerAvailabilities.lecturerId,
    semesterId: lecturerAvailabilities.semesterId,
    dayOfWeek: lecturerAvailabilities.dayOfWeek,
    timeSlots: lecturerAvailabilities.timeSlots,
    lecturerUserId: lecturers.userId,
  }).from(lecturerAvailabilities)
    .innerJoin(lecturers, eq(lecturerAvailabilities.lecturerId, lecturers.id))
    .where(eq(lecturerAvailabilities.id, id))
    .limit(1);
  if (!availability) return NextResponse.json({ error: "Jadwal tidak ditemukan." }, { status: 404 });
  if (session!.role === "Dosen" && availability.lecturerUserId !== session!.userId) {
    return NextResponse.json({ error: "Anda hanya dapat menghapus jadwal sendiri." }, { status: 403 });
  }
  const activeBookings = await db.select({
    startTime: consultationBookings.startTime,
    endTime: consultationBookings.endTime,
  }).from(consultationBookings).where(and(
    eq(consultationBookings.lecturerId, availability.lecturerId),
    eq(consultationBookings.semesterId, availability.semesterId),
    eq(consultationBookings.scheduledDay, availability.dayOfWeek),
    inArray(consultationBookings.status, ["pending", "accepted", "waiting_zoom", "rescheduled", "scheduled"]),
  ));
  const hasActiveBooking = availability.timeSlots.some((slot) => activeBookings.some((booking) =>
    slot.startTime === booking.startTime && slot.endTime === booking.endTime
  ));
  if (hasActiveBooking) {
    return NextResponse.json({ error: "Jadwal tidak dapat dihapus karena memiliki konsultasi aktif." }, { status: 409 });
  }
  await db.delete(lecturerAvailabilities).where(eq(lecturerAvailabilities.id, id));
  return NextResponse.json({ success: true });
}