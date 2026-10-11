import { Link, useNavigate, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import { useToast } from "../components/Toast";
import { useAuth } from "../context/AuthContext";
import binusLogo from "../../assets/8173a8b35e04c160c3cfab52b933df6cc8f70415.png";
import icLogo from "../../imports/no_bg_logo_only_IC_Ilmu_Consultancy__2_-removebg-preview.png";

export function RegisterPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { register } = useAuth();
  const roleParam = searchParams.get("role"); // "umkm" or "school"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: roleParam === "umkm" ? "UMKM" : "",
    organization: "",
    phone: "",
  });

  const [passwordError, setPasswordError] = useState("");

  // Update userType when roleParam changes
  useEffect(() => {
    if (roleParam === "umkm") {
      setFormData(prev => ({ ...prev, userType: "UMKM" }));
    } else if (roleParam === "school" && !formData.userType) {
      setFormData(prev => ({ ...prev, userType: "Guru" })); // Default to Guru
    }
  }, [roleParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Konfirmasi kata sandi tidak cocok.");
      return;
    }
    if (formData.password.length < 8) {
      setPasswordError("Kata sandi minimal 8 karakter.");
      return;
    }

    const result = register(
      {
        name: formData.name,
        email: formData.email,
        role: formData.userType as any,
        phone: formData.phone,
        organization: formData.userType === "UMKM" ? formData.organization : undefined,
        schoolName: formData.userType !== "UMKM" ? formData.organization : undefined,
        status: "Active",
      },
      formData.password
    );

    if (!result.success) {
      setPasswordError(result.error || "Pendaftaran gagal. Silakan coba lagi.");
      return;
    }

    showToast("Akun berhasil dibuat. Silakan masuk dengan email dan kata sandi Anda.", "success");
    setTimeout(() => navigate("/login"), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setPasswordError("");
    }
  };

  // Determine the label for organization field
  const getOrganizationLabel = () => {
    if (roleParam === "umkm") {
      return "Nama UMKM";
    } else if (roleParam === "school") {
      return "Nama Sekolah";
    }
    return "Nama UMKM / Sekolah";
  };

  // Determine if user type field should be locked
  const isUserTypeLocked = roleParam === "umkm";

  // Get available user types based on role parameter
  const getAvailableUserTypes = () => {
    if (roleParam === "umkm") {
      return [{ value: "UMKM", label: "UMKM" }];
    } else if (roleParam === "school") {
      return [
        { value: "Guru", label: "Guru" },
        { value: "Siswa", label: "Siswa" },
      ];
    }
    // Default: show all roles
    return [
      { value: "UMKM", label: "UMKM" },
      { value: "Guru", label: "Guru" },
      { value: "Siswa", label: "Siswa" },
    ];
  };

  const availableUserTypes = getAvailableUserTypes();

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
            <h2 className="text-2xl font-bold text-gray-900">Buat Akun Baru</h2>
            <p className="text-sm text-gray-600 mt-2">Daftar untuk mengakses platform konsultasi</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="nama@email.com"
              />
            </div>

            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Pengguna
              </label>
              <select
                id="userType"
                name="userType"
                required
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isUserTypeLocked}
              >
                {availableUserTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                {getOrganizationLabel()}
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Nomor Telepon
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nomor telepon"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Minimal 8 karakter"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Konfirmasi Kata Sandi
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                  passwordError
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Ulangi kata sandi"
              />
              {passwordError && (
                <p className="mt-1 text-xs text-red-600">{passwordError}</p>
              )}
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                Saya menyetujui{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Syarat & Ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Kebijakan Privasi
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!!(formData.confirmPassword && formData.password !== formData.confirmPassword)}
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Daftar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}