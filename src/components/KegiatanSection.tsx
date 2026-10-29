import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ActivityEvent, EventStatus } from '../types';
import { Calendar, Clock, MapPin, User, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface Props {
  isHomePreview?: boolean;
}

export const KegiatanSection: React.FC<Props> = ({ isHomePreview = false }) => {
  const { events, setSelectedEvent, setActivePage } = useApp();
  const [statusFilter, setStatusFilter] = useState<'all' | EventStatus>('all');

  const filteredEvents = useMemo(() => {
    if (isHomePreview) {
      return events.slice(0, 3);
    }
    if (statusFilter === 'all') {
      return events;
    }
    return events.filter((e) => e.status === statusFilter);
  }, [events, isHomePreview, statusFilter]);

  const getStatusBadge = (status: EventStatus) => {
    switch (status) {
      case 'upcoming':
        return { label: 'Akan Datang', class: 'text-amber-800 bg-amber-50 border-amber-200' };
      case 'ongoing':
        return { label: 'Berlangsung', class: 'text-emerald-800 bg-emerald-50 border-emerald-200' };
      case 'completed':
        return { label: 'Selesai', class: 'text-slate-600 bg-slate-100 border-slate-200' };
    }
  };

  return (
    <section className={`py-16 ${isHomePreview ? 'bg-white' : 'bg-slate-50 min-h-screen'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <span>Agenda & Pelayanan</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>GKII Daerah Baliem Tengah</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-brand font-bold text-slate-900 tracking-tight text-balance">
              {isHomePreview ? 'Agenda & Kegiatan Pemuda' : 'Kalender Kegiatan & Dokumentasi Pelayanan'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
              Informasi lengkap kegiatan kemah pemuda, ibadah gabungan, pelatihan kepemimpinan, dan aksi sosial di seluruh pos pelayanan GKII Baliem Tengah.
            </p>
          </div>

          {isHomePreview ? (
            <button
              onClick={() => {
                setActivePage('kegiatan');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors uppercase tracking-wider whitespace-nowrap self-start md:self-auto"
            >
              <span>Lihat Kalender Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : null}
        </div>

        {/* Filter controls on full page */}
        {!isHomePreview && (
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'Semua Kegiatan' },
              { id: 'upcoming', label: 'Akan Datang' },
              { id: 'ongoing', label: 'Sedang Berlangsung' },
              { id: 'completed', label: 'Telah Terlaksana' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id as 'all' | EventStatus)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  statusFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Grid of Events */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const badge = getStatusBadge(event.status);
            return (
              <div
                key={event.id}
                className="bg-white rounded-xl border border-slate-200/90 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Poster Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={event.poster}
                      alt={event.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/src/assets/images/kegiatan_kemah_baliem_1793245787092.jpg';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded border backdrop-blur-sm ${badge.class}`}>
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-brand font-semibold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[150px]">
                    PIC: {event.pic}
                  </span>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Rincian</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
