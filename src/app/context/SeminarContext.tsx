import { createContext, useContext, useState, ReactNode } from "react";

/**
 * SEMINAR CONTEXT
 * 
 * Manages seminar and workshop data across the entire application.
 * This ensures all users (Admin, Lecturer, UMKM, Student, Teacher) see the same seminar data.
 * 
 * KEY PRINCIPLES:
 * - NO default/dummy data - starts completely empty
 * - Only Admin can create seminars
 * - All users see the exact same seminar list
 * - Real-time synchronization across all roles
 */

export interface Seminar {
  id: string;
  title: string;
  description: string;
  host: string;              // Name of the host/speaker
  hostId?: string;           // Optional: Lecturer ID if host is a lecturer
  eventDate: string;         // ISO date string
  eventTime: string;         // Time string (e.g., "14:00")
  location: string;          // Physical location or "Zoom Meeting"
  zoomLink?: string;         // Optional Zoom link
  posterUrl?: string;        // Optional poster image URL
  status: "Draft" | "Published" | "Cancelled";
  quota: number;             // Maximum participants
  participants: number;      // Current participant count
  category: "Business" | "Academic" | "Technology" | "Other";
  targetAudience: string[];  // e.g., ["UMKM", "Siswa", "Dosen"]
  createdBy: string;         // Admin user ID
  createdAt: string;         // ISO timestamp
  updatedAt: string;         // ISO timestamp
}

interface SeminarContextType {
  seminars: Seminar[];
  createSeminar: (seminar: Omit<Seminar, "id" | "createdAt" | "updatedAt" | "participants">) => string;
  updateSeminar: (id: string, updates: Partial<Seminar>) => void;
  deleteSeminar: (id: string) => void;
  getSeminarById: (id: string) => Seminar | undefined;
  getPublishedSeminars: () => Seminar[];
  registerForSeminar: (seminarId: string, userId: string) => boolean;
  unregisterFromSeminar: (seminarId: string, userId: string) => boolean;
  getUserRegistrations: (userId: string) => string[];
  isUserRegistered: (seminarId: string, userId: string) => boolean;
}

const SeminarContext = createContext<SeminarContextType | undefined>(undefined);

export function SeminarProvider({ children }: { children: ReactNode }) {
  // START WITH EMPTY DATA - No dummy/default seminars
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  
  // Track registrations: seminarId -> userId[]
  const [registrations, setRegistrations] = useState<Record<string, string[]>>({});

  const createSeminar = (seminar: Omit<Seminar, "id" | "createdAt" | "updatedAt" | "participants">): string => {
    const newSeminar: Seminar = {
      ...seminar,
      id: `seminar-${Date.now()}`,
      participants: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSeminars(prev => [...prev, newSeminar]);
    setRegistrations(prev => ({ ...prev, [newSeminar.id]: [] }));
    return newSeminar.id;
  };

  const updateSeminar = (id: string, updates: Partial<Seminar>) => {
    setSeminars(prev => prev.map(s => 
      s.id === id 
        ? { ...s, ...updates, updatedAt: new Date().toISOString() } 
        : s
    ));
  };

  const deleteSeminar = (id: string) => {
    setSeminars(prev => prev.filter(s => s.id !== id));
    setRegistrations(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const getSeminarById = (id: string) => {
    return seminars.find(s => s.id === id);
  };

  const getPublishedSeminars = () => {
    return seminars.filter(s => s.status === "Published");
  };

  const registerForSeminar = (seminarId: string, userId: string): boolean => {
    const seminar = seminars.find(s => s.id === seminarId);
    if (!seminar) return false;
    
    // Check if already registered
    const currentRegistrations = registrations[seminarId] || [];
    if (currentRegistrations.includes(userId)) return false;
    
    // Check if quota is full
    if (seminar.participants >= seminar.quota) return false;
    
    // Register user
    setRegistrations(prev => ({
      ...prev,
      [seminarId]: [...(prev[seminarId] || []), userId],
    }));
    
    // Update participant count
    updateSeminar(seminarId, { 
      participants: seminar.participants + 1 
    });
    
    return true;
  };

  const unregisterFromSeminar = (seminarId: string, userId: string): boolean => {
    const currentRegistrations = registrations[seminarId] || [];
    if (!currentRegistrations.includes(userId)) return false;

    const seminar = seminars.find(s => s.id === seminarId);
    if (!seminar) return false;

    // Unregister user
    setRegistrations(prev => ({
      ...prev,
      [seminarId]: prev[seminarId].filter(id => id !== userId),
    }));

    // Update participant count
    updateSeminar(seminarId, {
      participants: Math.max(0, seminar.participants - 1)
    });

    return true;
  };

  const getUserRegistrations = (userId: string): string[] => {
    // Return array of seminar IDs that the user is registered for
    return Object.entries(registrations)
      .filter(([_, userIds]) => userIds.includes(userId))
      .map(([seminarId, _]) => seminarId);
  };

  const isUserRegistered = (seminarId: string, userId: string): boolean => {
    const currentRegistrations = registrations[seminarId] || [];
    return currentRegistrations.includes(userId);
  };

  const value: SeminarContextType = {
    seminars,
    createSeminar,
    updateSeminar,
    deleteSeminar,
    getSeminarById,
    getPublishedSeminars,
    registerForSeminar,
    unregisterFromSeminar,
    getUserRegistrations,
    isUserRegistered,
  };

  return (
    <SeminarContext.Provider value={value}>
      {children}
    </SeminarContext.Provider>
  );
}

export function useSeminars() {
  const context = useContext(SeminarContext);
  if (!context) {
    throw new Error("useSeminars must be used within SeminarProvider");
  }
  return context;
}
