import { StatCard } from "../../components/StatCard";
import { MessageSquare, CheckCircle2, XCircle, Clock, BarChart as BarChartIcon, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useSeminars } from "../../context/SeminarContext";
import { useMemo } from "react";

export function LaporanSistemPage() {
  const { consultationBookings, lecturers, students } = useConsultationSystem();
  const { seminars } = useSeminars();

  // Calculate real statistics
  const stats = useMemo(() => {
    const completed = consultationBookings.filter(b => b.status === "completed").length;
    const rejected = consultationBookings.filter(b => b.status === "rejected" || b.status === "cancelled").length;
    const pending = consultationBookings.filter(b => b.status === "pending").length;
    const total = consultationBookings.length;

    return {
      total,
      completed,
      rejected,
      pending,
      completedPercentage: total > 0 ? ((completed / total) * 100).toFixed(1) : "0.0",
      rejectedPercentage: total > 0 ? ((rejected / total) * 100).toFixed(1) : "0.0",
      pendingPercentage: total > 0 ? ((pending / total) * 100).toFixed(1) : "0.0",
    };
  }, [consultationBookings]);

  // Monthly data - group consultations by month (based on createdAt)
  const consultationMonthlyData = useMemo(() => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthCounts: { [key: string]: number } = {};
    
    consultationBookings.forEach(booking => {
      const date = new Date(booking.createdAt);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
      monthCounts[monthKey] = (monthCounts[monthKey] || 0) + 1;
    });

    // Get last 12 months
    const result = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthKey = `${d.getFullYear()}-${d.getMonth()}`;
      result.push({
        month: monthNames[d.getMonth()],
        total: monthCounts[monthKey] || 0,
      });
    }

    return result;
  }, [consultationBookings]);

  // User distribution data
  const userDistributionData = useMemo(() => {
    const umkmCount = students.filter(s => s.role === "UMKM").length;
    const siswaCount = students.filter(s => s.role === "Siswa").length;
    const guruCount = students.filter(s => s.role === "Guru").length;

    return [
      { name: "Admin", value: 1 }, // Fixed: 1 admin
      { name: "Dosen", value: lecturers.length },
      { name: "UMKM", value: umkmCount },
      { name: "Siswa", value: siswaCount },
      { name: "Guru", value: guruCount },
    ].filter(item => item.value > 0); // Only show categories with users
  }, [lecturers, students]);

  const COLORS = ["#9333EA", "#2563EB", "#06B6D4", "#F97316", "#10B981"];

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Laporan Sistem</h1>
          <p className="text-gray-600">Analisis dan statistik platform konsultasi</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Consultation This Month"
            value={stats.total.toString()}
            icon={MessageSquare}
            description="Semua konsultasi bulan ini"
          />
          <StatCard
            title="Completed"
            value={stats.completed.toString()}
            icon={CheckCircle2}
            description="Konsultasi selesai"
          />
          <StatCard
            title="Rejected"
            value={stats.rejected.toString()}
            icon={XCircle}
            description="Konsultasi ditolak"
          />
          <StatCard
            title="Pending"
            value={stats.pending.toString()}
            icon={Clock}
            description="Menunggu approval"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Consultation Per Month */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Konsultasi per Bulan</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={consultationMonthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: "12px" }} />
                <YAxis stroke="#6B7280" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
                <Bar dataKey="total" fill="#2563EB" name="Total Konsultasi" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* User Role Distribution */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Distribusi Role User</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Total Seminars */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Seminar Created</p>
                <p className="text-3xl font-bold text-gray-900">{seminars.length}</p>
                <p className="text-sm text-gray-500 mt-1">Semua seminar</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Total Completed Consultations */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Completed Consultations</p>
                <p className="text-3xl font-bold text-gray-900">{stats.completed}</p>
                <p className="text-sm text-gray-500 mt-1">Sepanjang waktu</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}