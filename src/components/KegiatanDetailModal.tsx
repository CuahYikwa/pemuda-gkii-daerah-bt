import React from 'react';
import { ActivityEvent } from '../types';
import { X, Calendar, Clock, MapPin, User, ArrowRight, CheckCircle2, AlertCircle, Share2 } from 'lucide-react';

interface Props {
  event: ActivityEvent | null;
  onClose: () => void;
}

export const KegiatanDetailModal: React.FC<Props> = ({ event, onClose }) => {
  if (!event) return null;

  const getStatusBadge = (status: ActivityEvent['status']) => {
    switch (status) {
      case 'upcoming':
        return { label: 'Akan Datang', class: 'text-amber-800 bg-amber-50 border-amber-200' };
      case 'ongoing':
        return { label: 'Sedang Berlangsung', class: 'text-emerald-800 bg-emerald-50 border-emerald-200' };
      case 'completed':
        return { label: 'Telah Selesai', class: 'text-slate-600 bg-slate-100 border-slate-200' };
    }
  };

  const statusInfo = getStatusBadge(event.status);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded border ${statusInfo.class}`}>
              {statusInfo.label}
            </span>
            <span className="text-xs text-slate-500">Agenda Resmi GKII Baliem Tengah</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Poster Image */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-6 max-h-[360px]">
            <img
              src={event.poster}
              alt={event.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg';
              }}
            />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-brand font-bold text-slate-900 leading-snug">
            {event.title}
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 text-slate-700">
              <Calendar className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Tanggal Pelaksanaan</span>
                <span>{event.date}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-700">
              <Clock className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Waktu / Pukul</span>
                <span>{event.time}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-700">
              <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Lokasi / Tempat</span>
                <span>{event.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-700">
              <User className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Penanggung Jawab (PIC)</span>
                <span>{event.pic}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 font-brand">
              Deskripsi & Rincian Kegiatan
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Registration Info / Action */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              {event.registrationOpen ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pendaftaran masih dibuka untuk jemaat pemuda</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  <span>Pendaftaran telah ditutup atau bersifat terbuka untuk umum</span>
                </div>
              )}
            </div>

            {event.registrationOpen && event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Daftar Sekarang via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
