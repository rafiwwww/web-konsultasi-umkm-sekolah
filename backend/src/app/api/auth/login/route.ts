import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { z } from "zod";
import { createSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
  email: z.email().transform((value) => value.toLowerCase()),
  password: z.string().min(1),
  role: z.enum(["Admin", "Dosen", "UMKM", "Siswa", "Guru"]).optional(),
});

export async function POST(request: Request) {
  const parsed = loginSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Email atau kata sandi tidak valid." }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (!user || user.status !== "Active" || (parsed.data.role && user.role !== parsed.data.role)) {
    return NextResponse.json({ error: "Email atau kata sandi salah." }, { status: 401 });
  }
  if (!(await compare(parsed.data.password, user.passwordHash))) {
    return NextResponse.json({ error: "Email atau kata sandi salah." }, { status: 401 });
  }

  await prisma.user.update({ where: { id: user.id }, data: { lastLogin: new Date() } });
  await createSession(user.id, user.role);
  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      phone: user.phone,
      status: user.status,
      organization: user.organization,
      createdAt: user.createdAt,
      lastLogin: new Date().toISOString(),
    },
  });
}