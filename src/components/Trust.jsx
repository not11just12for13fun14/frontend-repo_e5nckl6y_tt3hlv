export default function Trust() {
  const items = [
    {
      title: 'Licensed by the Central Bank of Malaysia',
      body: 'We operate under the regulatory oversight of Bank Negara Malaysia, ensuring compliance, security, and trust in every transaction.'
    },
    {
      title: 'Reliable Connections to local Payment Rails',
      body: 'With direct access to local payment network, we minimize latency and optimize transactions speed, allowing businesses to operate with confidence.'
    },
    {
      title: 'Worldwide Cross-Border Settlements',
      body: 'Smooth cross-border settlements in major currencies, Simplifying global transactions as you grow.'
    }
  ];

  return (
    <section id="trust" className="relative py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Clients Trust Us</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
