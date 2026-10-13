import { PrismaClient } from "../src/generated/prisma";
import { hash } from "bcryptjs";
import { LECTURER_DATABASE } from "../../src/app/data/lecturerDatabase";

const prisma = new PrismaClient();

async function main() {
  const programs = [
    { code: "TI", name: "Teknik Informatika", faculty: "Fakultas Teknik" },
    { code: "SI", name: "Sistem Informasi", faculty: "Fakultas Teknik" },
    { code: "TE", name: "Teknik Elektro", faculty: "Fakultas Teknik" },
    { code: "MI", name: "Manajemen Informatika", faculty: "Fakultas Ekonomi" },
    { code: "AK", name: "Akuntansi", faculty: "Fakultas Ekonomi" },
    { code: "MN", name: "Manajemen", faculty: "Fakultas Ekonomi" },
    { code: "HK", name: "Hukum Bisnis", faculty: "Fakultas Hukum" },
    { code: "DKV", name: "Desain Komunikasi Visual", faculty: "Fakultas Seni & Desain" },
    { code: "AR", name: "Arsitektur", faculty: "Fakultas Teknik" },
    { code: "PG", name: "Pendidikan Guru", faculty: "Fakultas Keguruan" },
  ];

  for (const program of programs) {
    await prisma.studyProgram.upsert({ where: { code: program.code }, update: program, create: program });
  }

  for (const lecturer of LECTURER_DATABASE) {
    const programIndex = Number(lecturer.studyProgramId.replace("prodi-", "")) - 1;
    const studyProgram = programs[programIndex];
    await prisma.lecturer.upsert({
      where: { lecturerCode: lecturer.lecturerCode },
      update: {},
      create: {
        lecturerCode: lecturer.lecturerCode,
        name: lecturer.name,
        email: lecturer.email,
        photo: lecturer.photo,
        specialization: lecturer.specialization,
        university: lecturer.organization,
        rating: lecturer.rating,
        experience: lecturer.experience,
        expertise: lecturer.expertise,
        phone: lecturer.phone,
        bio: lecturer.bio,
        studyProgram: studyProgram ? { connect: { code: studyProgram.code } } : undefined,
      },
    });
  }

  await prisma.semester.upsert({
    where: { name: "2026/2027 Ganjil" },
    update: {},
    create: {
      name: "2026/2027 Ganjil",
      startDate: new Date("2026-09-01T00:00:00.000Z"),
      endDate: new Date("2027-01-31T00:00:00.000Z"),
      isActive: true,
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword || adminPassword.length < 12) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD (at least 12 characters) in .env before seeding.");
  }
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (existingAdmin && existingAdmin.role !== "Admin") {
    throw new Error("ADMIN_EMAIL is already assigned to a non-admin account.");
  }
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: "Administrator",
      email: adminEmail,
      passwordHash: await hash(adminPassword, 12),
      role: "Admin",
      avatar: "AD",
    },
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
  });