import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OrgMember, DivisionName } from '../types';
import { Shield, Users, Mail, Phone, ArrowRight, Award } from 'lucide-react';

interface Props {
  isHomePreview?: boolean;
}

export const StrukturOrganisasiSection: React.FC<Props> = ({ isHomePreview = false }) => {
  const { orgStructure, setActivePage } = useApp();
  const [selectedDivision, setSelectedDivision] = useState<string>('Semua');

  // Hierarchy levels
  const pembina = orgStructure.filter((m) => m.hierarchyLevel === 1);
  const bphLeadership = orgStructure.filter((m) => m.hierarchyLevel === 2);
  const bphSecretariat = orgStructure.filter((m) => m.hierarchyLevel === 3);
  const coordinators = orgStructure.filter((m) => m.hierarchyLevel >= 4);

  const divisions: string[] = [
    'Semua',
    'Pembina',
    'Badan Pengurus Harian (BPH)',
    'Bidang Kerohanian dan Pembinaan Iman',
    'Bidang Pendidikan dan Pengembangan SDM',
    'Bidang Organisasi dan Kaderisasi',
    'Bidang Humas dan Komunikasi',
    'Bidang Multimedia dan Dokumentasi',
    'Bidang Sosial dan Pelayanan Masyarakat',
    'Bidang Olahraga, Seni, dan Kreativitas',
  ];

  const filteredMembers = selectedDivision === 'Semua'
    ? orgStructure
    : orgStructure.filter((m) => m.division === selectedDivision);

  const renderMemberCard = (member: OrgMember) => (
    <div
      key={member.id}
      className="bg-white rounded-xl border border-slate-200/90 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/30 bg-slate-100 shrink-0">
            <img
              src={member.photo}
              alt={member.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // SVG fallback icon
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wide block">
              {member.role}
            </span>
            <h4 className="text-base font-brand font-bold text-slate-900 leading-snug">
              {member.name}
            </h4>
            <div className="text-xs text-slate-500 mt-0.5">
              Periode {member.period}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {member.bio || 'Melayani dalam tugas dan panggilan pelayanan Biro Pemuda/i GKII Daerah Baliem Tengah.'}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="truncate max-w-[190px] font-medium text-slate-600">
          {member.division}
        </span>
        {member.phone && (
          <a
            href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-semibold"
          >
            Kontak
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section className={`py-16 ${isHomePreview ? 'bg-slate-50' : 'bg-slate-50 min-h-screen'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <span>Bagan Kepengurusan Resmi</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Periode 2024 - 2028</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-brand font-bold text-slate-900 tracking-tight text-balance">
              Struktur Organisasi Biro Pemuda/i GKII Baliem Tengah
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
              Susunan fungsionaris pelayanan yang diutus mendampingi, mengayomi, dan menggerakkan komisi pemuda GKII di seluruh rayon dan jemaat lokal Baliem Tengah.
            </p>
          </div>

          {isHomePreview && (
            <button
              onClick={() => {
                setActivePage('struktur');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors uppercase tracking-wider whitespace-nowrap self-start md:self-auto"
            >
              <span>Lihat Seluruh Pengurus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* If home preview: show visual hierarchy highlights */}
        {isHomePreview ? (
          <div className="mt-10 space-y-10">
            {/* Pembina Highlight */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Pembina & Penasihat Rohani</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pembina.map(renderMemberCard)}
              </div>
            </div>

            {/* BPH Leadership */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" />
                <span>Badan Pengurus Harian (BPH)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...bphLeadership, ...bphSecretariat].slice(0, 5).map(renderMemberCard)}
              </div>
            </div>
          </div>
        ) : (
          /* Full Page View with Hierarchy Diagram and Division Filter */
          <div className="mt-8 space-y-10">
            {/* Division Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
              {divisions.map((div) => (
                <button
                  key={div}
                  onClick={() => setSelectedDivision(div)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedDivision === div
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {div === 'Badan Pengurus Harian (BPH)' ? 'BPH' : div}
                </button>
              ))}
            </div>

            {/* If 'Semua' selected: show structured hierarchy tree */}
            {selectedDivision === 'Semua' ? (
              <div className="space-y-12">
                {/* Level 1: Pembina */}
                <div>
                  <div className="text-center max-w-sm mx-auto mb-6">
                    <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                      Tingkat I · Pembina & Penasihat Rohani
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    {pembina.map(renderMemberCard)}
                  </div>
                </div>

                {/* Level 2: Ketua & Wakil */}
                <div>
                  <div className="text-center max-w-sm mx-auto mb-6">
                    <span className="text-xs uppercase tracking-widest font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded border border-blue-200">
                      Tingkat II · Ketua & Wakil Ketua Koordinator
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {bphLeadership.map(renderMemberCard)}
                  </div>
                </div>

                {/* Level 3: Sekretaris & Bendahara */}
                <div>
                  <div className="text-center max-w-sm mx-auto mb-6">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-300">
                      Tingkat III · Sekretariat & Keuangan
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {bphSecretariat.map(renderMemberCard)}
                  </div>
                </div>

                {/* Level 4: Koordinator Bidang */}
                <div>
                  <div className="text-center max-w-sm mx-auto mb-6">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-300">
                      Tingkat IV · Koordinator Bidang-Bidang Pelayanan
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coordinators.map(renderMemberCard)}
                  </div>
                </div>
              </div>
            ) : (
              /* Specific division list */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map(renderMemberCard)}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
