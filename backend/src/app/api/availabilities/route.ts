import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
  const availabilities = await prisma.lecturerAvailability.findMany({
    where: {
      isActive: true,
      ...(lecturerId ? { lecturerId } : {}),
      ...(semesterId ? { semesterId } : {}),
    },
    orderBy: [{ dayOfWeek: "asc" }, { lecturerId: "asc" }],
  });
  return NextResponse.json({ availabilities });
}

export async function POST(request: Request) {
  const { session, response } = await requireSession(["Admin", "Dosen"]);
  if (response) return response;
  const parsed = availabilitySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Data jadwal tidak valid." }, { status: 400 });
  const { lecturerId, semesterId, dayOfWeek, timeSlots, isActive } = parsed.data;
  const lecturer = await prisma.lecturer.findUnique({ where: { id: lecturerId }, select: { userId: true } });
  if (!lecturer) return NextResponse.json({ error: "Dosen tidak ditemukan." }, { status: 404 });
  if (session!.role === "Dosen" && lecturer.userId !== session!.userId) {
    return NextResponse.json({ error: "Anda hanya dapat mengatur jadwal sendiri." }, { status: 403 });
  }

  const availability = await prisma.lecturerAvailability.upsert({
    where: { lecturerId_semesterId_dayOfWeek: { lecturerId, semesterId, dayOfWeek } },
    create: { lecturerId, semesterId, dayOfWeek, timeSlots, isActive },
    update: { timeSlots, isActive },
  });
  return NextResponse.json({ availability }, { status: 201 });
}