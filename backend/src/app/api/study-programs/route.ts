import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";
import { getDatabase } from "@/lib/db";
import { studyPrograms } from "@/db/schema";

export async function GET() {
  const rows = await getDatabase().select().from(studyPrograms).orderBy(asc(studyPrograms.name));
  return NextResponse.json({ studyPrograms: rows });
}