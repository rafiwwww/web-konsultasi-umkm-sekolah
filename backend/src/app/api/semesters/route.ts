import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { getDatabase } from "@/lib/db";
import { semesters } from "@/db/schema";

export async function GET() {
  const rows = await getDatabase().select().from(semesters).orderBy(desc(semesters.isActive), desc(semesters.startDate));
  return NextResponse.json({ semesters: rows });
}