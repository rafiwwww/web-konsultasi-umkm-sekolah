import { Link } from "react-router";
import { CheckCircle, Users, Building2, GraduationCap, ArrowRight, Target, TrendingUp, FileText, Mail, Phone, MapPin } from "lucide-react";

export function LandingPage() {
  return (
    <div>
      {/* Hero Section - Beranda */}
      <section id="beranda" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Platform Konsultasi UMKM & Sekolah
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-blue-100">
                Solusi terpadu untuk konsultasi bisnis UMKM dan pengembangan institusi pendidikan di Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Masuk ke Akun
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">1,200+</p>
                    <p className="text-sm text-blue-100">UMKM Terdaftar</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">350+</p>
                    <p className="text-sm text-blue-100">Sekolah</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">5,600+</p>
                    <p className="text-sm text-blue-100">Konsultasi</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">98%</p>
                    <p className="text-sm text-blue-100">Kepuasan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection Section - Main Entry Point */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Selamat Datang di Portal Konsultasi
            </h2>
            <p className="text-lg text-gray-600">
              Silakan pilih kategori Anda untuk memulai pendaftaran.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* UMKM Card */}
            <Link
              to="/register?role=umkm"
              className="group bg-white border-2 border-blue-500 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-blue-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pebisnis UMKM
                </h3>
                
                {/* Description */}
                <p className="text-gray-600">
                  Daftar untuk konsultasi pengembangan bisnis Anda.
                </p>
              </div>
            </Link>

            {/* Instansi Sekolah Card */}
            <Link
              to="/register?role=school"
              className="group bg-white border-2 border-green-500 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-green-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Instansi Sekolah
                </h3>
                
                {/* Description */}
                <p className="text-gray-600">
                  Daftar sebagai Guru atau Siswa untuk bimbingan.
                </p>
              </div>
            </Link>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login di sini
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Tentang */}
      <section id="tentang" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Platform ini menyediakan layanan konsultasi digital terstruktur untuk pemilik UMKM, siswa, dan institusi pendidikan. Pengguna dapat terhubung dengan konsultan atau dosen untuk mendapatkan bimbingan dalam pengembangan bisnis, manajemen keuangan, proyek akademik, dan perbaikan operasional. Sistem ini memastikan penjadwalan yang terorganisir, pelacakan konsultasi, dan pelaporan keuangan dalam satu platform terintegrasi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Misi Kami</h3>
              <p className="text-gray-600">
                Memberdayakan UMKM dan institusi pendidikan melalui konsultasi profesional yang mudah diakses
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pertumbuhan</h3>
              <p className="text-gray-600">
                Mendukung pertumbuhan berkelanjutan melalui strategi bisnis dan pendidikan yang terukur
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparansi</h3>
              <p className="text-gray-600">
                Sistem pelaporan yang jelas dan transparan untuk memantau progress konsultasi Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Layanan */}
      <section id="layanan" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-lg text-gray-600">
              Berbagai layanan konsultasi untuk mendukung pengembangan usaha dan pendidikan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Konsultasi UMKM</h3>
              <p className="text-gray-600 mb-4">
                Pendampingan bisnis, strategi pemasaran, manajemen keuangan, dan pengembangan produk untuk UMKM.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Analisis usaha
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Laporan keuangan
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Strategi pemasaran
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Konsultasi Sekolah</h3>
              <p className="text-gray-600 mb-4">
                Pengembangan kurikulum, manajemen sekolah, peningkatan kualitas pembelajaran, dan akreditasi.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Pengembangan kurikulum
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Manajemen sekolah
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Akreditasi
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Konsultan Profesional</h3>
              <p className="text-gray-600 mb-4">
                Tim konsultan berpengalaman dan tersertifikasi siap membantu kebutuhan konsultasi Anda.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Konsultan tersertifikasi
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Berpengalaman
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Responsif
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Kontak */}
      <section id="kontak" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600">
              Kami siap membantu menjawab pertanyaan dan kebutuhan konsultasi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">konsultasi@umkm.go.id</p>
              <p className="text-gray-600">support@umkm.go.id</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600">(021) 1234-5678</p>
              <p className="text-gray-600">(021) 8765-4321</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
              <p className="text-gray-600">Jl. Merdeka No. 123</p>
              <p className="text-gray-600">Jakarta Pusat, 10110</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Siap Memulai Konsultasi?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Daftar sekarang dan dapatkan akses ke konsultan profesional untuk mengembangkan usaha atau institusi pendidikan Anda.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Daftar Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}