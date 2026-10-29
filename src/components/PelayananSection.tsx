import React from 'react';
import { useApp } from '../context/AppContext';
import { MinistryProgram } from '../types';
import { Heart, BookOpen, Users, Compass, Music, Flame, CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  isHomePreview?: boolean;
}

export const PelayananSection: React.FC<Props> = ({ isHomePreview = false }) => {
  const { ministries, setActivePage } = useApp();

  const displayList = isHomePreview ? ministries.slice(0, 3) : ministries;

  return (
    <section className={`py-16 ${isHomePreview ? 'bg-white' : 'bg-slate-50 min-h-screen'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <span>Pilar Pelayanan Rohani</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Biro Pemuda/i GKII</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-brand font-bold text-slate-900 tracking-tight text-balance">
              Program & Portofolio Pelayanan Pemuda/i
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
              Dedikasi pelayanan menyeluruh yang menyentuh pembinaan iman, pertumbuhan kapasitas kepemimpinan, kepedulian sosial, serta kreativitas generasi muda di Lembah Baliem.
            </p>
          </div>

          {isHomePreview && (
            <button
              onClick={() => {
                setActivePage('pelayanan');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors uppercase tracking-wider whitespace-nowrap self-start md:self-auto"
            >
              <span>Semua Program Pelayanan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Ministry Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl border border-slate-200/90 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={program.image}
                    alt={program.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 px-2.5 py-0.5 rounded text-[11px] font-semibold">
                    {program.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-brand font-bold text-lg text-slate-900 leading-snug">
                    {program.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {program.description}
                  </p>

                  <div className="mt-4 p-3 rounded-lg bg-amber-50/60 border border-amber-100 text-xs text-amber-900">
                    <span className="font-semibold block text-amber-950">Tujuan Program:</span>
                    <span>{program.purpose}</span>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                      Aktivitas Inti:
                    </span>
                    {program.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span className="font-medium text-slate-600">Jadwal:</span>
                <span className="text-slate-800 font-semibold">{program.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
