import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    phase: "PHASE 01",
    title: "Algorithmic Foundation",
    description: "Forged in the fires of competitive programming. Developed a relentless mindset for optimization, dissecting complex logic, and mastering core data structures before writing a single line of production code. Building the foundation on execution speed.",
    year: "2021—2022"
  },
  {
    phase: "PHASE 02",
    title: "Full-Stack Architecture",
    description: "Evolved from terminal scripts to scalable infrastructure. Mastered React, Node.js, and modern backend architectures to build seamless, high-performance web applications that bridge design with heavy computational logic.",
    year: "2022—2023"
  },
  {
    phase: "PHASE 03",
    title: "The AI Integration",
    description: "Began fusing Machine Learning, NLP, and Deep Learning securely into web environments. Focused on transforming static data into intelligent, context-aware systems capable of dynamic reasoning and automated output.",
    year: "2023—2024"
  },
  {
    phase: "PHASE 04",
    title: "Autonomous Agents",
    description: "Currently engineering next-generation, JARVIS-like personal assistants. Pushing the boundaries of automation by building AI agents that execute complex workflows and bridge the gap between human intent and machine execution.",
    year: "CURRENT"
  }
];

// Individual milestone with its own scroll-linked progress line
const Milestone: React.FC<{ item: typeof milestones[0]; index: number }> = ({ item, index }) => {
  const milestoneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: milestoneRef,
    offset: ["start end", "center center"]
  });

  // The vertical line "fills" as the user scrolls to this milestone
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotScale = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div ref={milestoneRef} className="relative pl-8 md:pl-16 pb-20 md:pb-24 last:pb-0">
      {/* Filling progress line for this segment */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-white/40"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Animated glowing dot */}
      <motion.div 
        className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        style={{ scale: dotScale, opacity: dotOpacity }}
      />
      
      <motion.div
        className="pointer-events-auto"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline mb-3 space-y-1 sm:space-y-0 text-sm">
          <span className="text-white font-mono tracking-[0.2em] font-medium mr-6">
            {item.phase}
          </span>
          <span className="text-[#666] tracking-widest font-mono text-xs md:text-sm">
            {item.year}
          </span>
        </div>
        
        <h4 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          {item.title}
        </h4>
        <p className="text-[#A1A1A1] font-light leading-relaxed text-base md:text-lg max-w-2xl">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 border-t border-white/5 overflow-hidden"
    >
      
      {/* Background Parallax Typography */}
      <motion.div 
         style={{ y: yText }}
         className="absolute top-0 inset-x-0 opacity-[0.02] text-[120px] md:text-[220px] font-black tracking-tighter uppercase leading-[0.8] text-center pointer-events-none"
       >
         EVOLUTION<br/>EVOLUTION<br/>EVOLUTION
       </motion.div>

      <div className="max-w-6xl mx-auto px-8 md:px-12 relative z-10">
        
        {/* Dynamic Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight pointer-events-auto"
          >
            Work experience <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#404040] to-white italic">redefined.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#A1A1A1] max-w-2xl text-base md:text-lg font-light pointer-events-auto"
          >
            I don't measure experience in corporate tenure. I measure it in iterations, algorithmic complexity, and systems built from scratch. Here is how my capability evolved.
          </motion.p>
        </div>

        {/* Timeline with scroll-linked progress lines */}
        <div className="relative md:ml-6">
          {milestones.map((item, i) => (
            <Milestone key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};
