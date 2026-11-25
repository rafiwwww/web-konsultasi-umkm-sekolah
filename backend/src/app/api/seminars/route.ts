import { NextResponse } from "next/server";
import { asc, count, eq, getTableColumns, sql } from "drizzle-orm";
import { z } from "zod";
import { getSession, requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { seminarRegistrations, seminars } from "@/db/schema";

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
  const counts = getDatabase().select({ seminarId: seminarRegistrations.seminarId, participants: count().as("participants") })
    .from(seminarRegistrations).groupBy(seminarRegistrations.seminarId).as("registrationCounts");
  const query = getDatabase().select({
    ...getTableColumns(seminars),
    participants: sql<number>`coalesce(${counts.participants}, 0)`.mapWith(Number),
  }).from(seminars).leftJoin(counts, eq(seminars.id, counts.seminarId));
  const rows = session?.role === "Admin" || session?.role === "Dosen"
    ? await query.orderBy(asc(seminars.eventDate), asc(seminars.eventTime))
    : await query.where(eq(seminars.status, "Published")).orderBy(asc(seminars.eventDate), asc(seminars.eventTime));
  return NextResponse.json({ seminars: rows });
}

export async function POST(request: Request) {
  const { session, response } = await requireSession(["Admin", "Dosen"]);
  if (response) return response;
  const parsed = seminarSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Data seminar tidak valid.", details: parsed.error.flatten() }, { status: 400 });
  const data = parsed.data;
  const [seminar] = await getDatabase().insert(seminars).values({
    ...data,
    eventDate: new Date(`${data.eventDate}T00:00:00.000Z`),
    createdBy: session!.userId,
  }).returning();
  return NextResponse.json({ seminar: { ...seminar, participants: 0 } }, { status: 201 });
}
