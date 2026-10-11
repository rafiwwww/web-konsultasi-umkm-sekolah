import { useLocation, Link } from "react-router";
import { Construction } from "lucide-react";

export function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Page';

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Construction className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{pageName}</h1>
          <p className="text-gray-600 mb-6">
            Halaman ini sedang dalam pengembangan dan akan segera tersedia.
          </p>
          <Link
            to="/dashboard"
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
