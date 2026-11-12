export interface ActivityStep {
  id: number;
  number: string;
  title: string;
  phase: "Inisiasi & Formasi" | "Perencanaan & Produk" | "Peluncuran & Operasional" | "Sosial & Likuidasi";
  phaseIndex: number;
  description: string;
  tag: string;
  highlight?: string;
}

export const ACTIVITIES: ActivityStep[] = [
  {
    id: 1,
    number: "01",
    title: "Pendaftaran",
    phase: "Inisiasi & Formasi",
    phaseIndex: 1,
    description:
      "Pendaftaran dibuka saat kegiatan MPLS, hingga batas waktu yang ditetapkan oleh pengurus. Pendaftaran dilakukan dengan cara mengisi formulir pendaftaran serta menghubungi pengurus yang bersangkutan.",
    tag: "MPLS & Registrasi",
    highlight: "Gerbang awal bergabung dalam ekosistem perusahaan siswa."
  },
  {
    id: 2,
    number: "02",
    title: "Wawancara",
    phase: "Inisiasi & Formasi",
    phaseIndex: 1,
    description:
      "Wawancara dilakukan untuk pembagian perusahaan, dan menetapkan jabatan bagi setiap anggota Student Company sesuai bidang masing-masing.",
    tag: "Seleksi & Penempatan",
    highlight: "Pemetaan kompetensi dan minat manajerial anggota."
  },
  {
    id: 3,
    number: "03",
    title: "Pembentukan Perusahaan",
    phase: "Inisiasi & Formasi",
    phaseIndex: 1,
    description:
      "Setelah proses wawancara selesai, pengurus membagi anggota Student Company ke dalam beberapa perusahaan, sesuai jumlah yang ada.",
    tag: "Struktur Korporasi",
    highlight: "Distribusi anggota ke dalam entitas bisnis independen."
  },
  {
    id: 4,
    number: "04",
    title: "Pembagian Jabatan",
    phase: "Inisiasi & Formasi",
    phaseIndex: 1,
    description:
      "Pembagian jabatan disampaikan bersamaan dengan pembentukan perusahaan, agar anggota mengetahui posisi yang akan diisi.",
    tag: "Struktur Organisasi",
    highlight: "Klarifikasi peran: Direksi, HRD, Produksi, Pemasaran, & Keuangan."
  },
  {
    id: 5,
    number: "05",
    title: "Pembentukan Profil",
    phase: "Perencanaan & Produk",
    phaseIndex: 2,
    description:
      "Pembentukan profil perusahaan meliputi penentuan nama, pembuatan logo, visi, misi, serta nilai-nilai perusahaan.",
    tag: "Brand Identity",
    highlight: "Merumuskan identitas merek, filosofi visual, dan komitmen tim."
  },
  {
    id: 6,
    number: "06",
    title: "Penentuan Produk Utama",
    phase: "Perencanaan & Produk",
    phaseIndex: 2,
    description:
      "Produk utama dibuat se-inovatif dan se-menarik mungkin, dengan cara berunding bersama anggota perusahaan.",
    tag: "R&D & Inovasi",
    highlight: "Brainstorming dan validasi ide produk bernilai jual tinggi."
  },
  {
    id: 7,
    number: "07",
    title: "Pembuatan SOP & BP",
    phase: "Perencanaan & Produk",
    phaseIndex: 2,
    description:
      "Pembuatan Standard Operating Procedure (SOP) dan Business Plan (BP) dalam suatu perusahaan dibuat oleh para anggota perusahaan, untuk target dan kemajuan perusahaan.",
    tag: "Tata Kelola & Strategi",
    highlight: "Fondasi operasional tertulis dan proyeksi finansial terukur."
  },
  {
    id: 8,
    number: "08",
    title: "Persiapan Launching",
    phase: "Peluncuran & Operasional",
    phaseIndex: 3,
    description:
      "Persiapan launching bertujuan untuk mematangkan presentasi yang akan disampaikan pada hari pelaksanaan, serta menyiapkan seluruh dekorasi ruangan sebelum acara dimulai.",
    tag: "Gladi & Visual Staging",
    highlight: "Finalisasi materi pitch deck dan dekorasi panggung peluncuran."
  },
  {
    id: 9,
    number: "09",
    title: "Launching",
    phase: "Peluncuran & Operasional",
    phaseIndex: 3,
    description:
      "Launching dilakukan untuk memperkenalkan dan mempromosikan produk utama yang sudah dibuat anggota perusahaan kepada calon konsumen, agar mereka tertarik dengan produk yang ditawarkan.",
    tag: "Go-to-Market",
    highlight: "Eksposur perdana ke pasar konsumen dan civitas akademika."
  },
  {
    id: 10,
    number: "10",
    title: "Program HRD",
    phase: "Peluncuran & Operasional",
    phaseIndex: 3,
    description:
      "Program HRD sangat bermacam-macam. Diadakannya program ini sesuai dengan arahan divisi HRD (atas hasil vote anggota perusahaan). Kegiatan ini dilakukan untuk memperkuat rasa kekeluargaan dalam perusahaan. Program ini dilaksanakan 2 kali selama berjalannya perusahaan.",
    tag: "Internal Team Bonding",
    highlight: "Dua sesi penguatan kekeluargaan & evaluasi iklim kerja."
  },
  {
    id: 11,
    number: "11",
    title: "Operasional Perusahaan",
    phase: "Peluncuran & Operasional",
    phaseIndex: 3,
    description:
      "Selama berjalannya perusahaan dalam tiga bulan, para anggota menjalankan tugas masing-masing sesuai dengan jabatan yang dimiliki. Kegiatan yang dilakukan meliputi promosi, konsinyasi, rapat mingguan (weekly meeting), dan lain sebagainya.",
    tag: "3 Bulan Eksekusi",
    highlight: "Praktek riil: rantai pasok, promosi gencar, dan konsinyasi."
  },
  {
    id: 12,
    number: "12",
    title: "CSR (Corporate Social Responsibility)",
    phase: "Sosial & Likuidasi",
    phaseIndex: 4,
    description:
      "CSR adalah kegiatan perusahaan untuk berperan serta dalam pembangunan ekonomi berkelanjutan, guna meningkatkan kualitas masyarakat dan lingkungan. Singkatnya dari laba yang diperoleh beberapa persen disumbangkan.",
    tag: "Dampak Sosial & Lingkungan",
    highlight: "Alokasi persentase laba bersih untuk kebermanfaatan sosial."
  },
  {
    id: 13,
    number: "13",
    title: "Persiapan Likuidasi",
    phase: "Sosial & Likuidasi",
    phaseIndex: 4,
    description:
      "Dilakukan untuk mempersiapkan acara likuidasi atau pembubaran perusahaan. Mulai dari presentasi, pengembalian saham dan juga dekorasi tempat (aula sekolah) agar saat puncak acara dapat berjalan dengan baik.",
    tag: "Persiapan Penutupan",
    highlight: "Kompilasi audit neraca, dividen, dan setting aula sekolah."
  },
  {
    id: 14,
    number: "14",
    title: "Likuidasi",
    phase: "Sosial & Likuidasi",
    phaseIndex: 4,
    description:
      "Likuidasi adalah pembubaran perusahaan yang dilakukan setelah semua kegiatan operasional dihentikan. Dalam proses ini, dilakukan pembagian laba yang tersisa kepada para pemegang saham dan memberikan gaji kepada seluruh anggota perusahaan.",
    tag: "Pembubaran & Pembagian Laba",
    highlight: "Penyerahan dividen investor dan gaji penuh seluruh anggota."
  }
];

export interface GoalItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  category: string;
}

export const PROGRAM_GOALS: GoalItem[] = [
  {
    id: 1,
    number: "01",
    title: "Menambah relasi pertemanan",
    subtitle: "Membangun jejaring sosial dan kolaborasi lintas kelas dalam ikatan kerja profesional.",
    category: "Networking & Relasi"
  },
  {
    id: 2,
    number: "02",
    title: "Melatih softskill, kepemimpinan & kerja sama",
    subtitle: "Pengembangan public speaking, berpikir kritis, diplomasi, dan koordinasi tim terstruktur.",
    category: "Softskills & Leadership"
  },
  {
    id: 3,
    number: "03",
    title: "Menambah wawasan ekonomi & bisnis",
    subtitle: "Pemahaman langsung mengenai mekanisme pasar, laporan keuangan, dan tata kelola bisnis modern.",
    category: "Literasi Finansial"
  },
  {
    id: 4,
    number: "04",
    title: "Menumbuhkan rasa percaya diri & tanggung jawab",
    subtitle: "Internalisasi etos kerja profesional, integritas pengelolaan dana, dan ketepatan tenggat waktu.",
    category: "Karakter & Integritas"
  },
  {
    id: 5,
    number: "05",
    title: "Melatih kreativitas dan inovasi produk",
    subtitle: "Daya cipta dalam riset produk inovatif, desain kemasan, strategi promosi digital, dan visual branding.",
    category: "Kreativitas & Desain"
  },
  {
    id: 6,
    number: "06",
    title: "Kemandirian finansial dari hasil usaha",
    subtitle: "Pemberdayaan generasi muda melalui profit nyata, gaji mandiri, dan dividen dari jerih payah usaha.",
    category: "Kemandirian Ekonomi"
  }
];

export interface CorporateDivision {
  id: string;
  code: string;
  name: string;
  title: string;
  color: string;
  accent: string;
  leadRole: string;
  responsibilities: string[];
  skillsGained: string[];
  deliverable: string;
}

export const CORPORATE_DIVISIONS: CorporateDivision[] = [
  {
    id: "ceo",
    code: "CEO",
    name: "Direksi Utama (Executive)",
    title: "President Director / CEO",
    color: "#FFE500",
    accent: "#0F1115",
    leadRole: "Pemimpin Perusahaan & Pengambil Keputusan",
    responsibilities: [
      "Mengkoordinir seluruh divisi (Keuangan, Pemasaran, Produksi, HRD)",
      "Memimpin rapat mingguan (weekly meeting) dan evaluasi target berkala",
      "Mempresentasikan pitch deck perusahaan saat Launching & Likuidasi",
      "Memastikan kepatuhan terhadap SOP dan Business Plan yang telah disahkan"
    ],
    skillsGained: ["Strategic Leadership", "Public Speaking", "Problem Solving", "Diplomasi Korporasi"],
    deliverable: "Business Plan (BP) Komprehensif & Laporan Pertanggungjawaban Akhir"
  },
  {
    id: "cfo",
    code: "CFO",
    name: "Divisi Keuangan (Finance)",
    title: "Finance Manager / CFO",
    color: "#10B981",
    accent: "#065F46",
    leadRole: "Pengelola Modal, Arus Kas & Laba",
    responsibilities: [
      "Mencatat seluruh arus kas masuk, keluar, dan bukti transaksi harian",
      "Menyusun laporan laba rugi bulanan dan kalkulasi harga pokok penjualan (HPP)",
      "Mengelola dana investor, kas kecil, serta alokasi program CSR",
      "Menghitung kalkulasi dividen pemegang saham dan pembagian gaji anggota saat likuidasi"
    ],
    skillsGained: ["Financial Accounting", "Budgeting", "Audit Transparan", "Kalkulasi ROI & Dividen"],
    deliverable: "Buku Kas Neraca, Laporan Audit Laba-Rugi, & Slip Gaji/Dividen Likuidasi"
  },
  {
    id: "cmo",
    code: "CMO",
    name: "Divisi Pemasaran (Marketing)",
    title: "Marketing Manager / CMO",
    color: "#0284C7",
    accent: "#0C4A6E",
    leadRole: "Arsitek Brand, Promosi & Penjualan",
    responsibilities: [
      "Merancang identitas merek (logo, warna, tag line, packaging visual)",
      "Membuat konten promosi digital di media sosial dan kampanye tatap muka",
      "Membuka jalur konsinyasi dengan koperasi sekolah, kantin, dan mitra luar",
      "Menganalisis tren pasar serta menyusun program diskon dan bundle launching"
    ],
    skillsGained: ["Digital Marketing", "Visual Branding", "Negosiasi Konsinyasi", "Consumer Behavior"],
    deliverable: "Katalog Produk, Media Kit Sosial, & Saluran Konsinyasi Aktif"
  },
  {
    id: "coo",
    code: "COO",
    name: "Divisi Produksi (Operations)",
    title: "Production Manager / COO",
    color: "#FF5A36",
    accent: "#7C2D12",
    leadRole: "Pengendali Kualitas & Rantai Pasok",
    responsibilities: [
      "Mengadakan riset dan pengembangan (R&D) untuk prototipe produk inovatif",
      "Menyusun SOP standar mutu bahan baku dan proses pembuatan",
      "Menghitung estimasi stok harian agar tidak terjadi kekurangan maupun pemborosan",
      "Melakukan pengemasan higienis, menarik, dan aman untuk pengiriman"
    ],
    skillsGained: ["Quality Assurance", "Supply Chain Management", "Product R&D", "Lean Manufacturing"],
    deliverable: "Standard Operating Procedure (SOP) Mutu & Stok Produk Siap Edar"
  },
  {
    id: "hrd",
    code: "HRD",
    name: "Divisi HRD (Human Resources)",
    title: "HRD Manager / People Lead",
    color: "#8B5CF6",
    accent: "#4C1D95",
    leadRole: "Pengembang Iklim Tim & Evaluasi Kerja",
    responsibilities: [
      "Menjalankan proses seleksi dan wawancara saat rekrutmen awal siswa",
      "Menyelenggarakan program team bonding minimal 2 kali selama 3 bulan",
      "Memantau absensi, keaktifan, dan mendamaikan jika terjadi gesekan internal",
      "Mengevaluasi kontribusi tiap anggota sebagai dasar rekomendasi gaji likuidasi"
    ],
    skillsGained: ["People Management", "Conflict Resolution", "Culture Building", "Talent Assessment"],
    deliverable: "Dua Sesi Program Team Bonding & Matriks Evaluasi Kontribusi Karyawan"
  }
];

export interface MonthlyCycle {
  month: number;
  label: string;
  theme: string;
  period: string;
  accent: string;
  description: string;
  phases: string;
  deliverables: string[];
}

export const MONTHLY_CYCLES: MonthlyCycle[] = [
  {
    month: 1,
    label: "Bulan 01",
    theme: "Formasi, Fondasi & R&D Produk",
    period: "Minggu 01 — 04",
    accent: "#FFE500",
    description:
      "Fokus pada rekrutmen anggota saat MPLS, wawancara kompetensi, pendirian entitas korporasi, perumusan brand identity, riset produk utama bernilai jual, dan penyusunan SOP serta Business Plan (BP).",
    phases: "Fase 01 & 02 (Tahap 01 s/d 07)",
    deliverables: [
      "Struktur organisasi perusahaan & pembagian divisi resmi",
      "Logo, filosofi brand, visi misi, dan identitas perusahaan",
      "Prototipe produk utama teruji & validasi resep/kemasan",
      "Dokumen SOP baku & kalkulasi Business Plan"
    ]
  },
  {
    month: 2,
    label: "Bulan 02",
    theme: "Grand Launching & Operasional Pasar",
    period: "Minggu 05 — 08",
    accent: "#0284C7",
    description:
      "Peluncuran resmi ke publik, dekorasi panggung, gladi presentasi pitch deck, kampanye promosi gencar, pembukaan jalur konsinyasi, rapat mingguan, dan pelaksanaan Program HRD 1 untuk mempererat kekeluargaan.",
    phases: "Fase 03 (Tahap 08 s/d 11)",
    deliverables: [
      "Pentas Grand Launching produk di hadapan warga sekolah",
      "Operasional penjualan langsung dan jalur konsinyasi mitra",
      "Rapat evaluasi mingguan (weekly meeting) terjadwal",
      "Program HRD sesi 1 (Internal Team Building)"
    ]
  },
  {
    month: 3,
    label: "Bulan 03",
    theme: "Ekspansi, CSR & Puncak Likuidasi",
    period: "Minggu 09 — 12",
    accent: "#FF5A36",
    description:
      "Puncak penjualan, realisasi program Corporate Social Responsibility (CSR) dari persentase laba, audit penutupan buku keuangan, persiapan presentasi di aula sekolah, hingga pembagian dividen dan gaji anggota.",
    phases: "Fase 04 (Tahap 12 s/d 14)",
    deliverables: [
      "Penyaluran dana CSR kebermanfaatan masyarakat",
      "Laporan audit keuangan akhir dan kalkulasi dividen",
      "Dekorasi panggung & gelaran acara Likuidasi di aula",
      "Penyerahan dividen investor dan gaji penuh seluruh siswa"
    ]
  }
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Apakah kegiatan Student Company mengganggu jam belajar utama siswa?",
    answer:
      "Sama sekali tidak. Student Company dirancang secara terintegrasi dengan pembelajaran kejuruan dan ekstrakurikuler terarah. Sebagian besar kegiatan seperti weekly meeting dan persiapan produksi dijalankan di luar jam pelajaran inti atau pada jam khusus kewirausahaan.",
    category: "Akademik & Waktu"
  },
  {
    id: 2,
    question: "Dari mana modal awal perusahaan siswa didapatkan?",
    answer:
      "Modal awal dikumpulkan melalui sistem kepemilikan saham mini, di mana anggota maupun civitas sekolah dapat berpartisipasi membeli lembar saham dengan nominal terjangkau. Modal ini dicatat transparan oleh divisi Keuangan dan dikembalikan beserta dividen saat Likuidasi.",
    category: "Modal & Investasi"
  },
  {
    id: 3,
    question: "Bagaimana jika perusahaan siswa mengalami kendala atau penurunan penjualan?",
    answer:
      "Di sinilah esensi pendidikan Student Company. Masalah diselesaikan melalui weekly meeting, evaluasi SOP, dan bimbingan guru pendamping. Siswa belajar melakukan pivot strategi promosi atau perbaikan kemasan secara cepat tanpa membebani siswa secara finansial.",
    category: "Manajemen Risiko"
  },
  {
    id: 4,
    question: "Apa yang diperoleh siswa setelah proses Likuidasi selesai?",
    answer:
      "Siswa mendapatkan sertifikat kompetensi kewirausahaan, pembagian gaji riil dari keuntungan operasional, dividen bagi pemegang saham, serta portofolio pengalaman manajerial nyata yang sangat bernilai untuk perguruan tinggi dan dunia industri.",
    category: "Hasil & Manfaat"
  }
];
