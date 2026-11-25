import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ user: null }, { status: 401 });

  const [user] = await getDatabase().select({
    id: users.id, name: users.name, email: users.email, role: users.role, avatar: users.avatar,
    profilePictureUrl: users.profilePictureUrl, phone: users.phone, status: users.status, organization: users.organization,
    businessName: users.businessName, businessCategory: users.businessCategory, businessAddress: users.businessAddress,
    nim: users.nim, semester: users.semester, schoolName: users.schoolName, subject: users.subject, grade: users.grade,
    createdAt: users.createdAt, lastLogin: users.lastLogin,
  }).from(users).where(eq(users.id, session.userId)).limit(1);
  if (!user || user.status !== "Active") return NextResponse.json({ user: null }, { status: 401 });
  return NextResponse.json({ user });
}