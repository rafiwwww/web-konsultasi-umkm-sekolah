import { StatCard } from "../../components/StatCard";
import { MessageSquare, Calendar, CheckCircle2, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useSeminars } from "../../context/SeminarContext";
import { useMemo } from "react";

export function DosenDashboardPage() {
  const { user } = useAuth();
  const { getBookingsByLecturer, getLecturerByEmail } = useConsultationSystem();
  const { getPublishedSeminars } = useSeminars();

  // Get lecturer data
  const lecturer = user?.email ? getLecturerByEmail(user.email) : null;
  const lecturerId = lecturer?.id || "";

  // Get all bookings for this lecturer
  const allBookings = useMemo(() => {
    return lecturerId ? getBookingsByLecturer(lecturerId) : [];
  }, [lecturerId, getBookingsByLecturer]);

  // Calculate statistics
  const pendingRequests = useMemo(() => {
    return allBookings.filter(b => b.status === "pending").length;
  }, [allBookings]);

  const todayConsultations = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return allBookings.filter(b => 
      b.scheduledDate === today && 
      (b.status === "scheduled" || b.status === "accepted")
    ).length;
  }, [allBookings]);

  const thisMonthCompleted = useMemo(() => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    return allBookings.filter(b => {
      if (b.status !== "completed" || !b.completedAt) return false;
      const completedDate = new Date(b.completedAt);
      return completedDate.getMonth() === thisMonth && completedDate.getFullYear() === thisYear;
    }).length;
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
      .slice(0, 5); // Show only next 5
  }, [allBookings]);

  // Get published seminars count
  const publishedSeminarsCount = getPublishedSeminars().length;

  const getRoleColor = (role: string) => {
    if (role === "UMKM") return "bg-orange-100 text-orange-700";
    if (role === "Siswa") return "bg-green-100 text-green-700";
    if (role === "Guru") return "bg-purple-100 text-purple-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Dosen</h1>
          <p className="text-gray-600">Kelola konsultasi dan jadwal Anda</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Permintaan Pending"
            value={pendingRequests.toString()}
            icon={MessageSquare}
            description="Permintaan konsultasi baru"
            trend={{ value: "+3 permintaan", isPositive: true }}
          />
          <StatCard
            title="Konsultasi Hari Ini"
            value={todayConsultations.toString()}
            icon={Calendar}
            description="Jadwal konsultasi hari ini"
            trend={{ value: "Lihat jadwal", isPositive: true }}
          />
          <StatCard
            title="Total Konsultasi Bulan Ini"
            value={thisMonthCompleted.toString()}
            icon={CheckCircle2}
            description="Konsultasi selesai bulan ini"
            trend={{ value: "+10 dari bulan lalu", isPositive: true }}
          />
          <StatCard
            title="Seminar Tersedia"
            value={publishedSeminarsCount.toString()}
            icon={BookOpen}
            description="Seminar yang dapat diikuti"
            trend={{ value: "Lihat seminar", isPositive: true }}
          />
        </div>

        {/* Upcoming Consultation Schedule */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Consultation Schedule</h2>
          </div>
          <div className="p-6 space-y-4">
            {upcomingSchedule.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Tidak ada jadwal konsultasi yang akan datang</p>
                <p className="text-sm text-gray-400 mt-2">
                  Jadwal konsultasi akan muncul di sini setelah Anda menyetujui permintaan
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
                      <h3 className="font-medium text-gray-900">{schedule.userName}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(schedule.userRole)}`}>
                        {schedule.userRole}
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
            <Link to="/mentor/schedule" className="text-sm text-blue-600 hover:text-blue-700">
              Lihat Semua Jadwal →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}