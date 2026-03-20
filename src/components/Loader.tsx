import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); 
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E5E6E8] overflow-hidden"
      initial={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
    >
      {/* Background massive moving text (Marquee) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="flex w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }} // Seamless 15s loop
        >
          {/* We repeat the text multiple times to ensure a perfect flawless loop */}
          <h1 className="text-[12vw] font-black text-[#111111] uppercase tracking-tighter leading-none whitespace-nowrap pr-8">
            FULL STACK DEVELOPER • AI ENGINEERING • FULL STACK DEVELOPER • AI ENGINEERING • 
          </h1>
          <h1 className="text-[12vw] font-black text-[#111111] uppercase tracking-tighter leading-none whitespace-nowrap pr-8">
            FULL STACK DEVELOPER • AI ENGINEERING • FULL STACK DEVELOPER • AI ENGINEERING • 
          </h1>
        </motion.div>
      </div>

      {/* The Central Black Pill overlay - Custom User Style */}
      <motion.div 
        className="relative z-10 w-[280px] md:w-[320px] h-[60px] md:h-[68px] bg-black rounded-full flex items-center justify-between px-8 md:px-10"
      >
        {/* Subtle purple glow effect underneath the pill */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-[#8A2BE2] opacity-40 blur-[14px] rounded-full mix-blend-screen pointer-events-none" />
        
        {/* Subtle bottom edge gradient border */}
        <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#9b4dca] to-transparent opacity-60 pointer-events-none" />

        {/* Text and Counter Inside Pill */}
        <span className="text-white font-semibold tracking-wider text-sm md:text-[15px] z-20 relative">
          LOADING
        </span>
        
        <div className="flex items-center space-x-2 z-20 relative">
          <span className="text-[#a1a1aa] font-medium tabular-nums text-sm md:text-[15px] tracking-widest">
            {progress}%
          </span>
          {/* Blinking box cursor */}
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            className="w-[6px] h-[14px] bg-[#3f3f46]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
