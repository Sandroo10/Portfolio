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

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <FloatingDownloadButton />
        <Toaster position="bottom-center" richColors />
      </div>
    </ThemeProvider>
  )
}

export default App
