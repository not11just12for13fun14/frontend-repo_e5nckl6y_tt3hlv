import { ArrowRight, Globe, Wallet, Landmark, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Payins & Payouts */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50" aria-labelledby="payin-payouts">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-cyan-600 uppercase">We offer</p>
            <h2 id="payin-payouts" className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Payins and Payouts to 6+ Payment Methods in Asia</h2>
            <p className="mt-4 text-slate-700">Let's make it easier for customer to register their payment methods so they can complete transactions more smoothly.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Contact Sales <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wallet, title: 'eWallets', desc: 'Collect and disburse funds across leading digital wallets.' },
              { icon: Landmark, title: 'Bank Transfers', desc: 'Local bank rails for high-success, low-cost settlements.' },
              { icon: Globe, title: 'QR & Real-time', desc: 'QR codes and instant schemes for seamless checkout.' },
            ].map((i) => (
              <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center">
                  <i.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{i.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white" aria-labelledby="global-reach">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-cyan-600 uppercase">Global Reach. Local Expertise.</p>
            <h2 id="global-reach" className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our solutions help you accept, manage, and send payments smoothly across regions, currencies, and borders.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                country: 'Malaysia',
                details: 'Payins via FPX, eWallets, DNQR and cards. Payouts to local bank transfer and eWallets.',
                button: 'Malaysia Payments',
              },
              {
                country: 'Indonesia',
                details: 'Payins via QRIS, VA, and eWallets. Payouts to local bank account and eWallets.',
                button: 'Malaysia Payments',
              },
              {
                country: 'India',
                details: 'Payins via UPI, Net Banking, one time recurring payments and cards. Payouts to local bank account & UPI.',
                button: 'Malaysia Payments',
              },
            ].map((r) => (
              <div key={r.country} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
                  <h3 className="text-xl font-semibold text-slate-900">{r.country}</h3>
                </div>
                <p className="mt-3 text-slate-700 flex-1">{r.details}</p>
                <div className="mt-6">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">{r.button} <ArrowRight size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Solutions metrics */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="solutions">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 id="solutions" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simplify Your Business with Our Payment Solutions</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { title: '1.2B+ Bank Accounts', desc: 'Seamlessly collect from and pay to 1.2 billion+ Bank accounts from across borders are as we add 100s of more accounts every day.' },
              { title: '401M+ eWallets', desc: "Delight customers by embracing Asia's love for digital wallets and collect from 401 million+ electronic wallets in local currencies customers prefer." },
              { title: 'Credit & Debit Cards', desc: 'Incorporate local currency collection with major Credit and Debit Card and have them settled in your home country in the preferred currency.' },
            ].map((m) => (
              <div key={m.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-white" aria-labelledby="trust">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 id="trust" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Clients Trust Us</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Licensed by the Central Bank of Malaysia', desc: 'We operate under the regulatory oversight of Bank Negara Malaysia, ensuring compliance, security, and trust in every transaction.' },
              { icon: Zap, title: 'Reliable Connections to local Payment Rails', desc: 'With direct access to local payment network, we minimize latency and optimize transactions speed, allowing businesses to operate with confidence.' },
              { icon: Globe, title: 'Worldwide Cross-Border Settlements', desc: 'Smooth cross-border settlements in major currencies, Simplifying global transactions as you grow.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center">
                  <c.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Performance */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Our Promise of Performance</h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { kpi: '99.6% Uptime', note: 'Enjoy uninterrupted service with industry-leading reliability.' },
                { kpi: '5.7% Speed and efficiency', note: 'Speed and efficiency are at the core of what we do, ensuring payment are completed swiftly.' },
                { kpi: '94.8%+ Success rate', note: 'Reliable transactions with a high success rate across all payment methods.' },
                { kpi: '0.9-Minutes Resolution Time', note: 'We resolve most support queries in under 15 minutes, keeping your business running smoothly.' },
              ].map((p) => (
                <div key={p.kpi} className="rounded-2xl bg-white p-5 border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold"><CheckCircle2 className="text-emerald-500" size={18} /> {p.kpi}</div>
                  <p className="mt-2 text-sm text-slate-700">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
