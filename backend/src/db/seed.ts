import "dotenv/config";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { LECTURER_DATABASE } from "../../../src/app/data/lecturerDatabase";
import { closeDatabase, getDatabase } from "@/lib/db";
import { lecturers, semesters, studyPrograms, users } from "@/db/schema";

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

async function main() {
  const db = getDatabase();
  const programIds = new Map<string, string>();

  for (const program of programs) {
    const [row] = await db.insert(studyPrograms)
      .values(program)
      .onConflictDoUpdate({ target: studyPrograms.code, set: { name: program.name, faculty: program.faculty } })
      .returning({ id: studyPrograms.id, code: studyPrograms.code });
    programIds.set(row.code, row.id);
  }

  for (const lecturer of LECTURER_DATABASE) {
    const programIndex = Number(lecturer.studyProgramId.replace("prodi-", "")) - 1;
    const program = programs[programIndex];
    const studyProgramId = program ? programIds.get(program.code) : undefined;
    await db.insert(lecturers).values({
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
      studyProgramId,
    }).onConflictDoUpdate({
      target: lecturers.lecturerCode,
      set: {
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
        studyProgramId,
      },
    });
  }

  await db.insert(semesters).values({
    name: "2026/2027 Ganjil",
    startDate: new Date("2026-09-01T00:00:00.000Z"),
    endDate: new Date("2027-01-31T00:00:00.000Z"),
    isActive: true,
  }).onConflictDoUpdate({
    target: semesters.name,
    set: { startDate: new Date("2026-09-01T00:00:00.000Z"), endDate: new Date("2027-01-31T00:00:00.000Z"), isActive: true },
  });

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword || adminPassword.length < 12) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD (at least 12 characters) in backend/.env before seeding.");
  }

  const [existingAdmin] = await db.select({ role: users.role }).from(users).where(eq(users.email, adminEmail)).limit(1);
  if (existingAdmin && existingAdmin.role !== "Admin") {
    throw new Error("ADMIN_EMAIL is already assigned to a non-admin account.");
  }
  if (!existingAdmin) {
    await db.insert(users).values({
      name: "Administrator",
      email: adminEmail,
      passwordHash: await hash(adminPassword, 12),
      role: "Admin",
      avatar: "AD",
    });
  }
}

main()
  .then(async () => {
    console.log("Drizzle seed completed.");
    await closeDatabase();
  })
  .catch(async (error: unknown) => {
    console.error(error);
    await closeDatabase();
    process.exitCode = 1;
  });
