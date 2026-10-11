import { createBrowserRouter, Outlet } from "react-router";
import { PublicLayout } from "./components/PublicLayout";
import { AuthenticatedLayout } from "./components/AuthenticatedLayout";
import { AuthProvider } from "./context/AuthContext";
import { ConsultationSystemProvider } from "./context/ConsultationSystemContext";
import { SeminarProvider } from "./context/SeminarContext";
import { ToastProvider } from "./components/Toast";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ConsultationFormPageNew } from "./pages/ConsultationFormPageNew";
import { ConsultationManagementPage } from "./pages/ConsultationManagementPage";
import { FinancialReportPage } from "./pages/FinancialReportPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AccountSettingsPage } from "./pages/AccountSettingsPage";
import { NotificationSettingsPage } from "./pages/NotificationSettingsPage";
import { LanguageSettingsPage } from "./pages/LanguageSettingsPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

// Admin pages
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { KelolaUserPage } from "./pages/admin/KelolaUserPage";
import { TambahUserPage } from "./pages/admin/TambahUserPage";
import { KelolaSeminarPage } from "./pages/admin/KelolaSeminarPage";
import { SemuaKonsultasiPage } from "./pages/admin/SemuaKonsultasiPage";
import { LaporanSistemPage } from "./pages/admin/LaporanSistemPage";
import { KelolaZoomPage } from "./pages/admin/KelolaZoomPage";

// Dosen pages
import { PermintaanKonsultasiPage } from "./pages/dosen/PermintaanKonsultasiPage";
import { JadwalKonsultasiPage } from "./pages/dosen/JadwalKonsultasiPage";
import { SeminarPage } from "./pages/dosen/SeminarPage";
import { RiwayatPage } from "./pages/dosen/RiwayatPage";
import { LecturerAvailabilityPage } from "./pages/dosen/LecturerAvailabilityPage";

// Shared pages
import { BuatSeminarPage } from "./pages/shared/BuatSeminarPage";
import { SeminarsPage } from "./pages/shared/SeminarsPage";

// Root layout that provides all contexts
function RootLayout() {
  return (
    <AuthProvider>
      <ConsultationSystemProvider>
        <SeminarProvider>
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </SeminarProvider>
      </ConsultationSystemProvider>
    </AuthProvider>
  );
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      // Public routes (unauthenticated)
      {
        Component: PublicLayout,
        children: [
          { path: "/", Component: LandingPage },
          { path: "/login", Component: LoginPage },
          { path: "/register", Component: RegisterPage },
        ],
      },
      // Authenticated routes (logged in)
      {
        Component: AuthenticatedLayout,
        children: [
          { path: "/dashboard", Component: DashboardPage },
          { path: "/consultation/new", Component: ConsultationFormPageNew },
          { path: "/consultation/manage", Component: ConsultationManagementPage },
          { path: "/reports/financial", Component: FinancialReportPage },
          { path: "/profile", Component: ProfilePage },
          { path: "/settings/account", Component: AccountSettingsPage },
          { path: "/settings/notifications", Component: NotificationSettingsPage },
          { path: "/settings/language", Component: LanguageSettingsPage },
          
          // Admin routes
          { path: "/admin/dashboard", Component: AdminDashboardPage },
          { path: "/admin/users", Component: KelolaUserPage },
          { path: "/admin/users/create", Component: TambahUserPage },
          { path: "/admin/seminars", Component: KelolaSeminarPage },
          { path: "/admin/consultations", Component: SemuaKonsultasiPage },
          { path: "/admin/reports", Component: LaporanSistemPage },
          { path: "/admin/zoom-meetings", Component: KelolaZoomPage },
          
          // Dosen routes
          { path: "/mentor/requests", Component: PermintaanKonsultasiPage },
          { path: "/mentor/schedule", Component: JadwalKonsultasiPage },
          { path: "/mentor/availability", Component: LecturerAvailabilityPage },
          { path: "/mentor/seminars", Component: SeminarPage },
          { path: "/mentor/history", Component: RiwayatPage },
          
          // Shared routes (Admin & Dosen only)
          { path: "/seminar/new", Component: BuatSeminarPage },
          { path: "/seminars", Component: SeminarsPage },
          
          // UMKM routes
          { path: "/umkm/seminars", Component: PlaceholderPage },
          
          // Student (Siswa) routes
          { path: "/student/seminars", Component: PlaceholderPage },
          { path: "/student/history", Component: PlaceholderPage },
        ],
      },
    ],
  },
]);