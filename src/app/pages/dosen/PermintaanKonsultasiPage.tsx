import { useState, useMemo, useCallback } from "react";
import {
  Clock,
  Filter,
  CheckCircle,
  AlertCircle,
  Video,
  CalendarClock,
  Search,
  Users,
  ChevronDown,
  X,
  RotateCcw,
  CheckSquare,
  Square,
  Minus,
  FileText,
  Paperclip,
  Phone,
  Calendar,
} from "lucide-react";
import { Modal } from "../../components/Modal";
import { useToast } from "../../components/Toast";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem, TimeSlot } from "../../context/ConsultationSystemContext";

const MAX_QUOTA = 15;
const DAY_NAMES_ORDER = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const DAY_JS_INDEX: Record<string, number> = {
  Minggu: 0, Senin: 1, Selasa: 2, Rabu: 3, Kamis: 4, Jumat: 5, Sabtu: 6,
};

function getUpcomingDatesForDay(dayName: string): { label: string; value: string }[] {
  const target = DAY_JS_INDEX[dayName];
  if (target === undefined) return [];
  const results: { label: string; value: string }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 28; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() === target) {
      results.push({
        value: d.toISOString().split("T")[0],
        label: d.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
      });
    }
  }
  return results;
}

export function PermintaanKonsultasiPage() {
  const { user, users } = useAuth();
  const { showToast } = useToast();
  const {
    consultationBookings,
    lecturerAvailabilities,
    activeSemester,
    updateBookingStatus,
    getLecturerByEmail,
    acceptBookingWithSession,
  } = useConsultationSystem();

  const currentLecturer = user?.email ? getLecturerByEmail(user.email) : null;

  // ── Filters ──────────────────────────────────────────────────────────────
  const [statusFilter, setStatusFilter] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("all");

  // ── Selection ─────────────────────────────────────────────────────────────
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // ── Modals ────────────────────────────────────────────────────────────────
  const [bulkAcceptOpen, setBulkAcceptOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ── Reschedule form ───────────────────────────────────────────────────────
  const [rescheduleDay, setRescheduleDay] = useState("");
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [rescheduleSlot, setRescheduleSlot] = useState<TimeSlot | null>(null);
  const [rescheduleNote, setRescheduleNote] = useState("");

  // ── Data ──────────────────────────────────────────────────────────────────
  const allRequests = useMemo(
    () =>
      consultationBookings
        .filter((b) => b.lecturerId === currentLecturer?.id)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [consultationBookings, currentLecturer?.id]
  );

  // Unique sessions derived from actual bookings (sorted by date then startTime)
  const sessionOptions = useMemo(() => {
    const seen = new Set<string>();
    const opts: { key: string; label: string }[] = [];
    allRequests
      .slice()
      .sort((a, b) => {
        const dateCmp = a.scheduledDate.localeCompare(b.scheduledDate);
        if (dateCmp !== 0) return dateCmp;
        return a.scheduledTimeSlot.startTime.localeCompare(b.scheduledTimeSlot.startTime);
      })
      .forEach((r) => {
        const key = `${r.scheduledDate}__${r.scheduledTimeSlot.startTime}__${r.scheduledTimeSlot.endTime}`;
        if (!seen.has(key)) {
          seen.add(key);
          const dateLabel = new Date(r.scheduledDate).toLocaleDateString("id-ID", {
            weekday: "long", day: "numeric", month: "long", year: "numeric",
          });
          opts.push({
            key,
            label: `${dateLabel} • ${r.scheduledTimeSlot.startTime}–${r.scheduledTimeSlot.endTime}`,
          });
        }
      });
    return opts;
  }, [allRequests]);

  const filteredRequests = useMemo(() => {
    return allRequests.filter((r) => {
      const matchStatus = statusFilter === "all" || r.status === statusFilter;
      const matchSearch =
        !searchTerm ||
        r.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.organization.toLowerCase().includes(searchTerm.toLowerCase());
      const sessionKey = `${r.scheduledDate}__${r.scheduledTimeSlot.startTime}__${r.scheduledTimeSlot.endTime}`;
      const matchSession = selectedSession === "all" || sessionKey === selectedSession;
      return matchStatus && matchSearch && matchSession;
    });
  }, [allRequests, statusFilter, searchTerm, selectedSession]);

  // ── Lecturer availability for reschedule modal ────────────────────────────
  const lecturerAvailDays = useMemo(() => {
    if (!currentLecturer || !activeSemester) return [];
    return lecturerAvailabilities
      .filter(
        (a) =>
          a.lecturerId === currentLecturer.id &&
          a.semesterId === activeSemester.id &&
          a.isActive
      )
      .sort(
        (a, b) =>
          DAY_NAMES_ORDER.indexOf(a.dayOfWeek) - DAY_NAMES_ORDER.indexOf(b.dayOfWeek)
      );
  }, [lecturerAvailabilities, currentLecturer, activeSemester]);

  const upcomingDatesForDay = useMemo(
    () => (rescheduleDay ? getUpcomingDatesForDay(rescheduleDay) : []),
    [rescheduleDay]
  );

  const slotsForDay = useMemo(() => {
    if (!rescheduleDay) return [];
    return lecturerAvailDays.find((a) => a.dayOfWeek === rescheduleDay)?.timeSlots ?? [];
  }, [rescheduleDay, lecturerAvailDays]);

  // ── Quota helpers ─────────────────────────────────────────────────────────
  const getSessionAccepted = useCallback(
    (lecturerId: string, date: string, startTime: string, endTime: string) =>
      consultationBookings.filter(
        (b) =>
          b.lecturerId === lecturerId &&
          b.scheduledDate === date &&
          b.scheduledTimeSlot.startTime === startTime &&
          b.scheduledTimeSlot.endTime === endTime &&
          ["waiting_zoom", "scheduled", "completed"].includes(b.status)
      ).length,
    [consultationBookings]
  );

  const getSlotQuota = useCallback(
    (date: string, startTime: string, endTime: string) => {
      if (!currentLecturer) return { accepted: 0, available: MAX_QUOTA, isFull: false };
      const accepted = getSessionAccepted(currentLecturer.id, date, startTime, endTime);
      return {
        accepted,
        available: Math.max(0, MAX_QUOTA - accepted),
        isFull: accepted >= MAX_QUOTA,
      };
    },
    [currentLecturer, getSessionAccepted]
  );

  // ── Selection logic ───────────────────────────────────────────────────────
  const pendingVisible = useMemo(
    () => filteredRequests.filter((r) => r.status === "pending"),
    [filteredRequests]
  );
  const allVisibleSelected =
    pendingVisible.length > 0 && pendingVisible.every((r) => selectedIds.has(r.id));
  const someVisibleSelected =
    pendingVisible.some((r) => selectedIds.has(r.id)) && !allVisibleSelected;

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        pendingVisible.forEach((r) => next.delete(r.id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        pendingVisible.forEach((r) => next.add(r.id));
        return next;
      });
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const clearSelection = () => setSelectedIds(new Set());

  // ── Bulk accept analysis ──────────────────────────────────────────────────
  const bulkAcceptAnalysis = useMemo(() => {
    const selected = allRequests.filter(
      (r) => selectedIds.has(r.id) && r.status === "pending"
    );

    // Group by session key
    const sessionMap = new Map<
      string,
      { items: typeof selected; accepted: number; toAccept: typeof selected }
    >();

    selected.forEach((r) => {
      const key = `${r.scheduledDate}__${r.scheduledTimeSlot.startTime}__${r.scheduledTimeSlot.endTime}`;
      if (!sessionMap.has(key)) {
        const accepted = getSlotQuota(
          r.scheduledDate,
          r.scheduledTimeSlot.startTime,
          r.scheduledTimeSlot.endTime
        ).accepted;
        sessionMap.set(key, { items: [], accepted, toAccept: [] });
      }
      sessionMap.get(key)!.items.push(r);
    });

    // Determine which can be accepted per session
    sessionMap.forEach((val) => {
      const room = MAX_QUOTA - val.accepted;
      val.toAccept = val.items.slice(0, Math.max(0, room));
    });

    const canAccept = Array.from(sessionMap.values()).flatMap((v) => v.toAccept);
    const blocked = selected.filter((r) => !canAccept.find((c) => c.id === r.id));

    return { sessions: sessionMap, canAccept, blocked, selected };
  }, [allRequests, selectedIds, getSlotQuota]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleBulkAcceptConfirm = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    bulkAcceptAnalysis.canAccept.forEach((r) => acceptBookingWithSession(r.id));
    setIsLoading(false);
    setBulkAcceptOpen(false);
    clearSelection();
    showToast(
      `${bulkAcceptAnalysis.canAccept.length} permintaan diterima. Admin akan segera membuat Zoom meeting.`,
      "success"
    );
  };

  const handleSingleAccept = async (bookingId: string, userName: string) => {
    const booking = allRequests.find((r) => r.id === bookingId);
    if (!booking) return;
    const quota = getSlotQuota(
      booking.scheduledDate,
      booking.scheduledTimeSlot.startTime,
      booking.scheduledTimeSlot.endTime
    );
    if (quota.isFull) {
      showToast(
        `Kuota konsultasi untuk sesi ${booking.scheduledTimeSlot.startTime}–${booking.scheduledTimeSlot.endTime} sudah penuh (${MAX_QUOTA}/${MAX_QUOTA}). Anda tidak dapat menerima peserta tambahan pada sesi ini.`,
        "warning"
      );
      return;
    }
    acceptBookingWithSession(bookingId);
    showToast(
      `Konsultasi dari ${userName} diterima. Admin akan segera membuat Zoom meeting.`,
      "success"
    );
  };

  const openReschedule = (ids?: Set<string>) => {
    if (ids) setSelectedIds(ids);
    setRescheduleDay("");
    setRescheduleDate("");
    setRescheduleSlot(null);
    setRescheduleNote("");
    setRescheduleOpen(true);
  };

  const handleRescheduleConfirm = async () => {
    if (!rescheduleDate || !rescheduleSlot || !rescheduleDay) return;

    const quota = getSlotQuota(
      rescheduleDate,
      rescheduleSlot.startTime,
      rescheduleSlot.endTime
    );
    if (quota.isFull) {
      showToast(
        `Kuota sesi ${rescheduleSlot.startTime}–${rescheduleSlot.endTime} sudah penuh. Pilih sesi lain.`,
        "warning"
      );
      return;
    }

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 500));

    const targets = allRequests.filter(
      (r) => selectedIds.has(r.id) && r.status === "pending"
    );
    targets.forEach((r) => {
      updateBookingStatus(r.id, "rescheduled", {
        scheduledDate: rescheduleDate,
        scheduledDay: rescheduleDay,
        scheduledTimeSlot: rescheduleSlot,
        rescheduleNote: rescheduleNote || "Dosen telah mengusulkan jadwal baru.",
      });
    });

    setIsLoading(false);
    setRescheduleOpen(false);
    clearSelection();
    showToast(
      `${targets.length} permintaan telah dijadwalkan ulang. Peserta akan melihat jadwal baru.`,
      "success"
    );
  };

  // ── Display helpers ───────────────────────────────────────────────────────
  const getRoleColor = (role: string) => {
    if (role === "UMKM") return "bg-orange-100 text-orange-700";
    if (role === "Siswa") return "bg-green-100 text-green-700";
    if (role === "Guru") return "bg-purple-100 text-purple-700";
    return "bg-gray-100 text-gray-700";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "waiting_zoom": return "bg-orange-100 text-orange-700";
      case "rescheduled": return "bg-indigo-100 text-indigo-700";
      case "accepted": return "bg-green-100 text-green-700";
      case "rejected": return "bg-red-100 text-red-700";
      case "scheduled": return "bg-blue-100 text-blue-700";
      case "completed": return "bg-emerald-100 text-emerald-700";
      case "cancelled": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending": return "Menunggu";
      case "waiting_zoom": return "Menunggu Zoom";
      case "rescheduled": return "Dijadwalkan Ulang";
      case "accepted": return "Diterima";
      case "rejected": return "Ditolak";
      case "scheduled": return "Siap Konsultasi";
      case "completed": return "Selesai";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  if (!currentLecturer) {
    return (
      <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Data dosen tidak ditemukan</p>
        </div>
      </div>
    );
  }

  const selectedPendingCount = allRequests.filter(
    (r) => selectedIds.has(r.id) && r.status === "pending"
  ).length;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Permintaan Konsultasi</h1>
          <p className="text-gray-600">
            Kelola permintaan konsultasi dari UMKM, Siswa, dan Guru. Kuota maksimal{" "}
            <span className="font-semibold">{MAX_QUOTA} peserta</span> per sesi.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: "Menunggu", key: "pending", color: "text-yellow-600" },
            { label: "Dijadwalkan Ulang", key: "rescheduled", color: "text-indigo-600" },
            { label: "Menunggu Zoom", key: "waiting_zoom", color: "text-orange-600" },
            { label: "Siap Konsultasi", key: "scheduled", color: "text-blue-600" },
            { label: "Selesai", key: "completed", color: "text-emerald-600" },
          ].map(({ label, key, color }) => (
            <button
              key={key}
              onClick={() => setStatusFilter(key)}
              className={`bg-white rounded-lg border p-4 text-left transition-colors ${
                statusFilter === key ? "border-blue-400 ring-1 ring-blue-400" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p className="text-xs text-gray-600 mb-1">{label}</p>
              <p className={`text-2xl font-bold ${color}`}>
                {allRequests.filter((r) => r.status === key).length}
              </p>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama, topik, atau organisasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setSelectedSession("all");
                  clearSelection();
                }}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
              >
                <option value="all">Semua Status</option>
                <option value="pending">Menunggu</option>
                <option value="rescheduled">Dijadwalkan Ulang</option>
                <option value="waiting_zoom">Menunggu Zoom</option>
                <option value="scheduled">Siap Konsultasi</option>
                <option value="completed">Selesai</option>
                <option value="rejected">Ditolak</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
            </div>
          </div>

          {/* Session filter row */}
          {sessionOptions.length > 0 && (
            <div className="flex items-center gap-2 pt-3 border-t border-gray-100 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium">Sesi:</span>
              </div>
              <button
                type="button"
                onClick={() => { setSelectedSession("all"); clearSelection(); }}
                className={`px-3 py-1.5 rounded-md text-xs border transition-colors ${
                  selectedSession === "all"
                    ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                    : "border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                Semua Sesi
              </button>
              {sessionOptions.map((opt) => {
                const sessionReqs = allRequests.filter((r) => {
                  const key = `${r.scheduledDate}__${r.scheduledTimeSlot.startTime}__${r.scheduledTimeSlot.endTime}`;
                  return key === opt.key;
                });
                const pendingCount = sessionReqs.filter(r => r.status === "pending").length;
                const acceptedCount = sessionReqs.filter(r => ["waiting_zoom","scheduled","completed"].includes(r.status)).length;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => { setSelectedSession(opt.key); clearSelection(); }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs border transition-colors ${
                      selectedSession === opt.key
                        ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                        : "border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                      pendingCount > 0 ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {acceptedCount}/{MAX_QUOTA}
                      {pendingCount > 0 ? ` · ${pendingCount} menunggu` : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Bulk action toolbar ── */}
        {selectedPendingCount > 0 && (
          <div className="sticky top-16 z-30 bg-blue-600 text-white rounded-lg px-4 py-3 mb-4 flex items-center gap-3 shadow-md">
            <span className="text-sm font-medium flex-1">
              {selectedPendingCount} permintaan dipilih
            </span>
            <button
              onClick={() => setBulkAcceptOpen(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-blue-700 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              Terima ({selectedPendingCount})
            </button>
            <button
              onClick={() => openReschedule()}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-400 transition-colors border border-blue-400"
            >
              <RotateCcw className="w-4 h-4" />
              Reschedule ({selectedPendingCount})
            </button>
            <button
              onClick={clearSelection}
              className="p-1.5 hover:bg-blue-500 rounded-md transition-colors"
              title="Batalkan seleksi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ── Select All bar ── */}
        {pendingVisible.length > 0 && statusFilter !== "all" && (
          <div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 mb-3 flex items-center gap-3">
            <button
              onClick={toggleSelectAll}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              {allVisibleSelected ? (
                <CheckSquare className="w-4 h-4 text-blue-600" />
              ) : someVisibleSelected ? (
                <Minus className="w-4 h-4 text-blue-600" />
              ) : (
                <Square className="w-4 h-4 text-gray-400" />
              )}
              <span className={allVisibleSelected ? "text-blue-600 font-medium" : ""}>
                Pilih Semua
              </span>
            </button>
            <span className="text-xs text-gray-400">
              {filteredRequests.length} permintaan
              {selectedSession !== "all" && (() => {
                const sessReqs = filteredRequests.filter(r => r.status === statusFilter || statusFilter === "all");
                const accepted = sessReqs.filter(r => ["waiting_zoom","scheduled","completed"].includes(r.status)).length;
                const total = filteredRequests.length;
                return total > 0 ? <span className="ml-1 text-blue-500">({total}/15 peserta sesi ini)</span> : null;
              })()}
            </span>
          </div>
        )}

        {/* ── Request cards ── */}
        <div className="space-y-3">
          {filteredRequests.map((request) => {
            const isPending = request.status === "pending";
            const isSelected = selectedIds.has(request.id);
            const quota = isPending
              ? getSlotQuota(
                  request.scheduledDate,
                  request.scheduledTimeSlot.startTime,
                  request.scheduledTimeSlot.endTime
                )
              : null;

            return (
              <div
                key={request.id}
                className={`bg-white rounded-lg border transition-all ${
                  isSelected
                    ? "border-blue-400 ring-1 ring-blue-200 bg-blue-50/30"
                    : "border-gray-200 hover:shadow-sm"
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    {/* Checkbox — only for pending */}
                    {isPending ? (
                      <button
                        onClick={() => toggleSelect(request.id)}
                        className="mt-0.5 flex-shrink-0"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                        )}
                      </button>
                    ) : (
                      <div className="w-5 flex-shrink-0" />
                    )}

                    <div className="flex-1 min-w-0">
                      {/* Top row: name + badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900 text-sm">{request.userName}</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${getRoleColor(request.userRole)}`}>
                          {request.userRole}
                        </span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(request.status)}`}>
                          {getStatusLabel(request.status)}
                        </span>
                        {/* Quota badge */}
                        {quota && (
                          <span
                            className={`flex items-center gap-1 px-2 py-0.5 text-xs rounded-full ${
                              quota.isFull
                                ? "bg-red-100 text-red-700"
                                : quota.accepted >= MAX_QUOTA - 2
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <Users className="w-3 h-3" />
                            {quota.accepted}/{MAX_QUOTA} sesi
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{request.title}</h4>
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">{request.description}</p>

                      {/* Attachment */}
                      {(request as any).attachmentFileName && (
                        <div className="flex items-center gap-1.5 mb-3">
                          <Paperclip className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          {(request as any).attachmentDataUrl ? (
                            <a
                              href={(request as any).attachmentDataUrl}
                              download={(request as any).attachmentFileName}
                              className="flex items-center gap-1 text-xs text-blue-600 hover:underline truncate"
                            >
                              <FileText className="w-3 h-3" />
                              {(request as any).attachmentFileName}
                            </a>
                          ) : (
                            <span className="text-xs text-gray-500 truncate">
                              {(request as any).attachmentFileName}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Details grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-600 mb-3">
                        <div><span className="font-medium">Org:</span> {request.organization}</div>
                        <div><span className="font-medium">Kategori:</span> {request.category}</div>
                        <div><span className="font-medium">Prioritas:</span> {request.priority}</div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          <span className="font-medium">No. Telepon:</span>{" "}
                          {users.find(u => u.id === request.userId)?.phone || request.phone || "-"}
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        <span>
                          {request.scheduledDay},{" "}
                          {new Date(request.scheduledDate).toLocaleDateString("id-ID", {
                            day: "numeric", month: "long", year: "numeric",
                          })}{" "}
                          · {request.scheduledTimeSlot.startTime}–{request.scheduledTimeSlot.endTime}
                        </span>
                      </div>

                      {/* Rescheduled info */}
                      {request.status === "rescheduled" && request.rescheduleNote && (
                        <div className="mt-3 flex items-start gap-2 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                          <CalendarClock className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-medium text-indigo-800 mb-0.5">Jadwal telah diperbarui</p>
                            <p className="text-xs text-indigo-700">{request.rescheduleNote}</p>
                          </div>
                        </div>
                      )}

                      {/* Waiting zoom */}
                      {request.status === "waiting_zoom" && (
                        <div className="mt-3 flex items-start gap-2 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                          <Video className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-orange-800">
                            Admin sedang mempersiapkan Zoom meeting untuk sesi ini.
                          </p>
                        </div>
                      )}

                      {/* Zoom link ready */}
                      {request.status === "scheduled" && request.zoomLink && (
                        <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between gap-3">
                          <a
                            href={request.zoomLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline truncate"
                          >
                            {request.zoomLink}
                          </a>
                          <a
                            href={request.zoomLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors"
                          >
                            <Video className="w-3.5 h-3.5" />
                            Gabung Zoom
                          </a>
                        </div>
                      )}

                      {/* Quota full warning */}
                      {quota?.isFull && (
                        <div className="mt-3 flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-red-800">
                            Kuota konsultasi untuk sesi{" "}
                            {request.scheduledTimeSlot.startTime}–{request.scheduledTimeSlot.endTime} sudah penuh (
                            {MAX_QUOTA}/{MAX_QUOTA}). Anda tidak dapat menerima peserta tambahan pada sesi ini.
                          </p>
                        </div>
                      )}

                      {/* Per-card actions for pending */}
                      {isPending && (
                        <div className="mt-3 pt-3 border-t border-gray-200 flex gap-2">
                          <button
                            onClick={() => handleSingleAccept(request.id, request.userName)}
                            disabled={quota?.isFull}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            Terima
                          </button>
                          <button
                            onClick={() => {
                              setSelectedIds(new Set([request.id]));
                              openReschedule(new Set([request.id]));
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 border border-indigo-400 text-indigo-700 text-xs rounded-md hover:bg-indigo-50 transition-colors"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Reschedule
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRequests.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <AlertCircle className="w-10 h-10 mx-auto mb-3 text-gray-300" />
            <p className="text-gray-500 text-sm">Tidak ada permintaan dengan status ini</p>
          </div>
        )}
      </div>

      {/* ── Bulk Accept Modal ── */}
      <Modal
        isOpen={bulkAcceptOpen}
        onClose={() => setBulkAcceptOpen(false)}
        title="Konfirmasi Terima Permintaan"
        size="md"
        footer={
          <>
            <button
              onClick={() => setBulkAcceptOpen(false)}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Batal
            </button>
            <button
              onClick={handleBulkAcceptConfirm}
              disabled={isLoading || bulkAcceptAnalysis.canAccept.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              Terima {bulkAcceptAnalysis.canAccept.length} Permintaan
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-start gap-2 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <Video className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-800">
              Setelah diterima, status berubah ke <strong>"Menunggu Zoom"</strong>. Admin akan membuat link Zoom dan mendistribusikannya ke semua peserta dalam sesi yang sama.
            </p>
          </div>

          {/* Session breakdown */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {Array.from(bulkAcceptAnalysis.sessions.entries()).map(([key, val]) => {
              const first = val.items[0];
              const willAccept = val.toAccept.length;
              const willBlock = val.items.length - willAccept;
              const afterAccepted = val.accepted + willAccept;
              return (
                <div key={key} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {first.scheduledDay},{" "}
                      {new Date(first.scheduledDate).toLocaleDateString("id-ID", {
                        day: "numeric", month: "short", year: "numeric",
                      })}{" "}
                      · {first.scheduledTimeSlot.startTime}–{first.scheduledTimeSlot.endTime}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        afterAccepted >= MAX_QUOTA
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {afterAccepted}/{MAX_QUOTA} setelah terima
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-0.5">
                    {val.toAccept.map((r) => (
                      <div key={r.id} className="flex items-center gap-1.5 text-green-700">
                        <CheckCircle className="w-3 h-3" />
                        {r.userName} — {r.title}
                      </div>
                    ))}
                    {val.items.slice(willAccept).map((r) => (
                      <div key={r.id} className="flex items-center gap-1.5 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {r.userName} — kuota penuh, tidak dapat diterima
                      </div>
                    ))}
                  </div>
                  {willBlock > 0 && (
                    <p className="text-xs text-red-600 mt-2 font-medium">
                      ⚠ {willBlock} permintaan tidak dapat diterima karena kuota sesi ini sudah penuh ({MAX_QUOTA}/{MAX_QUOTA}).
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {bulkAcceptAnalysis.blocked.length > 0 && (
            <p className="text-xs text-gray-500">
              {bulkAcceptAnalysis.blocked.length} permintaan akan dilewati. Gunakan Reschedule untuk memindahkan mereka ke sesi lain.
            </p>
          )}
        </div>
      </Modal>

      {/* ── Reschedule Modal ── */}
      <Modal
        isOpen={rescheduleOpen}
        onClose={() => setRescheduleOpen(false)}
        title="Jadwalkan Ulang Konsultasi"
        size="lg"
        footer={
          <>
            <button
              onClick={() => setRescheduleOpen(false)}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Batal
            </button>
            <button
              onClick={handleRescheduleConfirm}
              disabled={isLoading || !rescheduleDate || !rescheduleSlot}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              <CalendarClock className="w-4 h-4" />
              Konfirmasi Reschedule
            </button>
          </>
        }
      >
        <div className="space-y-5">
          {/* Summary of affected requests */}
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Menjadwalkan ulang{" "}
              <span className="font-semibold">
                {allRequests.filter((r) => selectedIds.has(r.id) && r.status === "pending").length}
              </span>{" "}
              permintaan konsultasi:
            </p>
            <div className="space-y-1 max-h-28 overflow-y-auto">
              {allRequests
                .filter((r) => selectedIds.has(r.id) && r.status === "pending")
                .map((r) => (
                  <div key={r.id} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 px-3 py-1.5 rounded">
                    <span className={`px-1.5 py-0.5 rounded-full text-xs ${getRoleColor(r.userRole)}`}>{r.userRole}</span>
                    <span className="font-medium">{r.userName}</span>
                    <span className="text-gray-400">—</span>
                    <span className="truncate">{r.title}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Step 1: Day */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              1. Pilih Hari Konsultasi
            </label>
            {lecturerAvailDays.length === 0 ? (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                Anda belum mengatur jadwal ketersediaan. Silakan tambahkan jadwal di halaman Registrasi PKM.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {lecturerAvailDays.map((a) => (
                  <button
                    key={a.dayOfWeek}
                    type="button"
                    onClick={() => {
                      setRescheduleDay(a.dayOfWeek);
                      setRescheduleDate("");
                      setRescheduleSlot(null);
                    }}
                    className={`px-3 py-1.5 rounded-md text-sm border-2 transition-colors ${
                      rescheduleDay === a.dayOfWeek
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-medium"
                        : "border-gray-200 text-gray-700 hover:border-indigo-300"
                    }`}
                  >
                    {a.dayOfWeek}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Step 2: Date */}
          {rescheduleDay && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                2. Pilih Tanggal
              </label>
              <div className="relative">
                <select
                  value={rescheduleDate}
                  onChange={(e) => {
                    setRescheduleDate(e.target.value);
                    setRescheduleSlot(null);
                  }}
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm pr-8"
                >
                  <option value="">-- Pilih Tanggal --</option>
                  {upcomingDatesForDay.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Step 3: Time slot with quota */}
          {rescheduleDate && slotsForDay.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                3. Pilih Sesi Waktu
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slotsForDay.map((slot) => {
                  const q = getSlotQuota(rescheduleDate, slot.startTime, slot.endTime);
                  const isSelected =
                    rescheduleSlot?.startTime === slot.startTime &&
                    rescheduleSlot?.endTime === slot.endTime;
                  return (
                    <button
                      key={`${slot.startTime}-${slot.endTime}`}
                      type="button"
                      disabled={q.isFull}
                      onClick={() => setRescheduleSlot(slot)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-md border-2 text-sm transition-colors ${
                        q.isFull
                          ? "border-red-200 bg-red-50 cursor-not-allowed opacity-60"
                          : isSelected
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-indigo-300"
                      }`}
                    >
                      <span className={`font-medium ${isSelected ? "text-indigo-700" : "text-gray-900"}`}>
                        {slot.startTime} – {slot.endTime}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          q.isFull
                            ? "bg-red-100 text-red-700"
                            : q.accepted >= MAX_QUOTA - 2
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Users className="w-3 h-3" />
                        {q.accepted}/{MAX_QUOTA}
                        {q.isFull ? " · Penuh" : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
              {rescheduleSlot && (() => {
                const q = getSlotQuota(rescheduleDate, rescheduleSlot.startTime, rescheduleSlot.endTime);
                const targets = allRequests.filter((r) => selectedIds.has(r.id) && r.status === "pending");
                const afterCount = q.accepted + targets.length;
                return afterCount > MAX_QUOTA ? (
                  <div className="mt-2 flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-800">
                      Sesi ini hanya menampung {q.available} peserta lagi, tetapi Anda memilih{" "}
                      {targets.length} permintaan. Hanya {q.available} pertama yang akan dijadwalkan ke sesi ini.
                    </p>
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {/* Note */}
          {rescheduleSlot && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                4. Catatan untuk Peserta (Opsional)
              </label>
              <textarea
                value={rescheduleNote}
                onChange={(e) => setRescheduleNote(e.target.value)}
                placeholder="Contoh: Jadwal Anda telah dipindahkan ke hari dan waktu baru. Harap hadir tepat waktu."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
