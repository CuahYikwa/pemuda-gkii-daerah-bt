import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { GalleryItem } from '../types';
import { Maximize2, Camera, ArrowRight } from 'lucide-react';

interface Props {
  isHomePreview?: boolean;
}

export const GaleriSection: React.FC<Props> = ({ isHomePreview = false }) => {
  const { gallery, setLightboxIndex, setActivePage } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Ibadah & KKR', 'Kemah Pemuda', 'Bakti Sosial', 'Pelatihan'];

  const filteredGallery = useMemo(() => {
    let list = gallery;
    if (activeCategory !== 'Semua') {
      list = list.filter((item) => item.category === activeCategory);
    }
    if (isHomePreview) {
      return list.slice(0, 6);
    }
    return list;
  }, [gallery, activeCategory, isHomePreview]);

  return (
    <section className={`py-16 ${isHomePreview ? 'bg-slate-900 text-white' : 'bg-slate-900 text-white min-h-screen'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span>Dokumentasi Pelayanan</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Galeri Foto & Video</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-brand font-bold text-white tracking-tight text-balance">
              {isHomePreview ? 'Dokumentasi & Galeri Pelayanan' : 'Galeri Resmi Biro Pemuda/i GKII Baliem Tengah'}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl font-normal">
              Rekaman jejak langkah pelayanan generasi muda dalam memuji Tuhan, membina sesama, dan melayani jemaat di segenap lembah pegunungan Papua.
            </p>
          </div>

          {isHomePreview ? (
            <button
              onClick={() => {
                setActivePage('galeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider whitespace-nowrap self-start md:self-auto"
            >
              <span>Buka Semua Galeri</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-semibold'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Home preview category tabs if needed */}
        {isHomePreview && (
          <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-800 hover:border-amber-500/60 shadow-lg transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg';
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur group-hover:bg-amber-500 text-white group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-brand text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
