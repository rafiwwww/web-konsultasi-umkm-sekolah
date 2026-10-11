import { useState } from "react";
import { Clock, User, Filter, CheckCircle, XCircle } from "lucide-react";
import { Modal } from "../../components/Modal";
import { useToast } from "../../components/Toast";

export function GuruPermintaanKonsultasiPage() {
  const { showToast } = useToast();
  const [statusFilter, setStatusFilter] = useState("All");
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  const [requests, setRequests] = useState([
    {
      id: 1,
      userName: "Dina Kartika",
      topic: "Konsultasi Karir",
      description: "Membutuhkan bimbingan pemilihan jurusan kuliah yang sesuai dengan minat dan bakat.",
      requestedSchedule: "2026-02-15 10:00",
      status: "Pending",
    },
    {
      id: 2,
      userName: "Yoga Pratama",
      topic: "Konsultasi Akademik",
      description: "Bimbingan persiapan ujian nasional, khususnya mata pelajaran Matematika dan Bahasa Inggris.",
      requestedSchedule: "2026-02-14 14:00",
      status: "Pending",
    },
    {
      id: 3,
      userName: "Rina Permata",
      topic: "Konsultasi Akademik - Matematika",
      description: "Membutuhkan bantuan pemahaman materi trigonometri dan kalkulus dasar.",
      requestedSchedule: "2026-02-12 10:00",
      status: "Accepted",
    },
    {
      id: 4,
      userName: "Fajar Ramadhan",
      topic: "Bimbingan Tugas Akhir",
      description: "Bimbingan penyelesaian tugas akhir dan persiapan presentasi.",
      requestedSchedule: "2026-02-12 14:00",
      status: "Accepted",
    },
  ]);

  const handleAcceptClick = (request: any) => {
    setSelectedRequest(request);
    const [date, time] = request.requestedSchedule.split(" ");
    setScheduleDate(date);
    setScheduleTime(time);
    setAcceptModalOpen(true);
  };

  const handleConfirmAccept = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRequests(
      requests.map((r) =>
        r.id === selectedRequest.id
          ? {
              ...r,
              status: "Accepted",
              requestedSchedule: `${scheduleDate} ${scheduleTime}`,
            }
          : r
      )
    );

    setIsLoading(false);
    setAcceptModalOpen(false);
    showToast("Consultation request accepted", "success");
  };

  const handleRejectClick = (request: any) => {
    setSelectedRequest(request);
    setRejectModalOpen(true);
  };

  const handleConfirmReject = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setRequests(
      requests.map((r) =>
        r.id === selectedRequest.id
          ? {
              ...r,
              status: "Rejected",
            }
          : r
      )
    );

    setIsLoading(false);
    setRejectModalOpen(false);
    setRejectionReason("");
    showToast("Consultation request rejected", "error");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredRequests = requests.filter((request) => {
    return statusFilter === "All" || request.status === statusFilter;
  });

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Permintaan Konsultasi</h1>
          <p className="text-gray-600">Kelola permintaan konsultasi dari Siswa</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="relative max-w-xs">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Semua Status</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Requests Grid */}
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-gray-400" />
                    <h3 className="font-semibold text-gray-900">{request.userName}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{request.topic}</h4>
                  <p className="text-sm text-gray-600 mb-3">{request.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Requested: {new Date(request.requestedSchedule).toLocaleString("id-ID")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {request.status === "Pending" && (
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleAcceptClick(request)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Accept
                  </button>
                  <button
                    onClick={() => handleRejectClick(request)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                  >
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-500">Tidak ada permintaan konsultasi</p>
          </div>
        )}
      </div>

      {/* Accept Modal */}
      <Modal
        isOpen={acceptModalOpen}
        onClose={() => setAcceptModalOpen(false)}
        title="Terima Permintaan Konsultasi?"
        size="md"
        footer={
          <>
            <button
              onClick={() => setAcceptModalOpen(false)}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmAccept}
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              Confirm Accept
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <p className="text-gray-700">Anda akan dijadwalkan untuk sesi konsultasi ini.</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
              <input
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Reject Modal */}
      <Modal
        isOpen={rejectModalOpen}
        onClose={() => setRejectModalOpen(false)}
        title="Tolak Permintaan Konsultasi?"
        size="md"
        footer={
          <>
            <button
              onClick={() => setRejectModalOpen(false)}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmReject}
              disabled={isLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              Confirm Reject
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Masukkan alasan penolakan..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
