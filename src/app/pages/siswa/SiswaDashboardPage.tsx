import { StatCard } from "../../components/StatCard";
import { MessageSquare, Calendar, CheckCircle2, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useSeminars } from "../../context/SeminarContext";
import { useMemo } from "react";
import { LecturerRecommendationWidget } from "../../components/LecturerRecommendationWidget";

export function SiswaDashboardPage() {
  const { user } = useAuth();
  const { consultationBookings } = useConsultationSystem();
  const { getUserRegistrations } = useSeminars();

  // Get user's consultations
  const myConsultations = useMemo(() => {
    if (!user) return [];
    return (consultationBookings || []).filter(c => c.userId === user.id);
  }, [consultationBookings, user]);

  // Get upcoming scheduled consultations
  const upcomingSchedule = useMemo(() => {
    return (myConsultations || [])
      .filter(c => c.status === "scheduled" || c.status === "accepted")
      .map(c => ({
        id: c.id,
        mentor: c.lecturerName,
        topic: c.title,
        time: c.scheduledDate && c.scheduledTimeSlot
          ? `${c.scheduledDate}T${c.scheduledTimeSlot.startTime}`
          : "",
        zoomLink: c.zoomLink || "",
        status: c.status === "scheduled" ? "Scheduled" : "Accepted",
      }))
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  }, [myConsultations]);

  // Get recent activity from consultations
  const recentActivity = useMemo(() => {
    return (myConsultations || [])
      .slice()
      .sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime())
      .slice(0, 5)
      .map(c => {
        let action = "";
        if (c.status === "completed") action = "Konsultasi selesai";
        else if (c.status === "accepted") action = "Permintaan diterima";
        else if (c.status === "scheduled") action = "Jadwal dikonfirmasi";
        else if (c.status === "rejected") action = "Permintaan ditolak";
        else if (c.status === "cancelled") action = "Konsultasi dibatalkan";
        else action = "Permintaan diajukan";

        return {
          id: c.id,
          action,
          mentor: c.lecturerName,
          topic: c.title,
          date: c.createdAt || new Date().toISOString(),
          status: (c.status || "").charAt(0).toUpperCase() + (c.status || "").slice(1),
          feedback: c.feedback || null,
        };
      });
  }, [myConsultations]);

  // Calculate stats
  const activeConsultations = useMemo(() => {
    return (myConsultations || []).filter(c =>
      c.status === "pending" || c.status === "accepted" || c.status === "scheduled"
    ).length;
  }, [myConsultations]);

  const completedConsultations = useMemo(() => {
    return (myConsultations || []).filter(c => c.status === "completed").length;
  }, [myConsultations]);

  // Get user's seminar registrations
  const userSeminarRegistrations = useMemo(() => {
    if (!user) return [];
    return getUserRegistrations(user.id);
  }, [user, getUserRegistrations]);

  const attendedSeminars = userSeminarRegistrations.length;

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "accepted":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "scheduled":
        return "bg-purple-100 text-purple-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "cancelled":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "completed": return "Selesai";
      case "accepted": return "Diterima";
      case "pending": return "Menunggu";
      case "scheduled": return "Terjadwal";
      case "rejected": return "Ditolak";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Siswa</h1>
          <p className="text-gray-600">Kelola konsultasi akademik Anda</p>
        </div>

        {/* Rekomendasi Dosen */}
        <LecturerRecommendationWidget />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Konsultasi Aktif"
            value={activeConsultations.toString()}
            icon={MessageSquare}
            description="Konsultasi sedang berlangsung"
            trend={activeConsultations > 0 ? { value: `${activeConsultations} aktif`, isPositive: true } : undefined}
          />
          <StatCard
            title="Jadwal Mendatang"
            value={upcomingSchedule.length.toString()}
            icon={Calendar}
            description="Sesi yang akan datang"
            trend={upcomingSchedule.length > 0 ? { value: "Terjadwal", isPositive: true } : undefined}
          />
          <StatCard
            title="Konsultasi Selesai"
            value={completedConsultations.toString()}
            icon={CheckCircle2}
            description="Total konsultasi selesai"
            trend={completedConsultations > 0 ? { value: `${completedConsultations} selesai`, isPositive: true } : undefined}
          />
          <StatCard
            title="Seminar Diikuti"
            value={attendedSeminars.toString()}
            icon={BookOpen}
            description="Seminar yang telah diikuti"
            trend={attendedSeminars > 0 ? { value: `${attendedSeminars} diikuti`, isPositive: true } : undefined}
          />
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Jadwal Mendatang</h2>
          </div>
          <div className="p-6 space-y-4">
            {upcomingSchedule.length > 0 ? (
              upcomingSchedule.map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-gray-900">{schedule.mentor}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(schedule.status)}`}>
                        {getStatusLabel(schedule.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{schedule.topic}</p>
                    {schedule.time && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(schedule.time).toLocaleString("id-ID")}
                      </div>
                    )}
                  </div>
                  {schedule.zoomLink && (
                    <a
                      href={schedule.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Gabung Zoom
                    </a>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-sm">Belum ada jadwal konsultasi terjadwal</p>
                <p className="text-xs text-gray-400 mt-2">Jadwal Anda akan muncul di sini setelah dosen menyetujui permintaan konsultasi</p>
              </div>
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
            <h2 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h2>
          </div>
          <div className="p-6 space-y-4">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900">{activity.action}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                          {getStatusLabel(activity.status)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Dosen:</span> {activity.mentor}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Topik:</span> {activity.topic}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.date).toLocaleDateString("id-ID")}
                      </p>
                      {activity.feedback && (
                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-sm text-green-800">
                            <span className="font-medium">Feedback:</span> {activity.feedback}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-sm">Belum ada aktivitas konsultasi</p>
                <p className="text-xs text-gray-400 mt-2">Riwayat konsultasi Anda akan muncul di sini</p>
                <Link
                  to="/consultation/new"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  Ajukan Konsultasi Pertama
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
