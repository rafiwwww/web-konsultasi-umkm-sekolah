import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { createSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const registerSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().transform((value) => value.toLowerCase()),
  password: z.string().min(8).max(128),
  role: z.enum(["UMKM", "Guru", "Siswa"]),
  phone: z.string().trim().max(40).optional(),
  organization: z.string().trim().max(160).optional(),
});

export async function POST(request: Request) {
  const parsed = registerSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Data pendaftaran tidak valid.", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) return NextResponse.json({ error: "Email sudah terdaftar." }, { status: 409 });

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash: await hash(data.password, 12),
      role: data.role,
      phone: data.phone,
      organization: data.organization,
      businessName: data.role === "UMKM" ? data.organization : undefined,
      schoolName: data.role !== "UMKM" ? data.organization : undefined,
      avatar: data.name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join(""),
    },
    select: { id: true, name: true, email: true, role: true, phone: true, organization: true, createdAt: true },
  });

  await createSession(user.id, user.role);
  return NextResponse.json({ user }, { status: 201 });
}