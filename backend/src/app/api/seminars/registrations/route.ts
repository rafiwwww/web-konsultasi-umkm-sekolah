import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { seminarRegistrations } from "@/db/schema";

export async function GET() {
  const { session, response } = await requireSession();
  if (response) return response;
  const registrations = await getDatabase().select({ seminarId: seminarRegistrations.seminarId })
    .from(seminarRegistrations)
    .where(eq(seminarRegistrations.userId, session!.userId));
  return NextResponse.json({ registrations });
}
