import { Calendar, CheckCircle2, Clock, Star } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useConsultationSystem } from "../../context/ConsultationSystemContext";

export function GuruRiwayatPage() {
  const { user } = useAuth();
  const { consultationBookings } = useConsultationSystem();

  const completedConsultations = consultationBookings
    .filter(
      consultation =>
        consultation.userId === user?.id &&
        consultation.status === "completed"
    )
    .sort(
      (a, b) =>
        new Date(b.completedAt || b.updatedAt).getTime() -
        new Date(a.completedAt || a.updatedAt).getTime()
    );

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Riwayat Konsultasi
          </h1>
          <p className="text-gray-600">Konsultasi yang telah selesai</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dosen
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topik
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
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
                {completedConsultations.map(consultation => (
                  <tr key={consultation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {consultation.lecturerName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {consultation.title}
                      </div>
                      {consultation.feedback && (
                        <div className="text-xs text-gray-500 mt-1 max-w-md">
                          Feedback: {consultation.feedback}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(
                          `${consultation.scheduledDate}T00:00:00`
                        ).toLocaleDateString("id-ID")}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {consultation.scheduledTimeSlot.startTime} -{" "}
                        {consultation.scheduledTimeSlot.endTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {consultation.rating ? (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-900">
                            {consultation.rating}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">
                          Belum ada rating
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        <CheckCircle2 className="w-3 h-3" />
                        Selesai
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
