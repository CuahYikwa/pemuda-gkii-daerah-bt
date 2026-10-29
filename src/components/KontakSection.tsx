import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const KontakSection: React.FC = () => {
  const { profile, addMessage } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Alamat email tidak valid.';
    if (!formData.phone.trim()) errs.phone = 'Nomor WhatsApp / telepon wajib diisi.';
    if (!formData.subject.trim()) errs.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim() || formData.message.trim().length < 10)
      errs.message = 'Pesan minimal terdiri dari 10 karakter.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addMessage({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pb-12 border-b border-slate-200">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            <span>Pusat Komunikasi & Sekretariat</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>GKII Daerah Baliem Tengah</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-brand font-bold text-slate-900 tracking-tight leading-tight text-balance">
            Hubungi Biro Pemuda/i GKII
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Punya pertanyaan mengenai kegiatan kemah, persekutuan pemuda, jadwal ibadah gabungan, atau kemitraan pelayanan? Silakan hubungi kami.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h2 className="font-brand font-bold text-xl text-slate-900">
                Informasi Kontak Resmi
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Alamat Sekretariat</span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {profile.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">WhatsApp / Telepon</span>
                    <a
                      href={`tel:${profile.phoneWhatsapp}`}
                      className="text-xs sm:text-sm text-slate-600 hover:text-amber-700 transition-colors"
                    >
                      {profile.phoneWhatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Resmi</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm text-slate-600 hover:text-amber-700 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${profile.phoneWhatsapp.replace(/[^0-9]/g, '')}?text=Shalom%20Biro%20Pemuda%20GKII%20Baliem%20Tengah,%20saya%20ingin%20bertanya`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan Cepat via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Media Box */}
            <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
              <h3 className="font-brand font-bold text-lg text-white mb-2">
                Kanal Media Sosial Resmi
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Ikuti liputan foto, video rohani, dan warta kegiatan pemuda GKII terbaru melalui saluran media sosial kami:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors font-medium text-slate-200 text-center"
                >
                  Facebook Page
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors font-medium text-slate-200 text-center"
                >
                  Instagram Resmi
                </a>
                <a
                  href={profile.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors font-medium text-slate-200 text-center"
                >
                  YouTube Channel
                </a>
                <a
                  href={profile.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors font-medium text-slate-200 text-center"
                >
                  TikTok Pemuda
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10">
              <h2 className="font-brand font-bold text-2xl text-slate-900">
                Kirim Pesan kepada Pengurus
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-8">
                Pesan Anda akan langsung tercatat di sistem informasi pengurus dan segera kami tindaklanjuti.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Pesan Berhasil Terkirim!</h4>
                    <p className="text-xs mt-0.5">
                      Terima kasih atas pesan dan dukungan Anda. Pengurus Biro Pemuda/i GKII Baliem Tengah akan segera merespons melalui kontak yang Anda cantumkan.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nama Lengkap <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Samuel Yikwa"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Alamat Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alamat@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subjek Pesan <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Konfirmasi Delegasi / Undangan Pelayanan"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                    {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Isi Pesan <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pokok pesan, pertanyaan, atau permohonan informasi Anda di sini..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                  />
                  {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
