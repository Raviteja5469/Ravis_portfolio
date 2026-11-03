import { useCallback, useState } from 'react';
import PortfolioIntro from './components/PortfolioIntro';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const [intro, setIntro] = useState(!import.meta.env.SSR);
  const completeIntro = useCallback(() => {
    setIntro(false);
    requestAnimationFrame(() => document.getElementById('main')?.focus({ preventScroll: true }));
  }, []);
  return (
    <>
      {intro && <PortfolioIntro onComplete={completeIntro} />}
      <div className={intro ? 'portfolio-content intro-pending' : 'portfolio-content'} ref={(node) => { if (node) node.inert = intro; }} aria-hidden={intro || undefined}>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
