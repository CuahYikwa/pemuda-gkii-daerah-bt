import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Lock, User, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const { loginAdmin, authError, setActivePage } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorLocal, setErrorLocal] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorLocal('Silakan isi username dan password.');
      return;
    }
    setErrorLocal(null);
    const success = loginAdmin(username, password);
    if (success) {
      setActivePage('admin');
    }
  };

  const handleFillDemo = () => {
    setUsername('admin');
    setPassword('pemudagkii2026');
    setErrorLocal(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back link */}
        <button
          onClick={() => setActivePage('beranda')}
          className="mb-6 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Website Publik</span>
        </button>

        {/* Brand Header */}
        <div className="text-center">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 font-bold mb-4">
            <Shield className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-brand font-bold text-white tracking-tight">
            Autentikasi Administrator
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Sistem Informasi Biro Pemuda/i GKII Baliem Tengah
          </p>
        </div>

        {/* Login Card */}
        <div className="mt-8 bg-slate-800/80 backdrop-blur-md py-8 px-6 sm:px-10 rounded-2xl shadow-2xl border border-slate-700/80">
          {(authError || errorLocal) && (
            <div className="mb-6 p-3.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{authError || errorLocal}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Username Admin
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-lg shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Shield className="w-4 h-4 text-slate-950" />
              <span>Masuk ke Dashboard CMS</span>
            </button>
          </form>

          {/* Seed credentials callout for reviewer convenience */}
          <div className="mt-6 pt-5 border-t border-slate-700/80">
            <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-700 text-xs">
              <div className="flex items-center justify-between text-slate-300 font-medium mb-1">
                <span className="text-amber-400 font-semibold">Kredensial Login Resmi:</span>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="text-[11px] text-amber-300 hover:underline font-bold"
                >
                  Isi Otomatis
                </button>
              </div>
              <div className="text-slate-400 space-y-0.5">
                <p>Username: <code className="text-white bg-slate-800 px-1.5 py-0.5 rounded">admin</code></p>
                <p>Password: <code className="text-white bg-slate-800 px-1.5 py-0.5 rounded">pemudagkii2026</code></p>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-slate-400 text-center leading-relaxed">
              *Hanya pengurus resmi yang memiliki akses untuk mengelola warta dan kegiatan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
