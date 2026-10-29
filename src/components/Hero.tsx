import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Calendar, BookOpen, Users, Church } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, setActivePage } = useApp();

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Main 2-column Hero split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Context line */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
              <span>Gereja Kemah Injil Indonesia</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Daerah Baliem Tengah</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-brand font-bold text-white tracking-tight leading-[1.15] text-balance">
              BIRO PEMUDA/I <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                GKII BALIEM TENGAH
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Mewadahi, membina, dan memperlengkapi generasi muda Gereja Kemah Injil Indonesia di segenap lembah dan pegunungan Baliem Tengah agar teguh berakar dalam firman Kristus, berkarakter teladan, dan berdampak nyata bagi gereja serta bangsa.
            </p>

            {/* Core Scripture Pill-free Text */}
            <div className="mt-5 text-xs sm:text-sm text-slate-400 italic flex items-center gap-2">
              <span className="text-amber-400 font-semibold not-italic font-brand">1 Timotius 4:12</span>
              <span aria-hidden="true">·</span>
              <span>Jadilah teladan bagi orang-orang percaya</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActivePage('kegiatan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm rounded-lg shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Jelajahi Kegiatan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActivePage('berita');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Baca Berita Resmi</span>
              </button>

              <button
                onClick={() => {
                  setActivePage('tentang');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-3.5 text-slate-400 hover:text-white font-medium text-sm transition-colors whitespace-nowrap"
              >
                Profil Organisasi &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_pemuda_gkii_1793245785889.jpg"
                alt="Persekutuan Ibadah Pemuda GKII Baliem Tengah"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
                  Dokumentasi Pelayanan
                </span>
                <p className="font-brand text-base sm:text-lg font-medium text-white mt-1">
                  Ibadah & Kebangunan Rohani Pemuda GKII
                </p>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Mengobarkan api pujian dan doa di tengah generasi muda se-Daerah Baliem Tengah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below hero split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {profile.statistics.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-brand font-bold text-amber-400 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
