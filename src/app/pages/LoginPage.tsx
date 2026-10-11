import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth, UserRole } from "../context/AuthContext";
import binusLogo from "../../assets/8173a8b35e04c160c3cfab52b933df6cc8f70415.png";
import icLogo from "../../imports/no_bg_logo_only_IC_Ilmu_Consultancy__2_-removebg-preview.png";

export function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("UMKM");
  const [loginError, setLoginError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const result = login(email, password, role, name.trim() || undefined);
    if (!result || result.success === false) {
      setLoginError(result?.error || "Email, nama, atau kata sandi tidak sesuai. Silakan coba lagi.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-5">
              <img src={binusLogo} alt="BINUS University" className="h-16 w-auto" />
              <div className="w-px h-10 bg-gray-200" />
              <img src={icLogo} alt="IC Ilmu Consultancy" className="h-10 w-auto object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Masuk ke Akun Anda</h2>
            <p className="text-sm text-gray-600 mt-2">Platform Konsultasi UMKM & Sekolah</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Masuk Sebagai
              </label>
              <select
                value={role || ""}
                onChange={(e) => { setRole(e.target.value as any); setLoginError(""); }}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Pilih Role</option>
                <option value="UMKM">UMKM</option>
                <option value="Guru">Guru</option>
                <option value="Dosen">Dosen</option>
                <option value="Admin">Admin</option>
                <option value="Siswa">Siswa</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setLoginError(""); }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="nama@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setLoginError(""); }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            {loginError && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {loginError}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Ingat saya
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Lupa kata sandi?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Dengan masuk, Anda menyetujui{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Kebijakan Privasi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
