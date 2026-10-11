import { Calendar, Clock, ExternalLink, CheckCircle } from "lucide-react";

export function GuruJadwalPage() {
  const schedules = [
    {
      id: 1,
      date: "2026-02-12",
      time: "10:00",
      user: "Rina Permata",
      topic: "Konsultasi Akademik - Matematika",
      zoomLink: "https://zoom.us/j/123456789",
      status: "Scheduled",
    },
    {
      id: 2,
      date: "2026-02-12",
      time: "14:00",
      user: "Fajar Ramadhan",
      topic: "Bimbingan Tugas Akhir",
      zoomLink: "https://zoom.us/j/987654321",
      status: "Scheduled",
    },
    {
      id: 3,
      date: "2026-02-13",
      time: "09:00",
      user: "Yoga Pratama",
      topic: "Konsultasi Akademik",
      zoomLink: "https://zoom.us/j/456789123",
      status: "Scheduled",
    },
    {
      id: 4,
      date: "2026-02-14",
      time: "10:00",
      user: "Dina Kartika",
      topic: "Konsultasi Karir",
      zoomLink: "https://zoom.us/j/741258963",
      status: "Scheduled",
    },
    {
      id: 5,
      date: "2026-02-15",
      time: "11:00",
      user: "Siti Rahmawati",
      topic: "Bimbingan Skripsi",
      zoomLink: "https://zoom.us/j/159357486",
      status: "Scheduled",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Scheduled" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700";
  };

  const isToday = (dateString: string) => {
    const today = new Date("2026-02-12"); // Using current date from context
    const scheduleDate = new Date(dateString);
    return scheduleDate.toDateString() === today.toDateString();
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Jadwal Konsultasi</h1>
          <p className="text-gray-600">Kelola jadwal konsultasi siswa</p>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topic
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zoom Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {schedules.map((schedule) => (
                  <tr
                    key={schedule.id}
                    className={`hover:bg-gray-50 ${isToday(schedule.date) ? "bg-blue-50" : ""}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {new Date(schedule.date).toLocaleDateString("id-ID", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                        {isToday(schedule.date) && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-blue-600 text-white rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {schedule.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-gray-900">{schedule.user}</div>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                          Siswa
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">{schedule.topic}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={schedule.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Join
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(schedule.status)}`}>
                        {schedule.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                        <CheckCircle className="w-4 h-4" />
                        Mark Completed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {schedules.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>Belum ada jadwal konsultasi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
