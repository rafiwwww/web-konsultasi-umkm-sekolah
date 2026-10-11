import { useState } from "react";
import { Plus, Calendar, Clock, Users, Edit, Trash2, Link as LinkIcon, MapPin, Eye } from "lucide-react";
import { useNavigate } from "react-router";
import { Modal, ConfirmModal } from "../../components/Modal";
import { useToast } from "../../components/Toast";
import { DatePicker } from "../../components/DatePicker";

export function SeminarPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedSeminar, setSelectedSeminar] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [seminars, setSeminars] = useState([
    {
      id: 1,
      title: "Digital Marketing Strategy for UMKM",
      description: "Workshop tentang strategi pemasaran digital untuk meningkatkan penjualan UMKM melalui media sosial dan e-commerce.",
      eventDate: "2026-02-15",
      eventTime: "14:00",
      platform: "Zoom Meeting",
      zoomLink: "https://zoom.us/j/123456789",
      status: "Active",
      quota: 50,
      participants: 45,
    },
    {
      id: 2,
      title: "Financial Management Workshop",
      description: "Belajar mengelola keuangan bisnis dengan efektif, termasuk pembukuan sederhana dan perencanaan anggaran.",
      eventDate: "2026-02-18",
      eventTime: "10:00",
      platform: "Zoom Meeting",
      zoomLink: "https://zoom.us/j/987654321",
      status: "Active",
      quota: 40,
      participants: 32,
    },
    {
      id: 3,
      title: "Business Innovation Summit",
      description: "Diskusi tentang inovasi dan teknologi dalam pengembangan bisnis UMKM di era digital.",
      eventDate: "2026-01-28",
      eventTime: "13:00",
      platform: "Ruang Seminar A",
      zoomLink: "",
      status: "Cancelled",
      quota: 50,
      participants: 0,
    },
  ]);

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    eventDate: "",
    eventTime: "",
    platform: "",
    quota: 0,
    status: "Active",
  });

  const handleEditClick = (seminar: any) => {
    setSelectedSeminar(seminar);
    setEditForm({
      title: seminar.title,
      description: seminar.description,
      eventDate: seminar.eventDate,
      eventTime: seminar.eventTime,
      platform: seminar.platform,
      quota: seminar.quota,
      status: seminar.status,
    });
    setEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSeminars(
      seminars.map((s) =>
        s.id === selectedSeminar.id
          ? {
              ...s,
              ...editForm,
            }
          : s
      )
    );

    setIsLoading(false);
    setEditModalOpen(false);
    showToast("Seminar updated successfully", "success");
  };

  const handleCancelClick = (seminar: any) => {
    setSelectedSeminar(seminar);
    setCancelModalOpen(true);
  };

  const handleConfirmCancel = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSeminars(
      seminars.map((s) =>
        s.id === selectedSeminar.id
          ? {
              ...s,
              status: "Cancelled",
              participants: 0,
            }
          : s
      )
    );

    setIsLoading(false);
    setCancelModalOpen(false);
    showToast("Seminar has been cancelled", "warning");
  };

  const handleDeleteClick = (seminar: any) => {
    setSelectedSeminar(seminar);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSeminars(seminars.filter((s) => s.id !== selectedSeminar.id));

    setIsLoading(false);
    setDeleteModalOpen(false);
    showToast("Seminar successfully deleted", "error");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Draft":
        return "bg-gray-100 text-gray-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Seminar</h1>
            <p className="text-gray-600">Kelola seminar dan workshop Anda</p>
          </div>
          <button
            onClick={() => navigate("/seminar/new")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Buat Seminar
          </button>
        </div>

        {/* Seminars List */}
        <div className="space-y-4">
          {seminars.map((seminar) => (
            <div
              key={seminar.id}
              className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 ${
                seminar.status === "Cancelled" ? "opacity-85 relative overflow-hidden" : ""
              }`}
            >
              {/* Cancelled Badge Overlay */}
              {seminar.status === "Cancelled" && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-red-600 text-white rounded">Cancelled</span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{seminar.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{seminar.description}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${getStatusColor(seminar.status)} ml-4`}>
                  {seminar.status}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>
                    {new Date(seminar.eventDate).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{seminar.eventTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{seminar.platform}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  <span>
                    {seminar.participants} / {seminar.quota} Peserta
                  </span>
                </div>
                {seminar.zoomLink && (
                  <div className="flex items-center text-sm md:col-span-2">
                    <LinkIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <a
                      href={seminar.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 truncate"
                    >
                      {seminar.zoomLink}
                    </a>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                {seminar.status !== "Cancelled" && (
                  <button
                    onClick={() => handleEditClick(seminar)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                )}

                {seminar.status === "Active" ? (
                  <button
                    onClick={() => handleCancelClick(seminar)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Cancel
                  </button>
                ) : seminar.status === "Cancelled" ? (
                  <button
                    onClick={() => handleDeleteClick(seminar)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                ) : (
                  <button
                    onClick={() => handleCancelClick(seminar)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {seminars.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-500">Belum ada seminar yang dibuat</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="Edit Seminar"
        size="lg"
        footer={
          <>
            <button
              onClick={() => setEditModalOpen(false)}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveEdit}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              Save Changes
            </button>
          </>
        }
      >
        <div className="mb-4">
          <p className="text-sm text-gray-600">Update seminar information below.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Seminar</label>
            <input
              type="text"
              value={editForm.title}
              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea
              value={editForm.description}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
              <DatePicker
                value={editForm.eventDate}
                onChange={(date) => setEditForm({ ...editForm, eventDate: date })}
                placeholder="Pilih tanggal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
              <input
                type="time"
                value={editForm.eventTime}
                onChange={(e) => setEditForm({ ...editForm, eventTime: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Platform / Lokasi</label>
            <input
              type="text"
              value={editForm.platform}
              onChange={(e) => setEditForm({ ...editForm, platform: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Zoom Meeting, Ruang Seminar A"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kuota Peserta</label>
              <input
                type="number"
                value={editForm.quota}
                onChange={(e) => setEditForm({ ...editForm, quota: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={editForm.status}
                onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Draft">Draft</option>
                <option value="Active">Active</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>

      {/* Cancel Confirmation Modal */}
      <ConfirmModal
        isOpen={cancelModalOpen}
        onClose={() => setCancelModalOpen(false)}
        onConfirm={handleConfirmCancel}
        title="Cancel This Seminar?"
        message="Are you sure you want to cancel this seminar? Participants who registered will receive notification."
        confirmText="Yes, Cancel Seminar"
        cancelText="No, Keep Seminar"
        variant="danger"
        isLoading={isLoading}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Seminar Permanently?"
        message="This action cannot be undone."
        confirmText="Delete Permanently"
        cancelText="Cancel"
        variant="danger"
        isLoading={isLoading}
      />
    </div>
  );
}
