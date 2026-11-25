CREATE TYPE "public"."ConsultationStatus" AS ENUM('pending', 'accepted', 'waiting_zoom', 'rejected', 'rescheduled', 'scheduled', 'completed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."ConsultationType" AS ENUM('umkm', 'school');--> statement-breakpoint
CREATE TYPE "public"."SeminarCategory" AS ENUM('Business', 'Academic', 'Technology', 'Other');--> statement-breakpoint
CREATE TYPE "public"."SeminarStatus" AS ENUM('Draft', 'Published', 'Cancelled');--> statement-breakpoint
CREATE TYPE "public"."UserRole" AS ENUM('Admin', 'Dosen', 'UMKM', 'Siswa', 'Guru');--> statement-breakpoint
CREATE TABLE "ActivityLog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"action" text NOT NULL,
	"description" text NOT NULL,
	"performedBy" uuid NOT NULL,
	"performedByRole" "UserRole" NOT NULL,
	"relatedBookingId" uuid,
	"relatedSessionId" uuid,
	"timestamp" timestamp (3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ConsultationBooking" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid NOT NULL,
	"lecturerId" uuid NOT NULL,
	"semesterId" uuid NOT NULL,
	"sessionId" uuid,
	"consultationType" "ConsultationType" NOT NULL,
	"title" varchar(180) NOT NULL,
	"category" varchar(100) NOT NULL,
	"priority" varchar(40) DEFAULT 'normal' NOT NULL,
	"description" text NOT NULL,
	"organization" varchar(180) NOT NULL,
	"contactPerson" varchar(120) NOT NULL,
	"phone" varchar(40) NOT NULL,
	"email" varchar(255) NOT NULL,
	"scheduledDate" date NOT NULL,
	"scheduledDay" varchar(20) NOT NULL,
	"startTime" varchar(20) NOT NULL,
	"endTime" varchar(20) NOT NULL,
	"status" "ConsultationStatus" DEFAULT 'pending' NOT NULL,
	"feedback" text,
	"rating" integer,
	"zoomLink" text,
	"rescheduleNote" text,
	"attachmentFileName" varchar(255),
	"attachmentUrl" text,
	"completedAt" timestamp (3),
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp (3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ConsultationSession" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lecturerId" uuid NOT NULL,
	"scheduledDate" date NOT NULL,
	"startTime" varchar(20) NOT NULL,
	"endTime" varchar(20) NOT NULL,
	"status" text DEFAULT 'waiting_zoom' NOT NULL,
	"zoomLink" text,
	"notes" text,
	"confirmedAt" timestamp (3),
	"confirmedBy" uuid,
	"evaluationLink" text,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp (3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "LecturerAvailability" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lecturerId" uuid NOT NULL,
	"semesterId" uuid NOT NULL,
	"dayOfWeek" varchar(20) NOT NULL,
	"timeSlots" jsonb NOT NULL,
	"isActive" boolean DEFAULT true NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Lecturer" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lecturerCode" varchar(64) NOT NULL,
	"userId" uuid,
	"studyProgramId" uuid,
	"name" text NOT NULL,
	"email" varchar(255) NOT NULL,
	"photo" text DEFAULT '' NOT NULL,
	"specialization" text NOT NULL,
	"university" text DEFAULT '' NOT NULL,
	"rating" double precision DEFAULT 0 NOT NULL,
	"experience" text DEFAULT '' NOT NULL,
	"expertise" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	"bio" text DEFAULT '' NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp (3) DEFAULT now() NOT NULL,
	CONSTRAINT "Lecturer_lecturerCode_unique" UNIQUE("lecturerCode"),
	CONSTRAINT "Lecturer_userId_unique" UNIQUE("userId"),
	CONSTRAINT "Lecturer_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "Semester" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(120) NOT NULL,
	"startDate" date NOT NULL,
	"endDate" date NOT NULL,
	"isActive" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	CONSTRAINT "Semester_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "SeminarRegistration" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"seminarId" uuid NOT NULL,
	"userId" uuid NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Seminar" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(180) NOT NULL,
	"description" text NOT NULL,
	"host" varchar(160) NOT NULL,
	"hostId" uuid,
	"eventDate" date NOT NULL,
	"eventTime" varchar(20) NOT NULL,
	"location" varchar(255) NOT NULL,
	"zoomLink" text,
	"posterUrl" text,
	"status" "SeminarStatus" DEFAULT 'Draft' NOT NULL,
	"quota" integer NOT NULL,
	"category" "SeminarCategory" DEFAULT 'Other' NOT NULL,
	"targetAudience" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"createdBy" uuid NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp (3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Student" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nim" varchar(100) NOT NULL,
	"name" text NOT NULL,
	"email" varchar(255) NOT NULL,
	"studyProgramId" uuid,
	"semester" integer NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	CONSTRAINT "Student_nim_unique" UNIQUE("nim"),
	CONSTRAINT "Student_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "StudyProgram" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" varchar(64) NOT NULL,
	"name" text NOT NULL,
	"faculty" text NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	CONSTRAINT "StudyProgram_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"passwordHash" text NOT NULL,
	"role" "UserRole" NOT NULL,
	"avatar" text DEFAULT '' NOT NULL,
	"profilePictureUrl" text,
	"phone" text,
	"status" text DEFAULT 'Active' NOT NULL,
	"organization" text,
	"businessName" text,
	"businessCategory" text,
	"businessAddress" text,
	"nim" text,
	"semester" integer,
	"schoolName" text,
	"subject" text,
	"grade" text,
	"lastLogin" timestamp (3),
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp (3) DEFAULT now() NOT NULL,
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_performedBy_User_id_fk" FOREIGN KEY ("performedBy") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ConsultationBooking" ADD CONSTRAINT "ConsultationBooking_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ConsultationBooking" ADD CONSTRAINT "ConsultationBooking_lecturerId_Lecturer_id_fk" FOREIGN KEY ("lecturerId") REFERENCES "public"."Lecturer"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ConsultationBooking" ADD CONSTRAINT "ConsultationBooking_semesterId_Semester_id_fk" FOREIGN KEY ("semesterId") REFERENCES "public"."Semester"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ConsultationBooking" ADD CONSTRAINT "ConsultationBooking_sessionId_ConsultationSession_id_fk" FOREIGN KEY ("sessionId") REFERENCES "public"."ConsultationSession"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ConsultationSession" ADD CONSTRAINT "ConsultationSession_lecturerId_Lecturer_id_fk" FOREIGN KEY ("lecturerId") REFERENCES "public"."Lecturer"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "LecturerAvailability" ADD CONSTRAINT "LecturerAvailability_lecturerId_Lecturer_id_fk" FOREIGN KEY ("lecturerId") REFERENCES "public"."Lecturer"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "LecturerAvailability" ADD CONSTRAINT "LecturerAvailability_semesterId_Semester_id_fk" FOREIGN KEY ("semesterId") REFERENCES "public"."Semester"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Lecturer" ADD CONSTRAINT "Lecturer_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Lecturer" ADD CONSTRAINT "Lecturer_studyProgramId_StudyProgram_id_fk" FOREIGN KEY ("studyProgramId") REFERENCES "public"."StudyProgram"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "SeminarRegistration" ADD CONSTRAINT "SeminarRegistration_seminarId_Seminar_id_fk" FOREIGN KEY ("seminarId") REFERENCES "public"."Seminar"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "SeminarRegistration" ADD CONSTRAINT "SeminarRegistration_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Seminar" ADD CONSTRAINT "Seminar_hostId_Lecturer_id_fk" FOREIGN KEY ("hostId") REFERENCES "public"."Lecturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Seminar" ADD CONSTRAINT "Seminar_createdBy_User_id_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Student" ADD CONSTRAINT "Student_studyProgramId_StudyProgram_id_fk" FOREIGN KEY ("studyProgramId") REFERENCES "public"."StudyProgram"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ActivityLog_timestamp_idx" ON "ActivityLog" USING btree ("timestamp");--> statement-breakpoint
CREATE INDEX "ConsultationBooking_userId_createdAt_idx" ON "ConsultationBooking" USING btree ("userId","createdAt");--> statement-breakpoint
CREATE INDEX "ConsultationBooking_lecturerId_scheduledDate_startTime_idx" ON "ConsultationBooking" USING btree ("lecturerId","scheduledDate","startTime");--> statement-breakpoint
CREATE INDEX "ConsultationBooking_status_idx" ON "ConsultationBooking" USING btree ("status");--> statement-breakpoint
CREATE INDEX "ConsultationSession_lecturerId_scheduledDate_idx" ON "ConsultationSession" USING btree ("lecturerId","scheduledDate");--> statement-breakpoint
CREATE UNIQUE INDEX "LecturerAvailability_lecturerId_semesterId_dayOfWeek_key" ON "LecturerAvailability" USING btree ("lecturerId","semesterId","dayOfWeek");--> statement-breakpoint
CREATE INDEX "LecturerAvailability_semesterId_isActive_idx" ON "LecturerAvailability" USING btree ("semesterId","isActive");--> statement-breakpoint
CREATE INDEX "Lecturer_studyProgramId_idx" ON "Lecturer" USING btree ("studyProgramId");--> statement-breakpoint
CREATE UNIQUE INDEX "SeminarRegistration_seminarId_userId_key" ON "SeminarRegistration" USING btree ("seminarId","userId");--> statement-breakpoint
CREATE INDEX "SeminarRegistration_userId_idx" ON "SeminarRegistration" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "Seminar_status_eventDate_idx" ON "Seminar" USING btree ("status","eventDate");--> statement-breakpoint
CREATE INDEX "User_role_idx" ON "User" USING btree ("role");