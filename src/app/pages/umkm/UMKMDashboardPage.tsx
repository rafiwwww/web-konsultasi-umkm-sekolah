import { StatCard } from "../../components/StatCard";
import { MessageSquare, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useMemo } from "react";
import { LecturerRecommendationWidget } from "../../components/LecturerRecommendationWidget";

export function UMKMDashboardPage() {
  const { user } = useAuth();
  const { getBookingsByUser } = useConsultationSystem();
  
  // Dynamic dashboard title based on role (UMKM or Guru)
  const dashboardTitle = user?.role === "Guru" ? "Dashboard Guru" : "Dashboard UMKM";
  const dashboardSubtitle = user?.role === "Guru" 
    ? "Kelola konsultasi siswa Anda" 
    : "Kelola konsultasi bisnis Anda";

  // Get all bookings for this user
  const allBookings = useMemo(() => {
    return user?.id ? getBookingsByUser(user.id) : [];
  }, [user?.id, getBookingsByUser]);

  // Calculate statistics
  const activeConsultations = useMemo(() => {
    return allBookings.filter(b => 
      b.status === "pending" || b.status === "accepted" || b.status === "scheduled"
    ).length;
  }, [allBookings]);

  const upcomingSessions = useMemo(() => {
    const now = new Date();
    const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    return allBookings.filter(b => {
      if (b.status !== "scheduled" && b.status !== "accepted") return false;
      const scheduleDate = new Date(b.scheduledDate);
      return scheduleDate >= now && scheduleDate <= oneWeekLater;
    }).length;
  }, [allBookings]);

  const completedConsultations = useMemo(() => {
    return allBookings.filter(b => b.status === "completed").length;
  }, [allBookings]);

  // Get upcoming scheduled consultations (next 7 days)
  const upcomingSchedule = useMemo(() => {
    const now = new Date();
    const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    return allBookings
      .filter(b => {
        if (b.status !== "scheduled" && b.status !== "accepted") return false;
        const scheduleDate = new Date(b.scheduledDate);
        return scheduleDate >= now && scheduleDate <= sevenDaysLater;
      })
      .sort((a, b) => {
        const dateA = new Date(`${a.scheduledDate}T${a.scheduledTimeSlot.startTime}`);
        const dateB = new Date(`${b.scheduledDate}T${b.scheduledTimeSlot.startTime}`);
        return dateA.getTime() - dateB.getTime();
      })
      .slice(0, 5);
  }, [allBookings]);

  // Get recent activity (last 10 bookings, sorted by date)
  const recentActivity = useMemo(() => {
    return [...allBookings]
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 10);
  }, [allBookings]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "accepted":
      case "scheduled":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "rejected":
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending": return "Menunggu";
      case "accepted": return "Diterima";
      case "scheduled": return "Dijadwalkan";
      case "completed": return "Selesai";
      case "rejected": return "Ditolak";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  const getActionLabel = (status: string) => {
    switch (status) {
      case "pending": return "Permintaan diajukan";
      case "accepted": return "Permintaan diterima";
      case "scheduled": return "Konsultasi dijadwalkan";
      case "completed": return "Konsultasi selesai";
      case "rejected": return "Permintaan ditolak";
      case "cancelled": return "Konsultasi dibatalkan";
      default: return "Status berubah";
    }
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{dashboardTitle}</h1>
          <p className="text-gray-600">{dashboardSubtitle}</p>
        </div>

        {/* Rekomendasi Dosen */}
        <LecturerRecommendationWidget />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Active Consultations"
            value={activeConsultations.toString()}
            icon={MessageSquare}
            description="Konsultasi aktif"
            trend={{ value: "2 menunggu", isPositive: true }}
          />
          <StatCard
            title="Upcoming Sessions"
            value={upcomingSessions.toString()}
            icon={Calendar}
            description="Sesi konsultasi"
            trend={{ value: "Minggu ini", isPositive: true }}
          />
          <StatCard
            title="Completed"
            value={completedConsultations.toString()}
            icon={CheckCircle2}
            description="Konsultasi selesai"
            trend={{ value: "+5 bulan ini", isPositive: true }}
          />
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Schedule</h2>
          </div>
          <div className="p-6 space-y-4">
            {upcomingSchedule.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Tidak ada jadwal konsultasi yang akan datang</p>
                <p className="text-sm text-gray-400 mt-2">
                  Buat permintaan konsultasi baru untuk memulai
                </p>
              </div>
            ) : (
              upcomingSchedule.map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-gray-900">{schedule.lecturerName}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(schedule.status)}`}>
                        {getStatusLabel(schedule.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{schedule.title}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(`${schedule.scheduledDate}T${schedule.scheduledTimeSlot.startTime}`).toLocaleString("id-ID")}
                    </div>
                  </div>
                  {schedule.zoomLink && (
                    <a
                      href={schedule.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Join Zoom
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t border-gray-200 text-center">
            <Link to="/consultation/manage" className="text-sm text-blue-600 hover:text-blue-700">
              Lihat Semua Jadwal →
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          {recentActivity.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Belum ada aktivitas</p>
              <p className="text-sm text-gray-400 mt-2">
                Aktivitas konsultasi Anda akan muncul di sini
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mentor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Topic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{getActionLabel(activity.status)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{activity.lecturerName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{activity.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(activity.updatedAt).toLocaleDateString("id-ID")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                          {getStatusLabel(activity.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}