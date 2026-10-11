import { useState } from "react";
import { useNavigate } from "react-router";
import { User, Mail, Lock, Building2, GraduationCap, Briefcase, CheckCircle, ChevronDown } from "lucide-react";
import { useToast } from "../../components/Toast";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";
import { FACULTY_HIERARCHY } from "../../data/facultyHierarchy";

const BINUS_CAMPUSES = [
  "BINUS @Kemanggisan",
  "BINUS @Anggrek",
  "BINUS @Alam Sutera",
  "BINUS @Bekasi",
  "BINUS @Bandung",
  "BINUS @Malang",
  "BINUS @Semarang",
  "BINUS @Senayan",
];

export function TambahUserPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { createUser } = useAuth();
  const { createLecturer, studyPrograms } = useConsultationSystem();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    status: "Active",
    // Dosen hierarchy fields
    selectedFaculty: "",
    selectedProdi: "",
    selectedPeminatan: "",
    asalBINUS: "",
    // Siswa fields
    schoolName: "",
    grade: "",
    // UMKM fields
    businessName: "",
    businessCategory: "",
    businessAddress: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [createdDosenName, setCreatedDosenName] = useState("");

  // Derived hierarchy options
  const facultyEntry = FACULTY_HIERARCHY.find(f => f.name === formData.selectedFaculty) ?? null;
  const availableProdi = facultyEntry?.prodi ?? [];
  const prodiEntry = facultyEntry?.prodi.find(p => p.name === formData.selectedProdi) ?? null;
  const availablePeminatan = prodiEntry?.peminatan ?? [];
  const peminatanEntry = prodiEntry?.peminatan.find(pm => pm.name === formData.selectedPeminatan) ?? null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Cascade reset for hierarchy fields
    if (name === "selectedFaculty") {
      setFormData(prev => ({ ...prev, selectedFaculty: value, selectedProdi: "", selectedPeminatan: "" }));
    } else if (name === "selectedProdi") {
      setFormData(prev => ({ ...prev, selectedProdi: value, selectedPeminatan: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }
    if (!formData.role) newErrors.role = "Role wajib dipilih";

    if (formData.role === "Dosen") {
      if (!formData.selectedFaculty) newErrors.selectedFaculty = "Fakultas / School wajib dipilih";
      if (!formData.selectedProdi) newErrors.selectedProdi = "Program Studi wajib dipilih";
      if (!formData.selectedPeminatan) newErrors.selectedPeminatan = "Peminatan wajib dipilih";
      if (!formData.asalBINUS) newErrors.asalBINUS = "Asal BINUS wajib dipilih";
    }
    if (formData.role === "Siswa") {
      if (!formData.schoolName.trim()) newErrors.schoolName = "Nama sekolah wajib diisi";
      if (!formData.grade.trim()) newErrors.grade = "Kelas wajib diisi";
    }
    if (formData.role === "UMKM") {
      if (!formData.businessName.trim()) newErrors.businessName = "Nama usaha wajib diisi";
      if (!formData.businessCategory.trim()) newErrors.businessCategory = "Kategori usaha wajib diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const baseUserData = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role as any,
        status: formData.status,
        phone: "",
      };

      if (formData.role === "Dosen") {
        const lecturerCode = `D${Date.now().toString().slice(-4)}`;
        const keywords = peminatanEntry?.keywords ?? [];
        // Best-effort match studyProgramId by prodi name
        const matchedProdi = studyPrograms.find(p => p.name === formData.selectedProdi);

        createUser({
          ...baseUserData,
          lecturerId: lecturerCode,
          lecturerCode,
          specialization: formData.selectedPeminatan,
          bio: `${formData.selectedFaculty} — ${formData.selectedProdi} — ${formData.selectedPeminatan}`,
          organization: formData.asalBINUS,
          totalConsultations: 0,
          totalSeminars: 0,
        });
        createLecturer({
          lecturerCode,
          name: formData.fullName,
          email: formData.email,
          photo: "",
          specialization: formData.selectedPeminatan,
          university: formData.asalBINUS,
          asalBINUS: formData.asalBINUS,
          jurusan: formData.selectedProdi,
          rating: 0,
          experience: "",
          expertise: keywords,
          studyProgramId: matchedProdi?.id ?? "",
          phone: "",
          bio: `${formData.selectedFaculty} — ${formData.selectedProdi} — ${formData.selectedPeminatan}`,
        });
        setCreatedDosenName(formData.fullName);
        setSubmitted(true);
        showToast("Dosen berhasil ditambahkan dan tersambung ke sistem.", "success");
      } else if (formData.role === "Siswa") {
        createUser({
          ...baseUserData,
          schoolName: formData.schoolName,
          grade: formData.grade,
          organization: formData.schoolName,
          nim: `202${Math.floor(Math.random() * 10000000).toString().padStart(7, "0")}`,
          semester: 1,
        });
        showToast("User berhasil ditambahkan ke sistem.", "success");
        setTimeout(() => navigate("/admin/users"), 1500);
      } else if (formData.role === "UMKM") {
        createUser({
          ...baseUserData,
          businessName: formData.businessName,
          businessCategory: formData.businessCategory,
          businessAddress: formData.businessAddress,
          organization: formData.businessName,
        });
        showToast("User berhasil ditambahkan ke sistem.", "success");
        setTimeout(() => navigate("/admin/users"), 1500);
      } else if (formData.role === "Admin") {
        createUser({ ...baseUserData, organization: "Sistem Administrator" });
        showToast("User berhasil ditambahkan ke sistem.", "success");
        setTimeout(() => navigate("/admin/users"), 1500);
      } else if (formData.role === "Guru") {
        createUser({ ...baseUserData, organization: "Sekolah Menengah Atas" });
        showToast("User berhasil ditambahkan ke sistem.", "success");
        setTimeout(() => navigate("/admin/users"), 1500);
      }
    } catch (error) {
      showToast("Gagal membuat user. Silakan coba lagi.", "error");
    }
  };

  // Success screen for Dosen
  if (submitted && formData.role === "Dosen") {
    return (
      <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dosen Berhasil Ditambahkan</h2>
            <p className="text-gray-600 mb-6">
              Akun Dosen untuk <strong>{createdDosenName}</strong> telah dibuat dan tersambung ke sistem.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left mb-6 space-y-2 text-sm">
              <p className="font-semibold text-green-800 mb-2">Data tersambung ke sistem pengguna:</p>
              {[
                ["Nama", createdDosenName],
                ["Email", formData.email],
                ["Fakultas / School", formData.selectedFaculty],
                ["Program Studi", formData.selectedProdi],
                ["Peminatan", formData.selectedPeminatan],
                ["Asal BINUS", formData.asalBINUS],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-green-700">
                  <span>{label}</span>
                  <span className="font-medium text-right max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Dosen ini kini tampil di Dashboard pengguna (UMKM, Guru, Siswa) pada kategori <strong>{formData.selectedFaculty} → {formData.selectedProdi} → {formData.selectedPeminatan}</strong>.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "", email: "", password: "", confirmPassword: "",
                    role: "", status: "Active",
                    selectedFaculty: "", selectedProdi: "", selectedPeminatan: "", asalBINUS: "",
                    schoolName: "", grade: "",
                    businessName: "", businessCategory: "", businessAddress: "",
                  });
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Tambah Dosen Lain
              </button>
              <button
                onClick={() => navigate("/admin/users")}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Kembali ke Daftar User
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tambah User Baru</h1>
          <p className="text-gray-600">Tambahkan pengguna baru ke dalam sistem</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Section 1 - Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Dasar</h3>

                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Contoh: Dr. Ahmad Fauzi, M.Kom." />
                  </div>
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="nama@binus.ac.id" />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Minimal 8 karakter" />
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Konfirmasi Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Ulangi password" />
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Section 2 - Role */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Role & Status</h3>

                <div className="mb-4">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select id="role" name="role" value={formData.role} onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.role ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                    <option value="">Pilih Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Dosen">Dosen</option>
                    <option value="Siswa">Siswa</option>
                    <option value="UMKM">UMKM</option>
                    <option value="Guru">Guru</option>
                  </select>
                  {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select id="status" name="status" value={formData.status} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Section 3 - Role-specific fields */}
              {formData.role && (
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Tambahan</h3>

                  {/* Dosen Fields */}
                  {formData.role === "Dosen" && (
                    <>
                      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="text-xs text-blue-700">
                          Pilih Fakultas, Program Studi, dan Peminatan Dosen. Klasifikasi ini menentukan di mana Dosen akan muncul di Dashboard pengguna (UMKM, Guru, Siswa).
                        </p>
                      </div>

                      {/* Faculty */}
                      <div className="mb-4">
                        <label htmlFor="selectedFaculty" className="block text-sm font-medium text-gray-700 mb-2">
                          Fakultas / School <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <select id="selectedFaculty" name="selectedFaculty" value={formData.selectedFaculty} onChange={handleInputChange}
                            className={`w-full pl-10 pr-8 py-2 border ${errors.selectedFaculty ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}>
                            <option value="">— Pilih Fakultas / School —</option>
                            {FACULTY_HIERARCHY.map(f => (
                              <option key={f.name} value={f.name}>{f.shortName} — {f.name}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.selectedFaculty && <p className="mt-1 text-sm text-red-500">{errors.selectedFaculty}</p>}
                      </div>

                      {/* Prodi */}
                      <div className="mb-4">
                        <label htmlFor="selectedProdi" className="block text-sm font-medium text-gray-700 mb-2">
                          Program Studi <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select id="selectedProdi" name="selectedProdi" value={formData.selectedProdi} onChange={handleInputChange}
                            disabled={!formData.selectedFaculty}
                            className={`w-full px-3 pr-8 py-2 border ${errors.selectedProdi ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none disabled:bg-gray-50 disabled:text-gray-400`}>
                            <option value="">— Pilih Program Studi —</option>
                            {availableProdi.map(p => (
                              <option key={p.name} value={p.name}>{p.name}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.selectedProdi && <p className="mt-1 text-sm text-red-500">{errors.selectedProdi}</p>}
                      </div>

                      {/* Peminatan */}
                      <div className="mb-4">
                        <label htmlFor="selectedPeminatan" className="block text-sm font-medium text-gray-700 mb-2">
                          Peminatan <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select id="selectedPeminatan" name="selectedPeminatan" value={formData.selectedPeminatan} onChange={handleInputChange}
                            disabled={!formData.selectedProdi}
                            className={`w-full px-3 pr-8 py-2 border ${errors.selectedPeminatan ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none disabled:bg-gray-50 disabled:text-gray-400`}>
                            <option value="">— Pilih Peminatan —</option>
                            {availablePeminatan.map(pm => (
                              <option key={pm.name} value={pm.name}>{pm.name}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.selectedPeminatan && <p className="mt-1 text-sm text-red-500">{errors.selectedPeminatan}</p>}
                        {peminatanEntry && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {peminatanEntry.keywords.slice(0, 4).map(kw => (
                              <span key={kw} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">{kw}</span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Asal BINUS */}
                      <div className="mb-4">
                        <label htmlFor="asalBINUS" className="block text-sm font-medium text-gray-700 mb-2">
                          Asal BINUS <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <select id="asalBINUS" name="asalBINUS" value={formData.asalBINUS} onChange={handleInputChange}
                            className={`w-full pl-10 pr-8 py-2 border ${errors.asalBINUS ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}>
                            <option value="">— Pilih Kampus BINUS —</option>
                            {BINUS_CAMPUSES.map(c => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.asalBINUS && <p className="mt-1 text-sm text-red-500">{errors.asalBINUS}</p>}
                      </div>
                    </>
                  )}

                  {/* Siswa Fields */}
                  {formData.role === "Siswa" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Sekolah <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="text" id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2 border ${errors.schoolName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Contoh: SMA Negeri 1 Jakarta" />
                        </div>
                        {errors.schoolName && <p className="mt-1 text-sm text-red-500">{errors.schoolName}</p>}
                      </div>
                      <div className="mb-4">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                          Kelas <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="text" id="grade" name="grade" value={formData.grade} onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2 border ${errors.grade ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Contoh: 12 IPA 1" />
                        </div>
                        {errors.grade && <p className="mt-1 text-sm text-red-500">{errors.grade}</p>}
                      </div>
                    </>
                  )}

                  {/* UMKM Fields */}
                  {formData.role === "UMKM" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Usaha <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2 border ${errors.businessName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Contoh: CV. Maju Jaya" />
                        </div>
                        {errors.businessName && <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>}
                      </div>
                      <div className="mb-4">
                        <label htmlFor="businessCategory" className="block text-sm font-medium text-gray-700 mb-2">
                          Kategori Usaha <span className="text-red-500">*</span>
                        </label>
                        <select id="businessCategory" name="businessCategory" value={formData.businessCategory} onChange={handleInputChange}
                          className={`w-full px-4 py-2 border ${errors.businessCategory ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                          <option value="">Pilih Kategori</option>
                          <option value="Kuliner">Kuliner</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Teknologi">Teknologi</option>
                          <option value="Pertanian">Pertanian</option>
                          <option value="Kerajinan">Kerajinan</option>
                          <option value="Jasa">Jasa</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                        {errors.businessCategory && <p className="mt-1 text-sm text-red-500">{errors.businessCategory}</p>}
                      </div>
                      <div className="mb-4">
                        <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-2">Alamat Usaha</label>
                        <textarea id="businessAddress" name="businessAddress" value={formData.businessAddress} onChange={handleInputChange}
                          rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Alamat lengkap usaha..." />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-200">
              <button type="button" onClick={() => navigate("/admin/users")}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Batal
              </button>
              <button type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Simpan User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
