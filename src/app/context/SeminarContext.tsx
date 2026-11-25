import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { apiRequest } from "../lib/api";

export interface Seminar {
  id: string;
  title: string;
  description: string;
  host: string;
  hostId?: string;
  eventDate: string;
  eventTime: string;
  location: string;
  zoomLink?: string;
  posterUrl?: string;
  status: "Draft" | "Published" | "Cancelled";
  quota: number;
  participants: number;
  category: "Business" | "Academic" | "Technology" | "Other";
  targetAudience: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface SeminarContextType {
  seminars: Seminar[];
  createSeminar: (seminar: Omit<Seminar, "id" | "createdAt" | "updatedAt" | "participants">) => Promise<string>;
  updateSeminar: (id: string, updates: Partial<Seminar>) => Promise<void>;
  deleteSeminar: (id: string) => Promise<void>;
  getSeminarById: (id: string) => Seminar | undefined;
  getPublishedSeminars: () => Seminar[];
  registerForSeminar: (seminarId: string, userId: string) => Promise<boolean>;
  unregisterFromSeminar: (seminarId: string, userId: string) => Promise<boolean>;
  getUserRegistrations: (userId: string) => string[];
  isUserRegistered: (seminarId: string, userId: string) => boolean;
}

interface SeminarApiResponse {
  seminars?: Seminar[];
  seminar?: Seminar;
  registrations?: { seminarId: string }[];
  registration?: { seminarId: string };
  success?: boolean;
}

const SeminarContext = createContext<SeminarContextType | undefined>(undefined);

function normalizeSeminar(seminar: Seminar): Seminar {
  return {
    ...seminar,
    eventDate: seminar.eventDate.slice(0, 10),
  };
}

export function SeminarProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [registrations, setRegistrations] = useState<Record<string, string[]>>({});

  const refreshSeminars = useCallback(async () => {
    const data = await apiRequest<SeminarApiResponse>("/api/seminars");
    setSeminars((data.seminars ?? []).map(normalizeSeminar));
  }, []);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const [seminarData, registrationData] = await Promise.all([
          apiRequest<SeminarApiResponse>("/api/seminars"),
          user ? apiRequest<SeminarApiResponse>("/api/seminars/registrations") : Promise.resolve({ registrations: [] }),
        ]);
        if (!active) return;
        setSeminars((seminarData.seminars ?? []).map(normalizeSeminar));
        setRegistrations(user
          ? { [user.id]: (registrationData.registrations ?? []).map(({ seminarId }) => seminarId) }
          : {});
      } catch (error) {
        if (active) console.error("Gagal memuat data seminar dari backend:", error);
      }
    };
    void load();
    return () => { active = false; };
  }, [user]);

  const createSeminar = async (
    seminar: Omit<Seminar, "id" | "createdAt" | "updatedAt" | "participants">
  ): Promise<string> => {
    const payload = {
      title: seminar.title,
      description: seminar.description,
      host: seminar.host,
      ...(seminar.hostId ? { hostId: seminar.hostId } : {}),
      eventDate: seminar.eventDate,
      eventTime: seminar.eventTime,
      location: seminar.location,
      ...(seminar.zoomLink ? { zoomLink: seminar.zoomLink } : {}),
      ...(seminar.posterUrl ? { posterUrl: seminar.posterUrl } : {}),
      status: seminar.status,
      quota: seminar.quota,
      category: seminar.category,
      targetAudience: seminar.targetAudience,
    };
    const data = await apiRequest<SeminarApiResponse>("/api/seminars", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (!data.seminar) throw new Error("Backend tidak mengembalikan data seminar.");
    const created = normalizeSeminar(data.seminar);
    setSeminars(prev => [...prev, created]);
    return created.id;
  };

  const updateSeminar = async (id: string, updates: Partial<Seminar>) => {
    const data = await apiRequest<SeminarApiResponse>(`/api/seminars/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
    });
    if (!data.seminar) throw new Error("Backend tidak mengembalikan data seminar.");
    const updated = normalizeSeminar(data.seminar);
    setSeminars(prev => prev.map(seminar => seminar.id === id ? updated : seminar));
  };

  const deleteSeminar = async (id: string) => {
    await apiRequest(`/api/seminars/${id}`, { method: "DELETE" });
    setSeminars(prev => prev.filter(seminar => seminar.id !== id));
    setRegistrations(prev => Object.fromEntries(
      Object.entries(prev).map(([userId, seminarIds]) => [userId, seminarIds.filter(seminarId => seminarId !== id)])
    ));
  };

  const registerForSeminar = async (seminarId: string, userId: string): Promise<boolean> => {
    if (!user || user.id !== userId) throw new Error("Sesi pengguna tidak sesuai.");
    await apiRequest(`/api/seminars/${seminarId}/registrations`, { method: "POST" });
    setRegistrations(prev => ({ ...prev, [userId]: [...new Set([...(prev[userId] ?? []), seminarId])] }));
    setSeminars(prev => prev.map(seminar => seminar.id === seminarId
      ? { ...seminar, participants: seminar.participants + 1 }
      : seminar));
    void refreshSeminars().catch(error => console.error("Gagal menyegarkan jumlah peserta seminar:", error));
    return true;
  };

  const unregisterFromSeminar = async (seminarId: string, userId: string): Promise<boolean> => {
    if (!user || user.id !== userId) throw new Error("Sesi pengguna tidak sesuai.");
    const data = await apiRequest<{ success: boolean }>(`/api/seminars/${seminarId}/registrations`, { method: "DELETE" });
    if (!data.success) return false;
    setRegistrations(prev => ({ ...prev, [userId]: (prev[userId] ?? []).filter(id => id !== seminarId) }));
    setSeminars(prev => prev.map(seminar => seminar.id === seminarId
      ? { ...seminar, participants: Math.max(0, seminar.participants - 1) }
      : seminar));
    void refreshSeminars().catch(error => console.error("Gagal menyegarkan jumlah peserta seminar:", error));
    return true;
  };

  const getUserRegistrations = (userId: string) => registrations[userId] ?? [];
  const isUserRegistered = (seminarId: string, userId: string) =>
    (registrations[userId] ?? []).includes(seminarId);

  return (
    <SeminarContext.Provider value={{
      seminars,
      createSeminar,
      updateSeminar,
      deleteSeminar,
      getSeminarById: id => seminars.find(seminar => seminar.id === id),
      getPublishedSeminars: () => seminars.filter(seminar => seminar.status === "Published"),
      registerForSeminar,
      unregisterFromSeminar,
      getUserRegistrations,
      isUserRegistered,
    }}>
      {children}
    </SeminarContext.Provider>
  );
}

export function useSeminars() {
  const context = useContext(SeminarContext);
  if (!context) throw new Error("useSeminars must be used within SeminarProvider");
  return context;
}
