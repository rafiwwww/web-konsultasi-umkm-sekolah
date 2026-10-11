import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  History,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  User as UserIcon,
  GraduationCap,
  Video,
  Clock,
} from "lucide-react";
import { Avatar } from "./Avatar";
import binusLogo from "../../assets/8173a8b35e04c160c3cfab52b933df6cc8f70415.png";
import icLogo from "../../imports/no_bg_logo_only_IC_Ilmu_Consultancy__2_-removebg-preview.png";

export function AuthenticatedLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Get navigation items based on role
  const getNavigationByRole = () => {
    if (!user) return [];

    switch (user.role) {
      case "Admin":
        return [
          { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
          { name: "Kelola User", href: "/admin/users", icon: UserIcon },
          { name: "Kelola Seminar", href: "/admin/seminars", icon: Video },
          { name: "Semua Konsultasi", href: "/admin/consultations", icon: FileText },
          { name: "Kelola Konsultasi", href: "/admin/zoom-meetings", icon: Video },
          { name: "Laporan Sistem", href: "/admin/reports", icon: BarChart3 },
        ];
      case "UMKM":
      case "Guru": // Guru uses the same navigation as UMKM
        return [
          { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
          { name: "Konsultasi Baru", href: "/consultation/new", icon: FileText },
          { name: "Jadwal Saya", href: "/consultation/manage", icon: Calendar },
          { name: "Seminar", href: "/seminars", icon: Video },
          { name: "Riwayat", href: "/consultation/manage", icon: History },
        ];
      case "Siswa":
        return [
          { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
          { name: "Konsultasi Baru", href: "/consultation/new", icon: FileText },
          { name: "Jadwal Saya", href: "/consultation/manage", icon: Calendar },
          { name: "Seminar", href: "/seminars", icon: Video },
          { name: "Riwayat", href: "/consultation/manage", icon: History },
        ];
      case "Dosen":
        return [
          { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
          { name: "Permintaan Konsultasi", href: "/mentor/requests", icon: FileText },
          { name: "Jadwal Konsultasi", href: "/mentor/schedule", icon: Calendar },
          { name: "Registrasi PKM", href: "/mentor/availability", icon: Clock },
          { name: "Seminar", href: "/seminars", icon: Video },
          { name: "Riwayat", href: "/mentor/history", icon: History },
        ];
      default:
        return [];
    }
  };

  const navigation = getNavigationByRole();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear auth state and redirect to login
    // In a real app, you would clear tokens, session storage, etc.
    setIsProfileDropdownOpen(false);
    logout();
    navigate("/login");
  };

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // If not authenticated, show nothing while redirecting
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Authenticated Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logos */}
            <div className="flex items-center gap-3 pl-2 py-2">
              <img src={binusLogo} alt="BINUS University" className="h-10 w-auto object-contain" />
              <div className="w-px h-7 bg-gray-200" />
              <img src={icLogo} alt="IC Ilmu Consultancy" className="h-8 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm flex items-center space-x-2 transition-all duration-200 ${ 
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-600 font-medium shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* User Profile Dropdown */}
              <div className="relative ml-4" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar
                      profilePictureUrl={user.profilePictureUrl}
                      initials={user.avatar}
                      size="sm"
                    />
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                      <p className="text-xs text-gray-500 mt-1">{user.organization}</p>
                      <span className="inline-block mt-2 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        {user.role}
                      </span>
                    </div>

                    {/* Profile Actions */}
                    <div className="py-2">
                      <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)} className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors">
                        <UserIcon className="w-4 h-4 text-gray-500" />
                        <span>Profil Saya</span>
                      </Link>
                      <Link to="/settings/account" onClick={() => setIsProfileDropdownOpen(false)} className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors">
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span>Pengaturan Akun</span>
                      </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Keluar</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Profile Avatar */}
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md"
              >
                <span className="text-white font-semibold text-sm">{user.avatar}</span>
              </button>
              
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base transition-colors ${ 
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Profile Dropdown */}
        {isProfileDropdownOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
              <p className="text-xs text-gray-500 mt-1">{user.organization}</p>
              <span className="inline-block mt-2 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                {user.role}
              </span>
            </div>

            <div className="py-2 space-y-1 px-4">
              <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)} className="w-full px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 rounded-lg transition-colors">
                <UserIcon className="w-4 h-4 text-gray-500" />
                <span>Profil Saya</span>
              </Link>
              <Link to="/settings/account" onClick={() => setIsProfileDropdownOpen(false)} className="w-full px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-gray-500" />
                <span>Pengaturan Akun</span>
              </Link>

              {/* Logout Mobile */}
              <button
                onClick={handleLogout}
                className="w-full px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 rounded-lg transition-colors mt-2 border-t border-gray-100 pt-4"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar</span>
              </button>
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