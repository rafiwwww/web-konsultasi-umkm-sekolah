import { User, Mail, Briefcase, Building2, Phone, Camera, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { ProfilePictureUploadModal } from "../components/ProfilePictureUploadModal";
import { useToast } from "../components/Toast";
import { Avatar } from "../components/Avatar";

export function ProfilePage() {
  const { user, updateProfilePicture, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    // Role-specific fields
    lecturerId: user.lecturerId || "",
    specialization: user.specialization || "",
    bio: user.bio || "",
    schoolName: user.schoolName || "",
    subject: user.subject || "",
    grade: user.grade || "",
    businessName: user.businessName || "",
    businessCategory: user.businessCategory || "",
    businessAddress: user.businessAddress || "",
  });

  const handleSave = () => {
    // Update profile with actual persistence
    const updates: any = {
      name: formData.name,
      phone: formData.phone,
    };

    // Add role-specific fields
    if (user.role === "Dosen") {
      updates.specialization = formData.specialization;
      updates.bio = formData.bio;
    } else if (user.role === "UMKM") {
      updates.businessName = formData.businessName;
      updates.businessCategory = formData.businessCategory;
      updates.businessAddress = formData.businessAddress;
    } else if (user.role === "Siswa") {
      updates.schoolName = formData.schoolName;
      updates.grade = formData.grade;
    }

    updateProfile(updates);
    showToast("Profile updated successfully", "success");
    setIsEditing(false);
  };

  const handleProfilePictureSave = (imageUrl: string | null) => {
    updateProfilePicture(imageUrl);
    showToast("Profile picture updated successfully", "success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Get role display name
  const getRoleDisplayName = () => {
    switch (user.role) {
      case "Admin":
        return "Admin";
      case "Dosen":
        return "Dosen";
      case "UMKM":
        return "Pemilik UMKM";
      case "Siswa":
        return "Siswa";
      default:
        return user.role;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Profil Saya</h1>
          <p className="text-sm text-gray-600 mt-1">
            Kelola informasi profil dan data pribadi Anda
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Avatar Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar
                  profilePictureUrl={user.profilePictureUrl}
                  initials={user.avatar}
                  size="xl"
                />
                <button
                  className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  onClick={() => setIsUploadModalOpen(true)}
                >
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{getRoleDisplayName()}</p>
                {user.organization && (
                  <p className="text-sm text-gray-500">{user.organization}</p>
                )}
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Informasi Pribadi</h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  Edit Profil
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Simpan
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>Nama Lengkap</span>
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>Email</span>
                </label>
                <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.email}</p>
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>Nomor Telepon</span>
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.phone || "-"}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span>Peran</span>
                </label>
                <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{getRoleDisplayName()}</p>
              </div>

              {/* Dosen-specific fields */}
              {user.role === "Dosen" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lecturer ID
                    </label>
                    <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.lecturerId}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span>Specialization</span>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.specialization}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.bio}</p>
                    )}
                  </div>
                </>
              )}

              {/* UMKM-specific fields */}
              {user.role === "UMKM" && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-gray-500" />
                      <span>Nama UMKM</span>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.businessName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori Usaha
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="businessCategory"
                        value={formData.businessCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.businessCategory}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>Alamat Usaha</span>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 px-4 py-2 bg-gray-50 rounded-lg">{formData.businessAddress}</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Akun</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">ID Pengguna</p>
              <p className="text-gray-900 font-mono mt-1">#{user.id}</p>
            </div>
            <div>
              <p className="text-gray-600">Tanggal Bergabung</p>
              <p className="text-gray-900 mt-1">{new Date(user.createdAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</p>
            </div>
            <div>
              <p className="text-gray-600">Status Akun</p>
              <p className="text-gray-900 mt-1">
                <span className="inline-block px-2.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  Aktif
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-600">Terakhir Login</p>
              <p className="text-gray-900 mt-1">{new Date(user.lastLogin).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} WIB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Upload Modal */}
      <ProfilePictureUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSave={handleProfilePictureSave}
        currentImage={user.profilePictureUrl}
      />
    </div>
  );
}