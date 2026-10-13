import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const updateSchema = z.object({
  status: z.enum(["pending", "accepted", "waiting_zoom", "rejected", "rescheduled", "scheduled", "completed", "cancelled"]).optional(),
  zoomLink: z.url().nullable().optional(),
  rescheduleNote: z.string().max(2000).nullable().optional(),
  feedback: z.string().max(5000).nullable().optional(),
  rating: z.number().int().min(1).max(5).nullable().optional(),
}).refine((value) => Object.keys(value).length > 0);

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireSession();
  if (response) return response;
  const { id } = await context.params;
  const existing = await prisma.consultationBooking.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Konsultasi tidak ditemukan." }, { status: 404 });
  const parsed = updateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Perubahan konsultasi tidak valid." }, { status: 400 });
  const changes = parsed.data;
  if (session!.role !== "Admin") {
    if (session!.role === "Dosen") {
      const lecturer = await prisma.lecturer.findUnique({ where: { id: existing.lecturerId }, select: { userId: true } });
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

  const updated = await prisma.consultationBooking.update({
    where: { id },
    data: {
      ...changes,
      ...(changes.status === "completed" ? { completedAt: new Date() } : {}),
    },
    include: { lecturer: true },
  });
  return NextResponse.json({
    booking: {
      ...updated,
      lecturerName: updated.lecturer.name,
      scheduledTimeSlot: { startTime: updated.startTime, endTime: updated.endTime },
    },
  });
}