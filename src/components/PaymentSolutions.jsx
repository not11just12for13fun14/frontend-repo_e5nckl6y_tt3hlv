export default function PaymentSolutions() {
  const items = [
    {
      title: '1.2B+ Bank Accounts',
      body: 'Seamlessly collect from and pay to 1.2 billion+ Bank accounts from across borders are as we add 100s of more accounts every day.'
    },
    {
      title: '401M+ eWallets',
      body: "Delight customers by embracing Asia's love for digital wallets and collect from 401 million+ electronic wallets in local currencies customers prefer."
    },
    {
      title: 'Credit & Debit Cards',
      body: 'Incorporate local currency collection with major Credit and Debit Card and have them settled in your home country in the preferred currency.'
    }
  ];

  return (
    <section id="solutions" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simplify Your Business with Our Payment Solutions</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 p-6 bg-white/70 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
