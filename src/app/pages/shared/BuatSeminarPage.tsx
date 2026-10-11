import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Calendar, Link as LinkIcon, FileText, Image as ImageIcon, Upload } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../components/Toast";
import { useSeminars } from "../../context/SeminarContext";

export function BuatSeminarPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showToast } = useToast();
  const { createSeminar } = useSeminars();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateTime: "",
    zoomLink: "",
    targetAudience: "" as string,
    status: "Draft",
    posterUrl: "",
  });

  const [posterPreview, setPosterPreview] = useState<string>("");

  // Redirect if not Admin (Dosen can NO LONGER create seminars)
  if (!user || user.role !== "Admin") {
    navigate("/dashboard");
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePosterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file (JPG, PNG)");
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setPosterPreview(url);
        setFormData((prev) => ({ ...prev, posterUrl: url }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.description || !formData.dateTime || !formData.zoomLink) {
      alert("Mohon lengkapi semua field yang wajib diisi.");
      return;
    }

    // Parse dateTime into eventDate and eventTime
    const dateTimeObj = new Date(formData.dateTime);
    const eventDate = dateTimeObj.toISOString().split('T')[0];
    const eventTime = dateTimeObj.toTimeString().slice(0, 5);

    // Transform form data to match Seminar interface
    const seminarData = {
      title: formData.title,
      description: formData.description,
      host: user?.name || "Admin",
      eventDate,
      eventTime,
      location: "Zoom Meeting",
      zoomLink: formData.zoomLink,
      posterUrl: formData.posterUrl,
      status: formData.status as "Draft" | "Published" | "Cancelled",
      quota: 100,
      category: "Other" as const,
      targetAudience: formData.targetAudience ? [formData.targetAudience] : [],
      createdBy: user?.id || "admin",
    };

    // Add seminar to context
    createSeminar(seminarData);

    // Show success toast notification
    showToast("Seminar successfully created", "success");

    // Redirect after a short delay
    setTimeout(() => {
      navigate("/admin/seminars");
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/admin/seminars");
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Buat Seminar Baru</h1>
          <p className="text-gray-600">Tambahkan seminar atau workshop baru untuk pengguna</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Poster Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Poster Seminar
                </label>
                <div className="flex items-start gap-4">
                  {posterPreview ? (
                    <div className="relative">
                      <img
                        src={posterPreview}
                        alt="Poster Preview"
                        className="w-48 h-32 object-cover rounded-lg border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPosterPreview("");
                          setFormData((prev) => ({ ...prev, posterUrl: "" }));
                        }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-48 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                    >
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                      <span className="text-sm text-gray-600">Upload Poster</span>
                    </button>
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">
                      Upload gambar poster untuk seminar (JPG, PNG)
                    </p>
                    <p className="text-xs text-gray-500">
                      Ukuran maksimal: 2MB. Rekomendasi: 800x600px
                    </p>
                    {posterPreview && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-3 text-sm text-blue-600 hover:text-blue-700"
                      >
                        Ganti Poster
                      </button>
                    )}
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handlePosterUpload}
                  className="hidden"
                />
              </div>

              {/* Field 1 - Judul Seminar */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Seminar <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Contoh: Digital Marketing Strategy for UMKM"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Field 2 - Deskripsi */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Jelaskan detail seminar atau workshop yang akan diadakan..."
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Field 3 - Tanggal & Waktu */}
              <div>
                <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal & Waktu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="datetime-local"
                    id="dateTime"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Field 4 - Link Zoom */}
              <div>
                <label htmlFor="zoomLink" className="block text-sm font-medium text-gray-700 mb-2">
                  Link Zoom <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    id="zoomLink"
                    name="zoomLink"
                    value={formData.zoomLink}
                    onChange={handleInputChange}
                    placeholder="https://zoom.us/meeting/..."
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Pastikan link Zoom valid dan dapat diakses oleh peserta.
                </p>
              </div>

              {/* Field 5 - Target Peserta */}
              <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Peserta
                </label>
                <select
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih Target Peserta</option>
                  <option value="Dosen">Dosen</option>
                  <option value="UMKM">UMKM</option>
                  <option value="Siswa">Siswa</option>
                  <option value="Semua">Semua</option>
                </select>
                <p className="mt-2 text-sm text-gray-500">
                  Pilih kategori peserta yang dapat mengikuti seminar ini.
                </p>
              </div>

              {/* Field 6 - Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Draft">Draft</option>
                  <option value="Active">Active</option>
                </select>
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-medium">Draft:</span> Tidak terlihat publik &nbsp;|&nbsp; 
                  <span className="font-medium">Active:</span> Terlihat oleh pengguna
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Simpan Seminar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}