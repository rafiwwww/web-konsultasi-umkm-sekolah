import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireSession();
  if (response) return response;
  const { id } = await context.params;

  try {
    const registration = await prisma.$transaction(async (tx) => {
      const seminar = await tx.seminar.findUnique({
        where: { id },
        include: { _count: { select: { registrations: true } } },
      });
      if (!seminar || seminar.status !== "Published") throw new Error("SEMINAR_UNAVAILABLE");
      if (seminar._count.registrations >= seminar.quota) throw new Error("SEMINAR_FULL");
      return tx.seminarRegistration.create({ data: { seminarId: id, userId: session!.userId } });
    }, { isolationLevel: "Serializable" });
    return NextResponse.json({ registration }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "SEMINAR_FULL") {
      return NextResponse.json({ error: "Kuota seminar sudah penuh." }, { status: 409 });
    }
    if (error instanceof Error && error.message === "SEMINAR_UNAVAILABLE") {
      return NextResponse.json({ error: "Seminar tidak tersedia." }, { status: 404 });
    }
    if (typeof error === "object" && error !== null && "code" in error && error.code === "P2034") {
      return NextResponse.json({ error: "Kuota berubah. Silakan coba daftar kembali." }, { status: 409 });
    }
    return NextResponse.json({ error: "Anda sudah terdaftar di seminar ini." }, { status: 409 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireSession();
  if (response) return response;
  const { id } = await context.params;
  const deleted = await prisma.seminarRegistration.deleteMany({ where: { seminarId: id, userId: session!.userId } });
  return NextResponse.json({ success: deleted.count > 0 });
}