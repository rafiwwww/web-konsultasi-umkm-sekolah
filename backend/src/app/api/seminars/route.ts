import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession, requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const seminarSchema = z.object({
  title: z.string().trim().min(3).max(180),
  description: z.string().trim().min(1).max(10000),
  host: z.string().trim().min(1).max(160),
  hostId: z.uuid().optional(),
  eventDate: z.iso.date(),
  eventTime: z.string().trim().min(1).max(20),
  location: z.string().trim().min(1).max(255),
  zoomLink: z.url().optional(),
  posterUrl: z.url().optional(),
  status: z.enum(["Draft", "Published", "Cancelled"]).default("Draft"),
  quota: z.number().int().min(1).max(100000),
  category: z.enum(["Business", "Academic", "Technology", "Other"]),
  targetAudience: z.array(z.string().max(40)).default([]),
});

export async function GET() {
  const session = await getSession();
  const seminars = await prisma.seminar.findMany({
    where: session?.role === "Admin" || session?.role === "Dosen" ? {} : { status: "Published" },
    include: { _count: { select: { registrations: true } } },
    orderBy: [{ eventDate: "asc" }, { eventTime: "asc" }],
  });
  return NextResponse.json({ seminars: seminars.map(({ _count, ...seminar }) => ({ ...seminar, participants: _count.registrations })) });
}

export async function POST(request: Request) {
  const { session, response } = await requireSession(["Admin", "Dosen"]);
  if (response) return response;
  const parsed = seminarSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Data seminar tidak valid.", details: parsed.error.flatten() }, { status: 400 });
  const data = parsed.data;
  const seminar = await prisma.seminar.create({
    data: {
      ...data,
      eventDate: new Date(`${data.eventDate}T00:00:00.000Z`),
      createdBy: session!.userId,
    },
  });
  return NextResponse.json({ seminar: { ...seminar, participants: 0 } }, { status: 201 });
}