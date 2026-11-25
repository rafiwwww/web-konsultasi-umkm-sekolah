# Backend Konsultasi UMKM & Sekolah

API terpisah berbasis Next.js App Router, Drizzle ORM, dan PostgreSQL. Frontend Vite yang ada tetap berjalan di root repo.

## Menjalankan lokal

Prasyarat: Node.js 20.9+ dan Docker Desktop, atau PostgreSQL 16 yang sudah berjalan. Jika Docker tidak tersedia, pasang PostgreSQL Windows dengan `winget install --id PostgreSQL.PostgreSQL.16 --exact --source winget`, gunakan port `5432`, buat database `konsultasi_umkm`, lalu samakan password user `postgres` dengan `DATABASE_URL` di `.env`.

```powershell
npm install --prefix backend
if (!(Test-Path backend/.env)) { Copy-Item backend/.env.example backend/.env }
docker --version
docker compose version
docker compose -f backend/docker-compose.yml up -d postgres
docker compose -f backend/docker-compose.yml ps
npm --prefix backend run db:migrate
npm --prefix backend run db:seed
npm --prefix backend run dev
```

API berjalan di `http://localhost:3000`. Endpoint `GET /api/health` memeriksa koneksi database. Atur `JWT_SECRET` pada `backend/.env` menjadi nilai acak minimal 32 karakter sebelum deployment. Nilai contoh koneksi PostgreSQL cocok untuk Docker Compose lokal.

Docker hanya menjalankan PostgreSQL; frontend dan backend tetap dijalankan melalui npm di Windows. Pastikan Docker Desktop sudah dibuka dan Docker Engine berjalan. Jika Docker Desktop menyebut `Virtual Machine Platform is not enabled`, jalankan PowerShell sebagai Administrator, aktifkan fitur dengan `Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform`, lalu restart Windows. Jika perlu, siapkan WSL dengan `wsl --install` dan restart lagi. Sebelum migrasi, pastikan container berstatus `healthy` dan `Test-NetConnection localhost -Port 5432` menunjukkan `TcpTestSucceeded: True`.

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
| DELETE | `/api/availabilities?id=:id` | Admin, Dosen terkait | Hapus jadwal dosen |
| GET, POST | `/api/consultations` | Sesi | Daftar sesuai peran atau ajukan konsultasi |
| PATCH | `/api/consultations/:id` | Pemilik, dosen terkait, Admin | Perbarui status, jadwal, tautan, penilaian, atau catatan |
| GET | `/api/seminars` | Publik | Daftar seminar; pengguna publik hanya melihat yang terbit |
| POST | `/api/seminars` | Admin, Dosen | Buat seminar |
| PATCH, DELETE | `/api/seminars/:id` | Admin | Perbarui atau hapus seminar |
| GET | `/api/seminars/registrations` | Sesi | Daftar seminar yang diikuti pengguna |
| POST, DELETE | `/api/seminars/:id/registrations` | Sesi | Daftar atau batal daftar seminar |

Kirim JSON dengan `Content-Type: application/json`; `fetch` dari frontend harus memakai `credentials: "include"` agar cookie sesi ikut terkirim. CORS mengizinkan URL dari `FRONTEND_URL`.

Seed memasukkan program studi dan daftar dosen yang sama dengan master data frontend, membuat semester contoh, serta membuat akun admin pertama dari `ADMIN_EMAIL` dan `ADMIN_PASSWORD`. Gunakan password admin minimal 12 karakter.

Untuk melihat tabel database melalui Drizzle Studio, jalankan dari folder utama repository:

```powershell
npm --prefix backend run db:studio
```

Buka `http://localhost:5555`.

File lampiran tidak menyimpan isi Base64 di PostgreSQL. Endpoint konsultasi hanya menerima nama file; unggah berkas nantinya sebaiknya diarahkan ke object storage dan URL-nya disimpan di `attachmentUrl`.