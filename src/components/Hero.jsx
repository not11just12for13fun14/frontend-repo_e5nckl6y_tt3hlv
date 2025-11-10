import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm border border-white/40 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Payments
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Connecting Global Businesses with Local Payment Methods in Asia
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-700">
              Seamless cross-border settlements with 50+ local methods. We handle the complexity, so you can focus on growing your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#payin-payouts" className="inline-flex justify-center items-center rounded-xl bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">Start Connecting Today</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
