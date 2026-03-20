import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const TerminalCode: React.FC = () => {
  const ref = useRef(null);
  // Trigger terminal startup when the user scrolls it into view
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lines, setLines] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const timers = [
        setTimeout(() => setLines(1), 500),
        setTimeout(() => setLines(2), 1300),
        setTimeout(() => setLines(3), 2100),
        setTimeout(() => setLines(4), 2900),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="mt-12 bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 font-mono text-[13px] md:text-sm text-[#A1A1A1] shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500" style={{ perspective: '800px' }}>
      {/* Sleek top inner glare reflection */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Mac-style action buttons */}
      <div className="flex space-x-2 mb-6 pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>

      <div className="space-y-3 pointer-events-none">
        <p className={`${lines >= 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <span className="text-white">~</span> /system/core $ ./initialize_developer.sh
        </p>
        <p className={`${lines >= 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          &gt; Loading Deep Learning & NLP models... <span className="text-white font-bold">[OK]</span>
        </p>
        <p className={`${lines >= 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          &gt; Bootstrapping React + Node.js full-stack... <span className="text-white font-bold">[OK]</span>
        </p>
        <p className={`${lines >= 4 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 text-white`}>
          &gt; Status: <span className="text-white tracking-wide font-medium">JARVIS Protocol Online</span>.
          <br /><br />
          <span className="text-white italic font-bold">&gt; Code is poetry.</span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            className="inline-block w-2 h-4 bg-white ml-2 align-middle"
          />
        </p>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a massive parallax sweeping text effect behind the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // Vertical parallax for columns
  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section 
      id="about-me" 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center overflow-hidden py-32 border-t border-white/5"
    >
       {/* Looping Video Background */}
       <div className="absolute inset-0 z-0">
         <video 
           autoPlay 
           loop 
           muted 
           playsInline 
           className="absolute inset-0 w-full h-full object-cover"
         >
           <source src="/videos/about-bg.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-[#050505]/75" />
       </div>

       {/* Background Parallax Typography */}
       <motion.div 
         style={{ x: xText }}
         className="absolute top-1/4 whitespace-nowrap opacity-[0.02] text-[150px] md:text-[250px] font-black tracking-tighter pointer-events-none uppercase"
       >
         ABOUT ME • FULL STACK • AI ENGINEERING • 
       </motion.div>

       <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10 w-full">
         
         {/* Left Column: Mission Statement */}
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: leftY }}
            className="flex flex-col justify-center space-y-8 will-change-transform"
         >
            <h3 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] pointer-events-auto">
              I build intelligent systems, chatbots, and <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#404040] to-white">next-gen AI Agents.</span>
            </h3>
         </motion.div>

         {/* Right Column: Detailed Bio & Terminal */}
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ y: rightY }}
            className="flex flex-col h-full justify-between will-change-transform"
         >
            <div className="space-y-6 text-[#A1A1A1] text-base md:text-lg font-light leading-relaxed pointer-events-auto">
              <p>
                As an AI & Full-Stack Developer, my expertise lies at the intersection of powerful deep learning architectures and high-performance modern web applications.
              </p>
              <p>
                Engineered with a competitive programming mindset and a deep passion for automation, my core stack spans across <strong className="text-white font-medium">Machine Learning, NLP, React, Node.js, and Python.</strong>
              </p>
            </div>

            {/* The Jarvis Terminal component slides in next */}
            <TerminalCode />
         </motion.div>

       </div>
    </section>
  );
};
