import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden">
      {/* Ambient background glow effects inspired by designer reference */}
      <div 
        className="fixed top-0 right-0 w-[50rem] h-[50rem] bg-emerald-500/[0.08] rounded-full blur-[140px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />
      <div 
        className="fixed bottom-0 left-0 w-[42rem] h-[42rem] bg-emerald-500/[0.05] rounded-full blur-[130px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
