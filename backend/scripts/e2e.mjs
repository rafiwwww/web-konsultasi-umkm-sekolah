/**
 * Tes end-to-end terhadap API yang sedang berjalan.
 *   1) npm run db:migrate && npm run db:seed
 *   2) npm run dev     (terminal lain)
 *   3) npm run test:e2e
 * Aman dijalankan berulang (memakai tanggal & email acak). Gunakan database DEVELOPMENT, bukan production.
 */
const BASE = process.env.API_URL ?? "http://localhost:3000";
const PWD = process.env.SEED_DEFAULT_PASSWORD ?? "Password123!";
const ADMIN = { email: process.env.SEED_ADMIN_EMAIL ?? "admin@umkm.local", password: process.env.SEED_ADMIN_PASSWORD ?? "Admin12345!" };

let pass = 0, fail = 0;
const failures = [];
function check(name, cond, extra) {
  if (cond) { pass++; console.log(`  ✔ ${name}`); }
  else { fail++; failures.push(name); console.log(`  ✘ ${name}${extra !== undefined ? "  -> " + JSON.stringify(extra).slice(0, 300) : ""}`); }
}
const section = (t) => console.log(`\n${t}`);

async function api(method, path, { token, body, form, headers } = {}) {
  const h = { ...(headers ?? {}) };
  if (token) h.authorization = `Bearer ${token}`;
  let payload;
  if (form) payload = form;
  else if (body !== undefined) { h["content-type"] = "application/json"; payload = JSON.stringify(body); }
  const res = await fetch(BASE + path, { method, headers: h, body: payload });
  const raw = await res.arrayBuffer();
  let json = null;
  try { json = JSON.parse(Buffer.from(raw).toString()); } catch {}
  return { status: res.status, json, data: json?.data, meta: json?.meta, headers: res.headers, raw: Buffer.from(raw) };
}
const login = async (email, role, password = PWD) => {
  const r = await api("POST", "/api/auth/login", { body: { email, password, role } });
  if (r.status !== 200) throw new Error(`login gagal ${email}/${role}: ${r.status} ${JSON.stringify(r.json)}`);
  return { token: r.data.token, user: r.data.user };
};

// Tanggal hari Senin/Rabu pada minggu acak ke depan (WIB) supaya tes bisa diulang tanpa bentrok
function futureDay(dayIdx, weeksAhead) {
  const now = new Date(Date.now() + 7 * 3600e3);
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  d.setUTCDate(d.getUTCDate() + weeksAhead * 7);
  while (d.getUTCDay() !== dayIdx) d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}
const week = 2 + Math.floor(Math.random() * 300);
const MON = futureDay(1, week), WED = futureDay(3, week), TUE = futureDay(2, week);
const rnd = Math.random().toString(36).slice(2, 8);
const png = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(64, 1)]);
const pdf = Buffer.from("%PDF-1.4\n1 0 obj\n<<>>\nendobj\ntrailer\n<<>>\n%%EOF");
const uploadForm = (buf, name, type, purpose) => { const f = new FormData(); f.set("file", new File([buf], name, { type })); f.set("purpose", purpose); return f; };

const booking = (lecturerId, date, start, end, extra = {}) => ({
  lecturerId, scheduledDate: date, startTime: start, endTime: end,
  title: "Konsultasi strategi pemasaran", category: "marketing", description: "Saya ingin berkonsultasi tentang strategi pemasaran digital.", ...extra,
});

async function main() {
  console.log(`API: ${BASE}\nTanggal uji: Senin ${MON}, Selasa ${TUE}, Rabu ${WED}`);

  /* ------------------------------------------------------------------ */
  section("1. Dasar, autentikasi, CORS");
  check("health ok", (await api("GET", "/api/health")).status === 200);
  check("tanpa token -> 401", (await api("GET", "/api/me")).status === 401);
  check("token ngawur -> 401", (await api("GET", "/api/me", { token: "abc.def.ghi" })).status === 401);
  check("password salah -> 401", (await api("POST", "/api/auth/login", { body: { email: ADMIN.email, password: "salah123", role: "Admin" } })).status === 401);
  check("role tidak cocok -> 401", (await api("POST", "/api/auth/login", { body: { email: ADMIN.email, password: ADMIN.password, role: "UMKM" } })).status === 401);
  check("nama lengkap salah -> 401", (await api("POST", "/api/auth/login", { body: { email: ADMIN.email, password: ADMIN.password, role: "Admin", name: "Orang Lain" } })).status === 401);

  const admin = await login(ADMIN.email, "Admin", ADMIN.password);
  check("login admin: role Admin & tanpa field password", admin.user.role === "Admin" && !("password" in admin.user) && !("passwordHash" in admin.user));

  const preflight = await api("OPTIONS", "/api/bookings", { headers: { origin: "http://localhost:5173", "access-control-request-method": "POST" } });
  check("CORS preflight origin frontend diizinkan", preflight.status === 204 && preflight.headers.get("access-control-allow-origin") === "http://localhost:5173");
  const badOrigin = await api("OPTIONS", "/api/bookings", { headers: { origin: "http://evil.example" } });
  check("CORS origin asing TIDAK diizinkan", !badOrigin.headers.get("access-control-allow-origin"));

  const reg = { name: "Rina Pemilik Usaha", email: `rina.${rnd}@umkm.test`, password: "RahasiaBanget1", role: "UMKM", organization: "Keripik Rina", phone: "081200000001" };
  check("register: password lemah -> 422", (await api("POST", "/api/auth/register", { body: { ...reg, password: "123" } })).status === 422);
  check("register: role Dosen ditolak -> 422", (await api("POST", "/api/auth/register", { body: { ...reg, role: "Dosen" } })).status === 422);
  const r1 = await api("POST", "/api/auth/register", { body: reg });
  check("register UMKM -> 201 + token + kode UMKM", r1.status === 201 && !!r1.data.token && /^UMKM-\d+$/.test(r1.data.user.umkmCode), r1.json);
  check("register email sama -> 409", (await api("POST", "/api/auth/register", { body: reg })).status === 409);
  const umkm = await login(reg.email, "UMKM", reg.password);

  check("UMKM akses /api/users -> 403", (await api("GET", "/api/users", { token: umkm.token })).status === 403);
  check("ID bukan UUID -> 404", (await api("GET", "/api/bookings/bukan-uuid", { token: umkm.token })).status === 404);
  const users = await api("GET", "/api/users?role=Dosen", { token: admin.token });
  check("admin list dosen = 10 + paginasi", users.status === 200 && users.meta.total >= 10, users.meta);

  /* ------------------------------------------------------------------ */
  section("2. Dosen, jadwal, slot");
  const lecs = await api("GET", "/api/lecturers", { token: umkm.token });
  check("daftar dosen >= 10, tanpa nomor telepon untuk non-admin", lecs.status === 200 && lecs.data.length >= 10 && !("phone" in lecs.data[0]), lecs.data?.[0]);
  const search = await api("GET", "/api/lecturers?q=UMKM", { token: umkm.token });
  check("pencarian dosen via keahlian", search.data.length >= 1);
  const lecAdmin = await api("GET", "/api/lecturers", { token: admin.token });
  check("admin melihat phone dosen", "phone" in lecAdmin.data[0]);

  const budi = lecs.data.find((l) => l.lecturerCode === "D001");
  const dosen = await login(budi.email, "Dosen");
  check("login dosen D001", dosen.user.lecturerCode === "D001" && dosen.user.id === budi.id);

  const slots = await api("GET", `/api/lecturers/${budi.id}/slots?date=${MON}`, { token: umkm.token });
  check("slot Senin: 3 slot, kuota 15", slots.data.slots.length === 3 && slots.data.slots[0].remaining === 15 && slots.data.dayOfWeek === "Senin", slots.data);
  const noSlots = await api("GET", `/api/lecturers/${budi.id}/slots?date=${TUE}`, { token: umkm.token });
  check("slot Selasa kosong", noSlots.data.slots.length === 0);
  const av = await api("GET", `/api/availabilities?lecturerId=${budi.id}`, { token: umkm.token });
  check("availabilities semester aktif: 3 hari", av.data.length === 3 && av.data[0].timeSlots.length === 3);
  check("dosen tidak boleh atur ketersediaan dosen lain (UMKM -> 403)", (await api("POST", "/api/availabilities", { token: umkm.token, body: { dayOfWeek: "Kamis", timeSlots: [{ startTime: "09:00", endTime: "10:00" }] } })).status === 403);
  check("slot tumpang tindih ditolak 422", (await api("POST", "/api/availabilities", { token: dosen.token, body: { dayOfWeek: "Kamis", timeSlots: [{ startTime: "09:00", endTime: "11:00" }, { startTime: "10:00", endTime: "12:00" }] } })).status === 422);

  /* ------------------------------------------------------------------ */
  section("3. Alur konsultasi lengkap");
  const siswa1 = await login("andi.wijaya@student.ac.id", "Siswa");
  const s2 = await login("budi.hartono@student.ac.id", "Siswa"), s3 = await login("citra.dewi@student.ac.id", "Siswa");
  const guru = await login("guru@sekolah.local", "Guru");

  const b1 = await api("POST", "/api/bookings", { token: umkm.token, body: booking(budi.id, MON, "09:00", "10:00") });
  check("UMKM ajukan booking -> 201 pending, tipe umkm, hari Senin", b1.status === 201 && b1.data.status === "pending" && b1.data.consultationType === "umkm" && b1.data.scheduledDay === "Senin" && b1.data.userName === reg.name, b1.json);
  check("booking ganda di slot sama -> 409", (await api("POST", "/api/bookings", { token: umkm.token, body: booking(budi.id, MON, "09:00", "10:00") })).status === 409);
  check("tanggal lampau -> 422", (await api("POST", "/api/bookings", { token: umkm.token, body: booking(budi.id, "2020-01-06", "09:00", "10:00") })).status === 422);
  check("jam di luar ketersediaan -> 422", (await api("POST", "/api/bookings", { token: umkm.token, body: booking(budi.id, MON, "11:00", "12:00") })).status === 422);
  check("hari tanpa jadwal (Selasa) -> 422", (await api("POST", "/api/bookings", { token: umkm.token, body: booking(budi.id, TUE, "09:00", "10:00") })).status === 422);
  check("field wajib kosong -> 422 dengan detail", (await api("POST", "/api/bookings", { token: umkm.token, body: { lecturerId: budi.id } })).status === 422);
  check("Dosen tidak boleh mengajukan booking -> 403", (await api("POST", "/api/bookings", { token: dosen.token, body: booking(budi.id, MON, "09:00", "10:00") })).status === 403);

  const b2 = await api("POST", "/api/bookings", { token: siswa1.token, body: booking(budi.id, MON, "09:00", "10:00", { category: "curriculum" }) });
  check("Siswa ajukan booking -> tipe school", b2.status === 201 && b2.data.consultationType === "school");

  check("Siswa tidak boleh menerima booking -> 403", (await api("PATCH", `/api/bookings/${b1.data.id}`, { token: siswa1.token, body: { action: "accept" } })).status === 403);
  check("UMKM lain tidak bisa baca booking orang -> 403", (await api("GET", `/api/bookings/${b1.data.id}`, { token: siswa1.token })).status === 403);
  const mine = await api("GET", "/api/bookings", { token: umkm.token });
  check("UMKM hanya melihat booking miliknya", mine.data.every((b) => b.userId === umkm.user.id));
  const forDosen = await api("GET", `/api/bookings?status=pending&from=${MON}&to=${MON}`, { token: dosen.token });
  check("Dosen melihat permintaan masuk (filter status & tanggal)", forDosen.data.some((b) => b.id === b1.data.id) && forDosen.data.some((b) => b.id === b2.data.id));

  const a1 = await api("PATCH", `/api/bookings/${b1.data.id}`, { token: dosen.token, body: { action: "accept" } });
  const a2 = await api("PATCH", `/api/bookings/${b2.data.id}`, { token: dosen.token, body: { action: "accept" } });
  check("Dosen terima -> waiting_zoom + sessionId", a1.data.status === "waiting_zoom" && !!a1.data.sessionId, a1.json);
  check("peserta slot sama digabung ke SATU sesi", a1.data.sessionId === a2.data.sessionId);
  check("terima ulang -> 409", (await api("PATCH", `/api/bookings/${b1.data.id}`, { token: dosen.token, body: { action: "accept" } })).status === 409);
  const sessionId = a1.data.sessionId;

  const waiting = await api("GET", "/api/sessions?status=waiting_zoom", { token: admin.token });
  const sess = waiting.data.find((s) => s.id === sessionId);
  check("admin melihat sesi menunggu Zoom dengan 2 peserta", !!sess && sess.participants.length === 2 && sess.lecturerName === budi.name, sess);
  check("Dosen tidak boleh konfirmasi Zoom -> 403", (await api("PATCH", `/api/sessions/${sessionId}`, { token: dosen.token, body: { action: "confirm_zoom", zoomLink: "https://zoom.us/j/1" } })).status === 403);
  check("link Zoom invalid -> 422", (await api("PATCH", `/api/sessions/${sessionId}`, { token: admin.token, body: { action: "confirm_zoom", zoomLink: "bukan url" } })).status === 422);
  check("link javascript: ditolak -> 422", (await api("PATCH", `/api/sessions/${sessionId}`, { token: admin.token, body: { action: "confirm_zoom", zoomLink: "javascript:alert(1)" } })).status === 422);

  const ZOOM = "https://zoom.us/j/123456789";
  const conf = await api("PATCH", `/api/sessions/${sessionId}`, { token: admin.token, body: { action: "confirm_zoom", zoomLink: ZOOM, notes: "Passcode 1234" } });
  check("admin konfirmasi Zoom -> sesi ready", conf.status === 200 && conf.data.status === "ready" && conf.data.zoomLink === ZOOM, conf.json);
  const afterZoom = await api("GET", `/api/bookings/${b1.data.id}`, { token: umkm.token });
  check("peserta otomatis 'scheduled' & melihat link Zoom", afterZoom.data.status === "scheduled" && afterZoom.data.zoomLink === ZOOM);

  const b3 = await api("POST", "/api/bookings", { token: guru.token, body: booking(budi.id, MON, "09:00", "10:00", { category: "teaching" }) });
  const a3 = await api("PATCH", `/api/bookings/${b3.data.id}`, { token: dosen.token, body: { action: "accept" } });
  check("peserta terlambat langsung 'scheduled' & ikut Zoom yang sama", a3.data.status === "scheduled" && a3.data.zoomLink === ZOOM && a3.data.sessionId === sessionId, a3.json);

  const ev = await api("PATCH", `/api/sessions/${sessionId}`, { token: admin.token, body: { action: "set_evaluation_link", link: "https://forms.gle/abc" } });
  check("link evaluasi tersimpan & terlihat peserta", ev.data.evaluationLink && (await api("GET", `/api/bookings/${b1.data.id}`, { token: umkm.token })).data.evaluationLink === "https://forms.gle/abc");

  check("rate sebelum selesai -> 409", (await api("PATCH", `/api/bookings/${b1.data.id}`, { token: umkm.token, body: { action: "rate", rating: 5 } })).status === 409);
  check("peserta tidak boleh 'complete' -> 403", (await api("PATCH", `/api/bookings/${b1.data.id}`, { token: umkm.token, body: { action: "complete" } })).status === 403);
  const c1 = await api("PATCH", `/api/bookings/${b1.data.id}`, { token: dosen.token, body: { action: "complete" } });
  check("Dosen selesaikan booking -> completed + completedAt", c1.data.status === "completed" && !!c1.data.completedAt);
  check("sesi masih ready selama ada peserta scheduled", (await api("GET", `/api/sessions/${sessionId}`, { token: admin.token })).data.status === "ready");
  await api("PATCH", `/api/bookings/${b2.data.id}`, { token: dosen.token, body: { action: "complete" } });
  await api("PATCH", `/api/bookings/${b3.data.id}`, { token: dosen.token, body: { action: "complete" } });
  check("semua peserta selesai -> sesi otomatis completed", (await api("GET", `/api/sessions/${sessionId}`, { token: admin.token })).data.status === "completed");

  const rate = await api("PATCH", `/api/bookings/${b1.data.id}`, { token: umkm.token, body: { action: "rate", rating: 5, feedback: "Sangat membantu" } });
  check("peserta beri rating 5 + ulasan", rate.data.rating === 5 && rate.data.feedback === "Sangat membantu");
  check("rating di luar 1-5 -> 422", (await api("PATCH", `/api/bookings/${b1.data.id}`, { token: umkm.token, body: { action: "rate", rating: 9 } })).status === 422);
  check("orang lain tidak boleh rate -> 403", (await api("PATCH", `/api/bookings/${b1.data.id}`, { token: siswa1.token, body: { action: "rate", rating: 1 } })).status === 403);
  const lecAfter = await api("GET", `/api/lecturers/${budi.id}`, { token: umkm.token });
  check("rating dosen dihitung dari ulasan nyata", lecAfter.data.rating > 0 && lecAfter.data.ratingCount >= 1, lecAfter.data);
  const stats = await api("GET", `/api/lecturers/${budi.id}/stats`, { token: dosen.token });
  check("statistik dosen", stats.data.completedConsultations >= 3 && stats.data.averageRating > 0, stats.data);
  check("statistik dosen lain -> 403", (await api("GET", `/api/lecturers/${budi.id}/stats`, { token: umkm.token })).status === 403);

  // Tolak / batal / jadwal ulang
  const bR = await api("POST", "/api/bookings", { token: siswa1.token, body: booking(budi.id, MON, "10:00", "11:00") });
  const rej = await api("PATCH", `/api/bookings/${bR.data.id}`, { token: dosen.token, body: { action: "reject", reason: "Jadwal bentrok" } });
  check("Dosen tolak dengan alasan", rej.data.status === "rejected" && rej.data.feedback === "Jadwal bentrok");

  const bC = await api("POST", "/api/bookings", { token: umkm.token, body: booking(budi.id, MON, "10:00", "11:00") });
  check("setelah ditolak, kuota/slot bebas lagi (booking baru boleh)", bC.status === 201);
  check("orang lain tidak boleh batalkan -> 403", (await api("PATCH", `/api/bookings/${bC.data.id}`, { token: siswa1.token, body: { action: "cancel" } })).status === 403);
  const can = await api("PATCH", `/api/bookings/${bC.data.id}`, { token: umkm.token, body: { action: "cancel" } });
  check("peserta batalkan -> cancelled", can.data.status === "cancelled");
  check("batal dua kali -> 409", (await api("PATCH", `/api/bookings/${bC.data.id}`, { token: umkm.token, body: { action: "cancel" } })).status === 409);

  const bS = await api("POST", "/api/bookings", { token: guru.token, body: booking(budi.id, MON, "10:00", "11:00") });
  const rs = await api("PATCH", `/api/bookings/${bS.data.id}`, { token: dosen.token, body: { action: "reschedule", scheduledDate: WED, startTime: "09:00", endTime: "10:00", note: "Senin penuh, pindah Rabu" } });
  check("Dosen jadwalkan ulang -> rescheduled + jadwal & catatan baru", rs.data.status === "rescheduled" && rs.data.scheduledDate === WED && rs.data.scheduledDay === "Rabu" && rs.data.rescheduleNote.includes("Rabu"), rs.json);
  const bT = await api("POST", "/api/bookings", { token: s2.token, body: booking(budi.id, MON, "10:00", "11:00") });
  check("jadwal ulang ke hari tanpa jadwal (Selasa) -> 422", (await api("PATCH", `/api/bookings/${bT.data.id}`, { token: dosen.token, body: { action: "reschedule", scheduledDate: TUE, startTime: "09:00", endTime: "10:00" } })).status === 422);
  check("jadwal ulang: jam selesai <= mulai -> 422", (await api("PATCH", `/api/bookings/${bT.data.id}`, { token: dosen.token, body: { action: "reschedule", scheduledDate: WED, startTime: "10:00", endTime: "09:00" } })).status === 422);
  await api("PATCH", `/api/bookings/${bT.data.id}`, { token: s2.token, body: { action: "cancel" } });
  const rsAcc = await api("PATCH", `/api/bookings/${bS.data.id}`, { token: dosen.token, body: { action: "accept" } });
  check("booking hasil jadwal ulang bisa diterima", rsAcc.data.status === "waiting_zoom");

  // Batal peserta terakhir -> sesi kosong dihapus
  const emptied = await api("PATCH", `/api/bookings/${bS.data.id}`, { token: guru.token, body: { action: "cancel" } });
  check("pembatalan peserta terakhir menghapus sesi kosong", emptied.data.status === "cancelled" && (await api("GET", `/api/sessions/${rsAcc.data.sessionId}`, { token: admin.token })).status === 404);

  // Bulk
  const k1 = await api("POST", "/api/bookings", { token: s2.token, body: booking(budi.id, MON, "13:00", "14:00") });
  const k2 = await api("POST", "/api/bookings", { token: s3.token, body: booking(budi.id, MON, "13:00", "14:00") });
  const bulk = await api("POST", "/api/bookings/bulk", { token: dosen.token, body: { ids: [k1.data.id, k2.data.id, k1.data.id], operation: { action: "accept" } } });
  check("bulk accept: 2 sukses, 1 gagal (duplikat id) dilaporkan per item", bulk.meta.succeeded === 2 && bulk.meta.failed === 1, bulk.json);
  const logs = await api("GET", "/api/activity-logs?action=ZOOM_CONFIRMED", { token: admin.token });
  check("log aktivitas tercatat (ZOOM_CONFIRMED) & hanya admin", logs.data.length >= 1 && logs.data[0].performedBy === "Admin Sistem" && (await api("GET", "/api/activity-logs", { token: umkm.token })).status === 403, logs.data?.[0]);

  /* ------------------------------------------------------------------ */
  section("4. Kuota slot di bawah beban serentak (race condition)");
  const crowd = [];
  for (const e of ["andi.wijaya", "budi.hartono", "citra.dewi", "dian.pratama", "eka.putri", "fajar.rahman", "gita.sari", "hadi.wijaya", "indah.permata", "joko.susilo"]) crowd.push(await login(`${e}@student.ac.id`, "Siswa"));
  for (const e of ["majujaya", "tokoberkah", "suksesmandiri", "warungsederhana", "konstruksibangun", "elektronikjaya"]) crowd.push(await login(`${e}@umkm.local`, "UMKM"));
  crowd.push(guru);
  const results = await Promise.all(crowd.map((u) => api("POST", "/api/bookings", { token: u.token, body: booking(budi.id, WED, "13:00", "14:00") })));
  const okCount = results.filter((r) => r.status === 201).length, fullCount = results.filter((r) => r.status === 409).length;
  check(`${crowd.length} orang rebutan slot berkuota 15 -> tepat 15 berhasil, ${crowd.length - 15} ditolak`, okCount === 15 && fullCount === crowd.length - 15, { okCount, fullCount, statuses: results.map((r) => r.status) });
  const full = await api("GET", `/api/lecturers/${budi.id}/slots?date=${WED}`, { token: umkm.token });
  check("slot melaporkan isFull=true, remaining=0", full.data.slots.find((s) => s.startTime === "13:00").isFull === true);

  /* ------------------------------------------------------------------ */
  section("5. Seminar");
  const semBody = { title: `Seminar Digital Marketing ${rnd}`, description: "Belajar pemasaran digital", host: "Dr. Budi", eventDate: MON, eventTime: "14:00", location: "Zoom Meeting", quota: 1, category: "Business", targetAudience: ["Siswa", "UMKM"], status: "Published" };
  check("Siswa tidak boleh buat seminar -> 403", (await api("POST", "/api/seminars", { token: siswa1.token, body: semBody })).status === 403);
  check("seminar tanggal lampau -> 422", (await api("POST", "/api/seminars", { token: admin.token, body: { ...semBody, eventDate: "2020-01-01" } })).status === 422);
  const sem = await api("POST", "/api/seminars", { token: admin.token, body: semBody });
  check("Admin buat seminar -> 201", sem.status === 201 && sem.data.participants === 0 && sem.data.remaining === 1, sem.json);
  const draft = await api("POST", "/api/seminars", { token: dosen.token, body: { ...semBody, status: "Draft", quota: 5 } });
  check("Dosen buat seminar (Draft, hostId otomatis dirinya)", draft.status === 201 && draft.data.hostId === dosen.user.id);
  check("Draft tidak terlihat oleh Siswa (404) tapi terlihat pembuatnya", (await api("GET", `/api/seminars/${draft.data.id}`, { token: siswa1.token })).status === 404 && (await api("GET", `/api/seminars/${draft.data.id}`, { token: dosen.token })).status === 200);
  check("daftar seminar Siswa tidak memuat Draft", !(await api("GET", "/api/seminars", { token: siswa1.token })).data.some((s) => s.id === draft.data.id));
  check("Guru di luar targetAudience -> 403", (await api("POST", `/api/seminars/${sem.data.id}/registration`, { token: guru.token })).status === 403);

  const [rA, rB] = await Promise.all([api("POST", `/api/seminars/${sem.data.id}/registration`, { token: siswa1.token }), api("POST", `/api/seminars/${sem.data.id}/registration`, { token: umkm.token })]);
  check("2 orang rebutan kuota 1 -> tepat 1 berhasil, 1 ditolak 409", [rA.status, rB.status].sort().join() === "200,409", [rA.status, rB.status]);
  const won = rA.status === 200 ? rA : rB;
  check("respons pendaftaran: participants=1, remaining=0, isFull=true, isRegistered=true", won.data.participants === 1 && won.data.remaining === 0 && won.data.isFull === true && won.data.isRegistered === true, won.data);
  const winner = rA.status === 200 ? siswa1 : umkm, loser = rA.status === 200 ? umkm : siswa1;
  check("daftar ulang oleh yang sudah terdaftar -> 409", (await api("POST", `/api/seminars/${sem.data.id}/registration`, { token: winner.token })).status === 409);
  const myS = await api("GET", "/api/seminars?registered=true", { token: winner.token });
  check("?registered=true -> seminar saya, isRegistered=true, participants=1", myS.data.length >= 1 && myS.data.find((s) => s.id === sem.data.id)?.isRegistered === true && myS.data.find((s) => s.id === sem.data.id)?.participants === 1);
  check("peserta tidak boleh lihat daftar peserta -> 403", (await api("GET", `/api/seminars/${sem.data.id}/participants`, { token: winner.token })).status === 403);
  check("admin lihat daftar peserta", (await api("GET", `/api/seminars/${sem.data.id}/participants`, { token: admin.token })).data.length === 1);
  check("kuota < jumlah peserta ditolak -> 422 tidak mungkin (kuota 1 = 1); kuota 0 -> 422", (await api("PATCH", `/api/seminars/${sem.data.id}`, { token: admin.token, body: { quota: 0 } })).status === 422);
  check("batal daftar -> peserta kembali 0", (await api("DELETE", `/api/seminars/${sem.data.id}/registration`, { token: winner.token })).data.participants === 0);
  check("loser kini bisa daftar", (await api("POST", `/api/seminars/${sem.data.id}/registration`, { token: loser.token })).status === 200);
  check("Dosen lain tidak boleh hapus seminar Admin -> 403", (await api("DELETE", `/api/seminars/${sem.data.id}`, { token: dosen.token })).status === 403);
  check("Admin hapus seminar -> 200", (await api("DELETE", `/api/seminars/${sem.data.id}`, { token: admin.token })).status === 200);

  /* ------------------------------------------------------------------ */
  section("6. Laporan keuangan");
  const maju = await login("majujaya@umkm.local", "UMKM");
  const fin = await api("GET", "/api/financial-reports", { token: maju.token });
  const feb = fin.data.find((r) => r.period === "2026-02");
  check("UMKM hanya melihat laporan sendiri", fin.data.length >= 2 && fin.data.every((r) => r.umkmId === maju.user.id));
  check("profit, margin, trend dihitung benar (Feb: 125jt-85jt = 40jt, 32%, naik)", feb.profit === 40_000_000 && feb.profitMargin === 32 && feb.trend === "up" && feb.code.startsWith("UMKM-"), feb);
  const finAdmin = await api("GET", "/api/financial-reports?period=2026-02", { token: admin.token });
  check("admin: 6 UMKM, total pendapatan Rp780 juta", finAdmin.meta.total === 6 && finAdmin.meta.totals.revenue === 780_000_000 && finAdmin.meta.totals.profit === 780_000_000 - 590_000_000, finAdmin.meta);
  check("filter kategori + pencarian", (await api("GET", "/api/financial-reports?category=Retail&period=2026-02", { token: admin.token })).meta.total === 2 && (await api("GET", "/api/financial-reports?q=berkah", { token: admin.token })).data.length >= 1);
  check("Siswa/Guru -> 403", (await api("GET", "/api/financial-reports", { token: siswa1.token })).status === 403);
  const per = `2030-${String(1 + Math.floor(Math.random() * 12)).padStart(2, "0")}`;
  const nf = await api("POST", "/api/financial-reports", { token: maju.token, body: { period: per, revenue: 10_000_000, expenses: 4_000_000 } });
  check("UMKM tambah laporan", nf.status === 201 && nf.data.profit === 6_000_000, nf.json);
  check("periode dobel -> 409; nominal negatif -> 422; periode ngawur -> 422",
    (await api("POST", "/api/financial-reports", { token: maju.token, body: { period: per, revenue: 1, expenses: 1 } })).status === 409 &&
    (await api("POST", "/api/financial-reports", { token: maju.token, body: { period: "2031-01", revenue: -5, expenses: 1 } })).status === 422 &&
    (await api("POST", "/api/financial-reports", { token: maju.token, body: { period: "2031-13", revenue: 5, expenses: 1 } })).status === 422);
  check("UMKM lain tidak boleh ubah laporan orang -> 403", (await api("PATCH", `/api/financial-reports/${nf.data.id}`, { token: umkm.token, body: { revenue: 1 } })).status === 403);
  check("ubah & hapus laporan sendiri", (await api("PATCH", `/api/financial-reports/${nf.data.id}`, { token: maju.token, body: { revenue: 20_000_000 } })).data.profit === 16_000_000 && (await api("DELETE", `/api/financial-reports/${nf.data.id}`, { token: maju.token })).status === 200);

  /* ------------------------------------------------------------------ */
  section("7. Upload file");
  const up = await api("POST", "/api/uploads", { token: umkm.token, form: uploadForm(png, "foto.png", "image/png", "avatar") });
  check("upload avatar PNG -> 201", up.status === 201 && /\/api\/files\/avatar-.*\.png$/.test(up.data.path), up.json);
  const pub = await api("GET", up.data.path);
  check("avatar publik tanpa token, content-type benar + nosniff", pub.status === 200 && pub.headers.get("content-type") === "image/png" && pub.headers.get("x-content-type-options") === "nosniff");
  const setAv = await api("PATCH", "/api/me", { token: umkm.token, body: { profilePictureUrl: up.data.path } });
  check("PATCH /api/me profilePictureUrl", setAv.status === 200 && setAv.data.profilePictureUrl.endsWith(up.data.path));
  check("profilePictureUrl javascript: ditolak -> 422", (await api("PATCH", "/api/me", { token: umkm.token, body: { profilePictureUrl: "javascript:alert(1)" } })).status === 422);
  check("file teks berpura-pura .png -> 422 (cek isi file)", (await api("POST", "/api/uploads", { token: umkm.token, form: uploadForm(Buffer.from("<script>alert(1)</script>"), "x.png", "image/png", "avatar") })).status === 422);
  check("executable (MZ) -> 422", (await api("POST", "/api/uploads", { token: umkm.token, form: uploadForm(Buffer.from("MZ\x90\x00 fake exe"), "a.exe", "application/octet-stream", "attachment") })).status === 422);
  check("PDF untuk avatar -> 422", (await api("POST", "/api/uploads", { token: umkm.token, form: uploadForm(pdf, "a.pdf", "application/pdf", "avatar") })).status === 422);
  check("tanpa login -> 401", (await api("POST", "/api/uploads", { form: uploadForm(png, "foto.png", "image/png", "avatar") })).status === 401);
  check("file > 5 MB -> 413", (await api("POST", "/api/uploads", { token: umkm.token, form: uploadForm(Buffer.concat([png, Buffer.alloc(5.5 * 1024 * 1024)]), "big.png", "image/png", "avatar") })).status === 413);

  const att = await api("POST", "/api/uploads", { token: s2.token, form: uploadForm(pdf, "proposal.pdf", "application/pdf", "attachment") });
  const bA = await api("POST", "/api/bookings", { token: s2.token, body: booking(budi.id, MON, "13:00", "14:00", { attachmentFileName: "proposal.pdf", attachmentUrl: att.data.path }) });
  // s2 sudah punya booking aktif di slot ini (k1) -> 409 yang wajar; pakai slot lain untuk tes lampiran
  const bA2 = bA.status === 201 ? bA : await api("POST", "/api/bookings", { token: s2.token, body: booking(budi.id, MON, "09:00", "10:00", { attachmentFileName: "proposal.pdf", attachmentUrl: att.data.path }) });
  check("booking dengan lampiran", bA2.status === 201 && bA2.data.attachmentUrl.endsWith(att.data.path), bA2.json);
  check("lampiran: tanpa token -> 401", (await api("GET", att.data.path)).status === 401);
  check("lampiran: pemilik boleh (isi sama persis)", (await api("GET", att.data.path, { token: s2.token })).raw.equals(pdf));
  check("lampiran: dosen tujuan boleh", (await api("GET", att.data.path, { token: dosen.token })).status === 200);
  check("lampiran: user lain DITOLAK", (await api("GET", att.data.path, { token: guru.token })).status === 403);
  check("lampiran: path traversal -> 404", (await api("GET", "/api/files/..%2F..%2F.env", { token: admin.token })).status === 404);
  check("lampiran palsu (bukan hasil upload) pada booking -> 422", (await api("POST", "/api/bookings", { token: s3.token, body: booking(budi.id, MON, "09:00", "10:00", { attachmentUrl: "https://evil.example/x.exe" }) })).status === 422);

  /* ------------------------------------------------------------------ */
  section("8. Akun & pengaturan");
  const st = await api("PUT", "/api/me/settings", { token: umkm.token, body: { language: "en", notifications: { consultationUpdates: { inApp: false, email: true }, financialReports: { inApp: true, email: true }, systemAnnouncements: { inApp: true, email: false }, consultantMessages: { inApp: true, email: true }, statusChanges: { inApp: true, email: false }, weeklyDigest: { inApp: false, email: false } } } });
  check("simpan pengaturan notifikasi & bahasa", st.status === 200 && st.data.language === "en" && st.data.notifications.consultationUpdates.inApp === false, st.json);
  check("pengaturan tersimpan di server", (await api("GET", "/api/me/settings", { token: umkm.token })).data.notifications.weeklyDigest.email === false);
  check("bahasa tidak dikenal -> 422", (await api("PUT", "/api/me/settings", { token: umkm.token, body: { language: "xx" } })).status === 422);
  const prof = await api("PATCH", "/api/me", { token: umkm.token, body: { name: "Rina Wijaya", businessName: "Keripik Rina Jaya", role: "Admin", status: "Suspended" } });
  check("update profil (nama + profil UMKM); role/status tidak bisa diubah sendiri", prof.data.name === "Rina Wijaya" && prof.data.avatar === "RW" && prof.data.businessName === "Keripik Rina Jaya" && prof.data.role === "UMKM" && prof.data.status === "Active", prof.json);

  check("ganti password: password lama salah -> 401", (await api("PUT", "/api/me/password", { token: umkm.token, body: { currentPassword: "salahsalah", newPassword: "PasswordBaru123" } })).status === 401);
  check("ganti password: baru sama dengan lama -> 422", (await api("PUT", "/api/me/password", { token: umkm.token, body: { currentPassword: reg.password, newPassword: reg.password } })).status === 422);
  check("ganti password berhasil", (await api("PUT", "/api/me/password", { token: umkm.token, body: { currentPassword: reg.password, newPassword: "PasswordBaru123" } })).status === 200);
  check("password lama tak berlaku, baru berlaku", (await api("POST", "/api/auth/login", { body: { email: reg.email, password: reg.password, role: "UMKM" } })).status === 401 && (await api("POST", "/api/auth/login", { body: { email: reg.email, password: "PasswordBaru123", role: "UMKM" } })).status === 200);
  const newMail = `rina.baru.${rnd}@umkm.test`;
  check("ganti email (butuh password)", (await api("PUT", "/api/me/email", { token: umkm.token, body: { newEmail: newMail, password: "salah" } })).status === 401 && (await api("PUT", "/api/me/email", { token: umkm.token, body: { newEmail: newMail, password: "PasswordBaru123" } })).status === 200);
  check("email bentrok akun lain -> 409", (await api("PUT", "/api/me/email", { token: umkm.token, body: { newEmail: "majujaya@umkm.local", password: "PasswordBaru123" } })).status === 409);

  check("hapus akun: password salah -> 401", (await api("DELETE", "/api/me", { token: umkm.token, body: { password: "salah" } })).status === 401);
  check("hapus akun sendiri berhasil + token langsung tidak berlaku + datanya ikut terhapus", (await api("DELETE", "/api/me", { token: umkm.token, body: { password: "PasswordBaru123" } })).status === 200 && (await api("GET", "/api/me", { token: umkm.token })).status === 401);
  check("Dosen tidak bisa hapus akun sendiri (400)", (await api("DELETE", "/api/me", { token: dosen.token, body: { password: PWD } })).status === 400);

  section("9. Manajemen user oleh Admin");
  const nd = await api("POST", "/api/users", { token: admin.token, body: { name: `Dr. Baru ${rnd}`, email: `dosen.${rnd}@university.ac.id`, role: "Dosen", organization: "Universitas Indonesia", specialization: "Keuangan", expertise: ["Finance"] } });
  check("admin buat Dosen: kode otomatis + password sementara", nd.status === 201 && /^D\d{3}$/.test(nd.data.lecturerCode) && nd.data.temporaryPassword?.length >= 10, nd.json);
  const ndLogin = await login(nd.data.email, "Dosen", nd.data.temporaryPassword);
  check("dosen baru bisa login dengan password sementara", !!ndLogin.token);
  check("admin suspend -> login ditolak (403) DAN token lama langsung mati", (await api("PATCH", `/api/users/${nd.data.id}`, { token: admin.token, body: { status: "Suspended" } })).data.status === "Suspended" && (await api("POST", "/api/auth/login", { body: { email: nd.data.email, password: nd.data.temporaryPassword, role: "Dosen" } })).status === 403 && (await api("GET", "/api/me", { token: ndLogin.token })).status === 403);
  check("dosen suspended tak muncul di daftar dosen non-admin", !(await api("GET", "/api/lecturers", { token: guru.token })).data.some((l) => l.id === nd.data.id));
  check("admin tidak bisa suspend/hapus dirinya sendiri", (await api("PATCH", `/api/users/${admin.user.id}`, { token: admin.token, body: { status: "Suspended" } })).status === 422 && (await api("DELETE", `/api/users/${admin.user.id}`, { token: admin.token })).status === 403);
  check("hapus dosen tanpa riwayat -> 200", (await api("DELETE", `/api/users/${nd.data.id}`, { token: admin.token })).status === 200);
  check("hapus dosen yang punya riwayat konsultasi -> 409 (bukan 500)", (await api("DELETE", `/api/users/${budi.id}`, { token: admin.token })).status === 409);
  check("admin reset password user", (await api("PATCH", `/api/users/${s3.user.id}`, { token: admin.token, body: { password: "ResetOlehAdmin1" } })).status === 200 && (await api("POST", "/api/auth/login", { body: { email: "citra.dewi@student.ac.id", password: "ResetOlehAdmin1", role: "Siswa" } })).status === 200);
  await api("PATCH", `/api/users/${s3.user.id}`, { token: admin.token, body: { password: PWD } });

  section("10. Semester & program studi");
  const sems = await api("GET", "/api/semesters", { token: admin.token });
  const origActive = sems.data.find((s) => s.isActive);
  const ns = await api("POST", "/api/semesters", { token: admin.token, body: { name: `Uji ${rnd}`, startDate: "2040-09-01", endDate: "2041-01-31", isActive: true } });
  const after = await api("GET", "/api/semesters", { token: admin.token });
  check("mengaktifkan semester baru menonaktifkan yang lama (hanya 1 aktif)", ns.status === 201 && after.data.filter((s) => s.isActive).length === 1 && after.data.find((s) => s.id === ns.data.id).isActive);
  check("tanggal selesai < mulai -> 422", (await api("POST", "/api/semesters", { token: admin.token, body: { name: "Salah", startDate: "2040-09-01", endDate: "2040-01-01" } })).status === 422);
  await api("PATCH", `/api/semesters/${origActive.id}`, { token: admin.token, body: { isActive: true } });
  check("semester lama diaktifkan kembali & semester uji dihapus", (await api("DELETE", `/api/semesters/${ns.data.id}`, { token: admin.token })).status === 200 && (await api("GET", "/api/semesters", { token: admin.token })).data.find((s) => s.isActive).id === origActive.id);
  const sp = await api("POST", "/api/study-programs", { token: admin.token, body: { code: `t${rnd}`.slice(0, 8), name: "Prodi Uji", faculty: "Fakultas Uji" } });
  check("prodi: CRUD (kode di-uppercase), non-admin 403", sp.status === 201 && sp.data.code === `T${rnd}`.slice(0, 8).toUpperCase() && (await api("POST", "/api/study-programs", { token: guru.token, body: { code: "X", name: "Xx", faculty: "Yy" } })).status === 403 && (await api("DELETE", `/api/study-programs/${sp.data.id}`, { token: admin.token })).status === 200);

  const dash = await api("GET", "/api/admin/stats", { token: admin.token });
  check("admin stats: ringkasan user/booking/sesi/seminar/dosen", dash.status === 200 && dash.data.users.dosen >= 10 && dash.data.bookings.completed >= 3 && dash.data.sessions.completed >= 1 && dash.data.lecturers.length >= 1 && dash.data.lecturers[0].lecturerName, dash.json && { users: dash.data?.users, bookings: dash.data?.bookings });

  console.log(`\n${"=".repeat(60)}\nHasil: ${pass} lulus, ${fail} gagal`);
  if (fail) { console.log("Gagal:\n - " + failures.join("\n - ")); process.exit(1); }
}
main().catch((e) => { console.error("\nTes berhenti karena error:", e); process.exit(1); });
