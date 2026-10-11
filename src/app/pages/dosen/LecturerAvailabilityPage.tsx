import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Plus, Clock, Trash2, Calendar, AlertCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useToast } from "../../components/Toast";

type SelectableTimeSlot = {
  id: string;
  startTime: string;
  endTime: string;
};

const DAYS_OF_WEEK = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Academic time blocks - Left and Right column schedules
const TIME_SLOT_OPTIONS = [
  // Left column
  { startTime: "07:20", endTime: "09:00" },
  { startTime: "09:20", endTime: "11:00" },
  { startTime: "11:20", endTime: "13:00" },
  { startTime: "13:20", endTime: "15:00" },
  { startTime: "15:20", endTime: "17:00" },
  { startTime: "17:20", endTime: "19:00" },
  // Right column
  { startTime: "08:20", endTime: "10:00" },
  { startTime: "10:20", endTime: "12:00" },
  { startTime: "12:20", endTime: "14:00" },
  { startTime: "14:20", endTime: "16:00" },
  { startTime: "16:20", endTime: "18:00" },
];

export function LecturerAvailabilityPage() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const {
    lecturers,
    activeSemester,
    lecturerAvailabilities,
    createAvailability,
    deleteAvailability,
    getLecturerByEmail,
  } = useConsultationSystem();

  // Find current lecturer by email
  const currentLecturer = user?.email ? getLecturerByEmail(user.email) : null;

  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedSlots, setSelectedSlots] = useState<SelectableTimeSlot[]>([]);

  // Get current lecturer's availabilities for active semester
  const currentAvailabilities = lecturerAvailabilities.filter(
    a => a.lecturerId === currentLecturer?.id && 
         a.semesterId === activeSemester?.id &&
         a.isActive
  );

  const handleAddSlot = (slot: { startTime: string; endTime: string }) => {
    const exists = selectedSlots.some(
      s => s.startTime === slot.startTime && s.endTime === slot.endTime
    );
    if (exists) {
      setSelectedSlots(prev => prev.filter(
        s => !(s.startTime === slot.startTime && s.endTime === slot.endTime)
      ));
    } else {
      setSelectedSlots(prev => [...prev, { ...slot, id: `slot-${Date.now()}-${Math.random()}` }]);
    }
  };

  const handleSaveAvailability = () => {
    if (!selectedDay) {
      showToast("Pilih hari terlebih dahulu", "warning");
      return;
    }

    if (selectedSlots.length === 0) {
      showToast("Pilih minimal satu slot waktu", "warning");
      return;
    }

    if (!currentLecturer || !activeSemester) {
      showToast("Data dosen atau semester tidak ditemukan", "error");
      return;
    }

    // Check if availability for this day already exists
    const existingAvailability = currentAvailabilities.find(a => a.dayOfWeek === selectedDay);
    if (existingAvailability) {
      showToast("Jadwal untuk hari ini sudah ada. Hapus jadwal lama terlebih dahulu.", "warning");
      return;
    }

    createAvailability({
      lecturerId: currentLecturer.id,
      semesterId: activeSemester.id,
      dayOfWeek: selectedDay,
      timeSlots: selectedSlots,
      isActive: true,
    });

    showToast(`Jadwal untuk hari ${selectedDay} berhasil ditambahkan`, "success");
    setSelectedDay("");
    setSelectedSlots([]);
  };

  const handleDeleteAvailability = (id: string, day: string) => {
    if (confirm(`Hapus jadwal untuk hari ${day}?`)) {
      deleteAvailability(id);
      showToast("Jadwal berhasil dihapus", "success");
    }
  };

  if (!currentLecturer) {
    return (
      <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Data dosen tidak ditemukan</p>
        </div>
      </div>
    );
  }

  if (!activeSemester) {
    return (
      <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600">Tidak ada semester aktif saat ini</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link to="/dashboard" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali ke Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrasi Pengabdian ke Masyarakat (PKM)</h1>
          <p className="text-gray-600">
            Semester: <span className="font-medium">{activeSemester.name}</span> ({activeSemester.startDate} s/d {activeSemester.endDate})
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add New Availability */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Tambah Jadwal Baru
            </h2>

            {/* Select Day */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih Hari <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Pilih Hari --</option>
                {DAYS_OF_WEEK.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            {/* Select Time Slots */}
            {selectedDay && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Slot Waktu <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto p-2 border border-gray-200 rounded-md">
                  {TIME_SLOT_OPTIONS.map((slot, idx) => {
                    const isSelected = selectedSlots.some(
                      s => s.startTime === slot.startTime && s.endTime === slot.endTime
                    );
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleAddSlot(slot)}
                        className={`px-3 py-2 rounded-md text-sm font-medium border-2 transition-colors ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                        }`}
                      >
                        {slot.startTime} - {slot.endTime}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {selectedSlots.length} slot dipilih
                </p>
              </div>
            )}

            {/* Save Button */}
            <button
              onClick={handleSaveAvailability}
              disabled={!selectedDay || selectedSlots.length === 0}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Simpan Jadwal
            </button>
          </div>

          {/* Current Availability */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Jadwal Saat Ini
            </h2>

            {currentAvailabilities.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Clock className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm">Belum ada jadwal yang ditambahkan</p>
              </div>
            ) : (
              <div className="space-y-4">
                {DAYS_OF_WEEK.map(day => {
                  const availability = currentAvailabilities.find(a => a.dayOfWeek === day);
                  if (!availability) return null;

                  return (
                    <div key={availability.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{day}</h3>
                        <button
                          onClick={() => handleDeleteAvailability(availability.id, day)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {availability.timeSlots.map((slot, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-md border border-blue-200 flex items-center justify-center gap-1"
                          >
                            <Clock className="w-3 h-3" />
                            <span>{slot.startTime} - {slot.endTime}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {availability.timeSlots.length} slot tersedia
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Informasi Penting:</p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Jadwal yang Anda buat hanya berlaku untuk semester aktif ({activeSemester.name})</li>
                <li>Setelah semester berakhir, Anda perlu membuat jadwal baru untuk semester berikutnya</li>
                <li>Slot waktu yang sudah dibooking oleh mahasiswa/UMKM tidak dapat dihapus</li>
                <li>Pastikan jadwal Anda tidak bertabrakan dengan jadwal mengajar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}