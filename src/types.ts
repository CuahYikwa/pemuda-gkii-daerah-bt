export type NewsCategory = 
  | 'Semua'
  | 'Berita Organisasi'
  | 'Pelayanan Pemuda/i'
  | 'Ibadah & Doa'
  | 'Kegiatan Daerah'
  | 'Pendidikan dan Pembinaan'
  | 'Sosial & Masyarakat'
  | 'Pengumuman';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  date: string;
  coverImage: string;
  tags: string[];
  readTime: string;
  isFeatured?: boolean;
}

export type EventStatus = 'upcoming' | 'ongoing' | 'completed';

export interface ActivityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  pic: string;
  status: EventStatus;
  poster: string;
  registrationOpen: boolean;
  registrationLink?: string;
  documentationCount?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ibadah & KKR' | 'Kemah Pemuda' | 'Bakti Sosial' | 'Pelatihan' | 'Musik & Seni' | 'Semua';
  mediaType: 'photo' | 'video';
  url: string;
  date: string;
  caption: string;
}

export type DivisionName =
  | 'Pembina'
  | 'Badan Pengurus Harian (BPH)'
  | 'Bidang Kerohanian dan Pembinaan Iman'
  | 'Bidang Pendidikan dan Pengembangan SDM'
  | 'Bidang Organisasi dan Kaderisasi'
  | 'Bidang Humas dan Komunikasi'
  | 'Bidang Multimedia dan Dokumentasi'
  | 'Bidang Sosial dan Pelayanan Masyarakat'
  | 'Bidang Olahraga, Seni, dan Kreativitas';

export interface OrgMember {
  id: string;
  name: string;
  role: string;
  division: DivisionName;
  hierarchyLevel: 1 | 2 | 3 | 4 | 5; // 1: Pembina, 2: Ketua/Wakil, 3: Sekretaris/Bendahara, 4: Koordinator, 5: Anggota
  photo: string;
  period: string;
  bio?: string;
  phone?: string;
}

export interface MinistryProgram {
  id: string;
  title: string;
  category: string;
  description: string;
  purpose: string;
  schedule: string;
  image: string;
  highlights: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface OrgProfile {
  name: string;
  fullName: string;
  denomination: string;
  region: string;
  address: string;
  phoneWhatsapp: string;
  email: string;
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  motto: string;
  scriptureVerse: string;
  history: string;
  background: string;
  vision: string;
  mission: string[];
  coreValues: { title: string; desc: string }[];
  workPrograms: string[];
  serviceAreas: string[];
  statistics: { label: string; value: string; note: string }[];
}
