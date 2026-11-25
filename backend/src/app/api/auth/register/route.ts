import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { createSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { isDatabaseUnavailable } from "@/lib/db-errors";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

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

  try {
    const data = parsed.data;
    const db = getDatabase();
    const [existingUser] = await db.select({ id: users.id }).from(users).where(eq(users.email, data.email)).limit(1);
    if (existingUser) return NextResponse.json({ error: "Email sudah terdaftar." }, { status: 409 });

    const [user] = await db.insert(users).values({
        name: data.name,
        email: data.email,
        passwordHash: await hash(data.password, 12),
        role: data.role,
        phone: data.phone,
        organization: data.organization,
        businessName: data.role === "UMKM" ? data.organization : undefined,
        schoolName: data.role !== "UMKM" ? data.organization : undefined,
        avatar: data.name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join(""),
      }).returning({ id: users.id, name: users.name, email: users.email, role: users.role, phone: users.phone, organization: users.organization, createdAt: users.createdAt });

    await createSession(user.id, user.role);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return NextResponse.json({ error: "Akun belum tersimpan karena PostgreSQL belum dapat dihubungi. Jalankan database lalu coba lagi." }, { status: 503 });
    }
    if (typeof error === "object" && error !== null && "code" in error && error.code === "23505") {
      return NextResponse.json({ error: "Email sudah terdaftar." }, { status: 409 });
    }
    throw error;
  }
}
