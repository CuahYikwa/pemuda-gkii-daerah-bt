import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { NewsArticle, NewsCategory } from '../types';
import { Search, Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  isHomePreview?: boolean;
}

const CATEGORIES: NewsCategory[] = [
  'Semua',
  'Berita Organisasi',
  'Pelayanan Pemuda/i',
  'Ibadah & Doa',
  'Kegiatan Daerah',
  'Pendidikan dan Pembinaan',
  'Sosial & Masyarakat',
  'Pengumuman',
];

export const BeritaSection: React.FC<Props> = ({ isHomePreview = false }) => {
  const { news, setSelectedNews, setActivePage } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter logic
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchCat =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [news, selectedCategory, searchQuery]);

  // Display items
  const displayItems = useMemo(() => {
    if (isHomePreview) {
      return news.slice(0, 3);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(startIndex, startIndex + itemsPerPage);
  }, [news, isHomePreview, filteredNews, currentPage]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const handleArticleClick = (article: NewsArticle) => {
    setSelectedNews(article);
  };

  return (
    <section className={`py-16 ${isHomePreview ? 'bg-slate-50' : 'bg-slate-50 min-h-screen'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <span>Warta & Informasi Resmi</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Biro Pemuda/i GKII</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-brand font-bold text-slate-900 tracking-tight text-balance">
              {isHomePreview ? 'Warta & Berita Terbaru' : 'Portal Berita Pelayanan Pemuda'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
              Informasi terpercaya seputar kegiatan ibadah, pelayanan jemaat pedalaman, kemah pemuda, dan dinamika pemuda GKII di Lembah Baliem Tengah.
            </p>
          </div>

          {isHomePreview && (
            <button
              onClick={() => {
                setActivePage('berita');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors uppercase tracking-wider whitespace-nowrap self-start md:self-auto"
            >
              <span>Buka Semua Berita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search & Filter Bar (Only in full portal mode) */}
        {!isHomePreview && (
          <div className="mt-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Cari berita berdasarkan judul atau topik..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                />
              </div>

              <div className="text-xs text-slate-500 font-medium whitespace-nowrap">
                Menampilkan <span className="text-slate-900 font-bold tabular-nums">{filteredNews.length}</span> artikel publikasi
              </div>
            </div>

            {/* Category Segmented Control / Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.length > 0 ? (
            displayItems.map((article) => (
              <article
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="group cursor-pointer bg-white rounded-xl border border-slate-200/90 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          '/src/assets/images/hero_pemuda_gkii_1793245785889.jpg';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[11px] font-medium tracking-wide">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2.5 text-base sm:text-lg font-brand font-semibold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-5 pt-0 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 mt-2">
                  <span className="truncate max-w-[160px]">Oleh {article.author}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-xl border border-dashed border-slate-300">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-800">
                Tidak ada berita yang sesuai
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Silakan ubah kata kunci pencarian atau pilih kategori berita lainnya.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Pagination (Full Portal only) */}
        {!isHomePreview && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Halaman sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 text-xs font-semibold rounded-lg transition-colors tabular-nums ${
                  currentPage === i + 1
                    ? 'bg-amber-600 text-white'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Halaman selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
