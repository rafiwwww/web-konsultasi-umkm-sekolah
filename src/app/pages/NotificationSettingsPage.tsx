import { Bell, Mail, MessageSquare, FileText, DollarSign, Settings as SettingsIcon } from "lucide-react";
import { useState } from "react";

export function NotificationSettingsPage() {
  const [notifications, setNotifications] = useState({
    consultationUpdates: {
      inApp: true,
      email: true,
    },
    financialReports: {
      inApp: true,
      email: false,
    },
    systemAnnouncements: {
      inApp: true,
      email: true,
    },
    consultantMessages: {
      inApp: true,
      email: true,
    },
    statusChanges: {
      inApp: true,
      email: false,
    },
    weeklyDigest: {
      inApp: false,
      email: true,
    },
  });

  const handleToggle = (category: string, type: "inApp" | "email") => {
    setNotifications({
      ...notifications,
      [category]: {
        ...notifications[category as keyof typeof notifications],
        [type]: !notifications[category as keyof typeof notifications][type],
      },
    });
  };

  const notificationCategories = [
    {
      id: "consultationUpdates",
      icon: FileText,
      title: "Pembaruan Konsultasi",
      description: "Notifikasi saat status konsultasi Anda berubah",
      color: "blue",
    },
    {
      id: "financialReports",
      icon: DollarSign,
      title: "Laporan Keuangan",
      description: "Pemberitahuan tentang laporan keuangan baru",
      color: "green",
    },
    {
      id: "systemAnnouncements",
      icon: Bell,
      title: "Pengumuman Sistem",
      description: "Pembaruan penting tentang platform",
      color: "purple",
    },
    {
      id: "consultantMessages",
      icon: MessageSquare,
      title: "Pesan Konsultan",
      description: "Pesan baru dari konsultan Anda",
      color: "orange",
    },
    {
      id: "statusChanges",
      icon: SettingsIcon,
      title: "Perubahan Status",
      description: "Perubahan status pada permintaan Anda",
      color: "indigo",
    },
    {
      id: "weeklyDigest",
      icon: Mail,
      title: "Rangkuman Mingguan",
      description: "Ringkasan aktivitas mingguan Anda",
      color: "pink",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600" },
      green: { bg: "bg-green-50", text: "text-green-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
      pink: { bg: "bg-pink-50", text: "text-pink-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Pengaturan Notifikasi</h1>
          <p className="text-sm text-gray-600 mt-1">
            Kelola bagaimana Anda menerima notifikasi dari platform
          </p>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Preferensi Notifikasi</h2>
            <p className="text-sm text-gray-600 mt-1">
              Pilih jenis notifikasi yang ingin Anda terima
            </p>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-200 bg-gray-50">
            <div className="col-span-6">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Jenis Notifikasi
              </p>
            </div>
            <div className="col-span-3 text-center">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Dalam Aplikasi
              </p>
            </div>
            <div className="col-span-3 text-center">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Email
              </p>
            </div>
          </div>

          {/* Notification Items */}
          <div className="divide-y divide-gray-200">
            {notificationCategories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              const Icon = category.icon;
              return (
                <div key={category.id} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Category Info */}
                    <div className="col-span-1 md:col-span-6 flex items-start space-x-3">
                      <div className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${colorClasses.text}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{category.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>

                    {/* In-App Toggle */}
                    <div className="col-span-1 md:col-span-3 flex md:justify-center items-center">
                      <label className="flex items-center space-x-3 md:space-x-0">
                        <span className="md:hidden text-sm text-gray-700">Dalam Aplikasi:</span>
                        <button
                          onClick={() => handleToggle(category.id, "inApp")}
                          className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                            notifications[category.id as keyof typeof notifications].inApp
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                              notifications[category.id as keyof typeof notifications].inApp
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                      </label>
                    </div>

                    {/* Email Toggle */}
                    <div className="col-span-1 md:col-span-3 flex md:justify-center items-center">
                      <label className="flex items-center space-x-3 md:space-x-0">
                        <span className="md:hidden text-sm text-gray-700">Email:</span>
                        <button
                          onClick={() => handleToggle(category.id, "email")}
                          className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                            notifications[category.id as keyof typeof notifications].email
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                              notifications[category.id as keyof typeof notifications].email
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Email Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Pengaturan Email</h2>
                <p className="text-sm text-gray-600">Preferensi pengiriman email notifikasi</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frekuensi Pengiriman
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Segera (Real-time)</option>
                <option>Rangkuman Harian</option>
                <option>Rangkuman Mingguan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Notifikasi
              </label>
              <input
                type="email"
                value="budi.santoso@umkm.com"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Gunakan halaman Pengaturan Akun untuk mengubah email
              </p>
            </div>
          </div>
        </div>

        {/* Do Not Disturb */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Mode Jangan Ganggu</h2>
                <p className="text-sm text-gray-600">Nonaktifkan notifikasi pada waktu tertentu</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Aktifkan Mode Jangan Ganggu</p>
                <p className="text-xs text-gray-600 mt-1">
                  Jeda semua notifikasi push selama jam kerja
                </p>
              </div>
              <button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-gray-300">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 translate-x-0"></div>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mulai
                </label>
                <input
                  type="time"
                  value="22:00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selesai
                </label>
                <input
                  type="time"
                  value="08:00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
