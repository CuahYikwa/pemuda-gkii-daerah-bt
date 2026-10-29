import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BeritaSection } from './components/BeritaSection';
import { BeritaDetailModal } from './components/BeritaDetailModal';
import { KegiatanSection } from './components/KegiatanSection';
import { KegiatanDetailModal } from './components/KegiatanDetailModal';
import { GaleriSection } from './components/GaleriSection';
import { LightboxModal } from './components/LightboxModal';
import { StrukturOrganisasiSection } from './components/StrukturOrganisasiSection';
import { PelayananSection } from './components/PelayananSection';
import { TentangKamiSection } from './components/TentangKamiSection';
import { KontakSection } from './components/KontakSection';
import { AdminLoginPage } from './components/AdminLoginModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { Heart, Users, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

const MainContent: React.FC = () => {
  const {
    activePage,
    setActivePage,
    isAdmin,
    selectedNews,
    setSelectedNews,
    selectedEvent,
    setSelectedEvent,
    gallery,
    lightboxIndex,
    setLightboxIndex,
    profile,
  } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-amber-500/20 selection:text-amber-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* BERANDA */}
        {activePage === 'beranda' && (
          <div>
            <Hero />

            {/* Tentang Kami Preview Brief */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                      <span>Mengenal Lebih Dekat</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span>Profil Pelayanan</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-brand font-bold text-slate-900 leading-snug">
                      Membina Generasi Muda GKII yang Berakar, Berbuah, dan Berdampak
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Biro Pemuda/i GKII Baliem Tengah adalah wadah resmi persekutuan generasi muda gereja di lingkungan Daerah Baliem Tengah. Kami rindu menyaksikan setiap pemuda dan pemudi memiliki iman yang teguh, karakter Kristus, keterampilan kepemimpinan, dan hati yang melayani sesama di tanah Papua.
                    </p>
                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={() => {
                          setActivePage('tentang');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
                      >
                        <span>Baca Sejarah & Visi Misi</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setActivePage('pelayanan');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                      >
                        Lihat Program Pelayanan &rarr;
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                        ✦
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">Pembinaan Rohani</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Kelompok pemuridan, pendalaman Alkitab, dan pembekalan iman bagi pemuda jemaat.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                        ✦
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">Kepemimpinan Kristen</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Latihan Kepemimpinan Kristen Pemuda (LKKP) untuk mencetak fungsionaris teladan.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        ✦
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">Aksi Kasih Sosial</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Pemberdayaan dan bakti sosial di kampung jemaat pedalaman Lembah Baliem.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                        ✦
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">Kreativitas & Multimedia</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Pentas seni musik pujian, sound system gereja, dan pewartaan digital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Berita Terbaru Preview */}
            <BeritaSection isHomePreview={true} />

            {/* Kegiatan Mendatang Preview */}
            <KegiatanSection isHomePreview={true} />

            {/* Cuplikan Struktur Organisasi */}
            <StrukturOrganisasiSection isHomePreview={true} />

            {/* Galeri Foto Preview */}
            <GaleriSection isHomePreview={true} />

            {/* Program Pelayanan Preview */}
            <PelayananSection isHomePreview={true} />

            {/* Ajakan Berpartisipasi dalam Pelayanan Pemuda/i */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.1),transparent_50%)] pointer-events-none" />
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  Panggilan Pelayanan Generasi Muda
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-brand font-bold text-white tracking-tight leading-tight text-balance">
                  Mari Bertumbuh & Melayani Bersama Pemuda/i GKII Baliem Tengah
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
                  Jangan biarkan masa mudamu berlalu tanpa persembahan terbaik bagi kemuliaan Tuhan. Bergabunglah dalam persekutuan pemuda di jemaat lokasimu dan ambil bagian dalam gerak pelayanan se-Daerah Baliem Tengah.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setActivePage('kontak');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-lg shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950" />
                    <span>Hubungi Pengurus Biro</span>
                  </button>

                  <a
                    href={`https://wa.me/${profile.phoneWhatsapp.replace(/[^0-9]/g, '')}?text=Shalom%20Biro%20Pemuda%20GKII%20Baliem%20Tengah,%20saya%20pemuda%20ingin%20bergabung%20pelayanan`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-lg border border-slate-700 transition-colors flex items-center gap-2"
                  >
                    <span>Daftar Persekutuan via WA</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TENTANG KAMI */}
        {activePage === 'tentang' && <TentangKamiSection />}

        {/* BERITA FULL PORTAL */}
        {activePage === 'berita' && <BeritaSection isHomePreview={false} />}

        {/* KEGIATAN FULL PAGE */}
        {activePage === 'kegiatan' && <KegiatanSection isHomePreview={false} />}

        {/* GALERI FULL PAGE */}
        {activePage === 'galeri' && <GaleriSection isHomePreview={false} />}

        {/* STRUKTUR ORGANISASI FULL PAGE */}
        {activePage === 'struktur' && <StrukturOrganisasiSection isHomePreview={false} />}

        {/* PELAYANAN FULL PAGE */}
        {activePage === 'pelayanan' && <PelayananSection isHomePreview={false} />}

        {/* KONTAK FULL PAGE */}
        {activePage === 'kontak' && <KontakSection />}

        {/* ADMIN DASHBOARD OR LOGIN */}
        {activePage === 'admin' && (isAdmin ? <AdminDashboard /> : <AdminLoginPage />)}
      </main>

      {/* FOOTER */}
      {activePage !== 'admin' && <Footer />}

      {/* MODALS */}
      <BeritaDetailModal
        article={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <KegiatanDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <LightboxModal
        items={gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
