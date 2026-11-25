import { NextResponse } from "next/server";
import { asc, eq } from "drizzle-orm";
import { getDatabase } from "@/lib/db";
import { lecturers, studyPrograms } from "@/db/schema";

export async function GET() {
  const rows = await getDatabase().select({
    lecturer: lecturers,
    studyProgram: studyPrograms,
  }).from(lecturers)
    .leftJoin(studyPrograms, eq(lecturers.studyProgramId, studyPrograms.id))
    .orderBy(asc(lecturers.name));
  return NextResponse.json({ lecturers: rows.map((row) => ({ ...row.lecturer, studyProgram: row.studyProgram })) });
}