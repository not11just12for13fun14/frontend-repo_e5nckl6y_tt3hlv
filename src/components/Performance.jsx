export default function Performance() {
  const stats = [
    { label: '99.6% Uptime', desc: 'Enjoy uninterrupted service with industry-leading reliability.' },
    { label: '5.7% Speed and efficiency', desc: 'Speed and efficiency are at the core of what we do, ensuring payment are completed swiftly.' },
    { label: '94.8%+ Success rate', desc: 'Reliable transactions with a high success rate across all payment methods.' },
    { label: '0.9-Minutes Resolution Time', desc: 'We resolve most support queries in under 15 minutes, keeping your business running smoothly.' }
  ];

  return (
    <section id="performance" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Promise of Performance</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 p-6 bg-white/70 backdrop-blur">
              <p className="text-xl font-semibold text-slate-900">{s.label}</p>
              <p className="mt-2 text-slate-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
