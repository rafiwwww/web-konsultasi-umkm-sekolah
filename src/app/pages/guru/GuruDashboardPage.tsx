import { StatCard } from "../../components/StatCard";
import { MessageSquare, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router";

export function GuruDashboardPage() {
  const todaySchedule = [
    {
      id: 1,
      user: "Rina Permata",
      role: "Siswa",
      topic: "Konsultasi Akademik - Matematika",
      time: "2026-02-12 10:00",
      zoomLink: "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      user: "Fajar Ramadhan",
      role: "Siswa",
      topic: "Bimbingan Tugas Akhir",
      time: "2026-02-12 14:00",
      zoomLink: "https://zoom.us/j/987654321",
    },
  ];

  const pendingRequests = [
    {
      id: 1,
      user: "Dina Kartika",
      role: "Siswa",
      topic: "Konsultasi Karir",
      description: "Membutuhkan bimbingan pemilihan jurusan kuliah",
      requestedSchedule: "2026-02-15 10:00",
      status: "Pending",
    },
    {
      id: 2,
      user: "Yoga Pratama",
      role: "Siswa",
      topic: "Konsultasi Akademik",
      description: "Bimbingan persiapan ujian nasional",
      requestedSchedule: "2026-02-14 14:00",
      status: "Pending",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Guru</h1>
          <p className="text-gray-600">Kelola konsultasi siswa Anda</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Pending Requests"
            value="8"
            icon={MessageSquare}
            description="Permintaan konsultasi baru"
            trend={{ value: "+2 permintaan", isPositive: true }}
          />
          <StatCard
            title="Today Schedule"
            value="2"
            icon={Calendar}
            description="Jadwal konsultasi hari ini"
            trend={{ value: "Lihat jadwal", isPositive: true }}
          />
          <StatCard
            title="Total Completed"
            value="78"
            icon={CheckCircle2}
            description="Konsultasi selesai bulan ini"
            trend={{ value: "+15 dari bulan lalu", isPositive: true }}
          />
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
          </div>
          <div className="p-6 space-y-4">
            {todaySchedule.map((schedule) => (
              <div
                key={schedule.id}
                className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-gray-900">{schedule.user}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {schedule.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{schedule.topic}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(schedule.time).toLocaleString("id-ID")}
                  </div>
                </div>
                <a
                  href={schedule.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  Join Zoom
                </a>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 text-center">
            <Link to="/mentor/schedule" className="text-sm text-blue-600 hover:text-blue-700">
              Lihat Semua Jadwal →
            </Link>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pending Requests</h2>
          </div>
          <div className="p-6 space-y-4">
            {pendingRequests.map((request) => (
              <div
                key={request.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-gray-900">{request.user}</h3>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        {request.role}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900 mb-1">{request.topic}</p>
                    <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Requested: {new Date(request.requestedSchedule).toLocaleString("id-ID")}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 text-center">
            <Link to="/mentor/requests" className="text-sm text-blue-600 hover:text-blue-700">
              Lihat Semua Permintaan →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
