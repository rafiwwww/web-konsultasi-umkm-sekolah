import { Calendar, Clock, CheckCircle2 } from "lucide-react";

export function GuruRiwayatPage() {
  const completedConsultations = [
    {
      id: 1,
      user: "Rina Permata",
      topic: "Konsultasi Akademik - Matematika",
      date: "2026-02-10 10:00",
      status: "Completed",
      feedback: "Sangat membantu, penjelasan materi mudah dipahami",
      rating: 5,
    },
    {
      id: 2,
      user: "Fajar Ramadhan",
      topic: "Bimbingan Tugas Akhir",
      date: "2026-02-09 14:00",
      status: "Completed",
      feedback: "Terima kasih atas bimbingannya, sangat bermanfaat",
      rating: 5,
    },
    {
      id: 3,
      user: "Yoga Pratama",
      topic: "Persiapan Ujian Nasional",
      date: "2026-02-08 09:00",
      status: "Completed",
      feedback: "Tips belajar yang diberikan sangat efektif",
      rating: 4,
    },
    {
      id: 4,
      user: "Dina Kartika",
      topic: "Konsultasi Karir",
      date: "2026-02-07 11:00",
      status: "Completed",
      feedback: "Mendapat insight yang bagus untuk pemilihan jurusan",
      rating: 5,
    },
    {
      id: 5,
      user: "Siti Rahmawati",
      topic: "Bimbingan Skripsi",
      date: "2026-02-05 13:00",
      status: "Completed",
      feedback: "Penjelasan metodologi penelitian sangat jelas",
      rating: 5,
    },
    {
      id: 6,
      user: "Andi Setiawan",
      topic: "Konsultasi Akademik",
      date: "2026-02-03 10:00",
      status: "Completed",
      feedback: null,
      rating: null,
    },
  ];

  const renderStars = (rating: number | null) => {
    if (!rating) return <span className="text-sm text-gray-400">Belum ada rating</span>;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Riwayat Konsultasi</h1>
          <p className="text-gray-600">Konsultasi yang telah selesai</p>
        </div>

        {/* Completed Consultations Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topic
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {completedConsultations.map((consultation) => (
                  <tr key={consultation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-gray-900">{consultation.user}</div>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                          Siswa
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{consultation.topic}</div>
                      {consultation.feedback && (
                        <div className="text-xs text-gray-500 mt-1 max-w-md">
                          Feedback: {consultation.feedback}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(consultation.date).toLocaleDateString("id-ID")}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(consultation.date).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderStars(consultation.rating)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        <CheckCircle2 className="w-3 h-3" />
                        {consultation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {completedConsultations.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>Belum ada konsultasi yang selesai</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
