import { useState } from "react";
import { Search, Download, Filter, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { downloadExcelFile, formatFinancialDataForExcel } from "../utils/fileDownload";
import { useAuth } from "../context/AuthContext";
import { MonthPicker } from "../components/DateRangePicker";

export function FinancialReportPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("2026-02");
  const [filterCategory, setFilterCategory] = useState("all");

  const financialData = [
    {
      id: 1,
      umkmName: "CV. Maju Jaya",
      code: "UMKM-001",
      period: "Februari 2026",
      revenue: 125000000,
      expenses: 85000000,
      profit: 40000000,
      profitMargin: 32.0,
      category: "Perdagangan",
      trend: "up",
    },
    {
      id: 2,
      umkmName: "Toko Berkah",
      code: "UMKM-002",
      period: "Februari 2026",
      revenue: 85000000,
      expenses: 60000000,
      profit: 25000000,
      profitMargin: 29.4,
      category: "Retail",
      trend: "up",
    },
    {
      id: 3,
      umkmName: "PT. Sukses Mandiri",
      code: "UMKM-003",
      period: "Februari 2026",
      revenue: 250000000,
      expenses: 190000000,
      profit: 60000000,
      profitMargin: 24.0,
      category: "Manufaktur",
      trend: "down",
    },
    {
      id: 4,
      umkmName: "Warung Makan Sederhana",
      code: "UMKM-004",
      period: "Februari 2026",
      revenue: 45000000,
      expenses: 32000000,
      profit: 13000000,
      profitMargin: 28.9,
      category: "F&B",
      trend: "up",
    },
    {
      id: 5,
      umkmName: "Jasa Konstruksi Bangun",
      code: "UMKM-005",
      period: "Februari 2026",
      revenue: 180000000,
      expenses: 145000000,
      profit: 35000000,
      profitMargin: 19.4,
      category: "Jasa",
      trend: "up",
    },
    {
      id: 6,
      umkmName: "Toko Elektronik Jaya",
      code: "UMKM-006",
      period: "Februari 2026",
      revenue: 95000000,
      expenses: 78000000,
      profit: 17000000,
      profitMargin: 17.9,
      category: "Retail",
      trend: "down",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const filteredData = financialData.filter((item) => {
    const matchesSearch =
      item.umkmName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate totals
  const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = filteredData.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = filteredData.reduce((sum, item) => sum + item.profit, 0);
  const avgProfitMargin = filteredData.length > 0
    ? filteredData.reduce((sum, item) => sum + item.profitMargin, 0) / filteredData.length
    : 0;

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Laporan Keuangan UMKM</h1>
          <p className="text-gray-600">Lihat dan analisis laporan keuangan UMKM terdaftar</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Pendapatan</p>
                <p className="text-2xl font-semibold text-gray-900">{formatCurrency(totalRevenue)}</p>
                <p className="text-xs text-green-600 mt-2">↑ +15% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Pengeluaran</p>
                <p className="text-2xl font-semibold text-gray-900">{formatCurrency(totalExpenses)}</p>
                <p className="text-xs text-red-600 mt-2">↑ +8% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Keuntungan</p>
                <p className="text-2xl font-semibold text-gray-900">{formatCurrency(totalProfit)}</p>
                <p className="text-xs text-green-600 mt-2">↑ +22% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rata-rata Margin</p>
                <p className="text-2xl font-semibold text-gray-900">{avgProfitMargin.toFixed(1)}%</p>
                <p className="text-xs text-green-600 mt-2">↑ +2.5% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Cari UMKM
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cari berdasarkan nama atau kode UMKM..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="filterPeriod" className="block text-sm font-medium text-gray-700 mb-1">
                Periode
              </label>
              <MonthPicker
                value={filterPeriod}
                onChange={(month) => setFilterPeriod(month)}
                placeholder="Pilih bulan"
              />
            </div>

            <div>
              <label htmlFor="filterCategory" className="block text-sm font-medium text-gray-700 mb-1">
                Kategori
              </label>
              <select
                id="filterCategory"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Semua Kategori</option>
                <option value="Perdagangan">Perdagangan</option>
                <option value="Retail">Retail</option>
                <option value="Manufaktur">Manufaktur</option>
                <option value="F&B">F&B</option>
                <option value="Jasa">Jasa</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Menampilkan <span className="font-semibold">{filteredData.length}</span> dari{" "}
            <span className="font-semibold">{financialData.length}</span> UMKM
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter Lanjutan
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center"
              onClick={() => {
                const formattedData = formatFinancialDataForExcel(filteredData);
                downloadExcelFile(formattedData, "Laporan Keuangan UMKM.xlsx");
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Excel
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kode
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama UMKM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pendapatan
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pengeluaran
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Keuntungan
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Margin (%)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tren
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.code}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.umkmName}</div>
                      <div className="text-xs text-gray-500">{item.period}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{formatCurrency(item.revenue)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{formatCurrency(item.expenses)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium text-green-600">{formatCurrency(item.profit)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{item.profitMargin.toFixed(1)}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.trend === "up" ? (
                        <TrendingUp className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 border-t-2 border-gray-300">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-sm font-semibold text-gray-900">
                    TOTAL
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    {formatCurrency(totalRevenue)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    {formatCurrency(totalExpenses)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-green-600">
                    {formatCurrency(totalProfit)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    {avgProfitMargin.toFixed(1)}%
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Informasi</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Data laporan keuangan diperbarui setiap akhir bulan</li>
            <li>• Margin keuntungan dihitung sebagai (Keuntungan / Pendapatan) × 100%</li>
            <li>• Tren menunjukkan perbandingan dengan bulan sebelumnya</li>
            <li>• Untuk detail lengkap, silakan download laporan dalam format Excel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}