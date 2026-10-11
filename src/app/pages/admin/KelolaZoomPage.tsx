import { useState, useMemo } from "react";
import {
  Video,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Activity,
  Link2,
  UserCog,
  ClipboardCheck,
  X,
  RefreshCw,
  Phone,
} from "lucide-react";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../components/Toast";

export function KelolaZoomPage() {
  const { user, users } = useAuth();
  const { showToast } = useToast();
  const {
    consultationSessions,
    consultationBookings,
    lecturers,
    confirmZoomMeeting,
    updateSessionZoomLink,
    setEvaluationLink,
    markSessionCompleted,
    changeLecturerForSession,
    activityLogs,
  } = useConsultationSystem();

  const [tab, setTab] = useState<"waiting" | "ready" | "completed" | "logs">("waiting");
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [zoomInputs, setZoomInputs] = useState<Record<string, { link: string; notes: string }>>({});
  const [evalInputs, setEvalInputs] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [changingDosenFor, setChangingDosenFor] = useState<string | null>(null);
  const [newDosenId, setNewDosenId] = useState("");
  const [confirmCompleteFor, setConfirmCompleteFor] = useState<string | null>(null);

  const waitingSessions = useMemo(
    () => consultationSessions.filter(s => s.status === "waiting_zoom").sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate)),
    [consultationSessions]
  );
  const readySessions = useMemo(
    () => consultationSessions.filter(s => s.status === "ready").sort((a, b) => new Date(b.confirmedAt || 0).getTime() - new Date(a.confirmedAt || 0).getTime()),
    [consultationSessions]
  );
  const completedSessions = useMemo(
    () => consultationSessions.filter(s => s.status === "completed").sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [consultationSessions]
  );

  const getZoomInput = (sessionId: string) => zoomInputs[sessionId] || { link: "", notes: "" };
  const setZoomLink = (sessionId: string, link: string) =>
    setZoomInputs(prev => ({ ...prev, [sessionId]: { ...getZoomInput(sessionId), link } }));
  const setZoomNotes = (sessionId: string, notes: string) =>
    setZoomInputs(prev => ({ ...prev, [sessionId]: { ...getZoomInput(sessionId), notes } }));
  const getEvalInput = (sessionId: string, session: typeof consultationSessions[0]) =>
    evalInputs[sessionId] ?? (session.evaluationLink || "");
  const setEvalInput = (sessionId: string, val: string) =>
    setEvalInputs(prev => ({ ...prev, [sessionId]: val }));

  const handleConfirm = async (sessionId: string) => {
    const input = getZoomInput(sessionId);
    if (!input.link.trim()) { showToast("Masukkan link Zoom meeting terlebih dahulu", "warning"); return; }
    setSubmitting(sessionId);
    await new Promise(r => setTimeout(r, 600));
    confirmZoomMeeting(sessionId, input.link.trim(), input.notes.trim(), user?.name || "Admin");
    setSubmitting(null);
    showToast("Zoom meeting berhasil dikonfirmasi. Semua peserta kini dapat melihat link meeting.", "success");
  };

  const handleUpdateLink = async (sessionId: string) => {
    const input = getZoomInput(sessionId);
    if (!input.link.trim()) { showToast("Masukkan link Zoom baru terlebih dahulu", "warning"); return; }
    setSubmitting(sessionId);
    await new Promise(r => setTimeout(r, 400));
    updateSessionZoomLink(sessionId, input.link.trim(), user?.name || "Admin");
    setSubmitting(null);
    showToast("Link Zoom berhasil diperbarui untuk semua peserta.", "success");
  };

  const handleSaveEvalLink = async (sessionId: string, session: typeof consultationSessions[0]) => {
    const link = getEvalInput(sessionId, session).trim();
    if (!link) { showToast("Masukkan URL form evaluasi terlebih dahulu", "warning"); return; }
    setSubmitting(sessionId + "_eval");
    await new Promise(r => setTimeout(r, 400));
    setEvaluationLink(sessionId, link, user?.name || "Admin");
    setSubmitting(null);
    showToast("Link form evaluasi berhasil disimpan. Peserta dapat melihat tombol evaluasi.", "success");
  };

  const handleMarkComplete = (sessionId: string) => {
    markSessionCompleted(sessionId, user?.name || "Admin");
    setConfirmCompleteFor(null);
    showToast("Sesi berhasil ditandai selesai. Peserta dapat memberikan evaluasi.", "success");
  };

  const handleChangeDosen = () => {
    if (!changingDosenFor || !newDosenId) { showToast("Pilih dosen terlebih dahulu", "warning"); return; }
    const newLecturer = lecturers.find(l => l.id === newDosenId);
    if (!newLecturer) return;
    changeLecturerForSession(changingDosenFor, newDosenId, newLecturer.name, user?.name || "Admin");
    setChangingDosenFor(null);
    setNewDosenId("");
    showToast(`Dosen berhasil diganti ke ${newLecturer.name}. Semua peserta sesi diperbarui.`, "success");
  };

  const getBookingsForSession = (bookingIds: string[]) =>
    consultationBookings.filter(b => bookingIds.includes(b.id));

  const getRoleColor = (role: string) => {
    if (role === "UMKM") return "bg-orange-100 text-orange-700";
    if (role === "Siswa") return "bg-green-100 text-green-700";
    if (role === "Guru") return "bg-purple-100 text-purple-700";
    return "bg-gray-100 text-gray-700";
  };

  const renderSessionCard = (session: typeof consultationSessions[0], mode: "waiting" | "ready" | "completed") => {
    const bookings = getBookingsForSession(session.bookingIds);
    const isExpanded = expandedSession === session.id;
    const input = getZoomInput(session.id);
    const isSubmitting = submitting === session.id;
    const isEvalSubmitting = submitting === session.id + "_eval";
    const evalVal = getEvalInput(session.id, session);

    return (
      <div key={session.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-base font-semibold text-gray-900">{session.lecturerName}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  mode === "ready" ? "bg-blue-100 text-blue-700" :
                  mode === "completed" ? "bg-green-100 text-green-700" :
                  "bg-orange-100 text-orange-700"
                }`}>
                  {mode === "ready" ? "Siap Konsultasi" : mode === "completed" ? "Selesai" : "Menunggu Zoom"}
                </span>
                <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  <Users className="w-3 h-3" />
                  {bookings.length} peserta
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{session.scheduledDay}, {new Date(session.scheduledDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{session.scheduledTimeSlot.startTime} – {session.scheduledTimeSlot.endTime}</span>
                </div>
              </div>
              {(mode === "ready" || mode === "completed") && session.zoomLink && (
                <div className="mt-2 flex items-center gap-2">
                  <a href={session.zoomLink} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 underline truncate max-w-xs">
                    {session.zoomLink}
                  </a>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                </div>
              )}
              {mode === "completed" && session.evaluationLink && (
                <div className="mt-1 flex items-center gap-1.5 text-xs text-green-600">
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  <span>Form evaluasi tersedia</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 ml-4 flex-shrink-0">
              {mode !== "completed" && (
                <button onClick={() => { setChangingDosenFor(session.id); setNewDosenId(""); }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                  <UserCog className="w-3.5 h-3.5" />
                  Ganti Dosen
                </button>
              )}
              <button onClick={() => setExpandedSession(isExpanded ? null : session.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                {isExpanded ? <><ChevronUp className="w-4 h-4" />Tutup</> : <><ChevronDown className="w-4 h-4" />Detail</>}
              </button>
            </div>
          </div>

          {/* Waiting: zoom input */}
          {mode === "waiting" && (
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zoom Meeting Link <span className="text-red-500">*</span>
                </label>
                <input type="url" value={input.link} onChange={e => setZoomLink(session.id, e.target.value)}
                  placeholder="https://zoom.us/j/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Catatan untuk Peserta (Opsional)</label>
                <textarea value={input.notes} onChange={e => setZoomNotes(session.id, e.target.value)}
                  placeholder="Contoh: Harap bergabung 5 menit sebelum sesi dimulai..." rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <button onClick={() => handleConfirm(session.id)} disabled={isSubmitting}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50">
                {isSubmitting ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                Konfirmasi Meeting
              </button>
            </div>
          )}

          {/* Ready: update zoom + eval link + mark complete */}
          {mode === "ready" && isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Perbarui Zoom Link</p>
                <div className="flex gap-2">
                  <input type="url" value={input.link} onChange={e => setZoomLink(session.id, e.target.value)}
                    placeholder="Link Zoom baru..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                  <button onClick={() => handleUpdateLink(session.id)} disabled={isSubmitting}
                    className="flex items-center gap-1.5 px-3 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition-colors disabled:opacity-50 flex-shrink-0">
                    {isSubmitting ? <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Video className="w-3.5 h-3.5" />}
                    Update
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
                  <Link2 className="w-4 h-4 text-purple-600" />
                  Link Form Evaluasi
                </p>
                <p className="text-xs text-gray-500 mb-2">Peserta akan melihat tombol evaluasi setelah sesi selesai.</p>
                <div className="flex gap-2">
                  <input type="url" value={evalVal} onChange={e => setEvalInput(session.id, e.target.value)}
                    placeholder="https://forms.microsoft.com/..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" />
                  <button onClick={() => handleSaveEvalLink(session.id, session)} disabled={isEvalSubmitting}
                    className="flex items-center gap-1.5 px-3 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 flex-shrink-0">
                    {isEvalSubmitting ? <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Link2 className="w-3.5 h-3.5" />}
                    {session.evaluationLink ? "Update" : "Simpan"}
                  </button>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <button onClick={() => setConfirmCompleteFor(session.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  Tandai Sesi Selesai
                </button>
                <p className="text-xs text-gray-400 mt-1.5">Menandai sesi selesai akan memperbarui status semua peserta.</p>
              </div>
            </div>
          )}

          {/* Completed: update eval link only */}
          {mode === "completed" && isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
                <Link2 className="w-4 h-4 text-purple-600" />
                {session.evaluationLink ? "Perbarui" : "Tambahkan"} Link Form Evaluasi
              </p>
              <div className="flex gap-2">
                <input type="url" value={evalVal} onChange={e => setEvalInput(session.id, e.target.value)}
                  placeholder="https://forms.microsoft.com/..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" />
                <button onClick={() => handleSaveEvalLink(session.id, session)} disabled={isEvalSubmitting}
                  className="flex items-center gap-1.5 px-3 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 flex-shrink-0">
                  {isEvalSubmitting ? <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Link2 className="w-3.5 h-3.5" />}
                  {session.evaluationLink ? "Update" : "Simpan"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Participant list */}
        {isExpanded && (
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="p-4">
              <p className="text-sm font-medium text-gray-700 mb-3">Daftar Peserta ({bookings.length})</p>
              <div className="space-y-2">
                {bookings.map(b => {
                  const participantUser = users.find(u => u.id === b.userId);
                  const phone = participantUser?.phone || b.phone || "-";
                  return (
                    <div key={b.id} className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-2.5">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-medium text-gray-900 truncate">{b.userName}</span>
                          <span className={`px-1.5 py-0.5 text-xs rounded-full flex-shrink-0 ${getRoleColor(b.userRole)}`}>{b.userRole}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{b.title}</p>
                        <p className="text-xs text-gray-400">{b.organization}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{phone}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const changingSession = changingDosenFor ? consultationSessions.find(s => s.id === changingDosenFor) : null;

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kelola Konsultasi</h1>
          <p className="text-gray-600">Buat dan distribusikan link Zoom meeting untuk setiap sesi konsultasi</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Menunggu Zoom</p>
            <p className="text-2xl font-bold text-orange-600">{waitingSessions.length}</p>
            <p className="text-xs text-gray-400 mt-1">Sesi belum ada link</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Siap Konsultasi</p>
            <p className="text-2xl font-bold text-blue-600">{readySessions.length}</p>
            <p className="text-xs text-gray-400 mt-1">Link sudah terdistribusi</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Selesai</p>
            <p className="text-2xl font-bold text-green-600">{completedSessions.length}</p>
            <p className="text-xs text-gray-400 mt-1">Sesi telah selesai</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Peserta Menunggu</p>
            <p className="text-2xl font-bold text-gray-900">
              {waitingSessions.reduce((sum, s) => sum + s.bookingIds.length, 0)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Dari semua sesi tertunda</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {(["waiting", "ready", "completed", "logs"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                tab === t ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}>
              {t === "waiting" ? "Menunggu Zoom" : t === "ready" ? "Siap Konsultasi" : t === "completed" ? "Selesai" : "Log Aktivitas"}
              {t === "waiting" && waitingSessions.length > 0 && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full">{waitingSessions.length}</span>
              )}
            </button>
          ))}
        </div>

        {tab === "waiting" && (
          <div className="space-y-4">
            {waitingSessions.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <p className="text-gray-500 font-medium">Semua sesi sudah memiliki Zoom meeting!</p>
                <p className="text-sm text-gray-400 mt-2">Tidak ada konsultasi yang menunggu pembuatan link Zoom.</p>
              </div>
            ) : waitingSessions.map(s => renderSessionCard(s, "waiting"))}
          </div>
        )}

        {tab === "ready" && (
          <div className="space-y-4">
            {readySessions.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Video className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Belum ada sesi yang dikonfirmasi</p>
              </div>
            ) : readySessions.map(s => renderSessionCard(s, "ready"))}
          </div>
        )}

        {tab === "completed" && (
          <div className="space-y-4">
            {completedSessions.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Belum ada sesi yang selesai</p>
              </div>
            ) : completedSessions.map(s => renderSessionCard(s, "completed"))}
          </div>
        )}

        {tab === "logs" && (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">Log Aktivitas Sistem</h2>
            </div>
            {activityLogs.length === 0 ? (
              <div className="p-12 text-center">
                <Activity className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Belum ada aktivitas yang tercatat</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {activityLogs.map(log => (
                  <div key={log.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">{log.description}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>Oleh: <span className="font-medium">{log.performedBy}</span></span>
                          <span>({log.performedByRole})</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0 ml-4">
                        {new Date(log.timestamp).toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Change Dosen Modal */}
      {changingDosenFor && changingSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                <UserCog className="w-5 h-5 text-blue-600" />
                Ganti Dosen
              </h3>
              <button onClick={() => { setChangingDosenFor(null); setNewDosenId(""); }}
                className="p-1 text-gray-400 hover:text-gray-600 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded-lg text-sm">
              <p className="text-gray-500 text-xs mb-1">Sesi saat ini</p>
              <p className="font-medium text-gray-800">{changingSession.lecturerName}</p>
              <p className="text-xs text-gray-500">
                {changingSession.scheduledDay}, {new Date(changingSession.scheduledDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} · {changingSession.scheduledTimeSlot.startTime}–{changingSession.scheduledTimeSlot.endTime}
              </p>
              <p className="text-xs text-gray-500">{changingSession.bookingIds.length} peserta akan diperbarui</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih Dosen Pengganti <span className="text-red-500">*</span>
              </label>
              <select value={newDosenId} onChange={e => setNewDosenId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                <option value="">— Pilih Dosen —</option>
                {lecturers.filter(l => l.id !== changingSession.lecturerId).map(l => (
                  <option key={l.id} value={l.id}>{l.name} — {l.specialization}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setChangingDosenFor(null); setNewDosenId(""); }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm transition-colors">
                Batal
              </button>
              <button onClick={handleChangeDosen} disabled={!newDosenId}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition-colors disabled:opacity-50">
                <RefreshCw className="w-4 h-4" />
                Konfirmasi Ganti Dosen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Complete Modal */}
      {confirmCompleteFor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2">Tandai Sesi Selesai?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Semua peserta yang terdaftar pada sesi ini akan diperbarui statusnya menjadi "Selesai" dan dapat memberikan evaluasi konsultasi.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmCompleteFor(null)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm transition-colors">
                Batal
              </button>
              <button onClick={() => handleMarkComplete(confirmCompleteFor)}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm transition-colors">
                Ya, Tandai Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
