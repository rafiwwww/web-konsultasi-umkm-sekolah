import { useState } from "react";
import { Calendar, Clock, User, Star, Filter, TrendingUp, Award } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";

export function RiwayatPage() {
  const { user } = useAuth();
  const {
    lecturers,
    consultationBookings,
    getLecturerStats,
    getLecturerByEmail,
  } = useConsultationSystem();

  const [filterType, setFilterType] = useState("all");

  // Find current lecturer by email
  const currentLecturer = user?.email ? getLecturerByEmail(user.email) : null;

  // Get completed consultations
  const completedConsultations = consultationBookings.filter(
    b => b.lecturerId === currentLecturer?.id && b.status === "completed"
  ).sort((a, b) => new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime());

  // Get cancelled consultations
  const cancelledConsultations = consultationBookings.filter(
    b => b.lecturerId === currentLecturer?.id && b.status === "cancelled"
  ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  // Get all history (completed + cancelled)
  const allHistory = [...completedConsultations, ...cancelledConsultations].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Get lecturer stats
  const stats = currentLecturer ? getLecturerStats(currentLecturer.id) : null;

  const getRoleColor = (role: string) => {
    if (role === "UMKM") return "bg-orange-100 text-orange-700";
    if (role === "Siswa") return "bg-green-100 text-green-700";
    if (role === "Guru") return "bg-purple-100 text-purple-700";
    return "bg-gray-100 text-gray-700";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "cancelled":
        return "Dibatalkan";
      default:
        return status;
    }
  };

  const filteredHistory = () => {
    if (filterType === "all") return allHistory;
    if (filterType === "completed") return completedConsultations;
    if (filterType === "cancelled") return cancelledConsultations;
    if (filterType === "umkm") return allHistory.filter(h => h.userRole === "UMKM");
    if (filterType === "school") return allHistory.filter(h => h.userRole === "Siswa" || h.userRole === "Guru");
    return allHistory;
  };

  const displayedHistory = filteredHistory();

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Riwayat Konsultasi</h1>
          <p className="text-gray-600">Lihat semua konsultasi yang telah selesai</p>
        </div>

        {/* Performance Stats */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Konsultasi</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalConsultations}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Selesai</p>
                  <p className="text-3xl font-bold text-green-600 mt-1">{stats.completedConsultations}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Dibatalkan</p>
                  <p className="text-3xl font-bold text-red-600 mt-1">{stats.cancelledConsultations}</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rating Rata-rata</p>
                  <p className="text-3xl font-bold text-yellow-600 mt-1">
                    {stats.averageRating > 0 ? stats.averageRating.toFixed(1) : "N/A"}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="relative max-w-xs">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Riwayat</option>
              <option value="completed">Selesai</option>
              <option value="cancelled">Dibatalkan</option>
              <option value="umkm">Konsultasi UMKM</option>
              <option value="school">Konsultasi Sekolah</option>
            </select>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Waktu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pengguna
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topik
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayedHistory.map((consultation) => (
                  <tr key={consultation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {new Date(consultation.scheduledDate).toLocaleDateString("id-ID", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {consultation.scheduledTimeSlot.startTime} - {consultation.scheduledTimeSlot.endTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{consultation.userName}</div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(consultation.userRole)}`}>
                            {consultation.userRole}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{consultation.organization}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs font-medium">{consultation.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Jenis: {consultation.consultationType === "umkm" ? "UMKM" : "Sekolah"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(consultation.status)}`}>
                        {getStatusLabel(consultation.status)}
                      </span>
                      {consultation.status === "completed" && consultation.completedAt && (
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(consultation.completedAt).toLocaleDateString("id-ID")}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {consultation.rating ? (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium text-gray-900">{consultation.rating.toFixed(1)}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">Belum dinilai</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {displayedHistory.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Belum ada riwayat konsultasi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}