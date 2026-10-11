import { useAuth } from "../context/AuthContext";
import { AdminDashboardPage } from "./admin/AdminDashboardPage";
import { DosenDashboardPage } from "./dosen/DosenDashboardPage";
import { UMKMDashboardPage } from "./umkm/UMKMDashboardPage";
import { SiswaDashboardPage } from "./siswa/SiswaDashboardPage";

export function DashboardPage() {
  const { user } = useAuth();

  // Route to correct dashboard based on role
  if (!user) return null;

  switch (user.role) {
    case "Admin":
      return <AdminDashboardPage />;
    case "Dosen":
      return <DosenDashboardPage />;
    case "UMKM":
    case "Guru": // Guru uses the same dashboard as UMKM
      return <UMKMDashboardPage />;
    case "Siswa":
      return <SiswaDashboardPage />;
    default:
      return <AdminDashboardPage />;
  }
}