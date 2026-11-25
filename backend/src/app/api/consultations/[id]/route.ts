import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { consultationBookings, lecturers } from "@/db/schema";

const updateSchema = z.object({
  status: z.enum(["pending", "accepted", "waiting_zoom", "rejected", "rescheduled", "scheduled", "completed", "cancelled"]).optional(),
  zoomLink: z.url().nullable().optional(),
  rescheduleNote: z.string().max(2000).nullable().optional(),
  feedback: z.string().max(5000).nullable().optional(),
  rating: z.number().int().min(1).max(5).nullable().optional(),
  scheduledDate: z.iso.date().optional(),
  scheduledDay: z.string().trim().min(1).max(20).optional(),
  scheduledTimeSlot: z.object({ startTime: z.string(), endTime: z.string() }).optional(),
}).refine((value) => Object.keys(value).length > 0);

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireSession();
  if (response) return response;
  const { id } = await context.params;
  const db = getDatabase();
  const [existing] = await db.select().from(consultationBookings).where(eq(consultationBookings.id, id)).limit(1);
  if (!existing) return NextResponse.json({ error: "Konsultasi tidak ditemukan." }, { status: 404 });
  const parsed = updateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Perubahan konsultasi tidak valid." }, { status: 400 });
  const changes = parsed.data;
  if (changes.scheduledTimeSlot && changes.scheduledTimeSlot.startTime >= changes.scheduledTimeSlot.endTime) {
    return NextResponse.json({ error: "Rentang waktu konsultasi tidak valid." }, { status: 400 });
  }
  if (session!.role !== "Admin") {
    if (session!.role === "Dosen") {
      const [lecturer] = await db.select({ userId: lecturers.userId }).from(lecturers).where(eq(lecturers.id, existing.lecturerId)).limit(1);
      if (lecturer?.userId !== session!.userId) {
        return NextResponse.json({ error: "Anda tidak memiliki akses." }, { status: 403 });
      }
      if (changes.feedback !== undefined || changes.rating !== undefined) {
        return NextResponse.json({ error: "Dosen tidak dapat mengubah evaluasi pemohon." }, { status: 403 });
      }
    } else {
      if (existing.userId !== session!.userId) {
        return NextResponse.json({ error: "Anda tidak memiliki akses." }, { status: 403 });
      }
      const mayCancel = changes.status === "cancelled" && Object.keys(changes).every((key) => key === "status");
      const mayReview = existing.status === "completed" && changes.status === undefined &&
        (changes.feedback !== undefined || changes.rating !== undefined) &&
        Object.keys(changes).every((key) => key === "feedback" || key === "rating");
      if (!mayCancel && !mayReview) {
        return NextResponse.json({ error: "Pemohon hanya dapat membatalkan konsultasi atau mengirim evaluasi setelah selesai." }, { status: 403 });
      }
    }
  }

  const { scheduledTimeSlot, scheduledDate, ...bookingChanges } = changes;
  const [updated] = await db.update(consultationBookings).set({
    ...bookingChanges,
    ...(scheduledDate ? { scheduledDate: new Date(`${scheduledDate}T00:00:00.000Z`) } : {}),
    ...(scheduledTimeSlot ? {
      startTime: scheduledTimeSlot.startTime,
      endTime: scheduledTimeSlot.endTime,
    } : {}),
    ...(changes.status === "completed" ? { completedAt: new Date() } : {}),
  }).where(eq(consultationBookings.id, id)).returning();
  const [lecturer] = await db.select({ name: lecturers.name }).from(lecturers).where(eq(lecturers.id, updated.lecturerId)).limit(1);
  return NextResponse.json({
    booking: {
      ...updated,
      lecturerName: lecturer?.name ?? "",
      scheduledTimeSlot: { startTime: updated.startTime, endTime: updated.endTime },
    },
  });
}