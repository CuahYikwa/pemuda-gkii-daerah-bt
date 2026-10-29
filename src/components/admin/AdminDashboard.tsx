import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  NewsArticle,
  ActivityEvent,
  GalleryItem,
  OrgMember,
  DivisionName,
  NewsCategory,
} from '../../types';
import {
  Shield,
  FileText,
  Calendar,
  Image as ImageIcon,
  Users,
  Inbox,
  Settings,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  LogOut,
  RotateCcw,
  AlertCircle,
  Eye,
  CheckCircle2,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    profile,
    updateProfile,
    news,
    addNews,
    updateNews,
    deleteNews,
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    gallery,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    orgStructure,
    addOrgMember,
    updateOrgMember,
    deleteOrgMember,
    messages,
    markMessageRead,
    deleteMessage,
    logoutAdmin,
    resetToDefaults,
  } = useApp();

  type TabKey = 'berita' | 'kegiatan' | 'galeri' | 'struktur' | 'pesan' | 'profil';
  const [activeTab, setActiveTab] = useState<TabKey>('berita');

  // Notification feedback
  const [notice, setNotice] = useState<string | null>(null);
  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  // ================= BERITA FORM STATE =================
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsForm, setNewsForm] = useState({
    title: '',
    slug: '',
    category: 'Berita Organisasi',
    author: 'Pengurus Biro Pemuda/i',
    date: new Date().toISOString().slice(0, 10),
    coverImage: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    summary: '',
    content: '',
    tags: 'Pemuda GKII, Baliem Tengah',
    readTime: '3 menit baca',
  });

  const openAddNews = () => {
    setEditingNewsId(null);
    setNewsForm({
      title: '',
      slug: '',
      category: 'Berita Organisasi',
      author: 'Pengurus Biro Pemuda/i',
      date: new Date().toISOString().slice(0, 10),
      coverImage: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
      summary: '',
      content: '',
      tags: 'Pemuda GKII, Baliem Tengah',
      readTime: '3 menit baca',
    });
    setNewsModalOpen(true);
  };

  const openEditNews = (article: NewsArticle) => {
    setEditingNewsId(article.id);
    setNewsForm({
      title: article.title,
      slug: article.slug,
      category: article.category,
      author: article.author,
      date: article.date,
      coverImage: article.coverImage,
      summary: article.summary,
      content: article.content,
      tags: article.tags ? article.tags.join(', ') : '',
      readTime: article.readTime,
    });
    setNewsModalOpen(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title.trim() || !newsForm.summary.trim()) {
      alert('Judul dan ringkasan berita wajib diisi.');
      return;
    }
    const slug = newsForm.slug.trim()
      ? newsForm.slug.trim().toLowerCase().replace(/\s+/g, '-')
      : newsForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const tagsArray = newsForm.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingNewsId) {
      updateNews(editingNewsId, {
        ...newsForm,
        slug,
        tags: tagsArray,
      });
      showNotice('Berita berhasil diperbarui.');
    } else {
      addNews({
        ...newsForm,
        slug,
        tags: tagsArray,
      });
      showNotice('Berita baru berhasil diterbitkan.');
    }
    setNewsModalOpen(false);
  };

  // ================= KEGIATAN FORM STATE =================
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '15 - 18 November 2026',
    time: '08:00 - 20:00 WIT',
    location: 'Wamena, Jayawijaya',
    pic: 'Koordinator Kegiatan',
    status: 'upcoming' as ActivityEvent['status'],
    poster: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
    registrationOpen: true,
    registrationLink: 'https://wa.me/6281248001928',
  });

  const openAddEvent = () => {
    setEditingEventId(null);
    setEventForm({
      title: '',
      description: '',
      date: '15 - 18 November 2026',
      time: '08:00 - 20:00 WIT',
      location: 'Wamena, Jayawijaya',
      pic: 'Koordinator Pelayanan',
      status: 'upcoming',
      poster: '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg',
      registrationOpen: true,
      registrationLink: 'https://wa.me/6281248001928',
    });
    setEventModalOpen(true);
  };

  const openEditEvent = (event: ActivityEvent) => {
    setEditingEventId(event.id);
    setEventForm({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      pic: event.pic,
      status: event.status,
      poster: event.poster,
      registrationOpen: event.registrationOpen,
      registrationLink: event.registrationLink || '',
    });
    setEventModalOpen(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title.trim()) {
      alert('Nama kegiatan wajib diisi.');
      return;
    }
    if (editingEventId) {
      updateEvent(editingEventId, eventForm);
      showNotice('Data kegiatan berhasil diperbarui.');
    } else {
      addEvent(eventForm);
      showNotice('Kegiatan baru berhasil ditambahkan.');
    }
    setEventModalOpen(false);
  };

  // ================= GALERI FORM STATE =================
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    category: 'Ibadah & KKR' as GalleryItem['category'],
    url: '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg',
    date: new Date().toISOString().slice(0, 10),
    caption: '',
  });

  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.title.trim()) {
      alert('Judul foto wajib diisi.');
      return;
    }
    addGalleryItem({
      title: galleryForm.title,
      category: galleryForm.category,
      mediaType: 'photo',
      url: galleryForm.url,
      date: galleryForm.date,
      caption: galleryForm.caption,
    });
    showNotice('Foto dokumentasi baru berhasil ditambahkan.');
    setGalleryModalOpen(false);
  };

  // ================= STRUKTUR FORM STATE =================
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [memberForm, setMemberForm] = useState({
    name: '',
    role: '',
    division: 'Badan Pengurus Harian (BPH)' as DivisionName,
    hierarchyLevel: 2 as OrgMember['hierarchyLevel'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    period: '2024 - 2028',
    bio: '',
    phone: '+6281248001928',
  });

  const openAddMember = () => {
    setEditingMemberId(null);
    setMemberForm({
      name: '',
      role: '',
      division: 'Bidang Kerohanian dan Pembinaan Iman',
      hierarchyLevel: 4,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      period: '2024 - 2028',
      bio: '',
      phone: '+6281248001928',
    });
    setMemberModalOpen(true);
  };

  const openEditMember = (m: OrgMember) => {
    setEditingMemberId(m.id);
    setMemberForm({
      name: m.name,
      role: m.role,
      division: m.division,
      hierarchyLevel: m.hierarchyLevel,
      photo: m.photo,
      period: m.period,
      bio: m.bio || '',
      phone: m.phone || '',
    });
    setMemberModalOpen(true);
  };

  const handleSaveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberForm.name.trim() || !memberForm.role.trim()) {
      alert('Nama dan jabatan pengurus wajib diisi.');
      return;
    }
    if (editingMemberId) {
      updateOrgMember(editingMemberId, memberForm);
      showNotice('Data pengurus berhasil diperbarui.');
    } else {
      addOrgMember(memberForm);
      showNotice('Pengurus baru berhasil ditambahkan.');
    }
    setMemberModalOpen(false);
  };

  // ================= PROFIL EDIT STATE =================
  const [profileForm, setProfileForm] = useState({ ...profile });
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    showNotice('Profil organisasi berhasil disimpan.');
  };

  const unreadMessagesCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-brand font-bold text-lg sm:text-xl text-white">
                  Dashboard Administrator & CMS
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  Resmi
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Biro Pemuda/i GKII Baliem Tengah · Manajemen Konten, Kegiatan, Berita, & Organisasi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data ke data default bawaan sistem?')) {
                  resetToDefaults();
                  showNotice('Data sistem berhasil dikembalikan ke default.');
                }
              }}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
              title="Reset ke data bawaan awal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="px-3.5 py-2 text-xs font-semibold text-rose-300 hover:text-white bg-rose-950/60 hover:bg-rose-900 rounded-lg border border-rose-800/60 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar Admin</span>
            </button>
          </div>
        </div>

        {/* Notice feedback */}
        {notice && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-600 text-white font-medium text-xs flex items-center gap-2 shadow-md animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        {/* Dashboard Tabs */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { key: 'berita', label: 'Kelola Berita', icon: FileText, count: news.length },
            { key: 'kegiatan', label: 'Kelola Kegiatan', icon: Calendar, count: events.length },
            { key: 'galeri', label: 'Kelola Galeri', icon: ImageIcon, count: gallery.length },
            { key: 'struktur', label: 'Struktur Pengurus', icon: Users, count: orgStructure.length },
            { key: 'pesan', label: 'Pesan Masuk', icon: Inbox, count: unreadMessagesCount },
            { key: 'profil', label: 'Profil & Pengaturan', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabKey)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-amber-800 text-amber-100' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: KELOLA BERITA */}
        {activeTab === 'berita' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h2 className="font-brand font-bold text-lg text-slate-900">
                  Daftar Warta & Berita Organisasi
                </h2>
                <p className="text-xs text-slate-500">
                  Publikasikan artikel, berita ibadah daerah, dan warta pemuda ke halaman publik portal.
                </p>
              </div>
              <button
                onClick={openAddNews}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Tulis Berita Baru</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Judul Artikel</th>
                    <th className="py-3 px-4">Kategori</th>
                    <th className="py-3 px-4">Penulis</th>
                    <th className="py-3 px-4">Tanggal</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {news.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 line-clamp-1 max-w-md">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          {item.summary}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">{item.author}</td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{item.date}</td>
                      <td className="py-3 px-4 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => openEditNews(item)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit berita"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus berita: "${item.title}"?`)) {
                              deleteNews(item.id);
                              showNotice('Berita telah dihapus.');
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                          title="Hapus berita"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: KELOLA KEGIATAN */}
        {activeTab === 'kegiatan' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h2 className="font-brand font-bold text-lg text-slate-900">
                  Daftar Kegiatan & Kalender Pelayanan
                </h2>
                <p className="text-xs text-slate-500">
                  Kelola jadwal kemah pemuda, ibadah gabungan, seminar kepemimpinan, dan bakti sosial.
                </p>
              </div>
              <button
                onClick={openAddEvent}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Tambah Kegiatan Baru</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Nama Kegiatan</th>
                    <th className="py-3 px-4">Tanggal & Waktu</th>
                    <th className="py-3 px-4">Lokasi</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Penanggung Jawab</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {events.map((ev) => (
                    <tr key={ev.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900 max-w-xs">
                        {ev.title}
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        {ev.date}
                        <div className="text-[10px] text-slate-400">{ev.time}</div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 max-w-[160px] truncate">{ev.location}</td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            ev.status === 'upcoming'
                              ? 'bg-amber-100 text-amber-800'
                              : ev.status === 'ongoing'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {ev.status === 'upcoming'
                            ? 'Akan Datang'
                            : ev.status === 'ongoing'
                            ? 'Berlangsung'
                            : 'Selesai'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">{ev.pic}</td>
                      <td className="py-3 px-4 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => openEditEvent(ev)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit kegiatan"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus kegiatan: "${ev.title}"?`)) {
                              deleteEvent(ev.id);
                              showNotice('Kegiatan telah dihapus.');
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                          title="Hapus kegiatan"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: KELOLA GALERI */}
        {activeTab === 'galeri' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h2 className="font-brand font-bold text-lg text-slate-900">
                  Manajemen Galeri Dokumentasi Foto
                </h2>
                <p className="text-xs text-slate-500">
                  Unggah atau daftarkan dokumentasi visual kegiatan pemuda di berbagai rayon jemaat.
                </p>
              </div>
              <button
                onClick={() => setGalleryModalOpen(true)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Tambah Foto Dokumentasi</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.caption}</p>
                    <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
                      <span>{item.date}</span>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus foto: "${item.title}"?`)) {
                            deleteGalleryItem(item.id);
                            showNotice('Foto dokumentasi telah dihapus.');
                          }
                        }}
                        className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KELOLA STRUKTUR PENGURUS */}
        {activeTab === 'struktur' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h2 className="font-brand font-bold text-lg text-slate-900">
                  Data Pengurus & Struktur Organisasi
                </h2>
                <p className="text-xs text-slate-500">
                  Kelola nama fungsionaris, jabatan, bidang pelayanan, dan periode kepengurusan.
                </p>
              </div>
              <button
                onClick={openAddMember}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Tambah Pengurus</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Nama Lengkap</th>
                    <th className="py-3 px-4">Jabatan</th>
                    <th className="py-3 px-4">Bidang</th>
                    <th className="py-3 px-4">Periode</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orgStructure.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 flex items-center gap-3">
                        <img
                          src={m.photo}
                          alt={m.name}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-full object-cover border border-slate-300"
                        />
                        <span className="font-semibold text-slate-900">{m.name}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-700 font-medium">{m.role}</td>
                      <td className="py-3 px-4 text-slate-500">{m.division}</td>
                      <td className="py-3 px-4 text-slate-500">{m.period}</td>
                      <td className="py-3 px-4 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => openEditMember(m)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit pengurus"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus pengurus: "${m.name}"?`)) {
                              deleteOrgMember(m.id);
                              showNotice('Pengurus telah dihapus.');
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                          title="Hapus pengurus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: PESAN MASUK DARI FORMULIR */}
        {activeTab === 'pesan' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="pb-4 border-b border-slate-200 mb-6">
              <h2 className="font-brand font-bold text-lg text-slate-900">
                Pesan Masuk dari Pengunjung & Jemaat
              </h2>
              <p className="text-xs text-slate-500">
                Daftar pertanyaan, permohonan informasi, dan pesan yang dikirim melalui formulir kontak publik.
              </p>
            </div>

            {messages.length === 0 ? (
              <div className="py-12 text-center text-slate-400">
                <Inbox className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">Kotak pesan kosong</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-5 rounded-xl border transition-all ${
                      msg.isRead
                        ? 'bg-slate-50/70 border-slate-200'
                        : 'bg-amber-50/40 border-amber-300 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{msg.name}</span>
                          {!msg.isRead && (
                            <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-bold">
                              Pesan Baru
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                          <span>{msg.email}</span>
                          <span aria-hidden="true">·</span>
                          <span>WhatsApp: {msg.phone}</span>
                          <span aria-hidden="true">·</span>
                          <span>{msg.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <a
                          href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}?text=Shalom%20${encodeURIComponent(msg.name)},%20kami%20dari%20Biro%20Pemuda%20GKII%20Baliem%20Tengah%20merespons%20pesan%20Anda.`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 text-xs bg-emerald-600 text-white rounded hover:bg-emerald-500 font-medium"
                        >
                          Balas via WA
                        </a>
                        {!msg.isRead && (
                          <button
                            onClick={() => {
                              markMessageRead(msg.id);
                              showNotice('Pesan ditandai telah dibaca.');
                            }}
                            className="px-2.5 py-1 text-xs bg-slate-800 text-white rounded hover:bg-slate-700 font-medium"
                          >
                            Tandai Dibaca
                          </button>
                        )}
                        <button
                          onClick={() => {
                            if (window.confirm('Hapus pesan ini?')) {
                              deleteMessage(msg.id);
                              showNotice('Pesan telah dihapus.');
                            }
                          }}
                          className="p-1 text-rose-600 hover:bg-rose-50 rounded"
                          title="Hapus pesan"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-xs font-semibold text-slate-800">
                        Subjek: {msg.subject}
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: PROFIL & PENGATURAN ORGANISASI */}
        {activeTab === 'profil' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="pb-4 border-b border-slate-200 mb-6">
              <h2 className="font-brand font-bold text-lg text-slate-900">
                Pengaturan Profil & Statistik Organisasi
              </h2>
              <p className="text-xs text-slate-500">
                Perbarui visi, misi, alamat kantor sekretariat, nomor kontak WhatsApp resmi, dan statistik jemaat.
              </p>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nama Biro / Organisasi
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Wilayah & Daerah Gerejawi
                  </label>
                  <input
                    type="text"
                    value={profileForm.region}
                    onChange={(e) => setProfileForm({ ...profileForm, region: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nomor WhatsApp Resmi
                  </label>
                  <input
                    type="text"
                    value={profileForm.phoneWhatsapp}
                    onChange={(e) => setProfileForm({ ...profileForm, phoneWhatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Resmi Organisasi
                  </label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Alamat Lengkap Sekretariat
                </label>
                <input
                  type="text"
                  value={profileForm.address}
                  onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Visi Pelayanan
                </label>
                <textarea
                  rows={3}
                  value={profileForm.vision}
                  onChange={(e) => setProfileForm({ ...profileForm, vision: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Sejarah Singkat Organisasi
                </label>
                <textarea
                  rows={5}
                  value={profileForm.history}
                  onChange={(e) => setProfileForm({ ...profileForm, history: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 font-sans"
                />
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Simpan Perubahan Profil</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* MODAL: Tambah / Edit Berita */}
      {newsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <h3 className="font-brand font-bold text-lg text-slate-900">
                {editingNewsId ? 'Ubah Berita Publikasi' : 'Tulis Berita Pelayanan Baru'}
              </h3>
              <button
                onClick={() => setNewsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Judul Berita</label>
                <input
                  type="text"
                  required
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  placeholder="Contoh: Ibadah Pembukaan Kemah Rohani 2026 Berlangsung Penuh Sukacita"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Kategori Berita</label>
                  <select
                    value={newsForm.category}
                    onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  >
                    <option value="Berita Organisasi">Berita Organisasi</option>
                    <option value="Pelayanan Pemuda/i">Pelayanan Pemuda/i</option>
                    <option value="Ibadah & Doa">Ibadah & Doa</option>
                    <option value="Kegiatan Daerah">Kegiatan Daerah</option>
                    <option value="Pendidikan dan Pembinaan">Pendidikan dan Pembinaan</option>
                    <option value="Sosial & Masyarakat">Sosial & Masyarakat</option>
                    <option value="Pengumuman">Pengumuman</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nama Penulis / Redaksi</label>
                  <input
                    type="text"
                    value={newsForm.author}
                    onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">URL Foto Sampul</label>
                <input
                  type="text"
                  value={newsForm.coverImage}
                  onChange={(e) => setNewsForm({ ...newsForm, coverImage: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Ringkasan Singkat</label>
                <textarea
                  rows={2}
                  required
                  value={newsForm.summary}
                  onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                  placeholder="Ringkasan 1-2 kalimat untuk kartu berita..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Isi Lengkap Berita</label>
                <textarea
                  rows={6}
                  required
                  value={newsForm.content}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  placeholder="Tuliskan isi berita secara lengkap di sini..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 font-normal leading-relaxed"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tag / Topik (pisahkan dengan koma)</label>
                <input
                  type="text"
                  value={newsForm.tags}
                  onChange={(e) => setNewsForm({ ...newsForm, tags: e.target.value })}
                  placeholder="Kemah Pemuda, GKII, Baliem Tengah"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setNewsModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold"
                >
                  Simpan & Terbitkan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Tambah / Edit Kegiatan */}
      {eventModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <h3 className="font-brand font-bold text-lg text-slate-900">
                {editingEventId ? 'Edit Jadwal Kegiatan' : 'Tambah Kegiatan Pelayanan'}
              </h3>
              <button
                onClick={() => setEventModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEvent} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nama Kegiatan</label>
                <input
                  type="text"
                  required
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="Contoh: Kemah Pemuda Se-Daerah 2026"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Tanggal Kegiatan</label>
                  <input
                    type="text"
                    required
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    placeholder="Contoh: 14 - 17 November 2026"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Waktu / Pukul</label>
                  <input
                    type="text"
                    required
                    value={eventForm.time}
                    onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                    placeholder="08:00 - 20:00 WIT"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Lokasi / Tempat</label>
                  <input
                    type="text"
                    required
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                    placeholder="Wamena, Jayawijaya"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Penanggung Jawab (PIC)</label>
                  <input
                    type="text"
                    required
                    value={eventForm.pic}
                    onChange={(e) => setEventForm({ ...eventForm, pic: e.target.value })}
                    placeholder="Nama PIC / Kontak"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Status Kegiatan</label>
                <select
                  value={eventForm.status}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      status: e.target.value as ActivityEvent['status'],
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="upcoming">Akan Datang (Upcoming)</option>
                  <option value="ongoing">Sedang Berlangsung (Ongoing)</option>
                  <option value="completed">Telah Selesai (Completed)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Deskripsi Lengkap</label>
                <textarea
                  rows={4}
                  required
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  placeholder="Rincian informasi agenda kegiatan..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEventModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold"
                >
                  Simpan Kegiatan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Tambah Galeri */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <h3 className="font-brand font-bold text-lg text-slate-900">
                Tambah Foto Dokumentasi
              </h3>
              <button
                onClick={() => setGalleryModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGallery} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Judul Dokumentasi</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  placeholder="Contoh: Suasana Kebersamaan Kemah Rohani"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kategori Dokumentasi</label>
                <select
                  value={galleryForm.category}
                  onChange={(e) =>
                    setGalleryForm({
                      ...galleryForm,
                      category: e.target.value as GalleryItem['category'],
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="Ibadah & KKR">Ibadah & KKR</option>
                  <option value="Kemah Pemuda">Kemah Pemuda</option>
                  <option value="Bakti Sosial">Bakti Sosial</option>
                  <option value="Pelatihan">Pelatihan</option>
                  <option value="Musik & Seni">Musik & Seni</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">URL Foto Gambar</label>
                <input
                  type="text"
                  required
                  value={galleryForm.url}
                  onChange={(e) => setGalleryForm({ ...galleryForm, url: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Keterangan / Caption</label>
                <textarea
                  rows={3}
                  value={galleryForm.caption}
                  onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                  placeholder="Keterangan singkat momen dokumentasi..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold"
                >
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Tambah / Edit Pengurus */}
      {memberModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <h3 className="font-brand font-bold text-lg text-slate-900">
                {editingMemberId ? 'Ubah Data Pengurus' : 'Tambah Anggota Pengurus Baru'}
              </h3>
              <button
                onClick={() => setMemberModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveMember} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap & Gelar</label>
                <input
                  type="text"
                  required
                  value={memberForm.name}
                  onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                  placeholder="Contoh: Samuel Yikwa, S.Pd"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Jabatan Fungsional</label>
                  <input
                    type="text"
                    required
                    value={memberForm.role}
                    onChange={(e) => setMemberForm({ ...memberForm, role: e.target.value })}
                    placeholder="Contoh: Koordinator Bidang"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Tingkat Hierarki</label>
                  <select
                    value={memberForm.hierarchyLevel}
                    onChange={(e) =>
                      setMemberForm({
                        ...memberForm,
                        hierarchyLevel: Number(e.target.value) as OrgMember['hierarchyLevel'],
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  >
                    <option value={1}>1 - Pembina / Penasihat</option>
                    <option value={2}>2 - Ketua / Wakil Ketua</option>
                    <option value={3}>3 - Sekretaris / Bendahara</option>
                    <option value={4}>4 - Koordinator Bidang</option>
                    <option value={5}>5 - Anggota Bidang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Bidang / Komisi</label>
                <select
                  value={memberForm.division}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, division: e.target.value as DivisionName })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="Pembina">Pembina</option>
                  <option value="Badan Pengurus Harian (BPH)">Badan Pengurus Harian (BPH)</option>
                  <option value="Bidang Kerohanian dan Pembinaan Iman">
                    Bidang Kerohanian dan Pembinaan Iman
                  </option>
                  <option value="Bidang Pendidikan dan Pengembangan SDM">
                    Bidang Pendidikan dan Pengembangan SDM
                  </option>
                  <option value="Bidang Organisasi dan Kaderisasi">
                    Bidang Organisasi dan Kaderisasi
                  </option>
                  <option value="Bidang Humas dan Komunikasi">
                    Bidang Humas dan Komunikasi
                  </option>
                  <option value="Bidang Multimedia dan Dokumentasi">
                    Bidang Multimedia dan Dokumentasi
                  </option>
                  <option value="Bidang Sosial dan Pelayanan Masyarakat">
                    Bidang Sosial dan Pelayanan Masyarakat
                  </option>
                  <option value="Bidang Olahraga, Seni, dan Kreativitas">
                    Bidang Olahraga, Seni, dan Kreativitas
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">URL Foto Profil</label>
                <input
                  type="text"
                  value={memberForm.photo}
                  onChange={(e) => setMemberForm({ ...memberForm, photo: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Periode Jabatan</label>
                  <input
                    type="text"
                    value={memberForm.period}
                    onChange={(e) => setMemberForm({ ...memberForm, period: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nomor WhatsApp</label>
                  <input
                    type="text"
                    value={memberForm.phone}
                    onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Biodata / Peran Singkat</label>
                <textarea
                  rows={2}
                  value={memberForm.bio}
                  onChange={(e) => setMemberForm({ ...memberForm, bio: e.target.value })}
                  placeholder="Uraian tanggung jawab pelayanan..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setMemberModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold"
                >
                  Simpan Data Pengurus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
