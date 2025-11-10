export default function GlobalReach() {
  const markets = [
    {
      country: 'Malaysia',
      desc: 'Payins via FPX, eWallets, DNQR and cards. Payouts to local bank transfer and eWallets.',
      cta: 'Malaysia Payments'
    },
    {
      country: 'Indonesia',
      desc: 'Payins via QRIS, VA, and eWallets. Payouts to local bank account and eWallets.',
      cta: 'Malaysia Payments'
    },
    {
      country: 'India',
      desc: 'Payins via UPI, Net Banking, one time recurring payments and cards. Payouts to local bank account & UPI.',
      cta: 'Malaysia Payments'
    }
  ];

  return (
    <section id="reach" className="relative py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Global Reach. Local Expertise.</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our solutions help you accept, manage, and send payments smoothly across regions, currencies, and borders.</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.map((m) => (
            <div key={m.country} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">{m.country}</h3>
              <p className="mt-2 text-slate-700 text-sm">{m.desc}</p>
              <div className="mt-6">
                <button className="rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors">{m.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
