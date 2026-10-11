import { useState, useMemo } from "react";
import { Search, Filter, Clock, MessageSquare, Video, Users, Calendar, ChevronDown, ChevronUp, Phone, X } from "lucide-react";
import { Link } from "react-router";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useAuth } from "../../context/AuthContext";

const MAX_QUOTA = 15;

export function SemuaKonsultasiPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const { consultationBookings, consultationSessions } = useConsultationSystem();
  const { users } = useAuth();

  const getRoleColor = (role: string) => {
    if (role === "UMKM") return "bg-orange-100 text-orange-700";
    if (role === "Siswa") return "bg-green-100 text-green-700";
    if (role === "Guru") return "bg-purple-100 text-purple-700";
    return "bg-gray-100 text-gray-700";
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "accepted": return "bg-blue-100 text-blue-700";
      case "waiting_zoom": return "bg-orange-100 text-orange-700";
      case "scheduled":
      case "ready": return "bg-blue-100 text-blue-700";
      case "completed": return "bg-green-100 text-green-700";
      case "rejected":
      case "cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending": return "Menunggu";
      case "accepted": return "Diterima";
      case "waiting_zoom": return "Menunggu Zoom";
      case "rejected": return "Ditolak";
      case "scheduled":
      case "ready": return "Siap Konsultasi";
      case "completed": return "Selesai";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  // Derive session status priority from bookings
  const deriveSessionStatus = (bookings: typeof consultationBookings) => {
    const statuses = bookings.map(b => b.status);
    if (statuses.some(s => s === "scheduled")) return "scheduled";
    if (statuses.some(s => s === "waiting_zoom")) return "waiting_zoom";
    if (statuses.some(s => s === "completed")) return "completed";
    if (statuses.some(s => s === "pending")) return "pending";
    if (statuses.some(s => s === "accepted")) return "accepted";
    if (statuses.some(s => s === "rescheduled")) return "rescheduled";
    return statuses[0] ?? "pending";
  };

  // Group all bookings by lecturerId + date + startTime + endTime
  const sessionGroups = useMemo(() => {
    const map = new Map<string, {
      key: string;
      lecturerId: string;
      lecturerName: string;
      scheduledDate: string;
      scheduledDay: string;
      startTime: string;
      endTime: string;
      bookings: typeof consultationBookings;
      sessionRecord: typeof consultationSessions[0] | undefined;
    }>();

    consultationBookings.forEach(b => {
      const key = `${b.lecturerId}__${b.scheduledDate}__${b.scheduledTimeSlot.startTime}__${b.scheduledTimeSlot.endTime}`;
      if (!map.has(key)) {
        const sessionRecord = consultationSessions.find(
          s => s.lecturerId === b.lecturerId &&
               s.scheduledDate === b.scheduledDate &&
               s.scheduledTimeSlot.startTime === b.scheduledTimeSlot.startTime &&
               s.scheduledTimeSlot.endTime === b.scheduledTimeSlot.endTime
        );
        map.set(key, {
          key,
          lecturerId: b.lecturerId,
          lecturerName: b.lecturerName,
          scheduledDate: b.scheduledDate,
          scheduledDay: b.scheduledDay,
          startTime: b.scheduledTimeSlot.startTime,
          endTime: b.scheduledTimeSlot.endTime,
          bookings: [],
          sessionRecord,
        });
      }
      map.get(key)!.bookings.push(b);
    });

    return Array.from(map.values()).sort((a, b) => {
      const dateCmp = a.scheduledDate.localeCompare(b.scheduledDate);
      if (dateCmp !== 0) return dateCmp;
      return a.startTime.localeCompare(b.startTime);
    });
  }, [consultationBookings, consultationSessions]);

  const filteredSessions = useMemo(() => {
    return sessionGroups.filter(sg => {
      const sessionStatus = sg.sessionRecord?.status ?? deriveSessionStatus(sg.bookings);
      const matchesSearch =
        !searchTerm ||
        sg.lecturerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sg.bookings.some(b =>
          b.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesStatus =
        statusFilter === "All" ||
        sessionStatus.toLowerCase() === statusFilter.toLowerCase() ||
        sg.bookings.some(b => b.status.toLowerCase() === statusFilter.toLowerCase());
      return matchesSearch && matchesStatus;
    });
  }, [sessionGroups, searchTerm, statusFilter]);

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Semua Konsultasi</h1>
            <p className="text-gray-600">Pantau semua sesi konsultasi yang berlangsung di platform</p>
          </div>
          <Link
            to="/admin/zoom-meetings"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex-shrink-0"
          >
            <Video className="w-4 h-4" />
            Kelola Zoom Meeting
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari dosen, peserta, atau topik..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">Semua Status</option>
                <option value="pending">Menunggu</option>
                <option value="waiting_zoom">Menunggu Zoom</option>
                <option value="scheduled">Siap Konsultasi</option>
                <option value="completed">Selesai</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Session list */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosen</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jadwal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peserta</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zoom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSessions.map(sg => {
                  const sessionStatus = sg.sessionRecord?.status ?? deriveSessionStatus(sg.bookings);
                  const isExpanded = expandedSession === sg.key;
                  const dateLabel = new Date(sg.scheduledDate).toLocaleDateString("id-ID", {
                    weekday: "short", day: "numeric", month: "short", year: "numeric",
                  });
                  return (
                    <>
                      <tr key={sg.key} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{sg.lecturerName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
                            {dateLabel}
                          </div>
                          <div className="flex items-center text-xs text-gray-500 mt-0.5">
                            <Clock className="w-3 h-3 mr-1 text-gray-400" />
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
                          {sg.sessionRecord?.zoomLink ? (
                            <a
                              href={sg.sessionRecord.zoomLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                            >
                              <Video className="w-4 h-4 mr-1" />
                              Gabung
                            </a>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {sessionStatus === "waiting_zoom" && (
                              <Link
                                to="/admin/zoom-meetings"
                                className="inline-flex items-center px-3 py-1 bg-orange-600 text-white text-xs rounded-md hover:bg-orange-700 transition-colors"
                              >
                                <Video className="w-3 h-3 mr-1" />
                                Buat Zoom
                              </Link>
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
                          <td colSpan={6} className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                            <div className="mb-3 flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  Detail Sesi — {sg.lecturerName}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {dateLabel} · {sg.startTime}–{sg.endTime} · {sg.bookings.length}/{MAX_QUOTA} Peserta
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
                                        <span className={`px-1.5 py-0.5 text-xs rounded-full flex-shrink-0 ${getStatusColor(b.status)}`}>{getStatusLabel(b.status)}</span>
                                      </div>
                                      <p className="text-xs text-gray-500 truncate">{b.title}</p>
                                      <p className="text-xs text-gray-400">{b.organization}</p>
                                      <div className="flex items-center gap-1 mt-1">
                                        <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                        <span className="text-xs text-gray-600">{phone}</span>
                                      </div>
                                    </div>
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

          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">
                {consultationBookings.length === 0
                  ? "Belum ada konsultasi di sistem"
                  : "Tidak ada sesi yang cocok dengan filter"}
              </p>
              {consultationBookings.length === 0 && (
                <p className="text-sm text-gray-400 mt-2">Data konsultasi akan muncul setelah pengguna membuat permintaan</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
