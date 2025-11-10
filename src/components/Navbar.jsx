import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
          <span className="text-xl font-bold tracking-tight text-slate-900">mobi</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#payin-payouts" className="hover:text-slate-900 transition-colors">Payins & Payouts</a>
          <a href="#global-reach" className="hover:text-slate-900 transition-colors">Global Reach</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">Contact Sales</a>
          <a href="#payin-payouts" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">
            Get started <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
