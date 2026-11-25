
# Project UMKM & Konsultasi

Platform konsultasi UMKM dan sekolah. Repository ini berisi frontend React/Vite di root dan backend Next.js dengan Drizzle ORM di folder `backend/`.

## Prasyarat

- Node.js 20.9 atau lebih baru dan npm.
- Docker Desktop untuk PostgreSQL lokal melalui Docker Compose, atau PostgreSQL 16 yang sudah aktif.

## Cara Menjalankan (PowerShell)

Docker hanya menjalankan PostgreSQL. Frontend dan backend dijalankan dengan npm di Windows. Jika Docker belum ada, instal Docker Desktop for Windows dari [situs resmi Docker](https://www.docker.com/products/docker-desktop/).

Jika Docker Desktop menampilkan **“Virtual Machine Platform is not enabled”**, tutup pekerjaan yang sedang berjalan, buka **PowerShell sebagai Administrator**, kemudian jalankan:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

Setujui permintaan restart dan **restart Windows** (restart Docker Desktop saja tidak cukup). Jika diminta atau Docker masih mengatakan WSL belum siap, buka PowerShell sebagai Administrator dan jalankan `wsl --install`; restart Windows setelah proses selesai. Buka Docker Desktop lagi dan tunggu sampai status **Engine Running**. Pada komputer kantor/sekolah yang dikelola organisasi, hubungi administrator IT sebelum mengaktifkan fitur virtualisasi.

Jika Docker Desktop sudah **Engine Running** tetapi perintah `docker` belum ditemukan, tutup lalu buka terminal PowerShell baru. Bila masih belum dikenali, tambahkan lokasi CLI untuk jendela terminal saat ini:

```powershell
$env:Path = "C:\Program Files\Docker\Docker\resources\bin;$env:Path"
docker --version
docker compose version
```

Jalankan perintah berikut dari folder utama repository. Pada pertama kali saja, pasang dependency dan buat konfigurasi backend:

```powershell
npm install
npm install --prefix backend
if (!(Test-Path backend\.env)) { Copy-Item backend\.env.example backend\.env }
```

Buka `backend\.env` dan ubah `JWT_SECRET` menjadi string acak minimal 32 karakter. Atur `ADMIN_EMAIL` dan `ADMIN_PASSWORD` (minimal 12 karakter) untuk akun admin. Nilai database contoh sudah cocok dengan Docker Compose lokal: user `postgres`, password `postgres`, database `konsultasi_umkm`, port `5432`. Jangan membagikan atau meng-commit file `.env`.

Pastikan Docker Desktop sudah berjalan. Cek Docker, lalu nyalakan PostgreSQL:

```powershell
docker --version
docker compose version
docker compose -f backend\docker-compose.yml up -d postgres
docker compose -f backend\docker-compose.yml ps
Test-NetConnection localhost -Port 5432
```

Tunggu sampai status container `healthy` dan `TcpTestSucceeded` bernilai `True`. Kemudian, siapkan tabel dan data awal:

```powershell
npm --prefix backend run db:migrate
npm --prefix backend run db:seed
```

Setelah itu, buka dua terminal PowerShell dari folder utama repository:

Terminal 1 — backend:

```powershell
npm --prefix backend run dev
```

Terminal 2 — frontend:

```powershell
npm run dev
```

Buka frontend di **http://localhost:5173**. Pastikan API dan database aktif dengan membuka **http://localhost:3000/api/health**; status database yang normal adalah `connected`.

Untuk melihat tabel database, jalankan di terminal tambahan:

```powershell
npm --prefix backend run db:studio
```

Lalu buka **http://localhost:5555**. PostgreSQL sendiri menggunakan port **5432**.

Untuk menghentikan database tanpa menghapus data, jalankan:

```powershell
docker compose -f backend\docker-compose.yml stop postgres
```

Untuk menyalakannya kembali, ulangi perintah `up -d postgres`. Data disimpan dalam Docker volume `postgres_data`; jangan gunakan `docker compose down -v` jika data masih diperlukan.

## Instalasi

Jalankan perintah berikut dari PowerShell pada folder utama repository (folder yang berisi `package.json` frontend):

```powershell
npm install
npm install --prefix backend
if (!(Test-Path backend/.env)) { Copy-Item backend/.env.example backend/.env }
```

Perintah tersebut memasang dependency frontend dan backend. Salin `.env.example` hanya saat `backend/.env` belum ada, agar konfigurasi lokal Anda tidak tertimpa. Buka `backend/.env` dan sesuaikan nilainya sebelum menjalankan database:

- `DATABASE_URL`: URL PostgreSQL. Nilai awal cocok dengan Docker Compose yang disediakan.
- `JWT_SECRET`: string acak minimal 32 karakter. Buat nilainya dengan `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`, lalu tempel hasilnya ke `.env`.
- `ADMIN_EMAIL` dan `ADMIN_PASSWORD`: email admin dan password minimal 12 karakter yang akan dibuat oleh seed.

Jangan commit file `backend/.env` atau membagikan nilai rahasianya.

## Menyiapkan Database PostgreSQL

Untuk menggunakan Docker, pastikan Docker Desktop sudah berjalan. Dari folder utama repository jalankan:

```powershell
docker compose -f backend/docker-compose.yml up -d postgres
```

Pastikan container sudah hidup sebelum migrasi:

```powershell
docker compose -f backend/docker-compose.yml ps
```

Jika menggunakan PostgreSQL yang sudah terpasang, pastikan server berjalan dan database, username, serta password pada `DATABASE_URL` sesuai instalasi. Dalam opsi ini, lewati perintah Docker Compose.

Jika belum punya Docker, PostgreSQL 16 dapat dipasang langsung di Windows dari PowerShell:

```powershell
winget install --id PostgreSQL.PostgreSQL.16 --exact --source winget
```

Di installer, gunakan port `5432` dan catat password user `postgres`. Setelah instalasi, buka SQL Shell (psql) dari Start Menu, sambungkan ke `localhost:5432` sebagai `postgres`, lalu buat database:

```sql
CREATE DATABASE konsultasi_umkm;
```

Pastikan password di `backend/.env` pada `DATABASE_URL` sama dengan password yang dipilih saat instalasi. Dari PowerShell, pastikan port sudah menerima koneksi:

```powershell
Test-NetConnection localhost -Port 5432
```

Lanjutkan migrasi hanya setelah hasilnya `TcpTestSucceeded: True`.

Buat tabel database dan data awal (migration awal sudah tersedia di repository, jadi tidak perlu menjalankan `db:generate` untuk instalasi baru):

```powershell
npm --prefix backend run db:migrate
npm --prefix backend run db:seed
```

Seed mengisi program studi, katalog dosen, semester contoh, dan akun admin dari konfigurasi `.env`.

## Menjalankan Aplikasi

Setelah database siap dan migrasi selesai, jalankan frontend dan backend di **dua terminal PowerShell terpisah** dari folder utama repository.

Terminal 1, frontend Vite:

```powershell
npm run dev
```

Frontend: `http://localhost:5173` (gunakan alamat ini saat lokal agar cookie login bekerja konsisten).

Terminal 2, backend Next.js:

```powershell
npm --prefix backend run dev
```

Backend: `http://localhost:3000`. Gunakan satu URL ini untuk memeriksa backend sekaligus koneksi database: `http://localhost:3000/api/health`. Respons normal adalah `{"status":"ok","database":"connected"}`. PostgreSQL tetap memakai port internal `5432`.

### Melihat Tabel Database

Jalankan Drizzle Studio di terminal ketiga:

```powershell
npm --prefix backend run db:studio
```

Buka `http://localhost:5555`. Pilih tabel `User` untuk melihat akun yang berhasil didaftarkan.

Login dan pendaftaran, katalog dosen/program studi/semester, jadwal dosen, konsultasi, dan seminar frontend menggunakan API backend yang terhubung ke PostgreSQL. Perubahan data inti dikirim ke API dan tidak hanya disimpan di state browser. Fitur di luar endpoint tersebut (misalnya manajemen profil/pengguna dan detail sesi Zoom) belum dipersistensikan oleh backend.

## Perintah Backend Lainnya

```powershell
# Generate SQL migration after editing backend/src/db/schema.ts
npm --prefix backend run db:generate

# Periksa tipe TypeScript backend
npm --prefix backend run typecheck

# Build backend untuk produksi
npm --prefix backend run build
```

## Troubleshooting

- Jika `/api/health` membalas `database: "disconnected"`, cek Docker Desktop, status container dengan `docker compose -f backend\docker-compose.yml ps`, dan port dengan `Test-NetConnection localhost -Port 5432`. Pastikan `DATABASE_URL` memakai `localhost:5432/konsultasi_umkm`, lalu restart backend.
- Jika container belum `healthy`, lihat log dengan `docker compose -f backend\docker-compose.yml logs --tail 50 postgres`.
- Jika tabel belum ada, jalankan `npm --prefix backend run db:migrate`.
- Jika akun gagal dibuat, cek `http://localhost:3000/api/health` terlebih dahulu. Akun hanya akan tersimpan jika status database `connected`.
- Jika `docker` tidak dikenali, instal Docker Desktop for Windows, buka aplikasinya sampai Docker Engine berstatus `Running`, lalu buka terminal PowerShell baru.
- Jika dependency belum terpasang, ulangi `npm install` di root dan `npm install --prefix backend` dari folder utama repository.
