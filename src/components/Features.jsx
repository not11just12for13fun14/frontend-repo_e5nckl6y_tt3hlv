import { Shield, CreditCard, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'Multi-layer encryption, 3D Secure, and continuous monitoring to keep your funds safe.'
  },
  {
    icon: CreditCard,
    title: 'Modern cards',
    desc: 'Issue virtual and physical cards with programmable controls and real-time notifications.'
  },
  {
    icon: Zap,
    title: 'Instant transfers',
    desc: 'Move money globally in seconds with low fees and transparent FX.'
  },
  {
    icon: Globe,
    title: 'Global coverage',
    desc: 'Operate in 40+ currencies with local rails in key markets.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Built for modern fintech</h2>
          <p className="mt-3 text-slate-700">Everything you need to build payments, accounts, and financial products under one roof.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 p-6 bg-white/60 backdrop-blur hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center shadow-md shadow-cyan-500/30">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
