import { NextResponse } from "next/server";
import { count, eq } from "drizzle-orm";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { seminarRegistrations, seminars } from "@/db/schema";

const updateSchema = z.object({
  title: z.string().trim().min(3).max(180),
  description: z.string().trim().min(1).max(10000),
  host: z.string().trim().min(1).max(160),
  hostId: z.uuid().optional(),
  eventDate: z.iso.date(),
  eventTime: z.string().trim().min(1).max(20),
  location: z.string().trim().min(1).max(255),
  zoomLink: z.url().optional(),
  posterUrl: z.url().optional(),
  status: z.enum(["Draft", "Published", "Cancelled"]),
  quota: z.number().int().min(1).max(100000),
  category: z.enum(["Business", "Academic", "Technology", "Other"]),
  targetAudience: z.array(z.string().max(40)),
}).partial().refine((value) => Object.keys(value).length > 0);

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { response } = await requireSession(["Admin"]);
  if (response) return response;
  const { id } = await context.params;
  if (!z.uuid().safeParse(id).success) return NextResponse.json({ error: "ID seminar tidak valid." }, { status: 400 });
  const parsed = updateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Perubahan seminar tidak valid." }, { status: 400 });
  const { eventDate, ...fields } = parsed.data;
  const changes = {
    ...fields,
    ...(eventDate ? { eventDate: new Date(`${eventDate}T00:00:00.000Z`) } : {}),
  };
  const db = getDatabase();
  const [seminar] = await db.update(seminars).set(changes).where(eq(seminars.id, id)).returning();
  if (!seminar) return NextResponse.json({ error: "Seminar tidak ditemukan." }, { status: 404 });
  const [registrationCount] = await db.select({ value: count() })
    .from(seminarRegistrations).where(eq(seminarRegistrations.seminarId, id));
  return NextResponse.json({ seminar: { ...seminar, participants: registrationCount.value } });
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { response } = await requireSession(["Admin"]);
  if (response) return response;
  const { id } = await context.params;
  if (!z.uuid().safeParse(id).success) return NextResponse.json({ error: "ID seminar tidak valid." }, { status: 400 });
  const deleted = await getDatabase().delete(seminars).where(eq(seminars.id, id)).returning({ id: seminars.id });
  if (deleted.length === 0) return NextResponse.json({ error: "Seminar tidak ditemukan." }, { status: 404 });
  return NextResponse.json({ success: true });
}
