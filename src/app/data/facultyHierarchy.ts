// Shared Faculty → Program Studi → Peminatan hierarchy
// Used by both the User Dashboard widget and the Admin TambahUserPage.
// Any Dosen added through Admin uses this same structure, so their
// expertise keywords will match what Users see in the widget.

export interface PeminatanEntry {
  name: string;
  keywords: string[];
}

export interface ProdiEntry {
  name: string;
  peminatan: PeminatanEntry[];
}

export interface FacultyEntry {
  name: string;
  shortName: string;
  prodi: ProdiEntry[];
}

export const FACULTY_HIERARCHY: FacultyEntry[] = [
  {
    name: "School of Computer Science",
    shortName: "SoCS",
    prodi: [
      {
        name: "Teknik Informatika",
        peminatan: [
          { name: "Software Engineering", keywords: ["Software Engineering", "Agile", "System Architecture", "Software Development"] },
          { name: "Kecerdasan Buatan & Machine Learning", keywords: ["AI", "Machine Learning", "Data Science"] },
          { name: "Keamanan Siber & Jaringan", keywords: ["Cybersecurity", "Network Security", "IT Infrastructure"] },
          { name: "Cloud Computing & DevOps", keywords: ["Cloud Computing", "DevOps", "Container Technology"] },
        ],
      },
      {
        name: "Ilmu Komputer",
        peminatan: [
          { name: "Komputasi Cerdas", keywords: ["AI", "Machine Learning", "Data Science"] },
          { name: "Pemrograman & Rekayasa Sistem", keywords: ["Software Engineering", "System Architecture", "Agile"] },
        ],
      },
    ],
  },
  {
    name: "School of Information Systems",
    shortName: "SoIS",
    prodi: [
      {
        name: "Sistem Informasi",
        peminatan: [
          { name: "Manajemen Sistem Informasi", keywords: ["Information Systems", "Database Management", "Systems Analysis"] },
          { name: "Analitik Data & Business Intelligence", keywords: ["Data Analytics", "Database Management", "Information Systems"] },
        ],
      },
      {
        name: "Manajemen Informatika",
        peminatan: [
          { name: "Inovasi Produk & Startup Digital", keywords: ["Product Innovation", "Startup Development", "Business Model"] },
          { name: "Rantai Pasok & Sistem ERP", keywords: ["Supply Chain", "Logistics", "Procurement", "Operations Management"] },
        ],
      },
    ],
  },
  {
    name: "School of Design",
    shortName: "SoD",
    prodi: [
      {
        name: "Desain Komunikasi Visual",
        peminatan: [
          { name: "Branding & Identitas Visual", keywords: ["Brand Design", "Visual Identity", "Creative Strategy"] },
          { name: "Desain Grafis & Multimedia", keywords: ["Graphic Design", "Multimedia", "UI/UX Design"] },
        ],
      },
      {
        name: "Desain Interior",
        peminatan: [
          { name: "Perancangan Ruang Komersial", keywords: ["Interior Design", "Space Planning", "Commercial Design"] },
          { name: "Desain Berkelanjutan", keywords: ["Sustainable Design", "Environmental Design", "Green Architecture"] },
        ],
      },
    ],
  },
  {
    name: "School of Accounting",
    shortName: "SoA",
    prodi: [
      {
        name: "Akuntansi",
        peminatan: [
          { name: "Perpajakan & Audit", keywords: ["Tax Planning", "Financial Audit", "Tax Compliance", "Tax Management"] },
          { name: "Akuntansi Manajemen", keywords: ["Management Accounting", "Cost Control", "Financial Analysis", "Accounting"] },
          { name: "Akuntansi Keuangan", keywords: ["Accounting", "Financial Planning", "Financial Reporting", "Tax Management"] },
        ],
      },
      {
        name: "Keuangan",
        peminatan: [
          { name: "Perencanaan & Investasi Keuangan", keywords: ["Financial Planning", "Finance", "Investment", "Budgeting"] },
          { name: "Manajemen Risiko Keuangan", keywords: ["Financial Planning", "Accounting", "Financial Analysis", "Cost Control"] },
        ],
      },
    ],
  },
  {
    name: "Faculty of Digital Communication and Hotel & Tourism",
    shortName: "FDC&HT",
    prodi: [
      {
        name: "Komunikasi Pemasaran Digital",
        peminatan: [
          { name: "Pemasaran Digital & Media Sosial", keywords: ["Digital Marketing", "Social Media", "E-Commerce", "Marketing"] },
          { name: "Hubungan Masyarakat & Media", keywords: ["Business Communication", "Public Relations", "Media Strategy"] },
        ],
      },
      {
        name: "Hotel & Hospitality Management",
        peminatan: [
          { name: "Manajemen Hotel & Akomodasi", keywords: ["Hospitality Management", "Hotel Operations", "Service Management"] },
          { name: "Food & Beverage Management", keywords: ["F&B Management", "Culinary Business", "Restaurant Management"] },
        ],
      },
      {
        name: "Pariwisata",
        peminatan: [
          { name: "Manajemen Destinasi Wisata", keywords: ["Tourism Management", "Destination Marketing", "Travel Business"] },
          { name: "Pemasaran Pariwisata", keywords: ["Marketing", "Digital Marketing", "Tourism Marketing"] },
        ],
      },
    ],
  },
  {
    name: "Faculty of Engineering",
    shortName: "FoE",
    prodi: [
      {
        name: "Teknik Industri",
        peminatan: [
          { name: "Manajemen Operasional & Produksi", keywords: ["Operations Management", "Supply Chain", "Quality Control"] },
          { name: "Perekayasaan Sistem Industri", keywords: ["Industrial Engineering", "Engineering", "Project Management"] },
        ],
      },
      {
        name: "Teknik Elektro & Otomasi",
        peminatan: [
          { name: "Otomasi Industri", keywords: ["Automation", "Robotics", "Industrial Engineering"] },
          { name: "Sistem Kontrol & Robotika", keywords: ["Robotics", "Automation", "Control Systems"] },
        ],
      },
      {
        name: "Arsitektur",
        peminatan: [
          { name: "Perencanaan Infrastruktur", keywords: ["Infrastructure Planning", "Engineering", "Project Management"] },
          { name: "Arsitektur & Tata Ruang", keywords: ["Architecture", "Urban Planning", "Space Design", "Structural Design"] },
        ],
      },
    ],
  },
  {
    name: "Faculty of Humanities",
    shortName: "FoH",
    prodi: [
      {
        name: "Hukum Bisnis",
        peminatan: [
          { name: "Hukum Kontrak & Bisnis", keywords: ["Business Law", "Legal Compliance", "Contract Management", "Contract Law", "Civil Law", "Dispute Resolution"] },
          { name: "Kekayaan Intelektual", keywords: ["Intellectual Property", "Patent Law", "Trademark"] },
        ],
      },
      {
        name: "Psikologi",
        peminatan: [
          { name: "Psikologi Pendidikan", keywords: ["Educational Psychology", "Student Counseling", "Learning Methods"] },
          { name: "Psikologi Organisasi", keywords: ["HR Management", "Organizational Behavior", "Talent Development"] },
        ],
      },
      {
        name: "Pendidikan",
        peminatan: [
          { name: "Manajemen & Kurikulum Pendidikan", keywords: ["School Management", "Curriculum Development", "Teaching Methods", "Character Education", "Ethics", "Student Development"] },
          { name: "Teknologi Pendidikan", keywords: ["Educational Technology", "E-Learning", "Digital Pedagogy"] },
          { name: "Pembelajaran & Asesmen", keywords: ["Classroom Management", "Learning Design", "Assessment", "Learning Methods"] },
        ],
      },
    ],
  },
  {
    name: "BINUS Business School",
    shortName: "BBS",
    prodi: [
      {
        name: "Manajemen",
        peminatan: [
          { name: "Strategi Bisnis & Kompetitif", keywords: ["Business Strategy", "Competitive Advantage", "Strategic Planning", "UMKM Development", "Marketing"] },
          { name: "Manajemen Sumber Daya Manusia", keywords: ["HR Management", "Talent Development", "Organizational Behavior"] },
          { name: "Komunikasi & Hubungan Bisnis", keywords: ["Business Communication", "Public Relations", "Media Strategy"] },
        ],
      },
      {
        name: "Kewirausahaan",
        peminatan: [
          { name: "Pengembangan Startup & Inovasi", keywords: ["Product Innovation", "Startup Development", "Business Model", "Entrepreneurship", "SME Development", "Business Planning"] },
          { name: "UMKM & Pengembangan Bisnis", keywords: ["UMKM Development", "Business Strategy", "Entrepreneurship", "SME Development", "Business Planning"] },
        ],
      },
      {
        name: "Manajemen Rantai Pasok",
        peminatan: [
          { name: "Rantai Pasok Global", keywords: ["Supply Chain", "Logistics", "Procurement"] },
          { name: "Manajemen Logistik & Distribusi", keywords: ["Logistics", "Supply Chain", "Operations Management"] },
        ],
      },
    ],
  },
];
