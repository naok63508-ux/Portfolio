import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

interface HeroProps {
  isLoaded: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  const baseDelay = 0.4; 
  const heroRef = useRef<HTMLDivElement>(null);

  // The sequence of words exactly as requested by the user
  const words = ["MIKAEL", "BARBOSA", "FULL STACK"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isLoaded) return; // Wait to start the loop until the curtain has lifted
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500); // Wait 3.5 seconds between word flips
    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div ref={heroRef} className="relative w-full h-screen bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* Looping Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#050505]/70" />
      </div>

      {/* Top Left Logo */}
      <motion.div 
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
        transition={{ delay: baseDelay, duration: 0.8, ease: "easeOut" }}
      >
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Custom stylized M logo referencing the reference aesthetic */}
          <path d="M8 32V8L20 20L32 8V32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Top Right Navigation (Vertical Stack) */}
      <motion.nav 
        className="absolute top-8 right-8 md:top-12 md:right-12 flex flex-col items-end space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
        transition={{ delay: baseDelay + 0.2, duration: 0.8, ease: "easeOut" }}
      >
      {['About Me', 'Experience', 'Work', 'Contact'].map((item, i) => (
          <motion.a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className="relative text-xs md:text-sm font-medium text-[#A1A1A1] hover:text-white transition-colors tracking-widest uppercase group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
            transition={{ delay: baseDelay + 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </motion.nav>

      {/* Bottom Left Social Icons */}
      <motion.div 
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ delay: baseDelay + 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <motion.a href="#" className="text-[#A1A1A1] hover:text-white transition-colors" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: 'spring', stiffness: 400 }}>
          <Github className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
        <motion.a href="#" className="text-[#A1A1A1] hover:text-white transition-colors" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: 'spring', stiffness: 400 }}>
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      </motion.div>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-7xl text-[#A1A1A1] font-semibold tracking-tight mb-0 md:mb-1 z-10 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
          transition={{ delay: baseDelay + 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          HEY, I'M
        </motion.h2>
        
        <div className="h-[22vw] md:h-[140px] lg:h-[180px] overflow-visible w-full flex justify-center items-center relative z-0 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={words[index]}
              className="absolute text-[16vw] md:text-[110px] lg:text-[140px] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#050505] via-[#404040] to-white whitespace-nowrap"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)", scale: 0.95 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30, filter: "blur(0px)", scale: isLoaded ? 1 : 0.95 }}
              exit={{ opacity: 0, y: -30, filter: "blur(4px)", scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
