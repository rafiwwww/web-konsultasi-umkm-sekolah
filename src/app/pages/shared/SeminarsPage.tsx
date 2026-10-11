import { useState } from "react";
import { Calendar, Clock, Users, MapPin, Link as LinkIcon, Search, Filter } from "lucide-react";
import { useSeminars } from "../../context/SeminarContext";

export function SeminarsPage() {
  const { getPublishedSeminars } = useSeminars();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Get only published seminars (no dummy data)
  const allSeminars = getPublishedSeminars();

  const filteredSeminars = allSeminars.filter((seminar) => {
    const matchesSearch =
      seminar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seminar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seminar.host.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "available" && seminar.participants < seminar.quota) ||
      (filterStatus === "full" && seminar.participants >= seminar.quota);

    return matchesSearch && matchesFilter;
  });

  const getAvailabilityStatus = (participants: number, quota: number) => {
    const slotsLeft = quota - participants;
    if (slotsLeft === 0) {
      return { text: "Penuh", color: "bg-red-100 text-red-700" };
    } else if (slotsLeft <= 5) {
      return { text: `${slotsLeft} Slot Tersisa`, color: "bg-yellow-100 text-yellow-700" };
    } else {
      return { text: "Tersedia", color: "bg-green-100 text-green-700" };
    }
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Seminar & Workshop</h1>
          <p className="text-gray-600">Ikuti seminar dan workshop untuk meningkatkan pengetahuan Anda</p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari seminar..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Semua Status</option>
                <option value="available">Tersedia</option>
                <option value="full">Penuh</option>
              </select>
            </div>
          </div>
        </div>

        {/* Seminars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSeminars.map((seminar) => {
            const availability = getAvailabilityStatus(seminar.participants, seminar.quota);
            const isAvailable = seminar.participants < seminar.quota;

            return (
              <div
                key={seminar.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Poster Image */}
                {seminar.posterUrl && (
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={seminar.posterUrl}
                      alt={seminar.title}
                      className="w-full h-full object-cover"
                    />
                    <span className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full ${availability.color}`}>
                      {availability.text}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{seminar.title}</h3>
                    <p className="text-sm text-gray-600">{seminar.description}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Host: {seminar.host}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{new Date(seminar.eventDate).toLocaleDateString("id-ID")}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{seminar.eventTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{seminar.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span>
                        {seminar.participants} / {seminar.quota} Peserta
                      </span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <div className="pt-4 border-t border-gray-200">
                    {seminar.zoomLink ? (
                      <a
                        href={seminar.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md transition-colors ${
                          isAvailable
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        onClick={(e) => {
                          if (!isAvailable) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <LinkIcon className="w-4 h-4" />
                        {isAvailable ? "Join Seminar" : "Kuota Penuh"}
                      </a>
                    ) : (
                      <div className="text-center text-sm text-gray-500">
                        Link akan tersedia menjelang acara
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSeminars.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">Tidak ada seminar yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}