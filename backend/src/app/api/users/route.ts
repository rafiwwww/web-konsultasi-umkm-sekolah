import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { hash } from "bcryptjs";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { isDatabaseUnavailable } from "@/lib/db-errors";
import { lecturers, users } from "@/db/schema";

const createUserSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().transform((value) => value.toLowerCase()),
  password: z.string().min(8).max(128),
  role: z.enum(["Admin", "Dosen", "UMKM", "Siswa", "Guru"]),
  status: z.enum(["Active", "Inactive"]).default("Active"),
  phone: z.string().trim().max(40).optional(),
  organization: z.string().trim().max(160).optional(),
  businessName: z.string().trim().max(180).optional(),
  businessCategory: z.string().trim().max(100).optional(),
  businessAddress: z.string().trim().max(1000).optional(),
  schoolName: z.string().trim().max(180).optional(),
  grade: z.string().trim().max(80).optional(),
  nim: z.string().trim().max(100).optional(),
  semester: z.number().int().min(1).max(20).optional(),
  lecturerCode: z.string().trim().min(1).max(64).optional(),
  studyProgramId: z.uuid().optional(),
  specialization: z.string().trim().max(255).optional(),
  university: z.string().trim().max(255).optional(),
  expertise: z.array(z.string().trim().max(120)).max(30).default([]),
  bio: z.string().trim().max(5000).optional(),
});

export async function POST(request: Request) {
  const { session, response } = await requireSession(["Admin"]);
  if (response) return response;

  const parsed = createUserSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Data pengguna tidak valid.", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  if (data.role === "Dosen" && (!data.specialization || !data.university)) {
    return NextResponse.json({ error: "Peminatan dan asal kampus wajib diisi untuk akun dosen." }, { status: 400 });
  }

  try {
    const db = getDatabase();
    const result = await db.transaction(async (tx) => {
      const [user] = await tx.insert(users).values({
        name: data.name,
        email: data.email,
        passwordHash: await hash(data.password, 12),
        role: data.role,
        status: data.status,
        phone: data.phone,
        organization: data.organization,
        businessName: data.businessName,
        businessCategory: data.businessCategory,
        businessAddress: data.businessAddress,
        schoolName: data.schoolName,
        grade: data.grade,
        nim: data.nim,
        semester: data.semester,
        avatar: data.name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join(""),
      }).returning({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        avatar: users.avatar,
        phone: users.phone,
        status: users.status,
        organization: users.organization,
        businessName: users.businessName,
        businessCategory: users.businessCategory,
        businessAddress: users.businessAddress,
        schoolName: users.schoolName,
        grade: users.grade,
        nim: users.nim,
        semester: users.semester,
        createdAt: users.createdAt,
      });

      if (data.role !== "Dosen") return { user };

      const [lecturer] = await tx.insert(lecturers).values({
        lecturerCode: data.lecturerCode || `D${randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase()}`,
        userId: user.id,
        studyProgramId: data.studyProgramId,
        name: data.name,
        email: data.email,
        specialization: data.specialization!,
        university: data.university!,
        expertise: data.expertise,
        phone: data.phone || "",
        bio: data.bio || "",
      }).returning({
        id: lecturers.id,
        lecturerCode: lecturers.lecturerCode,
        specialization: lecturers.specialization,
        bio: lecturers.bio,
      });

      return { user: { ...user, lecturerId: lecturer.id, lecturerCode: lecturer.lecturerCode, specialization: lecturer.specialization, bio: lecturer.bio } };
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return NextResponse.json({ error: "Pengguna belum tersimpan karena PostgreSQL belum dapat dihubungi." }, { status: 503 });
    }
    if (typeof error === "object" && error !== null && "code" in error && error.code === "23505") {
      return NextResponse.json({ error: "Email atau kode dosen sudah terdaftar." }, { status: 409 });
    }
    throw error;
  }
}
