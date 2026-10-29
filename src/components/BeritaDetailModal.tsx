import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { useApp } from '../context/AppContext';
import { X, Calendar, User, Clock, Share2, Check, ArrowLeft, MessageSquare, Facebook, Twitter } from 'lucide-react';

interface Props {
  article: NewsArticle | null;
  onClose: () => void;
}

export const BeritaDetailModal: React.FC<Props> = ({ article, onClose }) => {
  const { news, setSelectedNews } = useApp();
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${currentUrl}#berita-${article.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`*${article.title}*\n\n${article.summary}\n\nBaca selengkapnya di Portal Berita Biro Pemuda/i GKII Baliem Tengah.`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  // Related articles in same or different categories
  const relatedArticles = news
    .filter((n) => n.id !== article.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-100">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              title="Bagikan ke WhatsApp"
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-200"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={handleShareFacebook}
              title="Bagikan ke Facebook"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={handleShareTwitter}
              title="Bagikan ke X / Twitter"
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              title="Salin tautan berita"
              className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin Link'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 max-w-3xl mx-auto">
          {/* Metadata line (Zero-pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-amber-700 font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Oleh {article.author}</span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-brand font-bold text-slate-900 leading-snug text-balance">
            {article.title}
          </h1>

          {/* Summary Lead */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed border-b border-slate-100 pb-6">
            {article.summary}
          </p>

          {/* Cover Image */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[420px] object-cover"
              onError={(e) => {
                // styled CSS fallback
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 italic flex items-center justify-between">
              <span>Dokumentasi Resmi Biro Pemuda/i GKII Daerah Baliem Tengah</span>
              <span className="text-slate-400 font-sans not-italic font-medium">{article.category}</span>
            </div>
          </div>

          {/* Full Content */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-base font-normal">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="first-letter:text-2xl first-letter:font-brand first-letter:font-bold first-letter:text-amber-700 first-letter:mr-0.5">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1">Topik Terkait:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded hover:bg-slate-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Box */}
          <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center font-brand shrink-0">
              GKII
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{article.author}</p>
              <p className="text-xs text-slate-500">
                Redaksi Portal Berita Resmi Biro Pemuda/i GKII Baliem Tengah, Papua Pegunungan.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="font-brand font-bold text-xl text-slate-900 mb-6">
                Berita Pelayanan Terkait
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedArticles.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      setSelectedNews(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left group flex flex-col justify-between p-4 rounded-xl border border-slate-200 hover:border-amber-500/50 hover:shadow-md transition-all bg-white"
                  >
                    <div>
                      <div className="text-[11px] text-amber-700 font-semibold mb-1">
                        {rel.category}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 line-clamp-2 transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="mt-3 text-[11px] text-slate-400">
                      {rel.date}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
