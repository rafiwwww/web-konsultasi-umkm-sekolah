import { relations, sql } from "drizzle-orm";
import {
  boolean,
  date,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const userRole = pgEnum("UserRole", ["Admin", "Dosen", "UMKM", "Siswa", "Guru"]);
export const consultationType = pgEnum("ConsultationType", ["umkm", "school"]);
export const consultationStatus = pgEnum("ConsultationStatus", ["pending", "accepted", "waiting_zoom", "rejected", "rescheduled", "scheduled", "completed", "cancelled"]);
export const seminarStatus = pgEnum("SeminarStatus", ["Draft", "Published", "Cancelled"]);
export const seminarCategory = pgEnum("SeminarCategory", ["Business", "Academic", "Technology", "Other"]);

export const users = pgTable("User", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("passwordHash").notNull(),
  role: userRole("role").notNull(),
  avatar: text("avatar").notNull().default(""),
  profilePictureUrl: text("profilePictureUrl"),
  phone: text("phone"),
  status: text("status").notNull().default("Active"),
  organization: text("organization"),
  businessName: text("businessName"),
  businessCategory: text("businessCategory"),
  businessAddress: text("businessAddress"),
  nim: text("nim"),
  semester: integer("semester"),
  schoolName: text("schoolName"),
  subject: text("subject"),
  grade: text("grade"),
  lastLogin: timestamp("lastLogin", { precision: 3 }),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { precision: 3 }).notNull().defaultNow().$onUpdate(() => new Date()),
}, (table) => [index("User_role_idx").on(table.role)]);

export const studyPrograms = pgTable("StudyProgram", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: varchar("code", { length: 64 }).notNull().unique(),
  name: text("name").notNull(),
  faculty: text("faculty").notNull(),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
});

export const lecturers = pgTable("Lecturer", {
  id: uuid("id").defaultRandom().primaryKey(),
  lecturerCode: varchar("lecturerCode", { length: 64 }).notNull().unique(),
  userId: uuid("userId").unique().references(() => users.id, { onDelete: "set null" }),
  studyProgramId: uuid("studyProgramId").references(() => studyPrograms.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  photo: text("photo").notNull().default(""),
  specialization: text("specialization").notNull(),
  university: text("university").notNull().default(""),
  rating: doublePrecision("rating").notNull().default(0),
  experience: text("experience").notNull().default(""),
  expertise: text("expertise").array().notNull().default(sql`ARRAY[]::text[]`),
  phone: text("phone").notNull().default(""),
  bio: text("bio").notNull().default(""),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { precision: 3 }).notNull().defaultNow().$onUpdate(() => new Date()),
}, (table) => [index("Lecturer_studyProgramId_idx").on(table.studyProgramId)]);

export const students = pgTable("Student", {
  id: uuid("id").defaultRandom().primaryKey(),
  nim: varchar("nim", { length: 100 }).notNull().unique(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  studyProgramId: uuid("studyProgramId").references(() => studyPrograms.id, { onDelete: "set null" }),
  semester: integer("semester").notNull(),
  phone: text("phone").notNull().default(""),
});

export const semesters = pgTable("Semester", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 120 }).notNull().unique(),
  startDate: date("startDate", { mode: "date" }).notNull(),
  endDate: date("endDate", { mode: "date" }).notNull(),
  isActive: boolean("isActive").notNull().default(false),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
});

export type TimeSlot = { id?: string; startTime: string; endTime: string };

export const lecturerAvailabilities = pgTable("LecturerAvailability", {
  id: uuid("id").defaultRandom().primaryKey(),
  lecturerId: uuid("lecturerId").notNull().references(() => lecturers.id, { onDelete: "cascade" }),
  semesterId: uuid("semesterId").notNull().references(() => semesters.id, { onDelete: "cascade" }),
  dayOfWeek: varchar("dayOfWeek", { length: 20 }).notNull(),
  timeSlots: jsonb("timeSlots").$type<TimeSlot[]>().notNull(),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
}, (table) => [
  uniqueIndex("LecturerAvailability_lecturerId_semesterId_dayOfWeek_key").on(table.lecturerId, table.semesterId, table.dayOfWeek),
  index("LecturerAvailability_semesterId_isActive_idx").on(table.semesterId, table.isActive),
]);

export const consultationSessions = pgTable("ConsultationSession", {
  id: uuid("id").defaultRandom().primaryKey(),
  lecturerId: uuid("lecturerId").notNull().references(() => lecturers.id, { onDelete: "restrict" }),
  scheduledDate: date("scheduledDate", { mode: "date" }).notNull(),
  startTime: varchar("startTime", { length: 20 }).notNull(),
  endTime: varchar("endTime", { length: 20 }).notNull(),
  status: text("status").notNull().default("waiting_zoom"),
  zoomLink: text("zoomLink"),
  notes: text("notes"),
  confirmedAt: timestamp("confirmedAt", { precision: 3 }),
  confirmedBy: uuid("confirmedBy"),
  evaluationLink: text("evaluationLink"),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { precision: 3 }).notNull().defaultNow().$onUpdate(() => new Date()),
}, (table) => [index("ConsultationSession_lecturerId_scheduledDate_idx").on(table.lecturerId, table.scheduledDate)]);

export const consultationBookings = pgTable("ConsultationBooking", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  lecturerId: uuid("lecturerId").notNull().references(() => lecturers.id, { onDelete: "restrict" }),
  semesterId: uuid("semesterId").notNull().references(() => semesters.id, { onDelete: "restrict" }),
  sessionId: uuid("sessionId").references(() => consultationSessions.id, { onDelete: "set null" }),
  consultationType: consultationType("consultationType").notNull(),
  title: varchar("title", { length: 180 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  priority: varchar("priority", { length: 40 }).notNull().default("normal"),
  description: text("description").notNull(),
  organization: varchar("organization", { length: 180 }).notNull(),
  contactPerson: varchar("contactPerson", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  scheduledDate: date("scheduledDate", { mode: "date" }).notNull(),
  scheduledDay: varchar("scheduledDay", { length: 20 }).notNull(),
  startTime: varchar("startTime", { length: 20 }).notNull(),
  endTime: varchar("endTime", { length: 20 }).notNull(),
  status: consultationStatus("status").notNull().default("pending"),
  feedback: text("feedback"),
  rating: integer("rating"),
  zoomLink: text("zoomLink"),
  rescheduleNote: text("rescheduleNote"),
  attachmentFileName: varchar("attachmentFileName", { length: 255 }),
  attachmentUrl: text("attachmentUrl"),
  completedAt: timestamp("completedAt", { precision: 3 }),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { precision: 3 }).notNull().defaultNow().$onUpdate(() => new Date()),
}, (table) => [
  index("ConsultationBooking_userId_createdAt_idx").on(table.userId, table.createdAt),
  index("ConsultationBooking_lecturerId_scheduledDate_startTime_idx").on(table.lecturerId, table.scheduledDate, table.startTime),
  index("ConsultationBooking_status_idx").on(table.status),
]);

export const seminars = pgTable("Seminar", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 180 }).notNull(),
  description: text("description").notNull(),
  host: varchar("host", { length: 160 }).notNull(),
  hostId: uuid("hostId").references(() => lecturers.id, { onDelete: "set null" }),
  eventDate: date("eventDate", { mode: "date" }).notNull(),
  eventTime: varchar("eventTime", { length: 20 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  zoomLink: text("zoomLink"),
  posterUrl: text("posterUrl"),
  status: seminarStatus("status").notNull().default("Draft"),
  quota: integer("quota").notNull(),
  category: seminarCategory("category").notNull().default("Other"),
  targetAudience: text("targetAudience").array().notNull().default(sql`ARRAY[]::text[]`),
  createdBy: uuid("createdBy").notNull().references(() => users.id, { onDelete: "restrict" }),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { precision: 3 }).notNull().defaultNow().$onUpdate(() => new Date()),
}, (table) => [index("Seminar_status_eventDate_idx").on(table.status, table.eventDate)]);

export const seminarRegistrations = pgTable("SeminarRegistration", {
  id: uuid("id").defaultRandom().primaryKey(),
  seminarId: uuid("seminarId").notNull().references(() => seminars.id, { onDelete: "cascade" }),
  userId: uuid("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt", { precision: 3 }).notNull().defaultNow(),
}, (table) => [
  uniqueIndex("SeminarRegistration_seminarId_userId_key").on(table.seminarId, table.userId),
  index("SeminarRegistration_userId_idx").on(table.userId),
]);

export const activityLogs = pgTable("ActivityLog", {
  id: uuid("id").defaultRandom().primaryKey(),
  action: text("action").notNull(),
  description: text("description").notNull(),
  performedBy: uuid("performedBy").notNull().references(() => users.id, { onDelete: "restrict" }),
  performedByRole: userRole("performedByRole").notNull(),
  relatedBookingId: uuid("relatedBookingId"),
  relatedSessionId: uuid("relatedSessionId"),
  timestamp: timestamp("timestamp", { precision: 3 }).notNull().defaultNow(),
}, (table) => [index("ActivityLog_timestamp_idx").on(table.timestamp)]);

export const usersRelations = relations(users, ({ many, one }) => ({
  lecturer: one(lecturers),
  bookings: many(consultationBookings),
  createdSeminars: many(seminars),
  seminarRegistrations: many(seminarRegistrations),
  activityLogs: many(activityLogs),
}));

export const studyProgramsRelations = relations(studyPrograms, ({ many }) => ({
  lecturers: many(lecturers),
  students: many(students),
}));

export const lecturersRelations = relations(lecturers, ({ many, one }) => ({
  user: one(users, { fields: [lecturers.userId], references: [users.id] }),
  studyProgram: one(studyPrograms, { fields: [lecturers.studyProgramId], references: [studyPrograms.id] }),
  availabilities: many(lecturerAvailabilities),
  bookings: many(consultationBookings),
  sessions: many(consultationSessions),
  seminars: many(seminars),
}));

export const studentsRelations = relations(students, ({ one }) => ({
  studyProgram: one(studyPrograms, { fields: [students.studyProgramId], references: [studyPrograms.id] }),
}));

export const semestersRelations = relations(semesters, ({ many }) => ({
  availabilities: many(lecturerAvailabilities),
  bookings: many(consultationBookings),
}));

export const lecturerAvailabilitiesRelations = relations(lecturerAvailabilities, ({ one }) => ({
  lecturer: one(lecturers, { fields: [lecturerAvailabilities.lecturerId], references: [lecturers.id] }),
  semester: one(semesters, { fields: [lecturerAvailabilities.semesterId], references: [semesters.id] }),
}));

export const consultationSessionsRelations = relations(consultationSessions, ({ many, one }) => ({
  lecturer: one(lecturers, { fields: [consultationSessions.lecturerId], references: [lecturers.id] }),
  bookings: many(consultationBookings),
}));

export const consultationBookingsRelations = relations(consultationBookings, ({ one }) => ({
  user: one(users, { fields: [consultationBookings.userId], references: [users.id] }),
  lecturer: one(lecturers, { fields: [consultationBookings.lecturerId], references: [lecturers.id] }),
  semester: one(semesters, { fields: [consultationBookings.semesterId], references: [semesters.id] }),
  session: one(consultationSessions, { fields: [consultationBookings.sessionId], references: [consultationSessions.id] }),
}));

export const seminarsRelations = relations(seminars, ({ many, one }) => ({
  creator: one(users, { fields: [seminars.createdBy], references: [users.id] }),
  lecturer: one(lecturers, { fields: [seminars.hostId], references: [lecturers.id] }),
  registrations: many(seminarRegistrations),
}));

export const seminarRegistrationsRelations = relations(seminarRegistrations, ({ one }) => ({
  seminar: one(seminars, { fields: [seminarRegistrations.seminarId], references: [seminars.id] }),
  user: one(users, { fields: [seminarRegistrations.userId], references: [users.id] }),
}));

export const activityLogsRelations = relations(activityLogs, ({ one }) => ({
  user: one(users, { fields: [activityLogs.performedBy], references: [users.id] }),
}));

export type UserRole = typeof userRole.enumValues[number];
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type StudyProgram = typeof studyPrograms.$inferSelect;
export type Lecturer = typeof lecturers.$inferSelect;
export type Student = typeof students.$inferSelect;
export type Semester = typeof semesters.$inferSelect;
export type LecturerAvailability = typeof lecturerAvailabilities.$inferSelect;
export type ConsultationBooking = typeof consultationBookings.$inferSelect;
export type ConsultationSession = typeof consultationSessions.$inferSelect;
export type Seminar = typeof seminars.$inferSelect;
export type SeminarRegistration = typeof seminarRegistrations.$inferSelect;
export type ActivityLog = typeof activityLogs.$inferSelect;
