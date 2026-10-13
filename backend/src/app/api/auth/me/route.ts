import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ user: null }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true, name: true, email: true, role: true, avatar: true,
      profilePictureUrl: true, phone: true, status: true, organization: true,
      businessName: true, businessCategory: true, businessAddress: true,
      nim: true, semester: true, schoolName: true, subject: true, grade: true,
      createdAt: true, lastLogin: true,
    },
  });
  if (!user || user.status !== "Active") return NextResponse.json({ user: null }, { status: 401 });
  return NextResponse.json({ user });
}