import {
  NewsArticle,
  ActivityEvent,
  GalleryItem,
  OrgMember,
  MinistryProgram,
  OrgProfile,
} from '../types';

export const initialOrgProfile: OrgProfile = {
  name: 'BIRO PEMUDA/I GKII BALIEM TENGAH',
  fullName: 'Biro Pemuda dan Pemudi Gereja Kemah Injil Indonesia Daerah Baliem Tengah',
  denomination: 'Gereja Kemah Injil Indonesia (GKII)',
  region: 'Daerah Baliem Tengah - Papua Pegunungan',
  address: 'Jl. Trikora No. 45, Wamena, Kabupaten Jayawijaya, Papua Pegunungan 99511',
  phoneWhatsapp: '+6281248001928',
  email: 'pemuda.gkiibaliemtengah@gmail.com',
  socials: {
    facebook: 'https://facebook.com/pemuda.gkii.baliemtengah',
    instagram: 'https://instagram.com/biropemuda_gkiibaliemtengah',
    youtube: 'https://youtube.com/@biropemudagkiibaliemtengah',
    tiktok: 'https://tiktok.com/@pemudagkii_baliem',
  },
  motto: 'Muda, Setia, Berakar dalam Kristus, dan Berdampak bagi Lembah Baliem',
  scriptureVerse: '1 Timotius 4:12 - "Jangan seorang pun menganggap engkau rendah karena engkau muda. Jadilah teladan bagi orang-orang percaya, dalam perkataanmu, dalam tingkah lakumu, dalam kasihmu, dalam kesetiaanmu dan dalam kesucianmu."',
  history: `Biro Pemuda/i GKII Baliem Tengah dibentuk sebagai wadah pembinaan, koordinasi, dan pelayanan bagi generasi muda gereja di lingkungan Gereja Kemah Injil Indonesia (GKII) Daerah Baliem Tengah, Papua Pegunungan.

Sejak perintisan Injil di Lembah Baliem oleh para misionaris Kemah Injil, generasi muda senantiasa menjadi ujung tombak pewartaan kabar baik dan transformasi kehidupan masyarakat. Untuk merespons perkembangan zaman dan tantangan pembinaan karakter generasi milenial serta Gen Z di tanah Papua, GKII Daerah Baliem Tengah secara resmi mengukuhkan Biro Pemuda/i sebagai komisi pelayanan kategorial yang mandiri, sinergis, dan berpusat pada firman Tuhan.

Kini, Biro Pemuda/i menaungi puluhan persekutuan pemuda di berbagai jemaat lokal se-Daerah Baliem Tengah, mencakup distrik-distrik di kawasan Wamena, Hubikiak, Kurulu, Asolokobal, hingga wilayah pegunungan sekitarnya.`,
  background: `Lembah Baliem memiliki karakteristik geografis dan sosiokultural yang unik di tanah Papua. Generasi muda GKII di daerah ini menghadapi tantangan globalisasi, pendidikan, serta ketenagakerjaan, namun memiliki potensi iman, persaudaraan, dan kreativitas yang luar biasa. Biro Pemuda/i hadir untuk menyatukan visi, membekali kepemimpinan, dan mengarahkan energi muda untuk kemuliaan Tuhan dan kesejahteraan masyarakat Baliem.`,
  vision: `Mewujudkan generasi muda GKII Baliem Tengah yang berakar kuat dalam Kristus, berkarakter ilahi, mandiri, unggul secara kepemimpinan, dan menjadi terang transformasi bagi gereja, masyarakat, dan bangsa.`,
  mission: [
    'Membangun kehidupan rohani pemuda/i yang berlandaskan firman Tuhan melalui pembinaan intensif, pemuridan, ibadah, dan kelompok doa berkala.',
    'Menyelenggarakan pelatihan kepemimpinan, manajemen organisasi, dan peningkatan kapasitas sumber daya manusia pemuda/i gereja.',
    'Mendorong keterlibatan aktif generasi muda dalam aksi sosial kemanusiaan, bakti lingkungan, dan kepedulian terhadap sesama di Lembah Baliem.',
    'Memfasilitasi pengembangan talenta, kreativitas musik gerejawi, seni budaya Papua yang berakar firman, dan teknologi digital multimedia.',
    'Mempererat persaudaraan, persatuan, dan jejaring pelayanan antar-persekutuan pemuda jemaat lokal di seluruh wilayah GKII Daerah Baliem Tengah.'
  ],
  coreValues: [
    { title: 'Kasih (Love)', desc: 'Menjadikan kasih Kristus sebagai dasar utama dalam setiap relasi, pelayanan, dan kepedulian sesama.' },
    { title: 'Kesetiaan (Faithfulness)', desc: 'Setia kepada firman Tuhan, panggilan pelayanan, dan amanah organisasi gerejawi.' },
    { title: 'Integritas (Integrity)', desc: 'Menjunjung tinggi kejujuran, keteladanan moral, dan tanggung jawab moral pemuda Kristen.' },
    { title: 'Kebersamaan (Fellowship)', desc: 'Memupuk persaudaraan yang rukun tanpa memandang perbedaan latar belakang jemaat atau marga.' },
    { title: 'Keteladanan (Exemplary)', desc: 'Mewujudkan firman 1 Timotius 4:12 dalam tingkah laku, tutur kata, dan karya nyata di masyarakat.' }
  ],
  workPrograms: [
    'Kemah Pembinaan Rohani Pemuda se-Daerah (Youth Camp Baliem Tengah)',
    'KKR Pemuda Oikumene & Kebangunan Rohani Generasi Muda',
    'Latihan Kepemimpinan Kristen Pemuda (LKKP) Tingkat Dasar & Lanjutan',
    'Bakti Sosial Kasih: Pembagian Alat Tulis & Pemeriksaan Kesehatan di Jemaat Pedalaman',
    'Workshop Multimedia, Kreativitas Konten Rohani, dan Sound Engineering Gereja',
    'Festival Musik Pujian, Paduan Suara & Cipta Lagu Daerah Rohani Pemuda GKII',
    'Pekan Olahraga Persahabatan Pemuda (Volley & Futsal Rohani Se-Daerah)'
  ],
  serviceAreas: [
    'Jemaat GKII Wilayah Wamena Kota',
    'Jemaat GKII Wilayah Hubikiak & Sekitarnya',
    'Jemaat GKII Wilayah Lembah Atas Kurulu',
    'Jemaat GKII Wilayah Asolokobal & Walelagama',
    'Jemaat GKII Wilayah Pegunungan Pelebaga & Musatfak'
  ],
  statistics: [
    { label: 'Jemaat Lokal Terkoordinasi', value: '38+', note: 'Jemaat lokal GKII di Daerah Baliem Tengah' },
    { label: 'Anggota Pemuda/i Aktif', value: '1.450+', note: 'Pemuda & pemudi terdaftar di persekutuan' },
    { label: 'Program Pelayanan Tahunan', value: '24', note: 'Agenda rohani, pelatihan, dan bakti sosial' },
    { label: 'Wilayah Pelayanan', value: '5 Rayon', note: 'Mencakup seluruh lembah dan pegunungan Baliem' }
  ]
};

export const initialNews: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'kemah-pemuda-gkii-baliem-tengah-2026',
    title: 'Kemah Rohani Pemuda GKII Baliem Tengah 2026: Mengobarkan Semangat Generasi Emas Papua',
    summary: 'Ratusan pemuda dan pemudi dari 38 jemaat lokal berkumpul dalam suasana penuh sukacita dan hadirat Tuhan di lembah hijau Baliem Tengah.',
    content: `Kegiatan Kemah Rohani dan Pembinaan Pemuda GKII Daerah Baliem Tengah resmi dibuka dengan ibadah pembukaan agung yang dipimpin oleh Badan Pengurus GKII Daerah Baliem Tengah. Bertempat di lokasi perkemahan alam yang asri, kegiatan ini mengusung tema "Bangkit, Berakar, dan Berbuah bagi Kemuliaan Kristus".

Ketua Biro Pemuda/i GKII Baliem Tengah dalam sambutannya menegaskan pentingnya pemuda menjaga integritas hidup dan memperkuat komitmen rohani di tengah arus transformasi era digital. "Pemuda GKII bukan penonton zaman, melainkan pilar doa dan agen perubahan bagi tanah Papua," tegasnya.

Selama empat hari ke depan, peserta akan mengikuti rangkaian seminar kepemimpinan Kristen, pendalaman firman Alkitab intensif, kelompok diskusi doa, malam pujian penyembahan, serta pentas seni budaya rohani bernuansa Papua. Semangat persaudaraan yang hangat tampak nyata saat pemuda antardistrik saling bertukar pengalaman pelayanan dan mengikat tali kasih dalam Kristus.`,
    category: 'Kegiatan Daerah',
    author: 'Bidang Humas & Multimedia',
    date: '2026-10-24',
    coverImage: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    tags: ['Kemah Rohani', 'Pemuda GKII', 'Baliem Tengah', 'Pembinaan'],
    readTime: '4 menit baca',
    isFeatured: true
  },
  {
    id: 'news-2',
    slug: 'ibadah-penyembahan-pemuda-wamena',
    title: 'Malam Doa dan Pujian Penyembahan Gabungan: Puluhan Pemuda Bersatu Menopang Pelayanan Gereja',
    summary: 'Ibadah gabungan pemuda GKII rayon satu berlangsung dengan khidmat, menghadirkan kesaksian iman dan penguatan firman Tuhan.',
    content: `Gereja Kemah Injil Indonesia jemaat kota dipadati pemuda dari berbagai rayon dalam rangka Ibadah Doa dan Pujian Gabungan awal triwulan. Ibadah yang dikoordinir oleh Bidang Kerohanian ini berfokus pada doa syafaat untuk stabilitas kedamaian tanah Papua, pendidikan anak-anak pedalaman, serta kesehatan para hamba Tuhan yang melayani di pos-pos penginjilan terpencil.

Pelayanan firman Tuhan mengingatkan keteladanan Daniel dan kawan-kawannya yang teguh berpegang pada ketetapan Allah kendati berada dalam situasi penuh tekanan. Pemuda diajak untuk menjauhi gaya hidup kompromistis dan menjadi terang moral di sekolah, kampus, maupun tempat kerja masing-masing.`,
    category: 'Ibadah & Doa',
    author: 'Bidang Kerohanian',
    date: '2026-10-18',
    coverImage: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    tags: ['Ibadah Pemuda', 'Doa Syafaat', 'Wamena', 'Pujian'],
    readTime: '3 menit baca',
    isFeatured: true
  },
  {
    id: 'news-3',
    slug: 'aksi-sosial-pemuda-bantu-anak-pedalaman',
    title: 'Aksi Nyata Kasih: Pemuda GKII Salurkan Paket Buku dan Alat Tulis untuk Sekolah Minggu Pedalaman',
    summary: 'Sebagai wujud kepedulian sosial kemasyarakatan, tim pemuda menyalurkan 250 paket perlengkapan belajar bagi anak-anak jemaat di wilayah terpencil.',
    content: `Bidang Sosial dan Pelayanan Masyarakat Biro Pemuda/i GKII Baliem Tengah berhasil menuntaskan ekspedisi kasih ke beberapa pos pelayanan jemaat di daerah lembah atas. Dalam kegiatan ini, relawan pemuda membagikan ratusan paket alat tulis, Alkitab anak bergambar, serta mengadakan kelas belajar ceria bersama adik-adik sekolah minggu.

Koordinator Bidang Sosial menuturkan bahwa pelayanan pemuda tidak boleh hanya terbatas di dalam gedung gereja, melainkan harus menyentuh kebutuhan riil jemaat dan masyarakat. Warga jemaat setempat menyambut kehadiran rombongan pemuda dengan sukacita dan jamuan ubi bakar tradisional khas lembah Baliem.`,
    category: 'Sosial & Masyarakat',
    author: 'Bidang Sosial & Pelayanan',
    date: '2026-10-10',
    coverImage: '/src/assets/images/pelayanan_sosial_pemuda_1793245787001.jpg',
    tags: ['Bakti Sosial', 'Aksi Kasih', 'Pendidikan Anak', 'Pedalaman'],
    readTime: '5 menit baca',
    isFeatured: false
  },
  {
    id: 'news-4',
    slug: 'pelatihan-multimedia-gerejawi-2026',
    title: 'Tingkatkan Mutu Pelayanan Digital, Biro Gelar Workshop Multimedia dan Sound System Gereja',
    summary: 'Sebanyak 45 operator multimedia dan pengurus pemuda mengikuti pelatihan intensif pengelolaan live streaming dan tata suara ibadah.',
    content: `Perkembangan teknologi informasi menuntut gereja untuk adaptif dalam memanfaatkan media digital sebagai sarana pengabaran firman. Menyadari hal tersebut, Bidang Multimedia dan Dokumentasi Biro Pemuda/i GKII Baliem Tengah menggelar pelatihan teknik dasar dokumentasi fotografi, video pendek rohani, pengelolaan media sosial jemaat, dan penyetelan sound system gereja.

Pelatihan ini dimentori langsung oleh praktisi audio visual dan desainer grafis pemuda GKII. Diharapkan setiap jemaat lokal memiliki pemuda yang cakap mengelola dokumentasi ibadah dengan standar yang rapi dan profesional.`,
    category: 'Pendidikan dan Pembinaan',
    author: 'Bidang Multimedia',
    date: '2026-09-28',
    coverImage: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    tags: ['Workshop', 'Multimedia', 'Sound System', 'Pelatihan'],
    readTime: '4 menit baca',
    isFeatured: false
  },
  {
    id: 'news-5',
    slug: 'pengumuman-rapat-kerja-tahunan-pemuda',
    title: 'Pengumuman Resmi: Rapat Kerja Daerah (Rakerda) Pemuda GKII Baliem Tengah Periode 2026-2027',
    summary: 'Badan Pengurus mengundang seluruh perwakilan pengurus pemuda jemaat lokal untuk menghadiri konsolidasi program kerja tahunan.',
    content: `Diberitahukan kepada segenap Badan Pengurus Pemuda Jemaat GKII se-Daerah Baliem Tengah bahwa Rapat Kerja Daerah (Rakerda) Pemuda akan diselenggarakan pada akhir bulan depan. Rakerda ini akan membahas evaluasi program semester berjalan, penyusunan kalender pelayanan tahun 2027, serta koordinasi pelaksanaan Pekan Olahraga & Seni Pemuda GKII.

Setiap jemaat diharapkan mengutus 2 orang perwakilan resmi (Ketua dan Sekretaris Pemuda Jemaat). Surat undangan fisik dan jadwal teknis telah didistribusikan ke masing-masing koordinator rayon.`,
    category: 'Pengumuman',
    author: 'Sekretaris BPH',
    date: '2026-09-15',
    coverImage: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    tags: ['Pengumuman', 'Rakerda', 'Organisasi', 'GKII'],
    readTime: '3 menit baca',
    isFeatured: false
  }
];

export const initialEvents: ActivityEvent[] = [
  {
    id: 'event-1',
    title: 'Kemah Pemuda & KKR Rohani Se-Daerah Baliem Tengah 2026',
    description: 'Ajang perjumpaan tahunan generasi muda GKII dalam ibadah, seminar kepemimpinan, malam kebangunan rohani, dan persahabatan pemuda lintas jemaat.',
    date: '14 - 17 November 2026',
    time: '08:00 - 21:00 WIT',
    location: 'Bumi Perkemahan Alam Hijau Baliem, Wamena',
    pic: 'Yohanes Kogoya (0812-4801-1123)',
    status: 'upcoming',
    poster: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    registrationOpen: true,
    registrationLink: 'https://wa.me/6281248001928?text=Halo%20Admin%20Biro%20Pemuda,%20saya%20ingin%20mendaftar%20Kemah%20Pemuda%202026',
    documentationCount: 32
  },
  {
    id: 'event-2',
    title: 'Pelatihan Kepemimpinan Kristen Pemuda (LKKP) Tahap II',
    description: 'Pembekalan kepemimpinan kristiani, manajemen organisasi gerejawi, dasar penyusunan program kerja, dan pembinaan karakter pelayan Tuhan.',
    date: '05 Desember 2026',
    time: '09:00 - 16:30 WIT',
    location: 'Aula Gedung Pertemuan GKII Daerah Baliem Tengah',
    pic: 'Maria Tabuni (0813-8902-3344)',
    status: 'upcoming',
    poster: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    registrationOpen: true,
    registrationLink: 'https://wa.me/6281248001928?text=Halo%20Admin,%20saya%20ingin%20mendaftar%20LKKP%20Tahap%20II',
    documentationCount: 18
  },
  {
    id: 'event-3',
    title: 'Ibadah Gabungan Pemuda Rayon Wamena & Sekitarnya',
    description: 'Persekutuan doa dan puji-pujian bersama, saling mendoakan pos pelayanan jemaat pedalaman serta fellowship persaudaraan.',
    date: '31 Oktober 2026',
    time: '16:00 - 18:30 WIT',
    location: 'Gedung Gereja GKII Jemaat Efata, Wamena',
    pic: 'Bidang Kerohanian',
    status: 'upcoming',
    poster: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    registrationOpen: false,
    documentationCount: 14
  },
  {
    id: 'event-4',
    title: 'Bakti Lingkungan & Penanaman Pohon di Kawasan Mata Air Lembah',
    description: 'Aksi peduli lingkungan hidup sebagai wujud mandat penatalayanan ciptaan Allah di wilayah lereng pegunungan Baliem.',
    date: '03 Oktober 2026',
    time: '07:30 - 13:00 WIT',
    location: 'Area Konservasi Daerah Aliran Sungai Baliem',
    pic: 'Markus Daby (0821-9988-7711)',
    status: 'completed',
    poster: '/src/assets/images/pelayanan_sosial_pemuda_1793245787001.jpg',
    registrationOpen: false,
    documentationCount: 45
  },
  {
    id: 'event-5',
    title: 'Festival Musik Pujian & Cipta Lagu Rohani Pemuda GKII',
    description: 'Pentas kreativitas vocal group, solois rohani, dan aransemen instrumen musik tradisional Papua yang memuliakan nama Tuhan.',
    date: '18 September 2026',
    time: '13:00 - 20:00 WIT',
    location: 'Gedung Pemuda Kasih Baliem, Wamena',
    pic: 'Bidang Seni & Kreativitas',
    status: 'completed',
    poster: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    registrationOpen: false,
    documentationCount: 60
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pujian dan Penyembahan Ibadah Raya Pemuda Daerah',
    category: 'Ibadah & KKR',
    mediaType: 'photo',
    url: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    date: '2026-10-24',
    caption: 'Suasana ibadah pemuda GKII dengan puji-pujian yang dipimpin oleh tim musik generasi muda gereja.'
  },
  {
    id: 'gal-2',
    title: 'Kebersamaan Pemuda di Lokasi Kemah Rohani Lembah Hijau',
    category: 'Kemah Pemuda',
    mediaType: 'photo',
    url: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    date: '2026-10-22',
    caption: 'Peserta Kemah Pemuda GKII berkumpul melingkar dalam keakraban firman Tuhan di tengah keindahan alam pegunungan Baliem.'
  },
  {
    id: 'gal-3',
    title: 'Pelayanan Kasih dan Belajar Bersama Anak-Anak Jemaat',
    category: 'Bakti Sosial',
    mediaType: 'photo',
    url: '/src/assets/images/pelayanan_sosial_pemuda_1793245787001.jpg',
    date: '2026-10-10',
    caption: 'Para pemuda GKII mendampingi anak-anak sekolah minggu dalam kegiatan literasi dan pembagian perlengkapan sekolah.'
  },
  {
    id: 'gal-4',
    title: 'Sesi Diskusi Firman & Doa Kelompok Pemuda',
    category: 'Ibadah & KKR',
    mediaType: 'photo',
    url: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    date: '2026-09-30',
    caption: 'Kelompok pemuda berdiskusi menggali firman Tuhan dan saling menopang dalam pokok doa pelayanan.'
  },
  {
    id: 'gal-5',
    title: 'Pelatihan Pengenalan Alat Audio dan Sound Engineering',
    category: 'Pelatihan',
    mediaType: 'photo',
    url: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    date: '2026-09-18',
    caption: 'Peserta workshop multimedia mempraktikkan penyetelan audio mixer dan mikrofon untuk ibadah gereja.'
  },
  {
    id: 'gal-6',
    title: 'Aksi Bersih Lingkungan Bersama Warga Kampung',
    category: 'Bakti Sosial',
    mediaType: 'photo',
    url: '/src/assets/images/pelayanan_sosial_pemuda_1793245787001.jpg',
    date: '2026-08-25',
    caption: 'Generasi muda bergotong-royong merapikan jalan setapak dan lingkungan balai jemaat di pedalaman Baliem.'
  }
];

export const initialOrgStructure: OrgMember[] = [
  {
    id: 'org-1',
    name: 'Pdt. Daud Matuan, S.Th',
    role: 'Pembina & Penasihat Rohani',
    division: 'Pembina',
    hierarchyLevel: 1,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Gembala senior dan Pengurus GKII Daerah Baliem Tengah yang setia mendampingi pertumbuhan rohani generasi muda gereja.',
    phone: '+6281248001100'
  },
  {
    id: 'org-2',
    name: 'Yosua Yikwa, S.Kom',
    role: 'Ketua Koordinator Biro',
    division: 'Badan Pengurus Harian (BPH)',
    hierarchyLevel: 2,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Memimpin koordinasi dan arah kebijakan strategis pelayanan pemuda/i GKII se-Daerah Baliem Tengah dengan dedikasi dan visi kemajuan.',
    phone: '+6281248001928'
  },
  {
    id: 'org-3',
    name: 'Yohanes Kogoya, S.Pd',
    role: 'Wakil Ketua Koordinator',
    division: 'Badan Pengurus Harian (BPH)',
    hierarchyLevel: 2,
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Membantu ketua dalam koordinasi lapangan, kemitraan antarrayon, dan pengawasan kegiatan pemuda di distrik-distrik.',
    phone: '+6281248002233'
  },
  {
    id: 'org-4',
    name: 'Maria Tabuni, S.Sos',
    role: 'Sekretaris Umum',
    division: 'Badan Pengurus Harian (BPH)',
    hierarchyLevel: 3,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Bertanggung jawab atas administrasi, korespondensi resmi, pendataan jemaat pemuda, dan tata laksana organisasi.',
    phone: '+6281389023344'
  },
  {
    id: 'org-5',
    name: 'Markus Daby, A.Md',
    role: 'Wakil Sekretaris',
    division: 'Badan Pengurus Harian (BPH)',
    hierarchyLevel: 3,
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Mendampingi sekretaris dalam pencatatan notulensi rapat kerja, inventaris arsip, dan pengarsipan digital.',
    phone: '+6282199887711'
  },
  {
    id: 'org-6',
    name: 'Ruth Mabel, S.E',
    role: 'Bendahara Umum',
    division: 'Badan Pengurus Harian (BPH)',
    hierarchyLevel: 3,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Mengelola tata kelola keuangan persembahan, anggaran program kegiatan, serta transparansi laporan kas pelayanan.',
    phone: '+6281248005566'
  },
  {
    id: 'org-7',
    name: 'Pdt. Muda Samuel Hilapok',
    role: 'Koordinator Bidang Kerohanian & Pembinaan Iman',
    division: 'Bidang Kerohanian dan Pembinaan Iman',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Menyusun materi ibadah pemuda, kelompok pemuridan, renungan harian, dan koordinasi doa syafaat rutin.',
    phone: '+6281248007788'
  },
  {
    id: 'org-8',
    name: 'Debora Wenda, S.Pd',
    role: 'Koordinator Bidang Pendidikan & Pengembangan SDM',
    division: 'Bidang Pendidikan dan Pengembangan SDM',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Memfasilitasi pelatihan kepemimpinan, bimbingan belajar, beasiswa pemuda gereja, dan seminar karier.',
    phone: '+6281344556677'
  },
  {
    id: 'org-9',
    name: 'Kaleb Wetipo',
    role: 'Koordinator Bidang Organisasi & Kaderisasi',
    division: 'Bidang Organisasi dan Kaderisasi',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Menjaga soliditas kepengurusan, konsolidasi antarrayon, serta pemetaan kader pemuda penerus pelayanan.',
    phone: '+6281248008899'
  },
  {
    id: 'org-10',
    name: 'Ester Lani, S.I.Kom',
    role: 'Koordinator Bidang Humas & Komunikasi',
    division: 'Bidang Humas dan Komunikasi',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Menghubungkan biro dengan jemaat lokal, masyarakat, serta mengelola publikasi warta pemuda ke publik.',
    phone: '+6281399881122'
  },
  {
    id: 'org-11',
    name: 'Barnabas Itlay',
    role: 'Koordinator Bidang Multimedia & Dokumentasi',
    division: 'Bidang Multimedia dan Dokumentasi',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Mengelola portal berita web, media sosial resmi, liputan audio visual ibadah, dan desain publikasi.',
    phone: '+6281248003344'
  },
  {
    id: 'org-12',
    name: 'Petrus Haluk',
    role: 'Koordinator Bidang Sosial & Pelayanan Masyarakat',
    division: 'Bidang Sosial dan Pelayanan Masyarakat',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Mengorganisir aksi kemanusiaan pemuda, bantuan bencana, kunjungan duka/sakit, dan bakti lingkungan lembah.',
    phone: '+6282199884433'
  },
  {
    id: 'org-13',
    name: 'Gideon Elopere',
    role: 'Koordinator Bidang Olahraga, Seni & Kreativitas',
    division: 'Bidang Olahraga, Seni, dan Kreativitas',
    hierarchyLevel: 4,
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: 'Menyelenggarakan turnamen olahraga persahabatan pemuda gereja serta membina grup musik pujian dan seni rohani.',
    phone: '+6281344778899'
  }
];

export const initialMinistries: MinistryProgram[] = [
  {
    id: 'min-1',
    title: 'Pembinaan Rohani & Pemuridan Pemuda',
    category: 'Kerohanian',
    description: 'Program intensif penanaman firman Tuhan, renungan berakar, dan kelompok sel pemuridan (discipleship) agar pemuda memiliki ketahanan iman yang kokoh.',
    purpose: 'Mencetak pemuda Kristen yang memiliki kedewasaan rohani dan komitmen hidup kudus.',
    schedule: 'Setiap Jumat sore & Minggu kedua tiap bulan',
    image: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    highlights: ['Pendalaman Alkitab tematik', 'Kelompok akuntabilitas rohani', 'Bimbingan konseling pribadi pemuda']
  },
  {
    id: 'min-2',
    title: 'Persekutuan Doa & Malam Pujian Gabungan',
    category: 'Ibadah',
    description: 'Ibadah gabungan persekutuan pemuda GKII antarrayon di Lembah Baliem dengan puji-pujian yang mengangkat kultur lokal dan doa syafaat bagi bangsa.',
    purpose: 'Membangun keintiman dengan Tuhan dan memupuk kesatuan tubuh Kristus antar-jemaat.',
    schedule: 'Dua kali sebulan di jemaat bergilir',
    image: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    highlights: ['Penyembahan kontemporer & etnik', 'Doa syafaat tanah Papua', 'Kesaksian inspirasi pemuda']
  },
  {
    id: 'min-3',
    title: 'Latihan Kepemimpinan Kristen Pemuda (LKKP)',
    category: 'Pengembangan SDM',
    description: 'Pelatihan terstruktur bagi para pengurus pemuda jemaat lokal mengenai dasar kepemimpinan Kristen yang melayani (servant leadership) dan manajemen organisasi gereja.',
    purpose: 'Mempersiapkan calon pemimpin masa depan gereja dan masyarakat yang berintegritas.',
    schedule: 'Semesteran (Dua kali dalam setahun)',
    image: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    highlights: ['Manajemen organisasi gerejawi', 'Komunikasi publik & khotbah muda', 'Pemecahan masalah dalam tim']
  },
  {
    id: 'min-4',
    title: 'Aksi Kasih Sosial & Peduli Jemaat Pedalaman',
    category: 'Pelayanan Sosial',
    description: 'Kegiatan terjun langsung ke kampung-kampung jemaat pedalaman untuk menyalurkan bantuan buku, mengajar sekolah minggu, dan kerja bakti desa.',
    purpose: 'Menerjemahkan iman ke dalam perbuatan nyata kasih Kristus yang menyentuh masyarakat.',
    schedule: 'Berkala tiap triwulan',
    image: '/src/assets/images/pelayanan_sosial_pemuda_1793245787001.jpg',
    highlights: ['Bantuan peralatan sekolah anak', 'Kunjungan kasih jemaat terpencil', 'Bakti kebersihan lingkungan kampung']
  },
  {
    id: 'min-5',
    title: 'Pengembangan Talenta Musik & Multimedia Digital',
    category: 'Kreativitas',
    description: 'Wadah pembinaan bagi pemuda yang terpanggil dalam pelayanan tim musik, singer, worship leader, multimedia, tata suara, dan pembuatan konten rohani.',
    purpose: 'Memaksimalkan talenta generasi muda untuk memperindah ibadah gereja dan menjangkau media sosial.',
    schedule: 'Workshop bulanan & latihan rutin rayon',
    image: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    highlights: ['Kelas gitar, keyboard, dan drum ibadah', 'Teknik vokal & worship leading', 'Pengelolaan live streaming dan videografi']
  },
  {
    id: 'min-6',
    title: 'Pekan Olahraga Persahabatan & Seni Pemuda',
    category: 'Olahraga & Seni',
    description: 'Kompetisi persahabatan bola voli, futsal, dan pentas paduan suara rohani antarpersekutuan pemuda GKII di seluruh wilayah Baliem Tengah.',
    purpose: 'Menjaga kesehatan jasmani pemuda, memupuk sportivitas, serta menjalin keakraban tanpa perselisihan.',
    schedule: 'Tahunan menjelang HUT Pemuda GKII',
    image: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    highlights: ['Turnamen bola voli pemuda', 'Turnamen futsal persahabatan', 'Lomba vocal group rohani & tari pujian']
  }
];

export const initialMessages = [
  {
    id: 'msg-1',
    name: 'Samuel Murib',
    email: 'samuel.murib@gmail.com',
    phone: '081234567890',
    subject: 'Pendaftaran Delegasi Kemah Pemuda 2026',
    message: 'Shalom BPH Biro Pemuda, kami dari Pengurus Pemuda GKII Jemaat Galilea ingin mengonfirmasi jumlah delegasi yang akan kami utus untuk Kemah Rohani mendatang. Mohon informasi berkas formulir resminya. Terima kasih, Tuhan memberkati.',
    date: '2026-10-26 14:32',
    isRead: false
  },
  {
    id: 'msg-2',
    name: 'Elisabeth Kogoya',
    email: 'elisabeth.k@yahoo.com',
    phone: '082198765432',
    subject: 'Permohonan Pengisian Materi Multimedia di Jemaat Kami',
    message: 'Shalom rekan-rekan pengurus Biro, apakah Bidang Multimedia bersedia menjadi narasumber singkat dalam workshop sound system yang akan kami adakan di jemaat kami bulan depan? Terima kasih banyak atas pelayanannya.',
    date: '2026-10-25 09:15',
    isRead: true
  }
];
