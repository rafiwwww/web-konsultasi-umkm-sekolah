import { useState } from "react";
import { Search, Calendar, Clock, AlertCircle, XCircle, Video, CalendarClock, ClipboardCheck, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useConsultationSystem } from "../context/ConsultationSystemContext";
import { useToast } from "../components/Toast";

const CONTACT_EMAIL = "konsultasi@binus.ac.id";
const CONTACT_WA = "081112345678";

export function ConsultationManagementPage() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { updateBookingStatus, getBookingsByUser, consultationSessions } = useConsultationSystem();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const userConsultations = user?.id
    ? getBookingsByUser(user.id).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    : [];

  const handleCancelConsultation = (id: string, title: string) => {
    if (confirm(`Batalkan konsultasi "${title}"?`)) {
      updateBookingStatus(id, "cancelled");
      showToast("Konsultasi berhasil dibatalkan", "warning");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700";
      case "scheduled": return "bg-blue-100 text-blue-700";
      case "waiting_zoom": return "bg-orange-100 text-orange-700";
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "accepted": return "bg-blue-100 text-blue-700";
      case "rejected": return "bg-red-100 text-red-700";
      case "cancelled": return "bg-gray-100 text-gray-700";
      case "rescheduled": return "bg-indigo-100 text-indigo-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending": return "Menunggu";
      case "accepted": return "Diterima";
      case "waiting_zoom": return "Menunggu Zoom";
      case "rejected": return "Ditolak";
      case "rescheduled": return "Dijadwalkan Ulang";
      case "scheduled": return "Siap Konsultasi";
      case "completed": return "Selesai";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  const filteredConsultations = userConsultations.filter(consultation => {
    const matchesSearch =
      consultation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.lecturerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || consultation.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kelola Konsultasi</h1>
          <p className="text-gray-600">Lihat dan kelola semua konsultasi Anda</p>
        </div>

        <div className="mb-6">
          <Link to="/consultation/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span className="mr-2">+</span>
            Buat Konsultasi Baru
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Total Konsultasi</p>
            <p className="text-2xl font-bold text-gray-900">{userConsultations.length}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Menunggu</p>
            <p className="text-2xl font-bold text-yellow-600">
              {userConsultations.filter(c => c.status === "pending").length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Menunggu Zoom</p>
            <p className="text-2xl font-bold text-orange-600">
              {userConsultations.filter(c => c.status === "waiting_zoom").length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Selesai</p>
            <p className="text-2xl font-bold text-green-600">
              {userConsultations.filter(c => c.status === "completed").length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Cari konsultasi..."
                value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">Semua Status</option>
              <option value="pending">Menunggu</option>
              <option value="waiting_zoom">Menunggu Zoom</option>
              <option value="scheduled">Siap Konsultasi</option>
              <option value="completed">Selesai</option>
              <option value="rejected">Ditolak</option>
              <option value="rescheduled">Dijadwalkan Ulang</option>
              <option value="cancelled">Dibatalkan</option>
            </select>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredConsultations.map(consultation => {
            const session = consultation.sessionId
              ? consultationSessions.find(s => s.id === consultation.sessionId)
              : consultationSessions.find(s =>
                  s.lecturerId === consultation.lecturerId &&
                  s.scheduledDate === consultation.scheduledDate &&
                  s.scheduledTimeSlot.startTime === consultation.scheduledTimeSlot.startTime &&
                  s.bookingIds.includes(consultation.id)
                );
            const evalLink = session?.evaluationLink;

            return (
              <div key={consultation.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{consultation.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(consultation.status)}`}>
                        {getStatusLabel(consultation.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{consultation.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                      <div><span className="font-medium">Dosen:</span> {consultation.lecturerName}</div>
                      <div><span className="font-medium">Kategori:</span> {consultation.category}</div>
                      <div><span className="font-medium">Prioritas:</span> {consultation.priority}</div>
                      <div><span className="font-medium">Organisasi:</span> {consultation.organization}</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{consultation.scheduledDay}, {new Date(consultation.scheduledDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{consultation.scheduledTimeSlot.startTime} - {consultation.scheduledTimeSlot.endTime}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      Diajukan: {new Date(consultation.createdAt).toLocaleString("id-ID")}
                    </div>
                  </div>
                </div>

                {/* Status actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 flex-wrap">
                  {/* Waiting zoom */}
                  {consultation.status === "waiting_zoom" && (
                    <div className="flex items-start gap-2 w-full p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <Video className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-orange-800 mb-2">
                          Konsultasi ini telah diterima oleh dosen. Zoom meeting belum dibuat. Harap tunggu Administrator mempersiapkan link Zoom meeting. Anda akan otomatis mendapatkan link setelah Admin mengkonfirmasi.
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-orange-700">
                          <span className="font-medium">Butuh bantuan?</span>
                          <a href={`mailto:${CONTACT_EMAIL}`}
                            className="flex items-center gap-1 underline hover:text-orange-900">
                            <Mail className="w-3 h-3" />{CONTACT_EMAIL}
                          </a>
                          <a href={`https://wa.me/62${CONTACT_WA.replace(/^0/, "")}`} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 underline hover:text-orange-900">
                            <MessageCircle className="w-3 h-3" />WhatsApp {CONTACT_WA}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Rescheduled */}
                  {consultation.status === "rescheduled" && (
                    <div className="flex items-start gap-2 w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <CalendarClock className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm flex-1">
                        <p className="font-medium text-indigo-800 mb-1">Jadwal konsultasi Anda telah diubah</p>
                        <p className="text-indigo-700 mb-2">
                          Jadwal baru: {consultation.scheduledDay},{" "}
                          {new Date(consultation.scheduledDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}{" "}
                          · {consultation.scheduledTimeSlot.startTime}–{consultation.scheduledTimeSlot.endTime}
                        </p>
                        {(consultation as any).rescheduleNote && (
                          <p className="text-indigo-600 mb-2 text-xs">{(consultation as any).rescheduleNote}</p>
                        )}
                        <div className="flex flex-wrap gap-3 text-xs text-indigo-700">
                          <span className="font-medium">Pertanyaan?</span>
                          <a href={`mailto:${CONTACT_EMAIL}`}
                            className="flex items-center gap-1 underline hover:text-indigo-900">
                            <Mail className="w-3 h-3" />{CONTACT_EMAIL}
                          </a>
                          <a href={`https://wa.me/62${CONTACT_WA.replace(/^0/, "")}`} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 underline hover:text-indigo-900">
                            <MessageCircle className="w-3 h-3" />WhatsApp {CONTACT_WA}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Scheduled: zoom button */}
                  {consultation.status === "scheduled" && consultation.zoomLink && (
                    <a href={consultation.zoomLink} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                      <Video className="w-4 h-4 mr-2" />
                      Gabung Zoom Meeting
                    </a>
                  )}

                  {/* Completed: evaluation button */}
                  {consultation.status === "completed" && (
                    <div className="w-full">
                      {evalLink ? (
                        <a href={evalLink} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors">
                          <ClipboardCheck className="w-4 h-4" />
                          Buka Form Evaluasi
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <p className="text-xs text-gray-400 flex items-center gap-1.5">
                          <ClipboardCheck className="w-3.5 h-3.5" />
                          Form evaluasi belum tersedia. Silakan tunggu notifikasi dari Admin.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Pending: cancel */}
                  {consultation.status === "pending" && (
                    <button onClick={() => handleCancelConsultation(consultation.id, consultation.title)}
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors">
                      <XCircle className="w-4 h-4 mr-2" />
                      Batalkan
                    </button>
                  )}

                  {consultation.status === "rejected" && consultation.feedback && (
                    <div className="text-sm text-red-600">
                      <span className="font-medium">Alasan Penolakan:</span> {consultation.feedback}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredConsultations.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">
              {searchTerm || filterStatus !== "all"
                ? "Tidak ada konsultasi yang sesuai dengan filter"
                : "Belum ada konsultasi. Buat konsultasi baru untuk memulai."}
            </p>
            {!searchTerm && filterStatus === "all" && (
              <Link to="/consultation/new"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Buat Konsultasi Baru
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
