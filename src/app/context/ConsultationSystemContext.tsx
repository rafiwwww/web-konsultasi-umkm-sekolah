import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { LECTURER_DATABASE, LecturerIdentity } from "../data/lecturerDatabase";
import { STUDENT_DATABASE, StudentIdentity } from "../data/studentDatabase";

// ==================== TYPE DEFINITIONS ====================

export interface Semester {
  id: string;
  name: string; // e.g., "2025/2026 Ganjil"
  startDate: string; // ISO date
  endDate: string; // ISO date
  isActive: boolean;
}

export interface StudyProgram {
  id: string;
  code: string; // e.g., "TI"
  name: string; // e.g., "Teknik Informatika"
  faculty: string;
}

export interface Lecturer {
  id: string;
  lecturerCode: string; // e.g., "D001"
  name: string;
  email: string;
  photo: string;
  specialization: string;
  university: string;
  rating: number;
  experience: string;
  expertise: string[];
  studyProgramId: string; // Link to study program
  phone: string;
  bio: string;
  jurusan?: string;
  asalBINUS?: string;
}

export interface Student {
  id: string;
  nim: string; // Nomor Induk Mahasiswa
  name: string;
  email: string;
  studyProgramId: string;
  semester: number; // Current semester (1-8)
  phone: string;
}

export interface TimeSlot {
  id: string;
  startTime: string; // "09:00"
  endTime: string; // "10:00"
}

export interface LecturerAvailability {
  id: string;
  lecturerId: string;
  semesterId: string;
  dayOfWeek: string; // "Senin", "Selasa", etc.
  timeSlots: TimeSlot[];
  isActive: boolean;
  createdAt: string;
}

export interface ConsultationSession {
  id: string;
  lecturerId: string;
  lecturerName: string;
  scheduledDate: string;
  scheduledDay: string;
  scheduledTimeSlot: TimeSlot;
  bookingIds: string[];
  zoomLink?: string;
  notes?: string;
  status: "waiting_zoom" | "ready" | "completed";
  createdAt: string;
  updatedAt: string;
  confirmedAt?: string;
  confirmedBy?: string;
  evaluationLink?: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  description: string;
  performedBy: string;
  performedByRole: string;
  relatedBookingId?: string;
  relatedSessionId?: string;
  timestamp: string;
}

export interface ConsultationBooking {
  id: string;
  userId: string; // UMKM, Student, or Guru user ID
  userName: string;
  userRole: string; // "UMKM" | "Siswa" | "Guru"
  lecturerId: string;
  lecturerName: string;
  semesterId: string;
  consultationType: "umkm" | "school";
  title: string;
  category: string;
  priority: string;
  description: string;
  organization: string;
  contactPerson: string;
  phone: string;
  email: string;
  // Scheduling
  scheduledDate: string; // ISO date
  scheduledDay: string; // "Senin"
  scheduledTimeSlot: TimeSlot;
  sessionId?: string;
  // Status tracking
  status: "pending" | "accepted" | "waiting_zoom" | "rejected" | "rescheduled" | "scheduled" | "completed" | "cancelled";
  // Timestamps
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  // Additional data
  feedback?: string;
  rating?: number;
  zoomLink?: string;
  rescheduleNote?: string;
  attachmentFileName?: string;
  attachmentDataUrl?: string;
}

export interface LecturerActivityStats {
  lecturerId: string;
  totalConsultations: number;
  completedConsultations: number;
  scheduledConsultations: number;
  cancelledConsultations: number;
  averageRating: number;
  lastConsultationDate?: string;
}

// ==================== CONTEXT DEFINITION ====================

interface ConsultationSystemContextType {
  // Data
  semesters: Semester[];
  studyPrograms: StudyProgram[];
  lecturers: Lecturer[];
  students: Student[];
  lecturerAvailabilities: LecturerAvailability[];
  consultationBookings: ConsultationBooking[];
  
  // Active semester
  activeSemester: Semester | null;
  
  // Semester management
  createSemester: (semester: Omit<Semester, "id">) => void;
  updateSemester: (id: string, updates: Partial<Semester>) => void;
  setActiveSemester: (semesterId: string) => void;
  
  // Study program management
  createStudyProgram: (program: Omit<StudyProgram, "id">) => void;
  updateStudyProgram: (id: string, updates: Partial<StudyProgram>) => void;
  deleteStudyProgram: (id: string) => void;
  
  // Lecturer management
  createLecturer: (lecturer: Omit<Lecturer, "id">) => void;
  updateLecturer: (id: string, updates: Partial<Lecturer>) => void;
  deleteLecturer: (id: string) => void;
  getLecturerById: (id: string) => Lecturer | undefined;
  getLecturerByEmail: (email: string) => Lecturer | undefined;
  
  // Student management
  createStudent: (student: Omit<Student, "id">) => void;
  updateStudent: (id: string, updates: Partial<Student>) => void;
  deleteStudent: (id: string) => void;
  
  // Lecturer availability management
  createAvailability: (availability: Omit<LecturerAvailability, "id" | "createdAt">) => void;
  updateAvailability: (id: string, updates: Partial<LecturerAvailability>) => void;
  deleteAvailability: (id: string) => void;
  getAvailabilityByLecturer: (lecturerId: string, semesterId: string) => LecturerAvailability[];
  getAvailableSlotsForDate: (lecturerId: string, date: string) => TimeSlot[];
  getSlotQuotaInfo: (lecturerId: string, date: string, startTime: string, endTime: string) => { accepted: number; remaining: number; isFull: boolean };

  // Consultation booking management
  createBooking: (booking: Omit<ConsultationBooking, "id" | "createdAt" | "updatedAt">) => string;
  updateBookingStatus: (id: string, status: ConsultationBooking["status"], additionalData?: Partial<ConsultationBooking>) => void;
  getBookingsByUser: (userId: string) => ConsultationBooking[];
  getBookingsByLecturer: (lecturerId: string) => ConsultationBooking[];
  isSlotAvailable: (lecturerId: string, date: string, timeSlot: TimeSlot) => boolean;
  
  // Activity tracking
  getLecturerStats: (lecturerId: string) => LecturerActivityStats;
  getAllLecturerStats: () => LecturerActivityStats[];

  // Session management
  consultationSessions: ConsultationSession[];
  activityLogs: ActivityLog[];
  acceptBookingWithSession: (bookingId: string, adminId?: string) => void;
  confirmZoomMeeting: (sessionId: string, zoomLink: string, notes: string, adminId: string) => void;
  updateSessionZoomLink: (sessionId: string, zoomLink: string, adminId: string) => void;
  getWaitingZoomSessions: () => ConsultationSession[];
  getSessionById: (sessionId: string) => ConsultationSession | undefined;
  addActivityLog: (log: Omit<ActivityLog, "id" | "timestamp">) => void;
  setEvaluationLink: (sessionId: string, link: string, adminId: string) => void;
  markSessionCompleted: (sessionId: string, adminId: string) => void;
  changeLecturerForSession: (sessionId: string, newLecturerId: string, newLecturerName: string, adminId: string) => void;
}

const ConsultationSystemContext = createContext<ConsultationSystemContextType | undefined>(undefined);

// ==================== INITIAL MOCK DATA ====================

const INITIAL_SEMESTERS: Semester[] = [
  {
    id: "sem-1",
    name: "2025/2026 Ganjil",
    startDate: "2025-09-01",
    endDate: "2026-01-31",
    isActive: true,
  },
  {
    id: "sem-2",
    name: "2025/2026 Genap",
    startDate: "2026-02-01",
    endDate: "2026-06-30",
    isActive: false,
  },
];

const INITIAL_STUDY_PROGRAMS: StudyProgram[] = [
  { id: "prodi-1", code: "TI", name: "Teknik Informatika", faculty: "Fakultas Teknik" },
  { id: "prodi-2", code: "SI", name: "Sistem Informasi", faculty: "Fakultas Teknik" },
  { id: "prodi-3", code: "TE", name: "Teknik Elektro", faculty: "Fakultas Teknik" },
  { id: "prodi-4", code: "MI", name: "Manajemen Informatika", faculty: "Fakultas Ekonomi" },
  { id: "prodi-5", code: "AK", name: "Akuntansi", faculty: "Fakultas Ekonomi" },
  { id: "prodi-6", code: "MN", name: "Manajemen", faculty: "Fakultas Ekonomi" },
  { id: "prodi-7", code: "HK", name: "Hukum Bisnis", faculty: "Fakultas Hukum" },
  { id: "prodi-8", code: "DKV", name: "Desain Komunikasi Visual", faculty: "Fakultas Seni & Desain" },
  { id: "prodi-9", code: "AR", name: "Arsitektur", faculty: "Fakultas Teknik" },
  { id: "prodi-10", code: "PG", name: "Pendidikan Guru", faculty: "Fakultas Keguruan" },
];

const INITIAL_LECTURERS: Lecturer[] = [
  {
    id: "lec-1",
    lecturerCode: "D001",
    name: "Dr. Budi Santoso, M.M.",
    email: "budi.santoso@university.ac.id",
    photo: "",
    specialization: "Pengembangan Bisnis & Manajemen",
    university: "BINUS @Kemanggisan",
    rating: 4.9,
    experience: "15 tahun",
    expertise: ["Business Strategy", "UMKM Development", "Marketing"],
    studyProgramId: "prodi-6",
    phone: "081234567001",
    bio: "Ahli dalam pengembangan bisnis UMKM dan strategi pemasaran digital",
  },
  {
    id: "lec-2",
    lecturerCode: "D002",
    name: "Prof. Dr. Siti Nurhaliza, S.E., M.Sc.",
    email: "siti.nurhaliza@university.ac.id",
    photo: "",
    specialization: "Keuangan & Akuntansi",
    university: "BINUS @Anggrek",
    rating: 4.8,
    experience: "12 tahun",
    expertise: ["Financial Planning", "Accounting", "Tax Management"],
    studyProgramId: "prodi-5",
    phone: "081234567002",
    bio: "Spesialis perencanaan keuangan dan manajemen akuntansi untuk UMKM",
  },
  {
    id: "lec-3",
    lecturerCode: "D003",
    name: "Dr. Ahmad Rizki, M.T.",
    email: "ahmad.rizki@university.ac.id",
    photo: "",
    specialization: "Teknologi & Digital Marketing",
    university: "BINUS @Alam Sutera",
    rating: 4.7,
    experience: "10 tahun",
    expertise: ["Digital Marketing", "E-Commerce", "Social Media"],
    studyProgramId: "prodi-1",
    phone: "081234567003",
    bio: "Pakar teknologi digital dan strategi pemasaran online",
  },
  {
    id: "lec-4",
    lecturerCode: "D004",
    name: "Dr. Dewi Lestari, M.Pd.",
    email: "dewi.lestari@university.ac.id",
    photo: "",
    specialization: "Pendidikan & Manajemen Sekolah",
    university: "BINUS @Bekasi",
    rating: 4.9,
    experience: "18 tahun",
    expertise: ["Curriculum Development", "School Management", "Teaching Methods"],
    studyProgramId: "prodi-10",
    phone: "081234567004",
    bio: "Ahli pengembangan kurikulum dan manajemen pendidikan",
  },
  {
    id: "lec-5",
    lecturerCode: "D005",
    name: "Dr. Ir. Joko Widodo, M.B.A.",
    email: "joko.widodo@university.ac.id",
    photo: "",
    specialization: "Operasional & Manajemen Produksi",
    university: "BINUS @Bandung",
    rating: 4.6,
    experience: "14 tahun",
    expertise: ["Operations Management", "Supply Chain", "Quality Control"],
    studyProgramId: "prodi-4",
    phone: "081234567005",
    bio: "Spesialis manajemen operasional dan rantai pasok",
  },
  {
    id: "lec-6",
    lecturerCode: "D006",
    name: "Dr. Rina Kartika, S.H., M.H.",
    email: "rina.kartika@university.ac.id",
    photo: "",
    specialization: "Hukum & Legalitas Bisnis",
    university: "BINUS @Malang",
    rating: 4.8,
    experience: "11 tahun",
    expertise: ["Business Law", "Legal Compliance", "Contract Management"],
    studyProgramId: "prodi-7",
    phone: "081234567006",
    bio: "Ahli hukum bisnis dan legalitas usaha",
  },
  {
    id: "lec-7",
    lecturerCode: "D007",
    name: "Dr. Agus Prasetyo, M.Kom.",
    email: "agus.prasetyo@university.ac.id",
    photo: "",
    specialization: "Sistem Informasi & Database",
    university: "BINUS @Semarang",
    rating: 4.7,
    experience: "13 tahun",
    expertise: ["Database Management", "Information Systems", "Data Analytics"],
    studyProgramId: "prodi-2",
    phone: "081234567007",
    bio: "Pakar sistem informasi dan manajemen database",
  },
  {
    id: "lec-8",
    lecturerCode: "D008",
    name: "Dr. Maya Sari, S.Ds., M.Ds.",
    email: "maya.sari@university.ac.id",
    photo: "",
    specialization: "Desain & Branding",
    university: "BINUS @Senayan",
    rating: 4.9,
    experience: "9 tahun",
    expertise: ["Brand Design", "Visual Identity", "Creative Strategy"],
    studyProgramId: "prodi-8",
    phone: "081234567008",
    bio: "Spesialis desain branding dan identitas visual",
  },
  {
    id: "lec-9",
    lecturerCode: "D009",
    name: "Dr. Ir. Bambang Susilo, M.T.",
    email: "bambang.susilo@university.ac.id",
    photo: "",
    specialization: "Teknik & Infrastruktur",
    university: "BINUS @Kemanggisan",
    rating: 4.6,
    experience: "16 tahun",
    expertise: ["Infrastructure Planning", "Project Management", "Engineering"],
    studyProgramId: "prodi-9",
    phone: "081234567009",
    bio: "Ahli perencanaan infrastruktur dan manajemen proyek",
  },
  {
    id: "lec-10",
    lecturerCode: "D010",
    name: "Dr. Fitri Handayani, S.Pd., M.Pd.",
    email: "fitri.handayani@university.ac.id",
    photo: "",
    specialization: "Pendidikan & Psikologi",
    university: "BINUS @Anggrek",
    rating: 4.8,
    experience: "12 tahun",
    expertise: ["Educational Psychology", "Student Counseling", "Learning Methods"],
    studyProgramId: "prodi-10",
    phone: "081234567010",
    bio: "Spesialis psikologi pendidikan dan konseling siswa",
  },
  {
    id: "lec-11",
    lecturerCode: "D011",
    name: "Dr. Hendra Gunawan, S.T., M.T.",
    email: "hendra.gunawan@university.ac.id",
    photo: "",
    specialization: "Teknologi Informasi & Keamanan Siber",
    university: "BINUS @Alam Sutera",
    rating: 4.7,
    experience: "11 tahun",
    expertise: ["Cybersecurity", "Network Security", "IT Infrastructure"],
    studyProgramId: "prodi-1",
    phone: "081234567011",
    bio: "Ahli keamanan siber dan infrastruktur teknologi informasi",
  },
  {
    id: "lec-12",
    lecturerCode: "D012",
    name: "Prof. Dr. Ratna Sari, S.E., M.M.",
    email: "ratna.sari@university.ac.id",
    photo: "",
    specialization: "Manajemen Sumber Daya Manusia",
    university: "BINUS @Bekasi",
    rating: 4.9,
    experience: "17 tahun",
    expertise: ["HR Management", "Talent Development", "Organizational Behavior"],
    studyProgramId: "prodi-6",
    phone: "081234567012",
    bio: "Pakar manajemen SDM dan pengembangan organisasi",
  },
  {
    id: "lec-13",
    lecturerCode: "D013",
    name: "Dr. Andi Wijaya, S.Kom., M.Kom.",
    email: "andi.wijaya@university.ac.id",
    photo: "",
    specialization: "Artificial Intelligence & Machine Learning",
    university: "BINUS @Bandung",
    rating: 4.8,
    experience: "9 tahun",
    expertise: ["AI", "Machine Learning", "Data Science"],
    studyProgramId: "prodi-1",
    phone: "081234567013",
    bio: "Spesialis kecerdasan buatan dan pembelajaran mesin",
  },
  {
    id: "lec-14",
    lecturerCode: "D014",
    name: "Dr. Lina Marlina, S.Pd., M.Pd.",
    email: "lina.marlina@university.ac.id",
    photo: "",
    specialization: "Pendidikan Karakter & Etika",
    university: "BINUS @Malang",
    rating: 4.7,
    experience: "14 tahun",
    expertise: ["Character Education", "Ethics", "Student Development"],
    studyProgramId: "prodi-10",
    phone: "081234567014",
    bio: "Ahli pendidikan karakter dan pengembangan kepribadian siswa",
  },
  {
    id: "lec-15",
    lecturerCode: "D015",
    name: "Dr. Ir. Yudhis Prawira, M.B.A.",
    email: "yudhis.prawira@university.ac.id",
    photo: "",
    specialization: "Inovasi Produk & Startup",
    university: "BINUS @Semarang",
    rating: 4.6,
    experience: "10 tahun",
    expertise: ["Product Innovation", "Startup Development", "Business Model"],
    studyProgramId: "prodi-4",
    phone: "081234567015",
    bio: "Mentor startup dan inovasi produk untuk UMKM",
  },
  {
    id: "lec-16",
    lecturerCode: "D016",
    name: "Dr. Sinta Dewi, S.H., M.H.",
    email: "sinta.dewi@university.ac.id",
    photo: "",
    specialization: "Hukum Kekayaan Intelektual",
    university: "BINUS @Senayan",
    rating: 4.8,
    experience: "13 tahun",
    expertise: ["Intellectual Property", "Patent Law", "Trademark"],
    studyProgramId: "prodi-7",
    phone: "081234567016",
    bio: "Spesialis hukum kekayaan intelektual dan paten",
  },
  {
    id: "lec-17",
    lecturerCode: "D017",
    name: "Dr. Fajar Nugroho, S.E., M.Ak.",
    email: "fajar.nugroho@university.ac.id",
    photo: "",
    specialization: "Perpajakan & Audit",
    university: "BINUS @Kemanggisan",
    rating: 4.7,
    experience: "15 tahun",
    expertise: ["Tax Planning", "Financial Audit", "Tax Compliance"],
    studyProgramId: "prodi-5",
    phone: "081234567017",
    bio: "Ahli perpajakan dan audit keuangan untuk UMKM",
  },
  {
    id: "lec-18",
    lecturerCode: "D018",
    name: "Dr. Rini Astuti, S.Ds., M.Sn.",
    email: "rini.astuti@university.ac.id",
    photo: "",
    specialization: "Desain Grafis & Multimedia",
    university: "BINUS @Anggrek",
    rating: 4.9,
    experience: "11 tahun",
    expertise: ["Graphic Design", "Multimedia", "UI/UX Design"],
    studyProgramId: "prodi-8",
    phone: "081234567018",
    bio: "Pakar desain grafis dan pengalaman pengguna digital",
  },
  {
    id: "lec-19",
    lecturerCode: "D019",
    name: "Dr. Ir. Doni Prasetyo, M.T.",
    email: "doni.prasetyo@university.ac.id",
    photo: "",
    specialization: "Rekayasa Perangkat Lunak",
    university: "BINUS @Alam Sutera",
    rating: 4.6,
    experience: "12 tahun",
    expertise: ["Software Engineering", "Agile", "System Architecture"],
    studyProgramId: "prodi-1",
    phone: "081234567019",
    bio: "Ahli rekayasa perangkat lunak dan arsitektur sistem",
  },
  {
    id: "lec-20",
    lecturerCode: "D020",
    name: "Dr. Wulan Sari, S.Pd., M.Pd.",
    email: "wulan.sari@university.ac.id",
    photo: "",
    specialization: "Manajemen Kelas & Pembelajaran",
    university: "BINUS @Bekasi",
    rating: 4.8,
    experience: "16 tahun",
    expertise: ["Classroom Management", "Learning Design", "Assessment"],
    studyProgramId: "prodi-10",
    phone: "081234567020",
    bio: "Spesialis manajemen kelas dan desain pembelajaran efektif",
  },
  {
    id: "lec-21",
    lecturerCode: "D021",
    name: "Prof. Dr. Bambang Hartono, S.E., M.M.",
    email: "bambang.hartono@university.ac.id",
    photo: "",
    specialization: "Strategi Bisnis & Kompetitif",
    university: "BINUS @Bandung",
    rating: 4.9,
    experience: "20 tahun",
    expertise: ["Business Strategy", "Competitive Advantage", "Strategic Planning"],
    studyProgramId: "prodi-6",
    phone: "081234567021",
    bio: "Ahli strategi bisnis dan keunggulan kompetitif",
  },
  {
    id: "lec-22",
    lecturerCode: "D022",
    name: "Dr. Eko Prasetyo, S.T., M.T.",
    email: "eko.prasetyo@university.ac.id",
    photo: "",
    specialization: "Otomasi & Robotika",
    university: "BINUS @Malang",
    rating: 4.7,
    experience: "10 tahun",
    expertise: ["Automation", "Robotics", "Industrial Engineering"],
    studyProgramId: "prodi-3",
    phone: "081234567022",
    bio: "Pakar otomasi industri dan robotika",
  },
  {
    id: "lec-23",
    lecturerCode: "D023",
    name: "Dr. Indah Permatasari, S.Sos., M.Si.",
    email: "indah.permatasari@university.ac.id",
    photo: "",
    specialization: "Komunikasi Bisnis & Public Relations",
    university: "BINUS @Semarang",
    rating: 4.8,
    experience: "13 tahun",
    expertise: ["Business Communication", "Public Relations", "Media Strategy"],
    studyProgramId: "prodi-6",
    phone: "081234567023",
    bio: "Spesialis komunikasi bisnis dan hubungan masyarakat",
  },
  {
    id: "lec-24",
    lecturerCode: "D024",
    name: "Dr. Rudi Setiawan, S.Kom., M.T.",
    email: "rudi.setiawan@university.ac.id",
    photo: "",
    specialization: "Cloud Computing & DevOps",
    university: "BINUS @Senayan",
    rating: 4.7,
    experience: "9 tahun",
    expertise: ["Cloud Computing", "DevOps", "Container Technology"],
    studyProgramId: "prodi-2",
    phone: "081234567024",
    bio: "Ahli komputasi awan dan praktik DevOps",
  },
  {
    id: "lec-25",
    lecturerCode: "D025",
    name: "Dr. Sri Mulyani, S.E., M.M.",
    email: "sri.mulyani@university.ac.id",
    photo: "",
    specialization: "Kewirausahaan & UMKM",
    university: "BINUS @Kemanggisan",
    rating: 4.9,
    experience: "18 tahun",
    expertise: ["Entrepreneurship", "SME Development", "Business Planning"],
    studyProgramId: "prodi-4",
    phone: "081234567025",
    bio: "Mentor kewirausahaan dan pengembangan UMKM",
  },
  {
    id: "lec-26",
    lecturerCode: "D026",
    name: "Dr. Ir. Ari Wibowo, M.Sc.",
    email: "ari.wibowo@university.ac.id",
    photo: "",
    specialization: "Manajemen Rantai Pasok",
    university: "BINUS @Anggrek",
    rating: 4.6,
    experience: "14 tahun",
    expertise: ["Supply Chain", "Logistics", "Procurement"],
    studyProgramId: "prodi-4",
    phone: "081234567026",
    bio: "Spesialis manajemen rantai pasok dan logistik",
  },
  {
    id: "lec-27",
    lecturerCode: "D027",
    name: "Dr. Putri Maharani, S.Pd., M.Pd.",
    email: "putri.maharani@university.ac.id",
    photo: "",
    specialization: "Teknologi Pendidikan",
    university: "BINUS @Alam Sutera",
    rating: 4.8,
    experience: "11 tahun",
    expertise: ["Educational Technology", "E-Learning", "Digital Pedagogy"],
    studyProgramId: "prodi-10",
    phone: "081234567027",
    bio: "Ahli teknologi pendidikan dan pembelajaran digital",
  },
  {
    id: "lec-28",
    lecturerCode: "D028",
    name: "Dr. Hadi Santoso, S.H., M.H.",
    email: "hadi.santoso@university.ac.id",
    photo: "",
    specialization: "Hukum Perdata & Kontrak",
    university: "BINUS @Bekasi",
    rating: 4.7,
    experience: "16 tahun",
    expertise: ["Civil Law", "Contract Law", "Dispute Resolution"],
    studyProgramId: "prodi-7",
    phone: "081234567028",
    bio: "Pakar hukum perdata dan penyelesaian sengketa kontrak",
  },
  {
    id: "lec-29",
    lecturerCode: "D029",
    name: "Dr. Anisa Rahma, S.E., M.Ak.",
    email: "anisa.rahma@university.ac.id",
    photo: "",
    specialization: "Akuntansi Manajemen",
    university: "BINUS @Bandung",
    rating: 4.8,
    experience: "12 tahun",
    expertise: ["Management Accounting", "Cost Control", "Financial Analysis"],
    studyProgramId: "prodi-5",
    phone: "081234567029",
    bio: "Spesialis akuntansi manajemen dan analisis keuangan",
  },
  {
    id: "lec-30",
    lecturerCode: "D030",
    name: "Dr. Ir. Yanto Wijaya, M.T.",
    email: "yanto.wijaya@university.ac.id",
    photo: "",
    specialization: "Arsitektur & Tata Ruang",
    university: "BINUS @Malang",
    rating: 4.7,
    experience: "15 tahun",
    expertise: ["Architecture", "Urban Planning", "Sustainable Design"],
    studyProgramId: "prodi-9",
    phone: "081234567030",
    bio: "Ahli arsitektur dan perencanaan tata ruang berkelanjutan",
  },
];

const INITIAL_STUDENTS: Student[] = [
  { id: "std-1", nim: "2023001001", name: "Andi Wijaya", email: "andi.wijaya@student.ac.id", studyProgramId: "prodi-1", semester: 3, phone: "081298765001" },
  { id: "std-2", nim: "2023001002", name: "Budi Hartono", email: "budi.hartono@student.ac.id", studyProgramId: "prodi-2", semester: 3, phone: "081298765002" },
  { id: "std-3", nim: "2023001003", name: "Citra Dewi", email: "citra.dewi@student.ac.id", studyProgramId: "prodi-5", semester: 3, phone: "081298765003" },
  { id: "std-4", nim: "2023001004", name: "Dian Pratama", email: "dian.pratama@student.ac.id", studyProgramId: "prodi-6", semester: 3, phone: "081298765004" },
  { id: "std-5", nim: "2023001005", name: "Eka Putri", email: "eka.putri@student.ac.id", studyProgramId: "prodi-3", semester: 3, phone: "081298765005" },
  { id: "std-6", nim: "2022001006", name: "Fajar Rahman", email: "fajar.rahman@student.ac.id", studyProgramId: "prodi-4", semester: 5, phone: "081298765006" },
  { id: "std-7", nim: "2022001007", name: "Gita Sari", email: "gita.sari@student.ac.id", studyProgramId: "prodi-7", semester: 5, phone: "081298765007" },
  { id: "std-8", nim: "2022001008", name: "Hendra Kusuma", email: "hendra.kusuma@student.ac.id", studyProgramId: "prodi-8", semester: 5, phone: "081298765008" },
  { id: "std-9", nim: "2021001009", name: "Indah Permata", email: "indah.permata@student.ac.id", studyProgramId: "prodi-9", semester: 7, phone: "081298765009" },
  { id: "std-10", nim: "2021001010", name: "Joko Santoso", email: "joko.santoso@student.ac.id", studyProgramId: "prodi-10", semester: 7, phone: "081298765010" },
];

// ==================== PROVIDER COMPONENT ====================

export function ConsultationSystemProvider({ children }: { children: ReactNode }) {
  const [semesters, setSemesters] = useState<Semester[]>(INITIAL_SEMESTERS);
  const [studyPrograms, setStudyPrograms] = useState<StudyProgram[]>(INITIAL_STUDY_PROGRAMS);
  const [lecturers, setLecturers] = useState<Lecturer[]>(INITIAL_LECTURERS);
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [lecturerAvailabilities, setLecturerAvailabilities] = useState<LecturerAvailability[]>([]);
  const [consultationBookings, setConsultationBookings] = useState<ConsultationBooking[]>([]);
  const [consultationSessions, setConsultationSessions] = useState<ConsultationSession[]>([]);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);

  // Get active semester
  const activeSemester = semesters.find(s => s.isActive) || null;

  // ==================== SEMESTER MANAGEMENT ====================

  const createSemester = (semester: Omit<Semester, "id">) => {
    const newSemester: Semester = {
      ...semester,
      id: `sem-${Date.now()}`,
    };
    setSemesters(prev => [...prev, newSemester]);
  };

  const updateSemester = (id: string, updates: Partial<Semester>) => {
    setSemesters(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const setActiveSemester = (semesterId: string) => {
    setSemesters(prev => prev.map(s => ({ ...s, isActive: s.id === semesterId })));
  };

  // ==================== STUDY PROGRAM MANAGEMENT ====================

  const createStudyProgram = (program: Omit<StudyProgram, "id">) => {
    const newProgram: StudyProgram = {
      ...program,
      id: `prodi-${Date.now()}`,
    };
    setStudyPrograms(prev => [...prev, newProgram]);
  };

  const updateStudyProgram = (id: string, updates: Partial<StudyProgram>) => {
    setStudyPrograms(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteStudyProgram = (id: string) => {
    setStudyPrograms(prev => prev.filter(p => p.id !== id));
  };

  // ==================== LECTURER MANAGEMENT ====================

  const createLecturer = (lecturer: Omit<Lecturer, "id">) => {
    const newLecturer: Lecturer = {
      ...lecturer,
      id: `lec-${Date.now()}`,
    };
    setLecturers(prev => [...prev, newLecturer]);
  };

  const updateLecturer = (id: string, updates: Partial<Lecturer>) => {
    setLecturers(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
  };

  const deleteLecturer = (id: string) => {
    setLecturers(prev => prev.filter(l => l.id !== id));
    // Also delete associated availabilities
    setLecturerAvailabilities(prev => prev.filter(a => a.lecturerId !== id));
  };

  const getLecturerById = (id: string) => {
    return lecturers.find(l => l.id === id);
  };

  const getLecturerByEmail = (email: string) => {
    return lecturers.find(l => l.email === email);
  };

  // ==================== STUDENT MANAGEMENT ====================

  const createStudent = (student: Omit<Student, "id">) => {
    const newStudent: Student = {
      ...student,
      id: `std-${Date.now()}`,
    };
    setStudents(prev => [...prev, newStudent]);
  };

  const updateStudent = (id: string, updates: Partial<Student>) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStudent = (id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  // ==================== LECTURER AVAILABILITY MANAGEMENT ====================

  const createAvailability = (availability: Omit<LecturerAvailability, "id" | "createdAt">) => {
    const newAvailability: LecturerAvailability = {
      ...availability,
      id: `avail-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setLecturerAvailabilities(prev => [...prev, newAvailability]);
  };

  const updateAvailability = (id: string, updates: Partial<LecturerAvailability>) => {
    setLecturerAvailabilities(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const deleteAvailability = (id: string) => {
    setLecturerAvailabilities(prev => prev.filter(a => a.id !== id));
  };

  const getAvailabilityByLecturer = (lecturerId: string, semesterId: string) => {
    return lecturerAvailabilities.filter(
      a => a.lecturerId === lecturerId && 
           a.semesterId === semesterId && 
           a.isActive
    );
  };

  const MAX_SLOT_QUOTA = 15;

  const getSlotQuotaInfo = (lecturerId: string, date: string, startTime: string, endTime: string) => {
    const accepted = consultationBookings.filter(
      b =>
        b.lecturerId === lecturerId &&
        b.scheduledDate === date &&
        b.scheduledTimeSlot.startTime === startTime &&
        b.scheduledTimeSlot.endTime === endTime &&
        b.status !== "cancelled" &&
        b.status !== "rejected"
    ).length;
    return {
      accepted,
      remaining: Math.max(0, MAX_SLOT_QUOTA - accepted),
      isFull: accepted >= MAX_SLOT_QUOTA,
    };
  };

  const getAvailableSlotsForDate = (lecturerId: string, date: string): TimeSlot[] => {
    if (!activeSemester) return [];

    const dateObj = new Date(date);
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const dayOfWeek = dayNames[dateObj.getDay()];

    const availability = lecturerAvailabilities.find(
      a => a.lecturerId === lecturerId &&
           a.semesterId === activeSemester.id &&
           a.dayOfWeek === dayOfWeek &&
           a.isActive
    );

    if (!availability) return [];

    // Only hide slots that have reached the maximum quota
    return availability.timeSlots.filter(slot => {
      const { isFull } = getSlotQuotaInfo(lecturerId, date, slot.startTime, slot.endTime);
      return !isFull;
    });
  };

  // ==================== CONSULTATION BOOKING MANAGEMENT ====================

  const createBooking = (booking: Omit<ConsultationBooking, "id" | "createdAt" | "updatedAt">): string => {
    const newBooking: ConsultationBooking = {
      ...booking,
      id: `booking-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setConsultationBookings(prev => [...prev, newBooking]);
    return newBooking.id;
  };

  const updateBookingStatus = (
    id: string, 
    status: ConsultationBooking["status"], 
    additionalData?: Partial<ConsultationBooking>
  ) => {
    setConsultationBookings(prev => prev.map(b => 
      b.id === id 
        ? { 
            ...b, 
            status, 
            updatedAt: new Date().toISOString(),
            ...(status === "completed" && { completedAt: new Date().toISOString() }),
            ...additionalData,
          } 
        : b
    ));
  };

  const getBookingsByUser = (userId: string) => {
    return consultationBookings.filter(b => b.userId === userId);
  };

  const getBookingsByLecturer = (lecturerId: string) => {
    return consultationBookings.filter(b => b.lecturerId === lecturerId);
  };

  const isSlotAvailable = (lecturerId: string, date: string, timeSlot: TimeSlot): boolean => {
    return !getSlotQuotaInfo(lecturerId, date, timeSlot.startTime, timeSlot.endTime).isFull;
  };

  // ==================== SESSION MANAGEMENT ====================

  const addActivityLog = (log: Omit<ActivityLog, "id" | "timestamp">) => {
    const newLog: ActivityLog = {
      ...log,
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      timestamp: new Date().toISOString(),
    };
    setActivityLogs(prev => [newLog, ...prev]);
  };

  const getSessionKey = (lecturerId: string, scheduledDate: string, timeSlot: TimeSlot) =>
    `${lecturerId}__${scheduledDate}__${timeSlot.startTime}-${timeSlot.endTime}`;

  const acceptBookingWithSession = (bookingId: string) => {
    const booking = consultationBookings.find(b => b.id === bookingId);
    if (!booking) return;

    const key = getSessionKey(booking.lecturerId, booking.scheduledDate, booking.scheduledTimeSlot);

    setConsultationSessions(prev => {
      const existing = prev.find(
        s => getSessionKey(s.lecturerId, s.scheduledDate, s.scheduledTimeSlot) === key &&
             s.status === "waiting_zoom"
      );
      if (existing) {
        return prev.map(s =>
          s.id === existing.id
            ? { ...s, bookingIds: [...s.bookingIds, bookingId], updatedAt: new Date().toISOString() }
            : s
        );
      }
      const newSession: ConsultationSession = {
        id: `session-${Date.now()}`,
        lecturerId: booking.lecturerId,
        lecturerName: booking.lecturerName,
        scheduledDate: booking.scheduledDate,
        scheduledDay: booking.scheduledDay,
        scheduledTimeSlot: booking.scheduledTimeSlot,
        bookingIds: [bookingId],
        status: "waiting_zoom",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return [...prev, newSession];
    });

    // Update booking status to waiting_zoom
    setConsultationBookings(prev =>
      prev.map(b =>
        b.id === bookingId
          ? { ...b, status: "waiting_zoom", updatedAt: new Date().toISOString() }
          : b
      )
    );

    addActivityLog({
      action: "BOOKING_ACCEPTED",
      description: `Konsultasi dari ${booking.userName} diterima dosen. Menunggu Admin membuat Zoom meeting.`,
      performedBy: booking.lecturerName,
      performedByRole: "Dosen",
      relatedBookingId: bookingId,
    });
  };

  const confirmZoomMeeting = (sessionId: string, zoomLink: string, notes: string, adminId: string) => {
    const session = consultationSessions.find(s => s.id === sessionId);
    if (!session) return;

    // Update session
    setConsultationSessions(prev =>
      prev.map(s =>
        s.id === sessionId
          ? {
              ...s,
              zoomLink,
              notes,
              status: "ready" as const,
              confirmedAt: new Date().toISOString(),
              confirmedBy: adminId,
              updatedAt: new Date().toISOString(),
            }
          : s
      )
    );

    // Update all bookings in this session to scheduled + zoomLink
    setConsultationBookings(prev =>
      prev.map(b =>
        session.bookingIds.includes(b.id)
          ? { ...b, status: "scheduled", zoomLink, sessionId, updatedAt: new Date().toISOString() }
          : b
      )
    );

    addActivityLog({
      action: "ZOOM_CONFIRMED",
      description: `Admin mengkonfirmasi Zoom meeting untuk sesi ${session.lecturerName} — ${session.scheduledDate} ${session.scheduledTimeSlot.startTime}. ${session.bookingIds.length} peserta mendapatkan link.`,
      performedBy: adminId,
      performedByRole: "Admin",
      relatedSessionId: sessionId,
    });
  };

  const updateSessionZoomLink = (sessionId: string, zoomLink: string, adminId: string) => {
    const session = consultationSessions.find(s => s.id === sessionId);
    if (!session) return;

    setConsultationSessions(prev =>
      prev.map(s =>
        s.id === sessionId
          ? { ...s, zoomLink, updatedAt: new Date().toISOString() }
          : s
      )
    );

    setConsultationBookings(prev =>
      prev.map(b =>
        session.bookingIds.includes(b.id) ? { ...b, zoomLink, updatedAt: new Date().toISOString() } : b
      )
    );

    addActivityLog({
      action: "ZOOM_UPDATED",
      description: `Admin memperbarui Zoom meeting link untuk sesi ${session.lecturerName} — ${session.scheduledDate}.`,
      performedBy: adminId,
      performedByRole: "Admin",
      relatedSessionId: sessionId,
    });
  };

  const getWaitingZoomSessions = () =>
    consultationSessions.filter(s => s.status === "waiting_zoom");

  const getSessionById = (sessionId: string) =>
    consultationSessions.find(s => s.id === sessionId);

  // ==================== ACTIVITY TRACKING ====================

  const getLecturerStats = (lecturerId: string): LecturerActivityStats => {
    const bookings = consultationBookings.filter(b => b.lecturerId === lecturerId);
    const completed = bookings.filter(b => b.status === "completed");
    const scheduled = bookings.filter(b => b.status === "scheduled");
    const cancelled = bookings.filter(b => b.status === "cancelled");

    const ratings = completed.filter(b => b.rating).map(b => b.rating!);
    const averageRating = ratings.length > 0 
      ? ratings.reduce((sum, r) => sum + r, 0) / ratings.length 
      : 0;

    const lastCompleted = completed.sort((a, b) => 
      new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime()
    )[0];

    return {
      lecturerId,
      totalConsultations: bookings.length,
      completedConsultations: completed.length,
      scheduledConsultations: scheduled.length,
      cancelledConsultations: cancelled.length,
      averageRating,
      lastConsultationDate: lastCompleted?.completedAt,
    };
  };

  const getAllLecturerStats = (): LecturerActivityStats[] => {
    return lecturers.map(l => getLecturerStats(l.id));
  };


  // ==================== EVALUATION & SESSION MANAGEMENT ====================

  const setEvaluationLink = (sessionId: string, link: string, adminId: string) => {
    setConsultationSessions(prev =>
      prev.map(s => s.id === sessionId ? { ...s, evaluationLink: link, updatedAt: new Date().toISOString() } : s)
    );
    addActivityLog({
      action: "EVALUATION_LINK_SET",
      description: `Admin menambahkan link form evaluasi untuk sesi ${sessionId}.`,
      performedBy: adminId,
      performedByRole: "Admin",
      relatedSessionId: sessionId,
    });
  };

  const markSessionCompleted = (sessionId: string, adminId: string) => {
    const session = consultationSessions.find(s => s.id === sessionId);
    if (!session) return;
    setConsultationSessions(prev =>
      prev.map(s => s.id === sessionId ? { ...s, status: "completed" as const, updatedAt: new Date().toISOString() } : s)
    );
    setConsultationBookings(prev =>
      prev.map(b =>
        session.bookingIds.includes(b.id) && b.status === "scheduled"
          ? { ...b, status: "completed" as const, completedAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
          : b
      )
    );
    addActivityLog({
      action: "SESSION_COMPLETED",
      description: `Admin menandai sesi ${session.lecturerName} — ${session.scheduledDate} sebagai selesai.`,
      performedBy: adminId,
      performedByRole: "Admin",
      relatedSessionId: sessionId,
    });
  };

  const changeLecturerForSession = (sessionId: string, newLecturerId: string, newLecturerName: string, adminId: string) => {
    const session = consultationSessions.find(s => s.id === sessionId);
    if (!session) return;
    setConsultationSessions(prev =>
      prev.map(s => s.id === sessionId ? { ...s, lecturerId: newLecturerId, lecturerName: newLecturerName, updatedAt: new Date().toISOString() } : s)
    );
    setConsultationBookings(prev =>
      prev.map(b =>
        session.bookingIds.includes(b.id)
          ? { ...b, lecturerId: newLecturerId, lecturerName: newLecturerName, updatedAt: new Date().toISOString() }
          : b
      )
    );
    addActivityLog({
      action: "LECTURER_CHANGED",
      description: `Admin mengganti dosen sesi ${session.scheduledDate} dari ${session.lecturerName} ke ${newLecturerName}.`,
      performedBy: adminId,
      performedByRole: "Admin",
      relatedSessionId: sessionId,
    });
  };

  // ==================== CONTEXT VALUE ====================

  const value: ConsultationSystemContextType = {
    // Data
    semesters,
    studyPrograms,
    lecturers,
    students,
    lecturerAvailabilities,
    consultationBookings,
    activeSemester,
    
    // Semester management
    createSemester,
    updateSemester,
    setActiveSemester,
    
    // Study program management
    createStudyProgram,
    updateStudyProgram,
    deleteStudyProgram,
    
    // Lecturer management
    createLecturer,
    updateLecturer,
    deleteLecturer,
    getLecturerById,
    getLecturerByEmail,
    
    // Student management
    createStudent,
    updateStudent,
    deleteStudent,
    
    // Lecturer availability management
    createAvailability,
    updateAvailability,
    deleteAvailability,
    getAvailabilityByLecturer,
    getAvailableSlotsForDate,
    getSlotQuotaInfo,

    // Consultation booking management
    createBooking,
    updateBookingStatus,
    getBookingsByUser,
    getBookingsByLecturer,
    isSlotAvailable,
    
    // Activity tracking
    getLecturerStats,
    getAllLecturerStats,

    // Session management
    consultationSessions,
    activityLogs,
    acceptBookingWithSession,
    confirmZoomMeeting,
    updateSessionZoomLink,
    getWaitingZoomSessions,
    getSessionById,
    addActivityLog,
    setEvaluationLink,
    markSessionCompleted,
    changeLecturerForSession,
  };

  return (
    <ConsultationSystemContext.Provider value={value}>
      {children}
    </ConsultationSystemContext.Provider>
  );
}

// ==================== HOOK ====================

export function useConsultationSystem() {
  const context = useContext(ConsultationSystemContext);
  if (!context) {
    throw new Error("useConsultationSystem must be used within ConsultationSystemProvider");
  }
  return context;
}