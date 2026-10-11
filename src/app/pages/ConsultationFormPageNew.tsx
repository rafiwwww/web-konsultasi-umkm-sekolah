import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import {
  ArrowLeft,
  Upload,
  Search,
  CheckCircle,
  Clock,
  GraduationCap,
  Building2,
  Calendar,
  RefreshCw,
  FileText,
  X as XIcon,
  AlertCircle,
} from "lucide-react";
import { useToast } from "../components/Toast";
import { useAuth } from "../context/AuthContext";
import { useConsultationSystem, TimeSlot } from "../context/ConsultationSystemContext";
import { Avatar } from "../components/Avatar";

export function ConsultationFormPageNew() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedLecturerId = searchParams.get("lecturerId");

  const { showToast } = useToast();
  const { user } = useAuth();
  const {
    lecturers,
    studyPrograms,
    activeSemester,
    lecturerAvailabilities,
    createBooking,
    getAvailableSlotsForDate,
    getSlotQuotaInfo,
    getBookingsByUser,
  } = useConsultationSystem();

  // Auto-set consultationType based on user role
  const getConsultationTypeFromRole = () => {
    if (user?.role === "UMKM") return "umkm";
    if (user?.role === "Guru" || user?.role === "Siswa") return "school";
    return "umkm";
  };

  const [formData, setFormData] = useState({
    consultationType: getConsultationTypeFromRole(),
    title: "",
    category: "",
    description: "",
    organization: "",
    contactPerson: "",
    phone: "",
    email: "",
  });

  // Auto-fill organization info from user profile
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        organization: user.businessName || user.schoolName || user.organization || "",
        contactPerson: user.name || "",
        phone: user.phone || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  // Lecturer selection — pre-populate from URL param
  const [selectedLecturerId, setSelectedLecturerId] = useState<string | null>(
    preselectedLecturerId
  );


  // Attachment
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [attachedDataUrl, setAttachedDataUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ALLOWED_MIME = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!ALLOWED_MIME.includes(file.type)) {
      showToast("Format tidak didukung. Gunakan PDF, DOC/DOCX, atau XLS/XLSX.", "warning");
      e.target.value = "";
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast("Ukuran file melebihi batas 10 MB.", "warning");
      e.target.value = "";
      return;
    }
    setAttachedFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setAttachedDataUrl(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    setAttachedDataUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Availability selection
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [availableDates, setAvailableDates] = useState<
    { date: string; day: string; dayNum: string; month: string }[]
  >([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);

  const getConsultationTypeLabel = () => {
    if (user?.role === "UMKM") return "Konsultasi UMKM";
    if (user?.role === "Guru" || user?.role === "Siswa") return "Konsultasi Sekolah";
    return "Konsultasi UMKM";
  };

  // Generate available dates from lecturer's real schedule
  useEffect(() => {
    if (!selectedLecturerId || !activeSemester) {
      setAvailableDates([]);
      return;
    }

    const lecturerAvails = lecturerAvailabilities.filter(
      (a) =>
        a.lecturerId === selectedLecturerId &&
        a.semesterId === activeSemester.id &&
        a.isActive
    );

    if (lecturerAvails.length === 0) {
      setAvailableDates([]);
      return;
    }

    const availableDayNames = lecturerAvails.map((a) => a.dayOfWeek);
    const dates: { date: string; day: string; dayNum: string; month: string }[] = [];
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthNames = [
      "Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des",
    ];

    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dayName = dayNames[date.getDay()];
      if (availableDayNames.includes(dayName)) {
        dates.push({
          date: date.toISOString().split("T")[0],
          day: dayName,
          dayNum: String(date.getDate()).padStart(2, "0"),
          month: monthNames[date.getMonth()],
        });
      }
    }

    setAvailableDates(dates);
  }, [selectedLecturerId, lecturerAvailabilities, activeSemester]);

  // Update time slots when date changes
  useEffect(() => {
    if (!selectedLecturerId || !selectedDate) {
      setAvailableTimeSlots([]);
      return;
    }
    const slots = getAvailableSlotsForDate(selectedLecturerId, selectedDate);
    setAvailableTimeSlots(slots);
  }, [selectedLecturerId, selectedDate, getAvailableSlotsForDate]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedLecturerId) {
      showToast("Silakan pilih dosen terlebih dahulu sebelum mengajukan konsultasi.", "warning");
      return;
    }
    if (!selectedDate || !selectedTimeSlot) {
      showToast("Silakan pilih jadwal konsultasi terlebih dahulu.", "warning");
      return;
    }
    if (!activeSemester || !user) {
      showToast("Data tidak valid. Silakan coba lagi.", "error");
      return;
    }

    const lecturer = lecturers.find((l) => l.id === selectedLecturerId);
    if (!lecturer) {
      showToast("Data dosen tidak ditemukan.", "error");
      return;
    }

    // ── Conflict check: user must not have overlapping booking at same time ──
    const userId = user.id || `user-${Date.now()}`;
    const userBookings = getBookingsByUser(userId);
    const activeStatuses = ["pending", "waiting_zoom", "scheduled", "accepted", "rescheduled"];
    const conflicting = userBookings.find((b) => {
      if (!activeStatuses.includes(b.status)) return false;
      if (b.scheduledDate !== selectedDate) return false;
      // Time overlap: A.start < B.end && B.start < A.end
      return (
        b.scheduledTimeSlot.startTime < selectedTimeSlot.endTime &&
        selectedTimeSlot.startTime < b.scheduledTimeSlot.endTime
      );
    });
    if (conflicting) {
      showToast(
        `Anda sudah memiliki jadwal konsultasi pada waktu tersebut (${conflicting.scheduledTimeSlot.startTime}–${conflicting.scheduledTimeSlot.endTime} dengan ${conflicting.lecturerName}). Silakan pilih waktu lain.`,
        "warning"
      );
      return;
    }

    const dateObj = new Date(selectedDate);
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const scheduledDay = dayNames[dateObj.getDay()];

    createBooking({
      userId,
      userName: user.name || "User",
      userRole: user.role || "UMKM",
      lecturerId: selectedLecturerId,
      lecturerName: lecturer.name,
      semesterId: activeSemester.id,
      consultationType: formData.consultationType === "umkm" ? "umkm" : "school",
      title: formData.title,
      category: formData.category,
      priority: "medium",
      description: formData.description,
      organization: formData.organization,
      contactPerson: formData.contactPerson,
      phone: formData.phone,
      email: formData.email,
      scheduledDate: selectedDate,
      scheduledDay,
      scheduledTimeSlot: selectedTimeSlot,
      status: "pending",
      attachmentFileName: attachedFile?.name,
      attachmentDataUrl: attachedDataUrl || undefined,
    });

    showToast(
      `Konsultasi baru berhasil dibuat dengan ${lecturer.name}! Permintaan Anda sedang menunggu persetujuan Dosen.`,
      "success"
    );
    navigate("/consultation/manage");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedLecturer = lecturers.find((l) => l.id === selectedLecturerId);

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali ke Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ajukan Konsultasi Baru</h1>
          <p className="text-gray-600">
            Isi formulir di bawah ini untuk mengajukan permintaan konsultasi
          </p>
          {activeSemester && (
            <p className="text-sm text-gray-500 mt-1">Semester: {activeSemester.name}</p>
          )}
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Informasi Konsultasi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Informasi Konsultasi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="consultationType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Jenis Konsultasi <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="consultationType"
                    name="consultationType"
                    type="text"
                    required
                    value={getConsultationTypeLabel()}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Jenis konsultasi disesuaikan dengan role Anda
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Kategori <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih kategori</option>
                    {formData.consultationType === "umkm" ? (
                      <>
                        <option value="business-dev">Pengembangan Bisnis</option>
                        <option value="finance">Keuangan</option>
                        <option value="marketing">Pemasaran</option>
                        <option value="product">Pengembangan Produk</option>
                        <option value="legal">Legalitas</option>
                      </>
                    ) : (
                      <>
                        <option value="curriculum">Kurikulum</option>
                        <option value="management">Manajemen Sekolah</option>
                        <option value="accreditation">Akreditasi</option>
                        <option value="teaching">Metode Pembelajaran</option>
                        <option value="facility">Sarana & Prasarana</option>
                      </>
                    )}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Topik Konsultasi <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan topik konsultasi yang jelas dan deskriptif"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Dosen Terpilih */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Dosen Konsultasi
              </h2>
              {selectedLecturer ? (
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Avatar
                    profilePictureUrl={selectedLecturer.photo || undefined}
                    initials={selectedLecturer.name.split(" ").slice(0, 2).map((n: string) => n[0]).join("")}
                    size="md"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{selectedLecturer.name}</p>
                    <p className="text-sm text-blue-700">{selectedLecturer.specialization}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3" />{selectedLecturer.university}
                    </p>
                  </div>
                  <Link
                    to="/dashboard"
                    className="text-xs text-blue-600 hover:text-blue-800 underline flex-shrink-0"
                  >
                    Ganti Dosen
                  </Link>
                </div>
              ) : (
                <div className="py-10 text-center border-2 border-dashed border-gray-200 rounded-lg">
                  <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm font-medium text-gray-700 mb-1">Belum ada dosen yang dipilih</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Silakan pilih Dosen terlebih dahulu melalui Dashboard untuk melanjutkan konsultasi.
                  </p>
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Pilih Dosen di Dashboard
                  </Link>
                </div>
              )}
            </div>

            {/* Section 2b: Jadwal Konsultasi */}
            {selectedLecturer && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Jadwal Konsultasi
                </h2>

                {availableDates.length === 0 ? (
                  <div className="py-8 text-center border border-gray-200 rounded-lg bg-gray-50">
                    <Calendar className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm font-medium text-gray-600">Belum ada jadwal tersedia</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Dosen ini belum mendaftarkan jadwal konsultasi untuk 14 hari ke depan.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Date selection */}
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Konsultasi <span className="text-red-500">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableDates.map(({ date, day, dayNum, month }) => {
                          const isSelected = selectedDate === date;
                          return (
                            <button
                              key={date}
                              type="button"
                              onClick={() => {
                                setSelectedDate(date);
                                setSelectedTimeSlot(null);
                              }}
                              className={`flex flex-col items-center px-4 py-2.5 rounded-lg border-2 transition-all min-w-[72px] ${
                                isSelected
                                  ? "border-blue-600 bg-blue-600 text-white"
                                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                              }`}
                            >
                              <span className={`text-xs font-medium ${isSelected ? "text-blue-100" : "text-gray-500"}`}>{day}</span>
                              <span className="text-xl font-bold leading-tight">{dayNum}</span>
                              <span className={`text-xs ${isSelected ? "text-blue-100" : "text-gray-500"}`}>{month}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slot selection */}
                    {selectedDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Waktu Konsultasi <span className="text-red-500">*</span>
                        </label>
                        {availableTimeSlots.length === 0 ? (
                          <div className="py-5 text-center border border-gray-200 rounded-lg bg-gray-50">
                            <Clock className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                            <p className="text-sm text-gray-500">Semua slot penuh untuk tanggal ini.</p>
                            <p className="text-xs text-gray-400 mt-1">Pilih tanggal lain.</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {availableTimeSlots.map((slot) => {
                              const { accepted, remaining, isFull } = getSlotQuotaInfo(
                                selectedLecturerId!,
                                selectedDate,
                                slot.startTime,
                                slot.endTime
                              );
                              const isSelected =
                                selectedTimeSlot?.startTime === slot.startTime &&
                                selectedTimeSlot?.endTime === slot.endTime;
                              return (
                                <button
                                  key={`${slot.startTime}-${slot.endTime}`}
                                  type="button"
                                  disabled={isFull}
                                  onClick={() => setSelectedTimeSlot(slot)}
                                  className={`flex items-center justify-between px-4 py-3 rounded-lg border-2 transition-all text-left ${
                                    isFull
                                      ? "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
                                      : isSelected
                                      ? "border-blue-600 bg-blue-50 text-blue-900"
                                      : "border-gray-200 bg-white text-gray-800 hover:border-blue-300 hover:bg-blue-50"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <Clock className={`w-4 h-4 flex-shrink-0 ${isFull ? "text-gray-300" : isSelected ? "text-blue-600" : "text-gray-400"}`} />
                                    <span className="text-sm font-medium">
                                      {slot.startTime} – {slot.endTime}
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    {isFull ? (
                                      <span className="text-xs font-semibold text-red-400">Penuh</span>
                                    ) : (
                                      <>
                                        <span className={`text-xs font-semibold ${remaining <= 3 ? "text-orange-600" : "text-green-600"}`}>
                                          {remaining} sisa
                                        </span>
                                        <div className={`text-xs mt-0.5 ${isSelected ? "text-blue-500" : "text-gray-400"}`}>
                                          {accepted}/15 terisi
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Section 3: Detail Konsultasi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Detail Konsultasi
              </h2>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Deskripsi Masalah / Kebutuhan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Jelaskan secara detail masalah atau kebutuhan konsultasi Anda..."
                />
                <p className="text-xs text-gray-500 mt-1">Minimal 50 karakter</p>
              </div>
            </div>

            {/* Section 4: Informasi Organisasi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Informasi Organisasi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama UMKM / Sekolah <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nama organisasi"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactPerson"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama Penanggung Jawab <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nama lengkap"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Lampiran */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Lampiran Dokumen <span className="text-sm font-normal text-gray-500">(Opsional)</span>
              </h2>

              {/* Uploaded file preview */}
              {attachedFile ? (
                <div className="flex items-center justify-between gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{attachedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(attachedFile.size / 1024).toFixed(0)} KB · Berhasil dilampirkan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-xs px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Ganti
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Hapus lampiran"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">Klik untuk upload</span>{" "}
                    atau drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOC/DOCX, XLS/XLSX — maks. 10 MB</p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                className="hidden"
                onChange={handleFileChange}
              />

              <div className="mt-2 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-500">
                  Dokumen ini akan tersedia bagi Dosen sebelum mereka memutuskan untuk menerima atau menjadwalkan ulang permintaan konsultasi Anda.
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
              <Link
                to="/dashboard"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Batal
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {selectedLecturer
                  ? `Ajukan Konsultasi dengan ${selectedLecturer.name.split(",")[0]}`
                  : "Ajukan Konsultasi"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
