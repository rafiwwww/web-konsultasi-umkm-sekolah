# Backend Konsultasi UMKM & Sekolah

API terpisah berbasis Next.js App Router, Drizzle ORM, dan PostgreSQL. Frontend Vite yang ada tetap berjalan di root repo.

## Menjalankan lokal

Prasyarat: Node.js 20.9+ dan Docker Desktop, atau PostgreSQL 16 yang sudah berjalan. Docker hanya menjalankan PostgreSQL; API backend dijalankan terpisah dengan npm. Perintah berikut dijalankan dari folder utama repository di PowerShell.

### Persiapan pertama kali

Siapkan dependency dan file konfigurasi backend satu kali:

```powershell
npm install --prefix backend
if (!(Test-Path backend/.env)) { Copy-Item backend/.env.example backend/.env }
```

Pastikan Docker Desktop sudah dibuka dan Docker Engine berstatus berjalan. Nilai koneksi database bawaan di `backend/.env.example` cocok untuk Docker Compose lokal. Sebelum melakukan seed, atur `ADMIN_EMAIL` dan `ADMIN_PASSWORD` di `backend/.env`; password admin harus minimal 12 karakter.

### Menyalakan database

Setiap kali mulai bekerja, nyalakan container PostgreSQL dari terminal:

```powershell
docker compose -f backend/docker-compose.yml up -d postgres
docker compose -f backend/docker-compose.yml ps
Test-NetConnection localhost -Port 5432
```

Lanjutkan setelah status container menunjukkan `healthy` dan `TcpTestSucceeded` bernilai `True`. Jika database ini belum pernah disiapkan atau ada migrasi baru, jalankan perintah berikut:

```powershell
npm --prefix backend run db:migrate
```

Untuk database baru, isi data awal dan buat akun admin pertama dengan:

```powershell
npm --prefix backend run db:seed
```

Seed dapat dijalankan kembali untuk memperbarui data master. Jangan jalankan migrasi atau seed setiap kali menyalakan server; keduanya hanya diperlukan saat menyiapkan database atau setelah perubahan skema/data awal.

### Menjalankan backend

Buka terminal PowerShell kedua di folder utama repository dan biarkan proses ini tetap berjalan:

```powershell
npm --prefix backend run dev
```

API tersedia di `http://localhost:3000`. Periksa status koneksi API dan PostgreSQL dengan membuka `http://localhost:3000/api/health`; hasil sukses berisi `"status": "ok"` dan `"database": "connected"`. Port `5432` adalah port database, bukan halaman web.

Frontend Vite dapat dijalankan di terminal terpisah:

```powershell
npm run dev
```

Untuk deployment, atur `JWT_SECRET` pada `backend/.env` menjadi nilai acak minimal 32 karakter.

### Melihat isi database

Dengan PostgreSQL tetap berjalan, jalankan Drizzle Studio dari terminal lain:

```powershell
npm --prefix backend run db:studio
```

Buka alamat Studio yang ditampilkan di terminal, biasanya `https://local.drizzle.studio?port=5555`. Biarkan terminal Studio tetap terbuka selama digunakan. Port `5555` melayani koneksi Studio dan bukan halaman web langsung di `http://localhost:5555`.

### Menghentikan layanan

Tekan `Ctrl+C` pada terminal backend, frontend, atau Drizzle Studio untuk menghentikan proses terkait. Untuk menghentikan PostgreSQL:

```powershell
docker compose -f backend/docker-compose.yml stop postgres
```

Untuk menyalakannya lagi, jalankan kembali perintah `docker compose ... up -d postgres` pada bagian database di atas.

Jika Docker Desktop menyebut `Virtual Machine Platform is not enabled`, jalankan PowerShell sebagai Administrator, aktifkan fitur dengan `Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform`, lalu restart Windows. Jika perlu, siapkan WSL dengan `wsl --install` dan restart lagi. Jika Docker tidak tersedia, pasang PostgreSQL Windows dengan `winget install --id PostgreSQL.PostgreSQL.16 --exact --source winget`, gunakan port `5432`, buat database `konsultasi_umkm`, lalu samakan user dan password dengan `DATABASE_URL` di `backend/.env`.

## Endpoint

| Method | Path | Akses | Keterangan |
| --- | --- | --- | --- |
| GET | `/api/health` | Publik | Status API dan database |
| POST | `/api/auth/register` | Publik | Buat akun UMKM, Guru, atau Siswa |
| POST | `/api/auth/login` | Publik | Masuk dan menerima cookie sesi HTTP-only |
| POST | `/api/auth/logout` | Publik | Hapus sesi |
| GET | `/api/auth/me` | Sesi | Profil pengguna yang sedang masuk |
| POST | `/api/users` | Admin | Buat akun pengguna; akun Dosen juga dibuat dan ditautkan ke profil dosen |
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

File lampiran tidak menyimpan isi Base64 di PostgreSQL. Endpoint konsultasi hanya menerima nama file; unggah berkas nantinya sebaiknya diarahkan ke object storage dan URL-nya disimpan di `attachmentUrl`.