import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeOffer from './components/WeOffer';
import GlobalReach from './components/GlobalReach';
import PaymentSolutions from './components/PaymentSolutions';
import Trust from './components/Trust';
import Performance from './components/Performance';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <WeOffer />
      <GlobalReach />
      <PaymentSolutions />
      <Trust />
      <Performance />
      <FooterCTA />
      <footer id="about" className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} mobi. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
