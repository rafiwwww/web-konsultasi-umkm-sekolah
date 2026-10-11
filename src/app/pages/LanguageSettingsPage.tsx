import { Globe, Check } from "lucide-react";
import { useState } from "react";

export function LanguageSettingsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("id");

  const languages = [
    {
      code: "id",
      name: "Bahasa Indonesia",
      nativeName: "Bahasa Indonesia",
      description: "Gunakan Bahasa Indonesia untuk seluruh antarmuka",
    },
    {
      code: "en",
      name: "English",
      nativeName: "English",
      description: "Use English for the entire interface",
    },
  ];

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    // In a real app, this would update the language context/i18n
    alert(`Bahasa berhasil diubah ke ${code === "id" ? "Bahasa Indonesia" : "English"}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Pengaturan Bahasa</h1>
          <p className="text-sm text-gray-600 mt-1">
            Pilih bahasa yang ingin Anda gunakan untuk antarmuka platform
          </p>
        </div>

        {/* Language Selection */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Pilih Bahasa</h2>
                <p className="text-sm text-gray-600">Bahasa antarmuka pengguna</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedLanguage === language.code
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                          selectedLanguage === language.code ? "bg-blue-100" : "bg-gray-100"
                        }`}
                      >
                        {language.code === "id" ? "🇮🇩" : "🇬🇧"}
                      </div>
                      <div className="text-left">
                        <p className="text-base font-semibold text-gray-900">
                          {language.nativeName}
                        </p>
                        <p className="text-sm text-gray-600 mt-0.5">
                          {language.description}
                        </p>
                      </div>
                    </div>
                    {selectedLanguage === language.code && (
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-blue-900">Informasi Bahasa</h3>
              <ul className="mt-2 space-y-2 text-sm text-blue-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Perubahan bahasa akan diterapkan ke seluruh antarmuka platform
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Email notifikasi akan dikirim dalam bahasa yang Anda pilih
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Dokumen dan laporan akan menggunakan format sesuai bahasa yang dipilih
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Anda dapat mengubah bahasa kapan saja dari halaman ini
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Language Summary */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bahasa Aktif</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-3xl shadow-md">
              {selectedLanguage === "id" ? "🇮🇩" : "🇬🇧"}
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">
                {selectedLanguage === "id" ? "Bahasa Indonesia" : "English"}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {selectedLanguage === "id"
                  ? "Antarmuka platform ditampilkan dalam Bahasa Indonesia"
                  : "Platform interface is displayed in English"}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Terakhir diubah: 10 Februari 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
