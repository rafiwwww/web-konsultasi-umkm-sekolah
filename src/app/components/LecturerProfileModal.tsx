import { X, Mail, BookOpen, Calendar, Star } from "lucide-react";
import { useEffect } from "react";
import { Avatar } from "./Avatar";

interface LecturerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  lecturer: {
    id: string;
    name: string;
    email: string;
    role: string;
    lecturerId?: string;
    specialization?: string;
    bio?: string;
    totalConsultations?: number;
    totalSeminars?: number;
    averageRating?: number;
    photoUrl?: string;
  };
  currentUserRole?: string;
  currentUserId?: string;
}

export function LecturerProfileModal({
  isOpen,
  onClose,
  lecturer,
  currentUserRole,
  currentUserId,
}: LecturerProfileModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Determine if user can edit
  const canEdit = currentUserRole === "Admin" || currentUserId === lecturer.id;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Profil Dosen</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* SECTION 1 - HEADER AREA */}
          <div className="flex flex-col items-center text-center pb-6 border-b border-gray-200">
            {/* Profile Picture */}
            <div className="mb-4">
              <Avatar
                profilePictureUrl={lecturer.photoUrl}
                initials={lecturer.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                size="xl"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{lecturer.name}</h3>

            {/* Lecturer ID */}
            {lecturer.lecturerId && (
              <p className="text-sm text-gray-500 mb-3">ID: {lecturer.lecturerId}</p>
            )}

            {/* Role Badge */}
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
              Dosen
            </span>
          </div>

          {/* SECTION 2 - CONTACT INFORMATION */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Informasi Kontak</h4>
            <div className="space-y-2">
              {/* Email */}
              <div className="flex items-center text-sm text-gray-700">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <a
                  href={`mailto:${lecturer.email}`}
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {lecturer.email}
                </a>
              </div>

              {/* Specialization */}
              {lecturer.specialization && (
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="w-4 h-4 mr-3 text-gray-400" />
                  <span>{lecturer.specialization}</span>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 3 - BIO / DESCRIPTION */}
          {lecturer.bio && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tentang Dosen</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{lecturer.bio}</p>
            </div>
          )}

          {/* SECTION 4 - STATISTICS (OPTIONAL) */}
          {(lecturer.totalConsultations !== undefined ||
            lecturer.totalSeminars !== undefined ||
            lecturer.averageRating !== undefined) && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Statistik</h4>
              <div className="grid grid-cols-3 gap-4">
                {/* Total Consultations */}
                {lecturer.totalConsultations !== undefined && (
                  <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 text-center">
                    <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {lecturer.totalConsultations}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">Konsultasi</p>
                  </div>
                )}

                {/* Total Seminars */}
                {lecturer.totalSeminars !== undefined && (
                  <div className="bg-green-50 rounded-lg border border-green-100 p-4 text-center">
                    <BookOpen className="w-5 h-5 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {lecturer.totalSeminars}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">Seminar</p>
                  </div>
                )}

                {/* Average Rating */}
                {lecturer.averageRating !== undefined && (
                  <div className="bg-yellow-50 rounded-lg border border-yellow-100 p-4 text-center">
                    <Star className="w-5 h-5 text-yellow-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {lecturer.averageRating.toFixed(1)}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">Rating</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Edit Button (Only for Admin or Lecturer themselves) */}
          {canEdit && (
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Edit Profil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}