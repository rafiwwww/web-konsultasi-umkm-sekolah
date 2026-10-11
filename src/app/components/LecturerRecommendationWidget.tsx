import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  Building2,
  GraduationCap,
  Clock,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  ChevronDown,
  ArrowLeft,
  BookOpen,
  Search,
  X as XIcon,
} from "lucide-react";
import { useConsultationSystem } from "../context/ConsultationSystemContext";
import { Avatar } from "./Avatar";
import { FACULTY_HIERARCHY } from "../data/facultyHierarchy";

// ─── Constants ───────────────────────────────────────────────────────────────

const CARDS_PER_PAGE = 4;
const DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const DAY_ORDER = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// ─── Component ───────────────────────────────────────────────────────────────

export function LecturerRecommendationWidget() {
  const navigate = useNavigate();
  const { lecturers, lecturerAvailabilities, studyPrograms, activeSemester } =
    useConsultationSystem();

  const [selectedFaculty, setSelectedFaculty] = useState<string>("");
  const [selectedProdi, setSelectedProdi] = useState<string>("");
  const [selectedPeminatan, setSelectedPeminatan] = useState<string>("");
  const [selectedLecturerId, setSelectedLecturerId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const todayDay = DAY_NAMES[new Date().getDay()];

  // Derived data from selections
  const facultyEntry = FACULTY_HIERARCHY.find((f) => f.name === selectedFaculty) ?? null;
  const prodiEntry = facultyEntry?.prodi.find((p) => p.name === selectedProdi) ?? null;
  const peminatanEntry = prodiEntry?.peminatan.find((pm) => pm.name === selectedPeminatan) ?? null;
  const activeKeywords = peminatanEntry?.keywords ?? null;

  // Search across all lecturers when query is active
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return lecturers.filter(l =>
      l.name.toLowerCase().includes(q) ||
      l.specialization.toLowerCase().includes(q) ||
      l.expertise.some(e => e.toLowerCase().includes(q)) ||
      l.university.toLowerCase().includes(q) ||
      (l.jurusan && l.jurusan.toLowerCase().includes(q))
    ).map(lecturer => {
      if (!activeSemester) return { lecturer, todaySlots: [], hasAnyAvailability: false };
      const todayAvail = lecturerAvailabilities.find(
        a => a.lecturerId === lecturer.id && a.semesterId === activeSemester.id && a.dayOfWeek === todayDay && a.isActive
      );
      const hasAnyAvailability = lecturerAvailabilities.some(
        a => a.lecturerId === lecturer.id && a.semesterId === activeSemester.id && a.isActive
      );
      return { lecturer, todaySlots: todayAvail?.timeSlots ?? [], hasAnyAvailability };
    });
  }, [searchQuery, lecturers, lecturerAvailabilities, activeSemester, todayDay]);

  const isSearchMode = searchQuery.trim().length > 0;
  const searchPage = 1; // search results use simple display without pagination for clarity

  // Available prodi and peminatan options for dropdowns
  const availableProdi = facultyEntry?.prodi ?? [];
  const availablePeminatan = prodiEntry?.peminatan ?? [];

  // Filter and annotate lecturers by active keywords
  const lecturersWithAvail = useMemo(() => {
    if (!activeKeywords) return [];
    const filtered = lecturers.filter((l) =>
      l.expertise.some((e) => activeKeywords.includes(e))
    );
    return filtered.map((lecturer) => {
      if (!activeSemester) {
        return { lecturer, todaySlots: [], hasAnyAvailability: false };
      }
      const todayAvail = lecturerAvailabilities.find(
        (a) =>
          a.lecturerId === lecturer.id &&
          a.semesterId === activeSemester.id &&
          a.dayOfWeek === todayDay &&
          a.isActive
      );
      const hasAnyAvailability = lecturerAvailabilities.some(
        (a) =>
          a.lecturerId === lecturer.id &&
          a.semesterId === activeSemester.id &&
          a.isActive
      );
      return { lecturer, todaySlots: todayAvail?.timeSlots ?? [], hasAnyAvailability };
    });
  }, [lecturers, lecturerAvailabilities, activeSemester, todayDay, activeKeywords]);

  const displayItems = isSearchMode ? (searchResults ?? []) : lecturersWithAvail;
  const totalPages = Math.ceil(displayItems.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const pageItems = displayItems.slice(startIndex, startIndex + CARDS_PER_PAGE);

  // Availability data for selected lecturer
  const selectedLecturer = lecturers.find((l) => l.id === selectedLecturerId) ?? null;
  const selectedLecturerAvailabilities = useMemo(() => {
    if (!selectedLecturerId || !activeSemester) return [];
    return lecturerAvailabilities
      .filter(
        (a) =>
          a.lecturerId === selectedLecturerId &&
          a.semesterId === activeSemester.id &&
          a.isActive
      )
      .sort(
        (a, b) =>
          DAY_ORDER.indexOf(a.dayOfWeek) - DAY_ORDER.indexOf(b.dayOfWeek)
      );
  }, [selectedLecturerId, lecturerAvailabilities, activeSemester]);

  // Handlers
  const handleFacultySelect = (name: string) => {
    if (name === selectedFaculty) return;
    setSelectedFaculty(name);
    setSelectedProdi("");
    setSelectedPeminatan("");
    setSelectedLecturerId(null);
    setCurrentPage(1);
  };

  const handleProdiChange = (name: string) => {
    setSelectedProdi(name);
    setSelectedPeminatan("");
    setSelectedLecturerId(null);
    setCurrentPage(1);
  };

  const handlePeminatanChange = (name: string) => {
    setSelectedPeminatan(name);
    setSelectedLecturerId(null);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
    setSelectedLecturerId(null);
  };

  const handleLecturerSelect = (id: string) => {
    setSelectedLecturerId(id);
  };

  const handleBackToList = () => {
    setSelectedLecturerId(null);
  };

  const handleStartConsultation = () => {
    if (selectedLecturerId) {
      navigate(`/consultation/new?lecturerId=${selectedLecturerId}`);
    }
  };

  const visiblePages = () => {
    const pages: number[] = [];
    const delta = 2;
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }
    return pages;
  };

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-8">
      {/* ── Header ── */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Rekomendasi Dosen</h2>
            <p className="text-sm text-gray-500 mt-1">
              Temukan dosen yang tepat untuk konsultasi Anda
            </p>
          </div>
          {/* Breadcrumb trail */}
          {!isSearchMode && selectedFaculty && (
            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 flex-wrap justify-end max-w-xs">
              <span className="text-blue-600 font-medium truncate max-w-[100px]" title={selectedFaculty}>
                {FACULTY_HIERARCHY.find((f) => f.name === selectedFaculty)?.shortName}
              </span>
              {selectedProdi && (
                <>
                  <span>›</span>
                  <span className="truncate max-w-[90px]">{selectedProdi}</span>
                </>
              )}
              {selectedPeminatan && (
                <>
                  <span>›</span>
                  <span className="truncate max-w-[90px]">{selectedPeminatan}</span>
                </>
              )}
            </div>
          )}
        </div>
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => handleSearchChange(e.target.value)}
            placeholder="Cari nama dosen, spesialisasi, atau keahlian..."
            className="w-full pl-9 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <XIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* ── SEARCH MODE: show results across all lecturers ── */}
        {isSearchMode && !selectedLecturerId && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Hasil Pencarian
              </p>
              <span className="text-xs text-gray-400">
                {(searchResults ?? []).length} dosen ditemukan
              </span>
            </div>
            {(searchResults ?? []).length === 0 ? (
              <div className="py-10 text-center">
                <Search className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                <p className="text-sm font-medium text-gray-600">Tidak ada dosen yang sesuai</p>
                <p className="text-xs text-gray-400 mt-1">Coba kata kunci lain atau gunakan filter di bawah</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {pageItems.map(({ lecturer, todaySlots, hasAnyAvailability }) => {
                  const studyProgram = studyPrograms.find(p => p.id === lecturer.studyProgramId);
                  const initials = lecturer.name.split(" ").slice(0, 2).map(n => n[0]).join("");
                  const isAvailableToday = todaySlots.length > 0;
                  return (
                    <div key={lecturer.id}
                      className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                      onClick={() => handleLecturerSelect(lecturer.id)}>
                      <div className="h-1.5 bg-blue-600 group-hover:bg-blue-700 transition-colors" />
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex flex-col items-center text-center mb-3">
                          <Avatar profilePictureUrl={lecturer.photo || undefined} initials={initials} size="lg" />
                          <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-tight">{lecturer.name}</h3>
                          <p className="text-xs text-blue-600 font-medium mt-0.5 leading-tight">{lecturer.specialization}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1 min-w-0">
                          <Building2 className="w-3 h-3 flex-shrink-0" /><span className="truncate">{lecturer.university}</span>
                        </div>
                        {studyProgram && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 min-w-0">
                            <GraduationCap className="w-3 h-3 flex-shrink-0" /><span className="truncate">{studyProgram.name}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {lecturer.expertise.slice(0, 2).map((exp, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">{exp}</span>
                          ))}
                        </div>
                        <div className="mt-auto">
                          {isAvailableToday ? (
                            <div className="flex items-center gap-1.5 mb-3">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                              <span className="text-xs font-medium text-green-700">Tersedia Hari Ini</span>
                            </div>
                          ) : hasAnyAvailability ? (
                            <div className="flex items-center gap-1.5 mb-3">
                              <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                              <span className="text-xs text-yellow-700">Tidak tersedia hari ini</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 mb-3">
                              <CalendarDays className="w-3 h-3 text-gray-400 flex-shrink-0" />
                              <span className="text-xs text-gray-400 italic">Jadwal belum tersedia</span>
                            </div>
                          )}
                          <button type="button" onClick={e => { e.stopPropagation(); handleLecturerSelect(lecturer.id); }}
                            className="w-full py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 transition-colors">
                            Lihat Jadwal & Konsultasi
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{startIndex + 1}–{Math.min(startIndex + CARDS_PER_PAGE, displayItems.length)} dari {displayItems.length} dosen</span>
                <div className="flex items-center gap-1">
                  <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
                    className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {visiblePages().map(page => (
                    <button key={page} onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 text-sm rounded-md transition-colors ${currentPage === page ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}>
                      {page}
                    </button>
                  ))}
                  <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                    className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── Hierarchy mode: Faculty/Prodi/Peminatan/Dosen selection ── */}
        {!isSearchMode && (
        <>
        <div className="mb-5">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            1 · Pilih Fakultas / School
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {FACULTY_HIERARCHY.map((faculty) => {
              const isSelected = selectedFaculty === faculty.name;
              return (
                <button
                  key={faculty.name}
                  type="button"
                  onClick={() => handleFacultySelect(faculty.name)}
                  className={`px-3 py-3 rounded-md text-left border-2 transition-all ${
                    isSelected
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`block text-xs font-bold mb-0.5 ${
                      isSelected ? "text-blue-700" : "text-gray-500"
                    }`}
                  >
                    {faculty.shortName}
                  </span>
                  <span
                    className={`block text-xs leading-tight ${
                      isSelected ? "text-blue-900 font-medium" : "text-gray-700"
                    }`}
                  >
                    {faculty.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── STEP 2 + 3: Prodi & Peminatan dropdowns ── */}
        {selectedFaculty && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {/* Prodi */}
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                2 · Program Studi (Prodi)
              </label>
              <div className="relative">
                <select
                  value={selectedProdi}
                  onChange={(e) => handleProdiChange(e.target.value)}
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">-- Pilih Program Studi --</option>
                  {availableProdi.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Peminatan */}
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                3 · Peminatan / Specialization
              </label>
              <div className="relative">
                <select
                  value={selectedPeminatan}
                  onChange={(e) => handlePeminatanChange(e.target.value)}
                  disabled={!selectedProdi}
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="">-- Pilih Peminatan --</option>
                  {availablePeminatan.map((pm) => (
                    <option key={pm.name} value={pm.name}>
                      {pm.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Prompt when nothing selected yet */}
        {!selectedFaculty && (
          <div className="py-8 text-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-lg">
            <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p>Pilih Fakultas / School untuk mulai menemukan dosen yang sesuai</p>
          </div>
        )}

        {/* Prompt when faculty selected but prodi not yet */}
        {selectedFaculty && !selectedProdi && (
          <div className="py-6 text-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-lg">
            <p>Pilih Program Studi untuk melanjutkan</p>
          </div>
        )}

        {/* Prompt when prodi selected but peminatan not yet */}
        {selectedProdi && !selectedPeminatan && (
          <div className="py-6 text-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-lg">
            <p>Pilih Peminatan untuk melihat dosen yang tersedia</p>
          </div>
        )}

        {/* ── STEP 4: Lecturer cards ── */}
        {selectedPeminatan && !selectedLecturerId && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                4 · Pilih Dosen
              </p>
              <span className="text-xs text-gray-400">
                {lecturersWithAvail.length} dosen ditemukan
              </span>
            </div>

            {lecturersWithAvail.length === 0 ? (
              <div className="py-10 text-center">
                <CalendarDays className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                <p className="text-sm font-medium text-gray-600">
                  Tidak ada dosen yang sesuai dengan kategori ini
                </p>
                <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                  Belum ada dosen yang terdaftar pada peminatan{" "}
                  <span className="font-medium">{selectedPeminatan}</span>. Silakan
                  pilih peminatan lain atau coba lagi nanti.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {pageItems.map(({ lecturer, todaySlots, hasAnyAvailability }) => {
                    const studyProgram = studyPrograms.find(
                      (p) => p.id === lecturer.studyProgramId
                    );
                    const initials = lecturer.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("");
                    const isAvailableToday = todaySlots.length > 0;

                    return (
                      <div
                        key={lecturer.id}
                        className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => handleLecturerSelect(lecturer.id)}
                      >
                        <div className="h-1.5 bg-blue-600 group-hover:bg-blue-700 transition-colors" />
                        <div className="p-4 flex flex-col flex-1">
                          {/* Avatar + name */}
                          <div className="flex flex-col items-center text-center mb-3">
                            <Avatar
                              profilePictureUrl={lecturer.photo || undefined}
                              initials={initials}
                              size="lg"
                            />
                            <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-tight">
                              {lecturer.name}
                            </h3>
                            <p className="text-xs text-blue-600 font-medium mt-0.5 leading-tight">
                              {lecturer.specialization}
                            </p>
                          </div>

                          {/* University */}
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1 min-w-0">
                            <Building2 className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{lecturer.university}</span>
                          </div>

                          {/* Study program */}
                          {studyProgram && (
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 min-w-0">
                              <GraduationCap className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{studyProgram.name}</span>
                            </div>
                          )}

                          {/* Expertise tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {lecturer.expertise.slice(0, 2).map((exp, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded"
                              >
                                {exp}
                              </span>
                            ))}
                          </div>

                          {/* Availability indicator */}
                          <div className="mt-auto">
                            {isAvailableToday ? (
                              <div className="mb-3">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                                  <span className="text-xs font-medium text-green-700">
                                    Tersedia Hari Ini
                                  </span>
                                </div>
                                <div className="flex flex-col gap-0.5 pl-3.5">
                                  {todaySlots.slice(0, 2).map((slot) => (
                                    <div
                                      key={slot.id}
                                      className="flex items-center gap-1 text-xs text-gray-600"
                                    >
                                      <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                      {slot.startTime} – {slot.endTime}
                                    </div>
                                  ))}
                                  {todaySlots.length > 2 && (
                                    <span className="text-xs text-gray-400 pl-4">
                                      +{todaySlots.length - 2} slot lagi
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : hasAnyAvailability ? (
                              <div className="flex items-center gap-1.5 mb-3">
                                <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                                <span className="text-xs text-yellow-700">
                                  Tidak tersedia hari ini
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 mb-3">
                                <CalendarDays className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                <span className="text-xs text-gray-400 italic">
                                  Jadwal belum tersedia
                                </span>
                              </div>
                            )}

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLecturerSelect(lecturer.id);
                              }}
                              className="w-full py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 transition-colors"
                            >
                              Lihat Jadwal & Konsultasi
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {startIndex + 1}–
                      {Math.min(startIndex + CARDS_PER_PAGE, lecturersWithAvail.length)} dari{" "}
                      {lecturersWithAvail.length} dosen
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      {visiblePages().map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 text-sm rounded-md transition-colors ${
                            currentPage === page
                              ? "bg-blue-600 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}

        </>
        )}

        {/* ── STEP 5: Availability panel ── */}
        {selectedLecturerId && selectedLecturer && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">
              5 · Jadwal Konsultasi Tersedia
            </p>

            {/* Lecturer summary row */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-5">
              <Avatar
                profilePictureUrl={selectedLecturer.photo || undefined}
                initials={selectedLecturer.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
                size="md"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 leading-tight">
                  {selectedLecturer.name}
                </p>
                <p className="text-xs text-blue-700 mt-0.5">{selectedLecturer.specialization}</p>
                <p className="text-xs text-gray-500 mt-0.5">{selectedLecturer.university}</p>
              </div>

            </div>

            {/* Availability grid */}
            {selectedLecturerAvailabilities.length === 0 ? (
              <div className="py-8 text-center border border-dashed border-gray-200 rounded-lg mb-5">
                <CalendarDays className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm text-gray-500">
                  Dosen ini belum mengatur jadwal konsultasi.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Anda tetap dapat mengajukan konsultasi dan menentukan waktu bersama dosen.
                </p>
              </div>
            ) : (
              <div className="mb-5">
                <p className="text-xs text-gray-500 mb-3">
                  Jadwal konsultasi yang tersedia untuk semester aktif:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedLecturerAvailabilities.map((avail) => (
                    <div
                      key={avail.id}
                      className="border border-gray-200 rounded-md p-3 bg-white"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarDays className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-semibold text-gray-900">
                          {avail.dayOfWeek}
                        </span>
                        {avail.dayOfWeek === todayDay && (
                          <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                            Hari Ini
                          </span>
                        )}
                      </div>
                      <div className="space-y-1 pl-6">
                        {avail.timeSlots.map((slot, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                            <span>
                              {slot.startTime} – {slot.endTime}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleBackToList}
                className="flex items-center gap-1.5 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Daftar
              </button>
              <button
                type="button"
                onClick={handleStartConsultation}
                className="flex-1 sm:flex-none px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Pilih Jadwal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
