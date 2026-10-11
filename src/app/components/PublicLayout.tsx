import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import binusLogo from "../../assets/8173a8b35e04c160c3cfab52b933df6cc8f70415.png";
import icLogo from "../../imports/no_bg_logo_only_IC_Ilmu_Consultancy__2_-removebg-preview.png";

export function PublicLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigation = [
    { name: "Beranda", sectionId: "beranda" },
    { name: "Tentang", sectionId: "tentang" },
    { name: "Layanan", sectionId: "layanan" },
    { name: "Kontak", sectionId: "kontak" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Public Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logos */}
            <div className="flex items-center gap-4 pl-2">
              <Link to="/">
                <img src={binusLogo} alt="BINUS University" className="h-20 w-auto" />
              </Link>
              <div className="w-px h-8 bg-gray-200" />
              <Link to="/">
                <img src={icLogo} alt="IC Ilmu Consultancy" className="h-10 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {location.pathname === "/" ? (
                // On home page - use smooth scroll
                <>
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.sectionId)}
                      className="px-4 py-2 rounded-lg text-sm transition-colors text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                    </button>
                  ))}
                </>
              ) : (
                // On other pages - link to home with hash
                <>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={`/#${item.sectionId}`}
                      className="px-4 py-2 rounded-lg text-sm transition-colors text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
              
              <div className="flex items-center space-x-2 ml-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Daftar
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {location.pathname === "/" ? (
                // On home page - use smooth scroll
                <>
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.sectionId)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-base transition-colors text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </button>
                  ))}
                </>
              ) : (
                // On other pages - link to home with hash
                <>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={`/#${item.sectionId}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg text-base transition-colors text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
              
              <div className="pt-3 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-3 py-2 text-center bg-gray-100 text-gray-700 rounded-lg text-base hover:bg-gray-200"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-3 py-2 text-center bg-blue-600 text-white rounded-lg text-base hover:bg-blue-700"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tentang Platform</h3>
              <p className="text-sm text-gray-600">
                Platform konsultasi terpadu untuk UMKM dan institusi pendidikan di Indonesia.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Kontak</h3>
              <p className="text-sm text-gray-600">Email: konsultasi@umkm.go.id</p>
              <p className="text-sm text-gray-600">Telp: (021) 1234-5678</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Jam Layanan</h3>
              <p className="text-sm text-gray-600">Senin - Jumat: 08.00 - 16.00 WIB</p>
              <p className="text-sm text-gray-600">Sabtu - Minggu: Libur</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2026 Platform Konsultasi UMKM & Sekolah. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
