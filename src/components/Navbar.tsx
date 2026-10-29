import React, { useState } from 'react';
import { useApp, PageId } from '../context/AppContext';
import { Menu, X, Shield, ChevronRight, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activePage, setActivePage, isAdmin, logoutAdmin } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'berita', label: 'Berita' },
    { id: 'kegiatan', label: 'Kegiatan' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'struktur', label: 'Struktur Organisasi' },
    { id: 'pelayanan', label: 'Pelayanan' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
        {/* Top Info Banner */}
        <div className="hidden lg:block border-b border-slate-800/80 bg-slate-950/60 px-6 py-1.5 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span>Gereja Kemah Injil Indonesia (GKII)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Daerah Baliem Tengah</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400 font-medium">Papua Pegunungan</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="italic text-slate-300">1 Timotius 4:12 - Jadilah Teladan</span>
              {isAdmin && (
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                  <Shield className="w-3 h-3" />
                  Mode Admin Aktif
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark with church emblem */}
            <button
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-500/20 text-slate-950 font-bold shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-6 h-6 text-slate-950"
                  aria-hidden="true"
                >
                  <path d="M12 2v20M6 8h12" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block font-brand font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  BIRO PEMUDA/I GKII
                </span>
                <span className="block text-xs uppercase tracking-wider text-amber-400 font-medium whitespace-nowrap">
                  BALIEM TENGAH
                </span>
              </div>
            </button>

            {/* Zone 2: 4-8 clean single-line nav links */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-300">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors whitespace-nowrap py-1 relative hover:text-white ${
                    activePage === item.id
                      ? 'text-amber-400 font-semibold'
                      : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {isAdmin ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavClick('admin')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      activePage === 'admin'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-amber-500/30'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    Dashboard Admin
                  </button>
                  <button
                    onClick={logoutAdmin}
                    title="Keluar dari Admin"
                    className="p-2 text-slate-400 hover:text-rose-400 bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick('admin')}
                  className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors whitespace-nowrap flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  Login Admin
                </button>
              )}
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-slate-950">
                      <path d="M12 2v20M6 8h12" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-brand font-bold text-sm text-white block">BIRO PEMUDA/I</span>
                    <span className="text-[10px] text-amber-400 font-semibold tracking-wider block">GKII BALIEM TENGAH</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-lg text-left transition-colors ${
                      activePage === item.id
                        ? 'bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20'
                        : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6">
              {isAdmin ? (
                <div className="space-y-2">
                  <button
                    onClick={() => handleNavClick('admin')}
                    className="w-full py-2.5 px-4 bg-amber-500 text-slate-950 font-semibold rounded-lg text-sm flex items-center justify-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Buka Dashboard Admin
                  </button>
                  <button
                    onClick={() => {
                      logoutAdmin();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2 px-4 text-slate-400 hover:text-rose-400 text-xs flex items-center justify-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Keluar Admin
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick('admin')}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-amber-400 font-medium rounded-lg text-sm flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Masuk sebagai Admin
                </button>
              )}
              <p className="text-[11px] text-slate-500 text-center mt-4">
                GKII Daerah Baliem Tengah · Papua Pegunungan
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
