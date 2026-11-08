import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeProvider';
import { Toaster } from './components/ui/sonner';
import FloatingDownloadButton from './components/CvButton';
import { useEffect, useState } from 'react';
import GenofitCaseStudy from './components/GenofitCaseStudy';
import KinoxiiCaseStudy from './components/KinoxiiCaseStudy';
import EvChargerCaseStudy from './components/EvChargerCaseStudy';
import MarionetteCaseStudy from './components/MarionetteCaseStudy';
import QaCaseStudy from './components/QaCaseStudy';
import { qaStudies } from './data/qa-case-studies';

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const qaSlug = route.startsWith('#/projects/') ? route.slice(11) : '';
  const isQaStudy = Object.prototype.hasOwnProperty.call(qaStudies, qaSlug);
  const isCaseStudy = isQaStudy || ['#/projects/genofit', '#/projects/kinoxii', '#/projects/evcarcharger', '#/projects/marionette'].includes(route);
  useEffect(() => {
    const update = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${isCaseStudy ? '' : 'overflow-x-hidden'}`}>
        {isCaseStudy ? (isQaStudy ? <QaCaseStudy slug={qaSlug}/> : route === '#/projects/marionette' ? <MarionetteCaseStudy /> : route === '#/projects/evcarcharger' ? <EvChargerCaseStudy /> : route === '#/projects/kinoxii' ? <KinoxiiCaseStudy /> : <GenofitCaseStudy />) : <>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <FloatingDownloadButton />
        </>}
        <Toaster position="bottom-center" richColors />
      </div>
    </ThemeProvider>
  )
}

export default App
