import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { LECTURER_DATABASE, findLecturerByEmail } from "../data/lecturerDatabase";
import { STUDENT_DATABASE, findStudentByEmail } from "../data/studentDatabase";

export type UserRole = "Admin" | "Dosen" | "UMKM" | "Siswa" | "Guru" | null;

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  avatar: string;
  profilePictureUrl?: string;
  phone?: string;
  status?: string;
  createdAt: string;
  lastLogin: string;
  // Role-specific fields
  organization?: string;
  // Dosen fields
  lecturerId?: string;
  lecturerCode?: string;
  specialization?: string;
  bio?: string;
  totalConsultations?: number;
  totalSeminars?: number;
  // UMKM fields
  businessName?: string;
  businessCategory?: string;
  businessAddress?: string;
  // Student/Siswa fields
  nim?: string;
  semester?: number;
  schoolName?: string;
  subject?: string;
  grade?: string;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string, role: UserRole, name?: string) => { success: boolean; error?: string };
  logout: () => void;
  updateProfilePicture: (url: string | null) => void;
  updateProfile: (updates: Partial<User>) => void;
  register: (userData: Omit<User, "id" | "avatar" | "createdAt" | "lastLogin">, password: string) => { success: boolean; error?: string };
  createUser: (userData: Omit<User, "id" | "avatar" | "createdAt" | "lastLogin">) => User;
  updateUser: (userId: string, updates: Partial<User>) => void;
  deleteUser: (userId: string) => void;
  getUserById: (userId: string) => User | undefined;
  getUsersByRole: (role: UserRole) => User[];
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const createUser = (userData: Omit<User, "id" | "avatar" | "createdAt" | "lastLogin">): User => {
    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      avatar: getAvatarInitialsFromName(userData.name),
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      status: userData.status || "Active",
    };

    setUsers(prev => [...prev, newUser]);
    return newUser;
  };

  const updateUser = (userId: string, updates: Partial<User>) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const updated = { ...u, ...updates };
        // Update avatar initials if name changed
        if (updates.name) {
          updated.avatar = getAvatarInitialsFromName(updates.name);
        }
        return updated;
      }
      return u;
    }));

    // If updating current logged-in user, update user state
    if (user && user.id === userId) {
      const updated = { ...user, ...updates };
      if (updates.name) {
        updated.avatar = getAvatarInitialsFromName(updates.name);
      }
      setUser(updated);
    }
  };

  const deleteUser = (userId: string) => {
    setUsers(prev => prev.filter(u => u.id !== userId));
  };

  const getUserById = (userId: string) => {
    return users.find(u => u.id === userId);
  };

  const getUsersByRole = (role: UserRole) => {
    return users.filter(u => u.role === role);
  };

  const register = (userData: Omit<User, "id" | "avatar" | "createdAt" | "lastLogin">, password: string): { success: boolean; error?: string } => {
    if (!password || password.length < 8) {
      return { success: false, error: "Kata sandi minimal 8 karakter." };
    }
    const existing = users.find(u => u.email === userData.email && u.role === userData.role);
    if (existing) {
      return { success: false, error: "Email sudah terdaftar untuk jenis pengguna ini." };
    }
    const newUser: User = {
      ...userData,
      password,
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      avatar: getAvatarInitialsFromName(userData.name),
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      status: "Active",
    };
    setUsers(prev => [...prev, newUser]);
    return { success: true };
  };

  const login = (email: string, password: string, role: UserRole, name?: string): { success: boolean; error?: string } => {
    // Try to find existing user first
    let existingUser = users.find(u => u.email === email && u.role === role);

    if (existingUser) {
      // Registered users have a stored password — validate password and name
      if (existingUser.password) {
        if (existingUser.password !== password) {
          return { success: false, error: "Kata sandi salah." };
        }
        if (name && existingUser.name.trim().toLowerCase() !== name.trim().toLowerCase()) {
          return { success: false, error: "Nama lengkap tidak sesuai." };
        }
      }
    } else {
      // Mock login - create user on the fly for demo
      existingUser = {
        id: getMockIdByEmail(email, role),
        name: getMockNameByEmail(email, role),
        email: email,
        role: role,
        avatar: getAvatarInitials(role, email),
        phone: getMockPhoneByRole(role),
        status: "Active",
        createdAt: getMockCreatedAtByRole(role),
        lastLogin: new Date().toISOString(),
        ...getRoleSpecificFields(role, email),
      };
      setUsers(prev => [...prev, existingUser!]);
    }

    setUser(existingUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfilePicture = (url: string | null) => {
    if (user) {
      const updated = { ...user, profilePictureUrl: url || undefined };
      setUser(updated);
      updateUser(user.id, { profilePictureUrl: url || undefined });
    }
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...updates };
      if (updates.name) {
        updated.avatar = getAvatarInitialsFromName(updates.name);
      }
      setUser(updated);
      updateUser(user.id, updates);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        login,
        logout,
        updateProfilePicture,
        updateProfile,
        register,
        createUser,
        updateUser,
        deleteUser,
        getUserById,
        getUsersByRole,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

// Helper functions for mock data
function getAvatarInitialsFromName(name: string): string {
  const nameParts = name.trim().split(" ");
  if (nameParts.length >= 2) {
    return nameParts[0][0] + nameParts[1][0];
  }
  return nameParts[0].substring(0, 2);
}

function getMockIdByEmail(email: string, role: UserRole): string {
  if (role === "Dosen") {
    const lecturer = findLecturerByEmail(email);
    return lecturer?.id || "lec-unknown";
  }
  
  if (role === "Siswa") {
    const student = findStudentByEmail(email);
    return student?.id || "std-unknown";
  }
  
  // Default IDs for other roles
  switch (role) {
    case "Admin":
      return "admin-1";
    case "UMKM":
      return "umkm-" + email.split("@")[0];
    case "Guru":
      return "guru-" + email.split("@")[0];
    default:
      return "user-unknown";
  }
}

function getMockNameByEmail(email: string, role: UserRole): string {
  if (role === "Dosen") {
    const lecturer = findLecturerByEmail(email);
    return lecturer?.name || "Dosen Unknown";
  }
  
  if (role === "Siswa") {
    const student = findStudentByEmail(email);
    return student?.name || "Siswa Unknown";
  }
  
  // Default names for other roles
  switch (role) {
    case "Admin":
      return "Admin Sistem";
    case "UMKM":
      return "UMKM User";
    case "Guru":
      return "Guru User";
    default:
      return "User";
  }
}

function getAvatarInitials(role: UserRole, email: string): string {
  if (role === "Dosen") {
    const lecturer = findLecturerByEmail(email);
    if (lecturer) {
      const nameParts = lecturer.name.split(" ");
      return nameParts.slice(0, 2).map(n => n[0]).join("");
    }
  }
  
  if (role === "Siswa") {
    const student = findStudentByEmail(email);
    if (student) {
      const nameParts = student.name.split(" ");
      return nameParts.slice(0, 2).map(n => n[0]).join("");
    }
  }
  
  // Default initials
  switch (role) {
    case "Admin":
      return "AS";
    case "UMKM":
      return "UK";
    case "Guru":
      return "GR";
    default:
      return "U";
  }
}

function getMockPhoneByRole(role: UserRole): string | undefined {
  switch (role) {
    case "Admin":
      return "081234567890";
    case "Dosen":
      return "081234567891";
    case "UMKM":
      return "081234567893";
    case "Siswa":
      return "081234567894";
    case "Guru":
      return "081234567895";
    default:
      return undefined;
  }
}

function getMockCreatedAtByRole(role: UserRole): string {
  switch (role) {
    case "Admin":
      return "2020-01-01T00:00:00Z";
    case "Dosen":
      return "2020-02-01T00:00:00Z";
    case "UMKM":
      return "2020-04-01T00:00:00Z";
    case "Siswa":
      return "2020-05-01T00:00:00Z";
    case "Guru":
      return "2020-06-01T00:00:00Z";
    default:
      return new Date().toISOString();
  }
}

function getRoleSpecificFields(role: UserRole, email: string): Partial<User> {
  switch (role) {
    case "Admin":
      return {
        organization: "Sistem Administrator",
      };
    case "Dosen":
      const lecturer = findLecturerByEmail(email);
      if (lecturer) {
        return {
          organization: lecturer.organization,
          lecturerId: lecturer.id,
          lecturerCode: lecturer.lecturerCode,
          specialization: lecturer.specialization,
          phone: lecturer.phone,
          bio: `${lecturer.specialization} specialist`,
          totalConsultations: 0,
          totalSeminars: 0,
        };
      }
      return {
        organization: "Universitas Indonesia",
        lecturerId: "lec-unknown",
        specialization: "General",
        bio: "Lecturer",
        totalConsultations: 0,
        totalSeminars: 0,
      };
    case "UMKM":
      return {
        organization: "UMKM " + email.split("@")[0],
        businessName: "UMKM " + email.split("@")[0],
        businessCategory: "Perdagangan",
        businessAddress: "Jakarta, Indonesia",
      };
    case "Siswa":
      const student = findStudentByEmail(email);
      if (student) {
        return {
          organization: student.organization,
          nim: student.nim,
          semester: student.semester,
          phone: student.phone,
        };
      }
      return {
        organization: "Universitas Indonesia",
        nim: "2023000000",
        semester: 1,
      };
    case "Guru":
      return {
        organization: "Sekolah Menengah Atas",
        subject: "Matematika",
      };
    default:
      return {};
  }
}