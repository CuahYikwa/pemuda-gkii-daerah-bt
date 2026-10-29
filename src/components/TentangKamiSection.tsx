import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, BookOpen, Compass, Heart, Users, MapPin, Target, Sparkles } from 'lucide-react';

export const TentangKamiSection: React.FC = () => {
  const { profile } = useApp();

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-12 border-b border-slate-200">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            <span>Profil Resmi Organisasi</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>GKII Daerah Baliem Tengah</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-brand font-bold text-slate-900 tracking-tight leading-tight text-balance">
            Tentang Biro Pemuda/i GKII Baliem Tengah
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Mewadahi, membimbing, dan memperlengkapi pemuda/i gereja menjadi teladan dalam perkataan, tingkah laku, kasih, kesetiaan, dan kesucian di tanah Papua.
          </p>
        </div>

        {/* 2-Column Split: Sejarah & Latar Belakang */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="font-brand font-bold text-2xl text-slate-900">
                Sejarah Singkat Organisasi
              </h2>
            </div>
            <div className="prose prose-slate text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 font-normal">
              {profile.history.split('\n\n').map((par, idx) => (
                <p key={idx}>{par}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="font-brand font-bold text-2xl text-slate-900">
                Latar Belakang & Identitas
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {profile.background}
            </p>
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Wilayah Koordinasi & Rayon:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {profile.serviceAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visi Box (5 cols) */}
            <div className="lg:col-span-5 p-8 bg-slate-950 text-white rounded-2xl shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                <Target className="w-4 h-4" />
                <span>Visi Biro Pemuda/i</span>
              </div>
              <h3 className="font-brand font-bold text-xl sm:text-2xl text-white leading-snug">
                Visi Pelayanan
              </h3>
              <p className="mt-4 text-base sm:text-lg text-amber-200/90 leading-relaxed italic">
                &ldquo;{profile.vision}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Pijakan Alkitab:</span> 1 Timotius 4:12 & Kisah Para Rasul 1:8
              </div>
            </div>

            {/* Misi Box (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                <Sparkles className="w-4 h-4" />
                <span>Misi & Arah Strategis</span>
              </div>
              <h3 className="font-brand font-bold text-2xl text-slate-900">
                Misi Biro Pemuda/i GKII Baliem Tengah
              </h3>
              <div className="mt-6 space-y-3">
                {profile.mission.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500/40 transition-colors flex items-start gap-4"
                  >
                    <span className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nilai-Nilai Organisasi */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              Prinsip Moral & Etika Pelayanan
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-brand font-bold text-slate-900">
              Nilai-Nilai Inti (Core Values)
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Fondasi karakter yang terus diajarkan dan ditanamkan kepada setiap pemuda/i GKII.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-brand font-bold text-base text-slate-900">
                  {val.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Kerja Utama */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <h3 className="font-brand font-bold text-xl sm:text-2xl text-white">
              Agenda & Program Kerja Utama
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
              Rencana strategis pelayanan yang disepakati melalui Rapat Kerja Daerah (Rakerda) Biro Pemuda/i GKII Baliem Tengah.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.workPrograms.map((prog, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80"
                >
                  <span className="text-amber-400 font-bold text-sm shrink-0">✦</span>
                  <span className="text-sm text-slate-200 font-medium">{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
