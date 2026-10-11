/**
 * LECTURER DATABASE - SINGLE SOURCE OF TRUTH
 * 
 * This file contains the authoritative lecturer data used across the entire application.
 * All lecturers shown in the consultation selection list MUST come from this database.
 * All lecturer authentication MUST validate against this database.
 * 
 * KEY PRINCIPLES:
 * 1. Email is the PRIMARY KEY for lecturer identification and authentication
 * 2. Each lecturer has a unique ID, code, and email
 * 3. This data is synchronized across AuthContext and ConsultationSystemContext
 * 4. When a lecturer logs in, their email MUST match one of these records
 * 5. When users select a lecturer, they select from this exact list
 */

export interface LecturerIdentity {
  id: string;              // Unique system ID (e.g., "lec-1")
  lecturerCode: string;    // Official code (e.g., "D001")
  name: string;            // Full name with title
  email: string;           // PRIMARY KEY - used for authentication
  phone: string;           // Contact number
  organization: string;    // University/Institution
  specialization: string;  // Area of expertise
  photo: string;           // Profile photo URL
  rating: number;          // Performance rating (0-5)
  experience: string;      // Years of experience
  expertise: string[];     // List of expertise areas
  studyProgramId: string;  // Link to study program
  bio: string;             // Short biography
}

/**
 * MASTER LECTURER DATABASE
 * 
 * This is the ONLY place where lecturer base data is defined.
 * DO NOT duplicate this data elsewhere. Import from this file instead.
 */
export const LECTURER_DATABASE: LecturerIdentity[] = [
  {
    id: "lec-1",
    lecturerCode: "D001",
    name: "Dr. Budi Santoso, M.M.",
    email: "budi.santoso@university.ac.id",
    phone: "081234567001",
    organization: "Universitas Indonesia",
    specialization: "Pengembangan Bisnis & Manajemen",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 4.9,
    experience: "15 tahun",
    expertise: ["Business Strategy", "UMKM Development", "Marketing"],
    studyProgramId: "prodi-6",
    bio: "Ahli dalam pengembangan bisnis UMKM dan strategi pemasaran digital",
  },
  {
    id: "lec-2",
    lecturerCode: "D002",
    name: "Prof. Dr. Siti Nurhaliza, S.E., M.Sc.",
    email: "siti.nurhaliza@university.ac.id",
    phone: "081234567002",
    organization: "Institut Teknologi Bandung",
    specialization: "Keuangan & Akuntansi",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 4.8,
    experience: "12 tahun",
    expertise: ["Financial Planning", "Accounting", "Tax Management"],
    studyProgramId: "prodi-5",
    bio: "Spesialis perencanaan keuangan dan manajemen akuntansi untuk UMKM",
  },
  {
    id: "lec-3",
    lecturerCode: "D003",
    name: "Dr. Ahmad Rizki, M.T.",
    email: "ahmad.rizki@university.ac.id",
    phone: "081234567003",
    organization: "Universitas Gadjah Mada",
    specialization: "Teknologi & Digital Marketing",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 4.7,
    experience: "10 tahun",
    expertise: ["Digital Marketing", "E-Commerce", "Social Media"],
    studyProgramId: "prodi-1",
    bio: "Pakar teknologi digital dan strategi pemasaran online",
  },
  {
    id: "lec-4",
    lecturerCode: "D004",
    name: "Dr. Dewi Lestari, M.Pd.",
    email: "dewi.lestari@university.ac.id",
    phone: "081234567004",
    organization: "Universitas Pendidikan Indonesia",
    specialization: "Pendidikan & Manajemen Sekolah",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    rating: 4.9,
    experience: "18 tahun",
    expertise: ["Curriculum Development", "School Management", "Teaching Methods"],
    studyProgramId: "prodi-10",
    bio: "Ahli pengembangan kurikulum dan manajemen pendidikan",
  },
  {
    id: "lec-5",
    lecturerCode: "D005",
    name: "Dr. Ir. Joko Widodo, M.B.A.",
    email: "joko.widodo@university.ac.id",
    phone: "081234567005",
    organization: "Institut Pertanian Bogor",
    specialization: "Operasional & Manajemen Produksi",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 4.6,
    experience: "14 tahun",
    expertise: ["Operations Management", "Supply Chain", "Quality Control"],
    studyProgramId: "prodi-4",
    bio: "Spesialis manajemen operasional dan rantai pasok",
  },
  {
    id: "lec-6",
    lecturerCode: "D006",
    name: "Dr. Rina Kartika, S.H., M.H.",
    email: "rina.kartika@university.ac.id",
    phone: "081234567006",
    organization: "Universitas Airlangga",
    specialization: "Hukum & Legalitas Bisnis",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 4.8,
    experience: "11 tahun",
    expertise: ["Business Law", "Legal Compliance", "Contract Management"],
    studyProgramId: "prodi-7",
    bio: "Ahli hukum bisnis dan legalitas usaha",
  },
  {
    id: "lec-7",
    lecturerCode: "D007",
    name: "Dr. Agus Prasetyo, M.Kom.",
    email: "agus.prasetyo@university.ac.id",
    phone: "081234567007",
    organization: "Universitas Brawijaya",
    specialization: "Sistem Informasi & Database",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    rating: 4.7,
    experience: "13 tahun",
    expertise: ["Database Management", "Information Systems", "Data Analytics"],
    studyProgramId: "prodi-2",
    bio: "Pakar sistem informasi dan manajemen database",
  },
  {
    id: "lec-8",
    lecturerCode: "D008",
    name: "Dr. Maya Sari, S.Ds., M.Ds.",
    email: "maya.sari@university.ac.id",
    phone: "081234567008",
    organization: "Institut Teknologi Bandung",
    specialization: "Desain & Branding",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 4.9,
    experience: "9 tahun",
    expertise: ["Brand Design", "Visual Identity", "Creative Strategy"],
    studyProgramId: "prodi-8",
    bio: "Spesialis desain branding dan identitas visual",
  },
  {
    id: "lec-9",
    lecturerCode: "D009",
    name: "Dr. Ir. Bambang Susilo, M.T.",
    email: "bambang.susilo@university.ac.id",
    phone: "081234567009",
    organization: "Universitas Diponegoro",
    specialization: "Teknik & Infrastruktur",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    rating: 4.6,
    experience: "16 tahun",
    expertise: ["Infrastructure Planning", "Project Management", "Engineering"],
    studyProgramId: "prodi-9",
    bio: "Ahli perencanaan infrastruktur dan manajemen proyek",
  },
  {
    id: "lec-10",
    lecturerCode: "D010",
    name: "Dr. Fitri Handayani, S.Pd., M.Pd.",
    email: "fitri.handayani@university.ac.id",
    phone: "081234567010",
    organization: "Universitas Negeri Jakarta",
    specialization: "Pendidikan & Psikologi",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 4.8,
    experience: "12 tahun",
    expertise: ["Educational Psychology", "Student Counseling", "Learning Methods"],
    studyProgramId: "prodi-10",
    bio: "Spesialis psikologi pendidikan dan konseling siswa",
  },
];

/**
 * HELPER FUNCTIONS
 */

/**
 * Find lecturer by email (PRIMARY KEY)
 * This is the main function used for authentication matching
 */
export function findLecturerByEmail(email: string): LecturerIdentity | undefined {
  return LECTURER_DATABASE.find(lecturer => lecturer.email === email);
}

/**
 * Find lecturer by ID
 */
export function findLecturerById(id: string): LecturerIdentity | undefined {
  return LECTURER_DATABASE.find(lecturer => lecturer.id === id);
}

/**
 * Find lecturer by lecturer code
 */
export function findLecturerByCode(code: string): LecturerIdentity | undefined {
  return LECTURER_DATABASE.find(lecturer => lecturer.lecturerCode === code);
}

/**
 * Validate if an email belongs to a registered lecturer
 * Returns true if the email exists in the database
 */
export function isValidLecturerEmail(email: string): boolean {
  return LECTURER_DATABASE.some(lecturer => lecturer.email === email);
}

/**
 * Get all lecturer emails (for validation purposes)
 */
export function getAllLecturerEmails(): string[] {
  return LECTURER_DATABASE.map(lecturer => lecturer.email);
}

/**
 * Get total number of lecturers
 */
export function getTotalLecturers(): number {
  return LECTURER_DATABASE.length;
}

/**
 * AUTHENTICATION MAPPING
 * 
 * When a user logs in as "Dosen" role, the system should:
 * 1. Accept their email address
 * 2. Call findLecturerByEmail(email)
 * 3. If found, load their complete profile
 * 4. If not found, deny access or show error
 * 
 * Example:
 * - User enters: budi.santoso@university.ac.id
 * - System finds: { id: "lec-1", name: "Dr. Budi Santoso, M.M.", ... }
 * - System creates session with lecturerId: "lec-1"
 * - All lecturer pages now filter data by lecturerId === "lec-1"
 */

/**
 * CONSULTATION SELECTION FLOW
 * 
 * When UMKM/Student/Teacher selects a lecturer:
 * 1. Display all lecturers from LECTURER_DATABASE
 * 2. User selects lecturer (e.g., "Dr. Budi Santoso, M.M.")
 * 3. System stores lecturerId: "lec-1" with the consultation booking
 * 4. When Dr. Budi logs in with budi.santoso@university.ac.id
 * 5. System matches email → lecturerId: "lec-1"
 * 6. Lecturer sees all consultations where lecturerId === "lec-1"
 */
