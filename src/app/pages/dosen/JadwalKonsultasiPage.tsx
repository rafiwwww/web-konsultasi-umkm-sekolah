import { useState, useMemo } from "react";
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Video, Users, ChevronDown, ChevronUp, Phone, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useToast } from "../../components/Toast";

const MAX_QUOTA = 15;

export function JadwalKonsultasiPage() {
  const { user, users } = useAuth();
  const { showToast } = useToast();
  const {
    consultationBookings,
    updateBookingStatus,
    getLecturerByEmail,
  } = useConsultationSystem();

  const currentLecturer = user?.email ? getLecturerByEmail(user.email) : null;

  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const scheduledBookings = useMemo(() =>
    consultationBookings.filter(
      b => b.lecturerId === currentLecturer?.id &&
           (b.status === "scheduled" || b.status === "waiting_zoom")
    ),
    [consultationBookings, currentLecturer?.id]
  );

  // Group by date + startTime + endTime
  const sessionGroups = useMemo(() => {
    const map = new Map<string, {
      key: string;
      scheduledDate: string;
      scheduledDay: string;
      startTime: string;
      endTime: string;
      bookings: typeof scheduledBookings;
    }>();
    scheduledBookings.forEach(b => {
      const key = `${b.scheduledDate}__${b.scheduledTimeSlot.startTime}__${b.scheduledTimeSlot.endTime}`;
      if (!map.has(key)) {
        map.set(key, {
          key,
          scheduledDate: b.scheduledDate,
          scheduledDay: b.scheduledDay,
          startTime: b.scheduledTimeSlot.startTime,
          endTime: b.scheduledTimeSlot.endTime,
          bookings: [],
        });
      }
      map.get(key)!.bookings.push(b);
    });
    return Array.from(map.values()).sort((a, b) => {
      const dc = a.scheduledDate.localeCompare(b.scheduledDate);
      return dc !== 0 ? dc : a.startTime.localeCompare(b.startTime);
    });
  }, [scheduledBookings]);

  const getRoleColor = (role: string) => {
    if (role === "UMKM") return "bg-orange-100 text-orange-700";
    if (role === "Siswa") return "bg-green-100 text-green-700";
    if (role === "Guru") return "bg-purple-100 text-purple-700";
    return "bg-gray-100 text-gray-700";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "waiting_zoom": return "bg-orange-100 text-orange-700";
      case "scheduled": return "bg-blue-100 text-blue-700";
      case "completed": return "bg-green-100 text-green-700";
      case "cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "waiting_zoom": return "Menunggu Zoom";
      case "scheduled": return "Siap Konsultasi";
      case "completed": return "Selesai";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  const deriveSessionStatus = (bookings: typeof scheduledBookings) => {
    if (bookings.some(b => b.status === "waiting_zoom")) return "waiting_zoom";
    if (bookings.some(b => b.status === "scheduled")) return "scheduled";
    return bookings[0]?.status ?? "scheduled";
  };

  const isToday = (dateString: string) => {
    const today = new Date();
    return new Date(dateString).toDateString() === today.toDateString();
  };

  const handleMarkSessionCompleted = (sg: typeof sessionGroups[0]) => {
    if (confirm(`Tandai sesi ${sg.startTime}–${sg.endTime} pada ${sg.scheduledDate} sebagai selesai?`)) {
      sg.bookings.filter(b => b.status === "scheduled").forEach(b =>
        updateBookingStatus(b.id, "completed")
      );
      showToast("Sesi berhasil ditandai sebagai selesai", "success");
    }
  };

  const handleCancelSession = (sg: typeof sessionGroups[0]) => {
    if (confirm(`Batalkan sesi ${sg.startTime}–${sg.endTime} pada ${sg.scheduledDate}?`)) {
      sg.bookings.forEach(b => updateBookingStatus(b.id, "cancelled"));
      showToast("Sesi berhasil dibatalkan", "success");
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

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Jadwal Konsultasi</h1>
          <p className="text-gray-600">Kelola jadwal konsultasi Anda yang sudah dikonfirmasi</p>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peserta</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sessionGroups.map(sg => {
                  const sessionStatus = deriveSessionStatus(sg.bookings);
                  const isExpanded = expandedSession === sg.key;
                  const today = isToday(sg.scheduledDate);
                  const zoomLink = sg.bookings.find(b => b.zoomLink)?.zoomLink;
                  const dateLabel = new Date(sg.scheduledDate).toLocaleDateString("id-ID", {
                    weekday: "short", year: "numeric", month: "short", day: "numeric",
                  });
                  return (
                    <>
                      <tr key={sg.key} className={`hover:bg-gray-50 ${today ? "bg-blue-50" : ""}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                            {dateLabel}
                            {today && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-blue-600 text-white rounded-full">Hari Ini</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <Clock className="w-4 h-4 mr-2 text-gray-400" />
                            {sg.startTime} – {sg.endTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-900">{sg.bookings.length}/{MAX_QUOTA}</span>
                            <span className="text-xs text-gray-500">Peserta</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(sessionStatus)}`}>
                            {getStatusLabel(sessionStatus)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2 flex-wrap">
                            {sessionStatus === "waiting_zoom" && (
                              <span className="text-xs text-orange-600 italic">Menunggu Admin...</span>
                            )}
                            {sessionStatus === "scheduled" && zoomLink && (
                              <a
                                href={zoomLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors"
                              >
                                <Video className="w-3 h-3 mr-1" />
                                Zoom
                              </a>
                            )}
                            {sessionStatus === "scheduled" && (
                              <button
                                onClick={() => handleMarkSessionCompleted(sg)}
                                className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors"
                              >
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Selesai
                              </button>
                            )}
                            {sessionStatus !== "waiting_zoom" && (
                              <button
                                onClick={() => handleCancelSession(sg)}
                                className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs rounded-md hover:bg-red-700 transition-colors"
                              >
                                <XCircle className="w-3 h-3 mr-1" />
                                Batal
                              </button>
                            )}
                            <button
                              onClick={() => setExpandedSession(isExpanded ? null : sg.key)}
                              className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-md hover:bg-blue-100 transition-colors border border-blue-200"
                            >
                              {isExpanded ? <ChevronUp className="w-3 h-3 mr-1" /> : <ChevronDown className="w-3 h-3 mr-1" />}
                              Detail
                            </button>
                          </div>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr key={`${sg.key}-detail`}>
                          <td colSpan={5} className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                            <div className="mb-3 flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  Detail Sesi · {dateLabel}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {sg.startTime}–{sg.endTime} · {sg.bookings.length}/{MAX_QUOTA} Peserta
                                </p>
                              </div>
                              <button
                                onClick={() => setExpandedSession(null)}
                                className="p-1 text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Daftar Peserta</p>
                            <div className="space-y-2">
                              {sg.bookings.map(b => {
                                const participantUser = users.find(u => u.id === b.userId);
                                const phone = participantUser?.phone || b.phone || "-";
                                return (
                                  <div key={b.id} className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-2.5">
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-sm font-medium text-gray-900 truncate">{b.userName}</span>
                                        <span className={`px-1.5 py-0.5 text-xs rounded-full flex-shrink-0 ${getRoleColor(b.userRole)}`}>{b.userRole}</span>
                                      </div>
                                      <p className="text-xs text-gray-500 truncate">{b.title}</p>
                                      <p className="text-xs text-gray-400">{b.organization}</p>
                                      <div className="flex items-center gap-1 mt-1">
                                        <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                        <span className="text-xs text-gray-600">{phone}</span>
                                      </div>
                                    </div>
                                    <span className={`px-1.5 py-0.5 text-xs rounded-full flex-shrink-0 ml-3 ${getStatusColor(b.status)}`}>
                                      {getStatusLabel(b.status)}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          {sessionGroups.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Belum ada jadwal konsultasi yang terkonfirmasi</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sesi</p>
                <p className="text-2xl font-bold text-gray-900">{sessionGroups.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hari Ini</p>
                <p className="text-2xl font-bold text-gray-900">
                  {sessionGroups.filter(sg => isToday(sg.scheduledDate)).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Menunggu Zoom</p>
                <p className="text-2xl font-bold text-orange-600">
                  {sessionGroups.filter(sg => deriveSessionStatus(sg.bookings) === "waiting_zoom").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
