import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const lecturers = await prisma.lecturer.findMany({
    include: { studyProgram: true },
    orderBy: { name: "asc" },
  });
  return NextResponse.json({ lecturers });
}