import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Upload, Search, CheckCircle, Star, Clock, GraduationCap, Building2, Calendar } from "lucide-react";
import { useToast } from "../components/Toast";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "../components/Avatar";

// Mock lecturer data with detailed availability
const MOCK_LECTURERS = [
  {
    id: 1,
    name: "Dr. Budi Santoso, M.M.",
    photo: "",
    specialization: "Pengembangan Bisnis & Manajemen",
    university: "Universitas Indonesia",
    rating: 4.9,
    experience: "15 tahun",
    expertise: ["Business Strategy", "UMKM Development", "Marketing"],
    schedule: "Senin - Jumat, 09:00 - 17:00",
    // Detailed availability
    availableDays: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"], // Days of week
    workingHours: { start: 9, end: 17 } // 09:00 - 17:00
  },
  {
    id: 2,
    name: "Prof. Dr. Siti Nurhaliza, S.E., M.Sc.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    specialization: "Keuangan & Akuntansi",
    university: "Institut Teknologi Bandung",
    rating: 4.8,
    experience: "12 tahun",
    expertise: ["Financial Planning", "Accounting", "Tax Management"],
    schedule: "Senin - Kamis, 10:00 - 16:00",
    availableDays: ["Senin", "Selasa", "Rabu", "Kamis"],
    workingHours: { start: 10, end: 16 }
  },
  {
    id: 3,
    name: "Dr. Ahmad Rizki, M.T.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    specialization: "Teknologi & Digital Marketing",
    university: "Universitas Gadjah Mada",
    rating: 4.7,
    experience: "10 tahun",
    expertise: ["Digital Marketing", "E-Commerce", "Social Media"],
    schedule: "Selasa - Sabtu, 13:00 - 19:00",
    availableDays: ["Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    workingHours: { start: 13, end: 19 }
  },
  {
    id: 4,
    name: "Dr. Dewi Lestari, M.Pd.",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    specialization: "Pendidikan & Manajemen Sekolah",
    university: "Universitas Pendidikan Indonesia",
    rating: 4.9,
    experience: "18 tahun",
    expertise: ["Curriculum Development", "School Management", "Teaching Methods"],
    schedule: "Senin - Jumat, 08:00 - 15:00",
    availableDays: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
    workingHours: { start: 8, end: 15 }
  },
  {
    id: 5,
    name: "Dr. Ir. Joko Widodo, M.B.A.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    specialization: "Operasional & Manajemen Produksi",
    university: "Institut Pertanian Bogor",
    rating: 4.6,
    experience: "14 tahun",
    expertise: ["Operations Management", "Supply Chain", "Quality Control"],
    schedule: "Senin - Jumat, 09:00 - 16:00",
    availableDays: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
    workingHours: { start: 9, end: 16 }
  },
  {
    id: 6,
    name: "Dr. Rina Kartika, S.H., M.H.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    specialization: "Hukum & Legalitas Bisnis",
    university: "Universitas Airlangga",
    rating: 4.8,
    experience: "11 tahun",
    expertise: ["Business Law", "Legal Compliance", "Contract Management"],
    schedule: "Rabu - Sabtu, 10:00 - 17:00",
    availableDays: ["Rabu", "Kamis", "Jumat", "Sabtu"],
    workingHours: { start: 10, end: 17 }
  },
];

export function ConsultationFormPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { user } = useAuth();
  
  // Auto-set consultationType based on user role
  const getConsultationTypeFromRole = () => {
    if (user?.role === "UMKM") return "umkm";
    if (user?.role === "Guru" || user?.role === "Siswa") return "school";
    return "umkm"; // Default fallback
  };
  
  const [formData, setFormData] = useState({
    consultationType: getConsultationTypeFromRole(),
    title: "",
    category: "",
    priority: "medium",
    description: "",
    organization: "",
    contactPerson: "",
    phone: "",
    email: "",
  });

  // Lecturer selection state
  const [selectedLecturer, setSelectedLecturer] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterField, setFilterField] = useState("all");

  // Availability selection state
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Helper function to get consultation type label
  const getConsultationTypeLabel = () => {
    if (user?.role === "UMKM") return "Konsultasi UMKM";
    if (user?.role === "Guru" || user?.role === "Siswa") return "Konsultasi Sekolah";
    return "Konsultasi UMKM";
  };

  // Get filtered available dates based on selected lecturer's availability
  const getFilteredDates = () => {
    if (!selectedLecturer) return availableDates;
    
    const lecturer = MOCK_LECTURERS.find(l => l.id === selectedLecturer);
    if (!lecturer) return availableDates;
    
    // Filter dates to only show days when the lecturer is available
    return availableDates.filter(dateOption => 
      lecturer.availableDays.includes(dateOption.day)
    );
  };

  // Get filtered time slots based on selected lecturer's working hours
  const getFilteredTimeSlots = () => {
    if (!selectedLecturer) return availableTimeSlots;
    
    const lecturer = MOCK_LECTURERS.find(l => l.id === selectedLecturer);
    if (!lecturer) return availableTimeSlots;
    
    // Filter time slots to only show times within lecturer's working hours
    return availableTimeSlots.filter(slot => {
      const startHour = parseInt(slot.split(':')[0]);
      return startHour >= lecturer.workingHours.start && startHour < lecturer.workingHours.end;
    });
  };

  // Reset date and time when lecturer changes
  const handleLecturerChange = (lecturerId: number) => {
    setSelectedLecturer(lecturerId);
    setSelectedDate(null); // Reset date when lecturer changes
    setSelectedTime(null); // Reset time when lecturer changes
  };

  // Mock available dates (next 7 days)
  const availableDates = [
    { date: "2026-03-24", day: "Selasa", dayNum: "24", month: "Mar" },
    { date: "2026-03-25", day: "Rabu", dayNum: "25", month: "Mar" },
    { date: "2026-03-26", day: "Kamis", dayNum: "26", month: "Mar" },
    { date: "2026-03-27", day: "Jumat", dayNum: "27", month: "Mar" },
    { date: "2026-03-30", day: "Senin", dayNum: "30", month: "Mar" },
    { date: "2026-03-31", day: "Selasa", dayNum: "31", month: "Mar" },
    { date: "2026-04-01", day: "Rabu", dayNum: "01", month: "Apr" },
  ];

  // Mock available time slots
  const availableTimeSlots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
  ];

  // Filter lecturers based on search and field
  const filteredLecturers = MOCK_LECTURERS.filter(lecturer => {
    const matchesSearch = 
      lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = filterField === "all" || 
      lecturer.specialization.toLowerCase().includes(filterField.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate lecturer selection
    if (!selectedLecturer) {
      showToast("Silakan pilih dosen terlebih dahulu sebelum mengajukan konsultasi.", "warning");
      return;
    }
    
    // Validate form (all required fields are handled by HTML5 validation)
    
    // Save consultation (mock - in real app, this would be API call)
    // ... save logic here ...'
    
    const lecturer = MOCK_LECTURERS.find(l => l.id === selectedLecturer);
    
    // Show success toast notification
    showToast(`Konsultasi baru berhasil dibuat dengan ${lecturer?.name}! Permintaan Anda sedang menunggu persetujuan Dosen.`, "success");
    
    // Stay authenticated and redirect to Kelola Konsultasi page
    navigate("/consultation/manage");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link to="/dashboard" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali ke Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ajukan Konsultasi Baru</h1>
          <p className="text-gray-600">Isi formulir di bawah ini untuk mengajukan permintaan konsultasi</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Jenis Konsultasi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Informasi Konsultasi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <p className="text-xs text-gray-500 mt-1">Jenis konsultasi disesuaikan dengan role Anda</p>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Judul Konsultasi <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan judul konsultasi yang jelas dan deskriptif"
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                    Prioritas <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Rendah</option>
                    <option value="medium">Sedang</option>
                    <option value="high">Tinggi</option>
                    <option value="urgent">Mendesak</option>
                  </select>
                </div>
              </div>
            </div>

            {/* NEW SECTION - Rekomendasi Dosen (Between Section 1 and 2) */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 pb-2 border-b border-gray-200">
                Rekomendasi Dosen
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Pilih dosen yang sesuai dengan kebutuhan konsultasi Anda
              </p>

              {/* Search & Filter Bar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari nama dosen atau keahlian"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select
                    value={filterField}
                    onChange={(e) => setFilterField(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Semua Bidang/Jurusan</option>
                    <option value="bisnis">Pengembangan Bisnis</option>
                    <option value="keuangan">Keuangan & Akuntansi</option>
                    <option value="teknologi">Teknologi & Digital</option>
                    <option value="pendidikan">Pendidikan</option>
                    <option value="operasional">Operasional</option>
                    <option value="hukum">Hukum & Legalitas</option>
                  </select>
                </div>
              </div>

              {/* Lecturer Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {filteredLecturers.map((lecturer) => {
                  const isSelected = selectedLecturer === lecturer.id;
                  
                  return (
                    <div
                      key={lecturer.id}
                      className={`relative bg-white border-2 rounded-lg p-4 transition-all cursor-pointer hover:shadow-md ${
                        isSelected 
                          ? 'border-blue-500 shadow-md' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleLecturerChange(lecturer.id)}
                    >
                      {/* Selected Badge */}
                      {isSelected && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-blue-500 text-white rounded-full p-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                        </div>
                      )}

                      {/* Lecturer Info */}
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar
                          profilePictureUrl={undefined}
                          initials={lecturer.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                          size="lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-900 mb-1">
                            {lecturer.name}
                          </h3>
                          <p className="text-xs text-gray-600 mb-1">
                            {lecturer.specialization}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span>{lecturer.rating.toFixed(1)}</span>
                            </div>
                            <span>•</span>
                            <span>{lecturer.experience}</span>
                          </div>
                        </div>
                      </div>

                      {/* University */}
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                        <Building2 className="w-3 h-3" />
                        <span>{lecturer.university}</span>
                      </div>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {lecturer.expertise.slice(0, 3).map((exp, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>

                      {/* Schedule */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Clock className="w-3 h-3" />
                        <span>{lecturer.schedule}</span>
                      </div>

                      {/* Action Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLecturerChange(lecturer.id);
                        }}
                        className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
                          isSelected
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {isSelected ? (
                          <span className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Dosen Terpilih
                          </span>
                        ) : (
                          'Pilih Dosen'
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* No Results Message */}
              {filteredLecturers.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <GraduationCap className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm">Tidak ada dosen yang sesuai dengan pencarian</p>
                </div>
              )}

              {/* Selected Lecturer Summary */}
              {selectedLecturer && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        Dosen yang dipilih:
                      </p>
                      {(() => {
                        const lecturer = MOCK_LECTURERS.find(l => l.id === selectedLecturer);
                        return lecturer ? (
                          <div className="flex items-center gap-3">
                            <Avatar
                              profilePictureUrl={undefined}
                              initials={lecturer.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                              size="md"
                            />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{lecturer.name}</p>
                              <p className="text-xs text-gray-600">{lecturer.specialization}</p>
                              <p className="text-xs text-gray-500">{lecturer.university}</p>
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  </div>

                  {/* Availability Selection */}
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Pilih Jadwal Konsultasi
                    </h3>

                    {/* Available Dates - Horizontal Scroll */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Pilih Tanggal
                      </label>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {getFilteredDates().map((dateOption) => (
                          <button
                            key={dateOption.date}
                            type="button"
                            onClick={() => setSelectedDate(dateOption.date)}
                            className={`flex-shrink-0 px-4 py-3 rounded-lg border-2 transition-all ${
                              selectedDate === dateOption.date
                                ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                                : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                            }`}
                          >
                            <div className="text-center">
                              <p className="text-xs font-medium">{dateOption.day}</p>
                              <p className="text-lg font-bold">{dateOption.dayNum}</p>
                              <p className="text-xs">{dateOption.month}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Available Time Slots */}
                    {selectedDate && (
                      <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-2">
                          Pilih Waktu
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {getFilteredTimeSlots().map((timeSlot) => (
                            <button
                              key={timeSlot}
                              type="button"
                              onClick={() => setSelectedTime(timeSlot)}
                              className={`px-3 py-2 rounded-md text-sm font-medium border-2 transition-all ${
                                selectedTime === timeSlot
                                  ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                              }`}
                            >
                              {timeSlot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Open Calendar Button */}
                    <button
                      type="button"
                      className="w-full mt-2 px-4 py-2 border border-blue-400 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Buka Kalender
                    </button>

                    {/* Selected Schedule Summary */}
                    {selectedDate && selectedTime && (
                      <div className="mt-4 p-3 bg-white border border-blue-300 rounded-lg">
                        <p className="text-xs font-medium text-gray-700 mb-1">
                          Jadwal yang dipilih:
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold">
                            {availableDates.find(d => d.date === selectedDate)?.day},{' '}
                            {availableDates.find(d => d.date === selectedDate)?.dayNum}{' '}
                            {availableDates.find(d => d.date === selectedDate)?.month} 2026
                          </span>
                          <span>•</span>
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold">{selectedTime}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Section 2: Detail Konsultasi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Detail Konsultasi
              </h2>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
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

            {/* Section 3: Informasi Organisasi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Informasi Organisasi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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

            {/* Section 4: Lampiran */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Lampiran Dokumen
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">
                  <label htmlFor="file-upload" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    Klik untuk upload
                  </label>{" "}
                  atau drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF, DOC, XLS (max. 10MB)</p>
                <input id="file-upload" type="file" className="hidden" multiple />
              </div>
            </div>

            {/* Submit Buttons */}
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
                {selectedLecturer ? (
                  <>
                    Ajukan Konsultasi dengan{' '}
                    {MOCK_LECTURERS.find(l => l.id === selectedLecturer)?.name.split(',')[0]}
                  </>
                ) : (
                  'Ajukan Konsultasi'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}