import { NextResponse } from "next/server";
import { and, count, desc, eq, gt, inArray, lt } from "drizzle-orm";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { consultationBookings, consultationSessions, lecturerAvailabilities, lecturers, semesters, users } from "@/db/schema";

const bookingSchema = z.object({
  lecturerId: z.uuid(),
  semesterId: z.uuid(),
  consultationType: z.enum(["umkm", "school"]),
  title: z.string().trim().min(3).max(180),
  category: z.string().trim().min(1).max(100),
  priority: z.string().trim().max(40).default("normal"),
  description: z.string().trim().min(5).max(10000),
  organization: z.string().trim().min(1).max(180),
  contactPerson: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(1).max(40),
  email: z.email(),
  scheduledDate: z.iso.date(),
  scheduledDay: z.string().trim().min(1).max(20),
  scheduledTimeSlot: z.object({ startTime: z.string(), endTime: z.string() }),
  attachmentFileName: z.string().max(255).optional(),
});

export async function GET() {
  const { session, response } = await requireSession();
  if (response) return response;

  const db = getDatabase();
  const query = db.select({
    booking: consultationBookings,
    lecturer: lecturers,
    session: consultationSessions,
    user: { name: users.name, role: users.role },
  }).from(consultationBookings)
    .innerJoin(lecturers, eq(consultationBookings.lecturerId, lecturers.id))
    .leftJoin(consultationSessions, eq(consultationBookings.sessionId, consultationSessions.id))
    .innerJoin(users, eq(consultationBookings.userId, users.id));
  const rows = session!.role === "Admin"
    ? await query.orderBy(desc(consultationBookings.createdAt))
    : session!.role === "Dosen"
      ? await query.where(eq(lecturers.userId, session!.userId)).orderBy(desc(consultationBookings.createdAt))
      : await query.where(eq(consultationBookings.userId, session!.userId)).orderBy(desc(consultationBookings.createdAt));
  return NextResponse.json({ bookings: rows.map(({ booking, lecturer, session: consultationSession, user }) => ({
    ...booking,
    lecturer,
    session: consultationSession,
    user,
    userName: user.name,
    userRole: user.role,
    lecturerName: lecturer.name,
    scheduledTimeSlot: { startTime: booking.startTime, endTime: booking.endTime },
    zoomLink: booking.zoomLink ?? consultationSession?.zoomLink ?? undefined,
    attachmentDataUrl: undefined,
  })) });
}

export async function POST(request: Request) {
  const { session, response } = await requireSession(["UMKM", "Guru", "Siswa"]);
  if (response) return response;
  const parsed = bookingSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Data konsultasi tidak valid.", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const date = new Date(`${data.scheduledDate}T00:00:00.000Z`);
  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  if (dayNames[date.getUTCDay()] !== data.scheduledDay) {
    return NextResponse.json({ error: "Hari tidak sesuai dengan tanggal yang dipilih." }, { status: 400 });
  }
  if (data.scheduledTimeSlot.startTime >= data.scheduledTimeSlot.endTime) {
    return NextResponse.json({ error: "Rentang waktu konsultasi tidak valid." }, { status: 400 });
  }
  const db = getDatabase();
  const [[lecturer], [semester]] = await Promise.all([
    db.select().from(lecturers).where(eq(lecturers.id, data.lecturerId)).limit(1),
    db.select().from(semesters).where(eq(semesters.id, data.semesterId)).limit(1),
  ]);
  if (!lecturer || !semester) return NextResponse.json({ error: "Dosen atau semester tidak ditemukan." }, { status: 404 });
  if (!semester.isActive) return NextResponse.json({ error: "Semester ini tidak aktif." }, { status: 409 });

  try {
    const booking = await db.transaction(async (tx) => {
      const [availability] = await tx.select().from(lecturerAvailabilities).where(and(
        eq(lecturerAvailabilities.lecturerId, data.lecturerId),
        eq(lecturerAvailabilities.semesterId, data.semesterId),
        eq(lecturerAvailabilities.dayOfWeek, data.scheduledDay),
      )).limit(1);
      const slots = Array.isArray(availability?.timeSlots) ? availability.timeSlots : [];
      const hasSlot = availability?.isActive && slots.some((slot) => {
        if (!slot || typeof slot !== "object") return false;
        const candidate = slot as { startTime?: unknown; endTime?: unknown };
        return candidate.startTime === data.scheduledTimeSlot.startTime && candidate.endTime === data.scheduledTimeSlot.endTime;
      });
      if (!hasSlot) throw new Error("SLOT_UNAVAILABLE");

      const activeStatuses = ["pending", "accepted", "waiting_zoom", "rescheduled", "scheduled"] as const;
      const [[lecturerBookingCount], userConflict] = await Promise.all([
        tx.select({ value: count() }).from(consultationBookings).where(and(
          eq(consultationBookings.lecturerId, data.lecturerId),
          eq(consultationBookings.scheduledDate, date),
          eq(consultationBookings.startTime, data.scheduledTimeSlot.startTime),
          eq(consultationBookings.endTime, data.scheduledTimeSlot.endTime),
          inArray(consultationBookings.status, activeStatuses),
        )),
        tx.select({ id: consultationBookings.id }).from(consultationBookings).where(and(
          eq(consultationBookings.userId, session!.userId),
          eq(consultationBookings.scheduledDate, date),
          inArray(consultationBookings.status, activeStatuses),
          lt(consultationBookings.startTime, data.scheduledTimeSlot.endTime),
          gt(consultationBookings.endTime, data.scheduledTimeSlot.startTime),
        )).limit(1),
      ]);
      if (lecturerBookingCount.value >= 15) throw new Error("SLOT_FULL");
      if (userConflict.length > 0) throw new Error("USER_CONFLICT");

      const [created] = await tx.insert(consultationBookings).values({
          userId: session!.userId,
          lecturerId: data.lecturerId,
          semesterId: data.semesterId,
          consultationType: data.consultationType,
          title: data.title,
          category: data.category,
          priority: data.priority,
          description: data.description,
          organization: data.organization,
          contactPerson: data.contactPerson,
          phone: data.phone,
          email: data.email,
          scheduledDate: date,
          scheduledDay: data.scheduledDay,
          startTime: data.scheduledTimeSlot.startTime,
          endTime: data.scheduledTimeSlot.endTime,
          attachmentFileName: data.attachmentFileName,
        }).returning();
      return created;
    }, { isolationLevel: "serializable" });
    return NextResponse.json({
      booking: {
        ...booking,
        lecturerName: lecturer.name,
        scheduledTimeSlot: { startTime: booking.startTime, endTime: booking.endTime },
      },
    }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "SLOT_UNAVAILABLE") {
      return NextResponse.json({ error: "Jadwal dosen tidak tersedia pada waktu tersebut." }, { status: 409 });
    }
    if (error instanceof Error && error.message === "SLOT_FULL") {
      return NextResponse.json({ error: "Kuota jadwal konsultasi sudah penuh." }, { status: 409 });
    }
    if (error instanceof Error && error.message === "USER_CONFLICT") {
      return NextResponse.json({ error: "Anda sudah memiliki konsultasi pada rentang waktu tersebut." }, { status: 409 });
    }
    if (typeof error === "object" && error !== null && "code" in error && error.code === "40001") {
      return NextResponse.json({ error: "Jadwal baru saja berubah. Silakan coba kembali." }, { status: 409 });
    }
    throw error;
  }
}