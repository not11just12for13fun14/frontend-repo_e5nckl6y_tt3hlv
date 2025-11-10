export default function CTA() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-16 overflow-hidden relative">
          <div className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute left-[-10%] bottom-[-20%] h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Start building with mobi today</h3>
            <p className="mt-3 text-white/80 max-w-2xl">Transparent pricing, real-time analytics, and a delightful developer experience. Create an account in minutes and go live as soon as you’re ready.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 px-5 py-3 hover:bg-slate-100 transition-colors">Create free account</a>
              <a href="#" className="inline-flex justify-center items-center rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10 transition-colors">Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
