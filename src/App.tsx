import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { AmbientOrbs } from './components/AmbientOrbs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white antialiased font-sans flex flex-col overflow-x-hidden w-full">
      <Cursor />
      <ScrollProgress />
      <AmbientOrbs />
      
      <div className="relative z-0">
        <Hero isLoaded={!isLoading} />
        <About />
        <Experience />
        <Work />
        <TechStack />
        <Contact />
      </div>

      <AnimatePresence>
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
