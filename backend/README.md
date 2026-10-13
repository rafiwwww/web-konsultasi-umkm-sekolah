# Backend Konsultasi UMKM & Sekolah

API terpisah berbasis Next.js App Router, Prisma, dan PostgreSQL. Frontend Vite yang ada tetap berjalan di root repo.

## Menjalankan lokal

Prasyarat: Node.js 20.9+ dan Docker Desktop, atau PostgreSQL 16 yang sudah berjalan.

```powershell
cd backend
Copy-Item .env.example .env
# Edit .env: use a random JWT_SECRET and set ADMIN_EMAIL/ADMIN_PASSWORD.
docker compose up -d postgres
npm install
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
npm run dev
```

API berjalan di `http://localhost:3000`. Endpoint `GET /api/health` memeriksa koneksi database. Atur `JWT_SECRET` pada `.env` menjadi nilai acak minimal 32 karakter sebelum deployment. Nilai contoh koneksi PostgreSQL cocok untuk Docker Compose lokal.

## Endpoint

| Method | Path | Akses | Keterangan |
| --- | --- | --- | --- |
| GET | `/api/health` | Publik | Status API dan database |
| POST | `/api/auth/register` | Publik | Buat akun UMKM, Guru, atau Siswa |
| POST | `/api/auth/login` | Publik | Masuk dan menerima cookie sesi HTTP-only |
| POST | `/api/auth/logout` | Publik | Hapus sesi |
| GET | `/api/auth/me` | Sesi | Profil pengguna yang sedang masuk |
| GET | `/api/lecturers` | Publik | Katalog dosen dan program studi |
| GET | `/api/study-programs` | Publik | Daftar program studi |
| GET | `/api/semesters` | Publik | Daftar semester dan semester aktif |
| GET | `/api/availabilities` | Publik | Jadwal dosen, dapat difilter dengan `lecturerId` dan `semesterId` |
| POST | `/api/availabilities` | Admin, Dosen terkait | Buat atau perbarui jadwal dosen per hari |
| GET, POST | `/api/consultations` | Sesi | Daftar sesuai peran atau ajukan konsultasi |
| PATCH | `/api/consultations/:id` | Pemilik, dosen terkait, Admin | Perbarui status, tautan, penilaian, atau catatan |
| GET | `/api/seminars` | Publik | Daftar seminar; pengguna publik hanya melihat yang terbit |
| POST | `/api/seminars` | Admin, Dosen | Buat seminar |
| POST, DELETE | `/api/seminars/:id/registrations` | Sesi | Daftar atau batal daftar seminar |

Kirim JSON dengan `Content-Type: application/json`; `fetch` dari frontend harus memakai `credentials: "include"` agar cookie sesi ikut terkirim. CORS mengizinkan URL dari `FRONTEND_URL` (default `http://localhost:5173`).

Seed memasukkan program studi dan daftar dosen yang sama dengan master data frontend, membuat semester contoh, serta membuat akun admin pertama dari `ADMIN_EMAIL` dan `ADMIN_PASSWORD`. Gunakan password admin minimal 12 karakter.

File lampiran tidak menyimpan isi Base64 di PostgreSQL. Endpoint konsultasi hanya menerima nama file; unggah berkas nantinya sebaiknya diarahkan ke object storage dan URL-nya disimpan di `attachmentUrl`.