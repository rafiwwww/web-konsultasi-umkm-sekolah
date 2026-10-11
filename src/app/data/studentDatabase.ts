/**
 * STUDENT DATABASE - SINGLE SOURCE OF TRUTH
 * 
 * This file contains the authoritative student data used across the entire application.
 * Email is the PRIMARY KEY for student identification and authentication.
 */

export interface StudentIdentity {
  id: string;              // Unique system ID
  nim: string;             // Student ID number (Nomor Induk Mahasiswa)
  name: string;            // Full name
  email: string;           // PRIMARY KEY - used for authentication
  phone: string;           // Contact number
  organization: string;    // University name
  studyProgramId: string;  // Study program reference
  semester: number;        // Current semester (1-8)
}

/**
 * MASTER STUDENT DATABASE
 */
export const STUDENT_DATABASE: StudentIdentity[] = [
  { 
    id: "std-1", 
    nim: "2023001001", 
    name: "Andi Wijaya", 
    email: "andi.wijaya@student.ac.id", 
    phone: "081298765001", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-1", 
    semester: 3 
  },
  { 
    id: "std-2", 
    nim: "2023001002", 
    name: "Budi Hartono", 
    email: "budi.hartono@student.ac.id", 
    phone: "081298765002", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-2", 
    semester: 3 
  },
  { 
    id: "std-3", 
    nim: "2023001003", 
    name: "Citra Dewi", 
    email: "citra.dewi@student.ac.id", 
    phone: "081298765003", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-5", 
    semester: 3 
  },
  { 
    id: "std-4", 
    nim: "2023001004", 
    name: "Dian Pratama", 
    email: "dian.pratama@student.ac.id", 
    phone: "081298765004", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-6", 
    semester: 3 
  },
  { 
    id: "std-5", 
    nim: "2023001005", 
    name: "Eka Putri", 
    email: "eka.putri@student.ac.id", 
    phone: "081298765005", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-3", 
    semester: 3 
  },
  { 
    id: "std-6", 
    nim: "2022001006", 
    name: "Fajar Rahman", 
    email: "fajar.rahman@student.ac.id", 
    phone: "081298765006", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-4", 
    semester: 5 
  },
  { 
    id: "std-7", 
    nim: "2023001007", 
    name: "Gita Sari", 
    email: "gita.sari@student.ac.id", 
    phone: "081298765007", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-7", 
    semester: 3 
  },
  { 
    id: "std-8", 
    nim: "2022001008", 
    name: "Hadi Wijaya", 
    email: "hadi.wijaya@student.ac.id", 
    phone: "081298765008", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-8", 
    semester: 5 
  },
  { 
    id: "std-9", 
    nim: "2023001009", 
    name: "Indah Permata", 
    email: "indah.permata@student.ac.id", 
    phone: "081298765009", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-9", 
    semester: 3 
  },
  { 
    id: "std-10", 
    nim: "2022001010", 
    name: "Joko Susilo", 
    email: "joko.susilo@student.ac.id", 
    phone: "081298765010", 
    organization: "Universitas Indonesia", 
    studyProgramId: "prodi-10", 
    semester: 5 
  },
];

/**
 * HELPER FUNCTIONS
 */

export function findStudentByEmail(email: string): StudentIdentity | undefined {
  return STUDENT_DATABASE.find(student => student.email === email);
}

export function findStudentById(id: string): StudentIdentity | undefined {
  return STUDENT_DATABASE.find(student => student.id === id);
}

export function findStudentByNim(nim: string): StudentIdentity | undefined {
  return STUDENT_DATABASE.find(student => student.nim === nim);
}

export function isValidStudentEmail(email: string): boolean {
  return STUDENT_DATABASE.some(student => student.email === email);
}

export function getAllStudentEmails(): string[] {
  return STUDENT_DATABASE.map(student => student.email);
}
