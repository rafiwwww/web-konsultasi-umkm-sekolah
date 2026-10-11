import { StatCard } from "../../components/StatCard";
import { Users, GraduationCap, Building2, MessageSquare, Clock, Video, AlertTriangle } from "lucide-react";
import { Link } from "react-router";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useSeminars } from "../../context/SeminarContext";
import { useMemo } from "react";

export function AdminDashboardPage() {
  const { consultationBookings, lecturers, students, consultationSessions } = useConsultationSystem();
  const { seminars } = useSeminars();

  // Calculate real statistics
  const totalUsers = useMemo(() => {
    // Admin (1) + Lecturers + Students + any UMKM/Guru registered
    // For now, count lecturers + students
    return lecturers.length + students.length;
  }, [lecturers, students]);

  const totalDosen = lecturers.length;

  const totalParticipants = students.length;

  const activeConsultations = useMemo(() => {
    return consultationBookings.filter(b =>
      b.status === "pending" || b.status === "accepted" || b.status === "waiting_zoom" || b.status === "scheduled"
    ).length;
  }, [consultationBookings]);

  const waitingZoomSessions = useMemo(() => {
    return consultationSessions.filter(s => s.status === "waiting_zoom");
  }, [consultationSessions]);

  const waitingZoomBookingCount = useMemo(() => {
    return consultationBookings.filter(b => b.status === "waiting_zoom").length;
  }, [consultationBookings]);

  // Get recent consultations (last 10, sorted by creation date)
  const recentConsultations = useMemo(() => {
    return [...consultationBookings]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 10);
  }, [consultationBookings]);

  // Get recent students (last 10 as proxy for "registered users")
  const recentUsers = useMemo(() => {
    return [...students]
      .sort((a, b) => {
        // Since students don't have createdAt, we'll just take the first 10
        return 0;
      })
      .slice(0, 10)
      .map(student => ({
        id: student.id,
        name: student.name,
        email: student.email,
        role: "Siswa",
        createdAt: new Date().toISOString(), // Placeholder since we don't track this
      }));
  }, [students]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "accepted": return "bg-blue-100 text-blue-700";
      case "waiting_zoom": return "bg-orange-100 text-orange-700";
      case "scheduled": return "bg-blue-100 text-blue-700";
      case "rejected":
      case "cancelled": return "bg-red-100 text-red-700";
      case "completed": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-700";
      case "Dosen":
        return "bg-blue-100 text-blue-700";
      case "UMKM":
        return "bg-orange-100 text-orange-700";
      case "Siswa":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Kelola sistem dan pantau aktivitas platform</p>
        </div>

        {/* Zoom meeting notification banner */}
        {waitingZoomSessions.length > 0 && (
          <div className="mb-6 flex items-start justify-between gap-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-orange-900">
                  {waitingZoomSessions.length} sesi konsultasi membutuhkan Zoom meeting
                </p>
                <p className="text-sm text-orange-700 mt-0.5">
                  {waitingZoomBookingCount} peserta menunggu link Zoom dari Administrator.
                </p>
              </div>
            </div>
            <Link
              to="/admin/zoom-meetings"
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors flex-shrink-0"
            >
              <Video className="w-4 h-4" />
              Buat Zoom Meeting
            </Link>
          </div>
        )}

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={totalUsers.toString()}
            icon={Users}
            description="Pengguna terdaftar"
          />
          <StatCard
            title="Total Dosen"
            value={totalDosen.toString()}
            icon={GraduationCap}
            description="Mentor aktif"
          />
          <StatCard
            title="Total UMKM & Siswa"
            value={totalParticipants.toString()}
            icon={Building2}
            description="Peserta konsultasi"
          />
          <StatCard
            title="Total Konsultasi (Active)"
            value={activeConsultations.toString()}
            icon={MessageSquare}
            description="Konsultasi berlangsung"
          />
        </div>

        {/* Recent Consultation Requests */}
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Consultation Requests</h2>
          </div>
          {recentConsultations.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Belum ada permintaan konsultasi</p>
              <p className="text-sm text-gray-400 mt-2">
                Data konsultasi akan muncul di sini setelah pengguna membuat permintaan
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target Dosen
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schedule Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentConsultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{consultation.userName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(consultation.userRole)}`}>
                          {consultation.userRole}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{consultation.lecturerName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {consultation.scheduledDate 
                            ? new Date(`${consultation.scheduledDate}T${consultation.scheduledTimeSlot?.startTime || '00:00'}`).toLocaleString("id-ID")
                            : "Belum dijadwalkan"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(consultation.status)}`}>
                          {consultation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Registered Users */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Registered Users</h2>
          </div>
          {recentUsers.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Belum ada pengguna terdaftar</p>
              <p className="text-sm text-gray-400 mt-2">
                Daftar pengguna baru akan muncul di sini
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(user.createdAt).toLocaleDateString("id-ID")}
                        </div>
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