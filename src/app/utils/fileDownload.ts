/**
 * Utility functions for generating and downloading files
 */

/**
 * Generate and download a CSV file (simulating Excel)
 */
export function downloadExcelFile(data: any[], filename: string) {
  // Convert data to CSV format
  const headers = Object.keys(data[0] || {});
  const csvContent = [
    headers.join(","),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Handle values with commas by wrapping in quotes
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`;
        }
        return value;
      }).join(",")
    )
  ].join("\n");

  // Create blob and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generate and download a PDF file (simulated with HTML content)
 */
export function downloadPDFFile(content: string, filename: string) {
  // In a real app, you'd use a library like jsPDF or pdfmake
  // For now, we'll download as HTML which can be printed to PDF
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${filename}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      color: #1e40af;
      border-bottom: 2px solid #1e40af;
      padding-bottom: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f3f4f6;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 12px;
    }
  </style>
</head>
<body>
  ${content}
  <div class="footer">
    <p>Generated on ${new Date().toLocaleDateString('id-ID')}</p>
    <p>Platform Konsultasi UMKM & Sekolah</p>
  </div>
</body>
</html>
  `;

  const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.html`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Format consultation data for PDF export
 */
export function formatConsultationForPDF(consultation: any): string {
  return `
    <h1>Laporan Konsultasi</h1>
    <table>
      <tr>
        <th>Kode</th>
        <td>${consultation.code}</td>
      </tr>
      <tr>
        <th>Judul</th>
        <td>${consultation.title}</td>
      </tr>
      <tr>
        <th>Jenis</th>
        <td>${consultation.type}</td>
      </tr>
      <tr>
        <th>Kategori</th>
        <td>${consultation.category}</td>
      </tr>
      <tr>
        <th>Organisasi</th>
        <td>${consultation.organization}</td>
      </tr>
      <tr>
        <th>Konsultan</th>
        <td>${consultation.consultant}</td>
      </tr>
      <tr>
        <th>Tanggal</th>
        <td>${new Date(consultation.date).toLocaleDateString('id-ID')}</td>
      </tr>
      <tr>
        <th>Status</th>
        <td>${consultation.status}</td>
      </tr>
      <tr>
        <th>Prioritas</th>
        <td>${consultation.priority}</td>
      </tr>
    </table>
  `;
}

/**
 * Format financial data for Excel export
 */
export function formatFinancialDataForExcel(data: any[]) {
  return data.map(item => ({
    "Nama UMKM": item.umkmName,
    "Kode": item.code,
    "Periode": item.period,
    "Pendapatan": item.revenue,
    "Pengeluaran": item.expenses,
    "Keuntungan": item.profit,
    "Margin (%)": item.profitMargin,
    "Kategori": item.category,
  }));
}
