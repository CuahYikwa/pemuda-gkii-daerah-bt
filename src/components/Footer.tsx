import React from 'react';
import { useApp, PageId } from '../context/AppContext';
import { MapPin, Phone, Mail, ChevronRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, setActivePage } = useApp();

  const handleNav = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Scripture Callout Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-brand text-amber-300/90 text-sm sm:text-base md:text-lg leading-relaxed italic">
            &ldquo;Jangan seorang pun menganggap engkau rendah karena engkau muda. Jadilah teladan bagi orang-orang percaya, dalam perkataanmu, dalam tingkah lakumu, dalam kasihmu, dalam kesetiaanmu dan dalam kesucianmu.&rdquo;
          </blockquote>
          <p className="mt-2 text-xs uppercase tracking-widest text-slate-400 font-semibold">
            1 Timotius 4:12 · Dasar Panggilan Pelayanan Pemuda GKII
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Identity & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-slate-950">
                  <path d="M12 2v20M6 8h12" />
                </svg>
              </div>
              <div>
                <h3 className="font-brand font-bold text-base text-white">BIRO PEMUDA/I GKII</h3>
                <span className="text-xs uppercase text-amber-400 font-medium">BALIEM TENGAH</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Komisi pelayanan kategorial generasi muda Gereja Kemah Injil Indonesia Daerah Baliem Tengah, membina pemuda/i yang berakar dalam Kristus dan menjadi berkat bagi tanah Papua.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${profile.phoneWhatsapp.replace(/[^0-9]/g, '')}?text=Shalom%20Biro%20Pemuda%20GKII%20Baliem%20Tengah`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Resmi Organisasi
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-amber-400 mb-4">
              Navigasi Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tentang')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Profil & Sejarah Organisasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('berita')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Warta & Berita Pelayanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kegiatan')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Agenda Kegiatan & Kemah
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('galeri')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Dokumentasi & Galeri Foto
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('struktur')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Struktur Kepengurusan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pelayanan')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  Bidang Pelayanan Pemuda
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Rayon Pelayanan */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-amber-400 mb-4">
              Wilayah Pelayanan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {profile.serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-400">·</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-900 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Klasis / Daerah:</span> Baliem Tengah
              <br />
              <span className="text-slate-300 font-medium">Sinode:</span> Gereja Kemah Injil Indonesia
            </div>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-amber-400 mb-4">
              Sekretariat & Kontak
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{profile.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${profile.phoneWhatsapp}`} className="hover:text-white transition-colors">
                  {profile.phoneWhatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors truncate">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-900">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-2">
                Media Sosial Resmi
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={profile.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} BIRO PEMUDA/I GKII BALIEM TENGAH. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('kontak')}
              className="hover:text-white transition-colors"
            >
              Hubungi Pengurus
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('admin')}
              className="hover:text-amber-400 transition-colors text-slate-400"
            >
              Login Pengurus / Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
