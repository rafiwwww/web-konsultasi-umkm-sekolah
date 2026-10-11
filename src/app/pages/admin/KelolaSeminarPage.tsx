import { Plus, Calendar, Clock, Users, Edit, X as CloseIcon, Link as LinkIcon, MapPin, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Modal, ConfirmModal } from "../../components/Modal";
import { useToast } from "../../components/Toast";
import { useSeminars } from "../../context/SeminarContext";

export function KelolaSeminarPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { seminars, updateSeminar, deleteSeminar } = useSeminars();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [selectedSeminar, setSelectedSeminar] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    eventDate: "",
    eventTime: "",
    location: "",
    quota: 0,
    status: "Published" as "Draft" | "Published" | "Cancelled",
  });

  const handleEditClick = (seminar: any) => {
    setSelectedSeminar(seminar);
    setEditForm({
      title: seminar.title,
      description: seminar.description,
      eventDate: seminar.eventDate,
      eventTime: seminar.eventTime,
      location: seminar.location,
      quota: seminar.quota,
      status: seminar.status,
    });
    setEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    updateSeminar(selectedSeminar.id, editForm);

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

    updateSeminar(selectedSeminar.id, {
      ...selectedSeminar,
      status: "Cancelled",
      participants: 0,
    });

    setIsLoading(false);
    setCancelModalOpen(false);
    showToast("Seminar has been cancelled", "warning");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Kelola Seminar</h1>
            <p className="text-gray-600">Kelola semua seminar dan workshop</p>
          </div>
          <button
            onClick={() => navigate("/seminar/new")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Buat Seminar
          </button>
        </div>

        {/* Seminars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {seminars.map((seminar) => (
            <div key={seminar.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Poster Image */}
              {seminar.posterUrl && (
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={seminar.posterUrl}
                    alt={seminar.title}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full ${getStatusColor(seminar.status)}`}>
                    {seminar.status}
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{seminar.title}</h3>
                  <p className="text-sm text-gray-600">{seminar.description}</p>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Host: {seminar.host}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{new Date(seminar.eventDate).toLocaleDateString("id-ID")}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{seminar.eventTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{seminar.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>
                      {seminar.participants} / {seminar.quota} Peserta
                    </span>
                  </div>
                  {seminar.zoomLink && (
                    <div className="flex items-center text-sm text-gray-600">
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

                {/* Actions - Only Edit and Cancel, NO DELETE */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleEditClick(seminar)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  {seminar.status === "Published" && (
                    <button
                      onClick={() => handleCancelClick(seminar)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                    >
                      <CloseIcon className="w-4 h-4" />
                      Cancel
                    </button>
                  )}
                </div>
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
              <input
                type="date"
                value={editForm.eventDate}
                onChange={(e) => setEditForm({ ...editForm, eventDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi / Platform</label>
            <input
              type="text"
              value={editForm.location}
              onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                onChange={(e) => setEditForm({ ...editForm, status: e.target.value as "Draft" | "Published" | "Cancelled" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
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
        title="Batalkan Seminar?"
        message="Apakah Anda yakin ingin membatalkan seminar ini? Peserta yang telah mendaftar akan diberi notifikasi."
        confirmText="Yes, Cancel Seminar"
        cancelText="No, Keep It"
        variant="danger"
        isLoading={isLoading}
      />
    </div>
  );
}