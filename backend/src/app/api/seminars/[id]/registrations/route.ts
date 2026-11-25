import { NextResponse } from "next/server";
import { and, count, eq } from "drizzle-orm";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { seminarRegistrations, seminars } from "@/db/schema";

export async function POST(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireSession();
  if (response) return response;
  const { id } = await context.params;

  try {
    const registration = await getDatabase().transaction(async (tx) => {
      const [seminar] = await tx.select().from(seminars).where(eq(seminars.id, id)).limit(1).for("update");
      if (!seminar || seminar.status !== "Published") throw new Error("SEMINAR_UNAVAILABLE");
      const [registrationCount] = await tx.select({ value: count() }).from(seminarRegistrations).where(eq(seminarRegistrations.seminarId, id));
      if (registrationCount.value >= seminar.quota) throw new Error("SEMINAR_FULL");
      const [created] = await tx.insert(seminarRegistrations).values({ seminarId: id, userId: session!.userId }).returning();
      return created;
    }, { isolationLevel: "serializable" });
    return NextResponse.json({ registration }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "SEMINAR_FULL") {
      return NextResponse.json({ error: "Kuota seminar sudah penuh." }, { status: 409 });
    }
    if (error instanceof Error && error.message === "SEMINAR_UNAVAILABLE") {
      return NextResponse.json({ error: "Seminar tidak tersedia." }, { status: 404 });
    }
    if (typeof error === "object" && error !== null && "code" in error && error.code === "40001") {
      return NextResponse.json({ error: "Kuota berubah. Silakan coba daftar kembali." }, { status: 409 });
    }
    if (typeof error === "object" && error !== null && "code" in error && error.code === "23505") {
      return NextResponse.json({ error: "Anda sudah terdaftar di seminar ini." }, { status: 409 });
    }
    throw error;
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireSession();
  if (response) return response;
  const { id } = await context.params;
  const deleted = await getDatabase().delete(seminarRegistrations).where(
    and(eq(seminarRegistrations.seminarId, id), eq(seminarRegistrations.userId, session!.userId)),
  ).returning({ id: seminarRegistrations.id });
  return NextResponse.json({ success: deleted.length > 0 });
}