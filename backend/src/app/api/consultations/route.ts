import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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

  const where = session!.role === "Admin"
    ? {}
    : session!.role === "Dosen"
      ? { lecturer: { userId: session!.userId } }
      : { userId: session!.userId };
  const bookings = await prisma.consultationBooking.findMany({
    where,
    include: { lecturer: true, session: true, user: { select: { name: true, role: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ bookings: bookings.map((booking) => ({
    ...booking,
    userName: booking.user.name,
    userRole: booking.user.role,
    lecturerName: booking.lecturer.name,
    scheduledTimeSlot: { startTime: booking.startTime, endTime: booking.endTime },
    zoomLink: booking.zoomLink ?? booking.session?.zoomLink ?? undefined,
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
  const [lecturer, semester] = await Promise.all([
    prisma.lecturer.findUnique({ where: { id: data.lecturerId } }),
    prisma.semester.findUnique({ where: { id: data.semesterId } }),
  ]);
  if (!lecturer || !semester) return NextResponse.json({ error: "Dosen atau semester tidak ditemukan." }, { status: 404 });
  if (!semester.isActive) return NextResponse.json({ error: "Semester ini tidak aktif." }, { status: 409 });

  try {
    const booking = await prisma.$transaction(async (tx) => {
      const availability = await tx.lecturerAvailability.findUnique({
        where: {
          lecturerId_semesterId_dayOfWeek: {
            lecturerId: data.lecturerId,
            semesterId: data.semesterId,
            dayOfWeek: data.scheduledDay,
          },
        },
      });
      const slots = Array.isArray(availability?.timeSlots) ? availability.timeSlots : [];
      const hasSlot = availability?.isActive && slots.some((slot) => {
        if (!slot || typeof slot !== "object") return false;
        const candidate = slot as { startTime?: unknown; endTime?: unknown };
        return candidate.startTime === data.scheduledTimeSlot.startTime && candidate.endTime === data.scheduledTimeSlot.endTime;
      });
      if (!hasSlot) throw new Error("SLOT_UNAVAILABLE");

      const activeStatuses = ["pending", "accepted", "waiting_zoom", "rescheduled", "scheduled"] as const;
      const [lecturerBookings, userConflict] = await Promise.all([
        tx.consultationBooking.count({
          where: {
            lecturerId: data.lecturerId,
            scheduledDate: date,
            startTime: data.scheduledTimeSlot.startTime,
            endTime: data.scheduledTimeSlot.endTime,
            status: { in: [...activeStatuses] },
          },
        }),
        tx.consultationBooking.findFirst({
          where: {
            userId: session!.userId,
            scheduledDate: date,
            status: { in: [...activeStatuses] },
            startTime: { lt: data.scheduledTimeSlot.endTime },
            endTime: { gt: data.scheduledTimeSlot.startTime },
          },
          select: { id: true },
        }),
      ]);
      if (lecturerBookings >= 15) throw new Error("SLOT_FULL");
      if (userConflict) throw new Error("USER_CONFLICT");

      return tx.consultationBooking.create({
        data: {
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
        },
        include: { lecturer: true },
      });
    }, { isolationLevel: "Serializable" });
    return NextResponse.json({
      booking: {
        ...booking,
        lecturerName: booking.lecturer.name,
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
    if (typeof error === "object" && error !== null && "code" in error && error.code === "P2034") {
      return NextResponse.json({ error: "Jadwal baru saja berubah. Silakan coba kembali." }, { status: 409 });
    }
    throw error;
  }
}