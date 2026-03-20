import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  accentColor: string;
  bgGradient: string;
}

const projects: Project[] = [
  {
    title: "AI Chat Assistant",
    subtitle: "Intelligent Conversational AI",
    description: "🚀 A next-gen conversational AI assistant built with advanced NLP models, capable of context-aware reasoning, multi-turn dialogue, and real-time tool execution.",
    features: [
      "Multi-turn context memory",
      "Tool-use & function calling",
      "Real-time streaming responses",
      "Custom knowledge base integration"
    ],
    techStack: ["Python", "LangChain", "React", "FastAPI", "OpenAI"],
    accentColor: "#ffffff",
    bgGradient: "from-[#1a1a2e] to-[#16213e]"
  },
  {
    title: "CodeFlow Platform",
    subtitle: "Collaborative Code Review",
    description: "🚀 A premium code review platform with real-time collaboration, AI-powered analysis, and a competitive reputation system for developers.",
    features: [
      "Real-time collaborative editing",
      "AI-powered code suggestions",
      "Reputation & leaderboard system",
      "Syntax highlighting for 50+ languages"
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Pusher"],
    accentColor: "#ffffff",
    bgGradient: "from-[#0f0f23] to-[#1a1a3e]"
  },
  {
    title: "JARVIS Assistant",
    subtitle: "Personal AI Agent",
    description: "🚀 A JARVIS-inspired personal assistant that automates daily workflows, manages schedules, controls smart devices, and learns from user behavior patterns.",
    features: [
      "Voice-activated commands",
      "Task automation pipelines",
      "Smart home integration",
      "Adaptive learning from usage"
    ],
    techStack: ["Python", "TensorFlow", "Node.js", "WebSocket", "Docker"],
    accentColor: "#ffffff",
    bgGradient: "from-[#0a0a1a] to-[#1a0a2e]"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Each card gets individual scroll-linked transforms
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Image parallax — the visual card moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  // Scale: starts small, grows to full as it enters center, shrinks again on exit
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  // Opacity: fades in and out
  const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  // Text slides in from the right
  const textX = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  // Rotate slightly for a cinematic feel
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [4, 0, 0, -2]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: cardScale, opacity: cardOpacity, rotateX }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center will-change-transform"
    >
      {/* Left: Project Visual Card with parallax */}
      <motion.div 
        style={{ y: imageY }}
        className={`relative group rounded-2xl bg-gradient-to-br ${project.bgGradient} border border-white/5 overflow-hidden aspect-[4/3] flex items-center justify-center cursor-pointer will-change-transform`}
      >
        {/* Hover glow shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
        
        {/* Inner content placeholder */}
        <motion.div 
          className="relative z-10 w-[80%] h-[70%] bg-black/40 rounded-lg border border-white/10 backdrop-blur-sm flex flex-col p-6 overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex space-x-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="h-3 bg-white/10 rounded w-3/4" />
            <div className="h-3 bg-white/10 rounded w-1/2" />
            <div className="h-3 bg-white/10 rounded w-2/3" />
            <div className="mt-6 h-24 bg-white/5 rounded-lg" />
          </div>
        </motion.div>

        {/* Floating project number */}
        <div className="absolute top-6 left-6 text-white/10 text-7xl font-black pointer-events-none">
          0{index + 1}
        </div>
        
        {/* Corner arrow with spin on hover */}
        <motion.div 
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ rotate: 45, scale: 1.1 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* Right: Project Details with slide-in */}
      <motion.div 
        style={{ x: textX, opacity: textOpacity }}
        className="flex flex-col space-y-6 pointer-events-auto will-change-transform"
      >
        {/* Subtitle + Title */}
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <motion.div 
              className="h-[2px] bg-white"
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <span className="text-white/40 text-sm tracking-widest font-mono uppercase">{project.subtitle}</span>
          </div>
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {project.title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-[#A1A1A1] text-base md:text-lg font-light leading-relaxed">
          {project.description}
        </p>

        {/* Features — staggered entrance */}
        <ul className="space-y-2">
          {project.features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-start space-x-3 text-[#A1A1A1] text-sm md:text-base font-light"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            >
              <span className="text-white font-bold mt-0.5">+</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tech Stack Badges — staggered pop */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, i) => (
            <motion.span 
              key={i} 
              className="px-4 py-1.5 text-xs md:text-sm font-medium bg-white/5 border border-white/10 rounded-full text-[#A1A1A1] hover:bg-white/10 hover:text-white transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const xMarquee = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section 
      id="work" 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 border-t border-white/5 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Scrolling Marquee Text Band */}
      <motion.div 
        style={{ x: xMarquee }}
        className="mb-20 whitespace-nowrap overflow-hidden pointer-events-none"
      >
        <div className="flex items-center space-x-8 text-[80px] md:text-[120px] lg:text-[150px] font-black tracking-tighter opacity-[0.03] uppercase">
          <span>PROJECTS</span>
          <span>•</span>
          <span>SHOWCASE</span>
          <span>•</span>
          <span>PROJECTS</span>
          <span>•</span>
          <span>SHOWCASE</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight pointer-events-auto">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#404040] to-white italic">work.</span>
          </h3>
          <p className="mt-6 text-[#A1A1A1] max-w-2xl text-base md:text-lg font-light pointer-events-auto">
            A curated collection of projects that demonstrate my expertise in AI integration, full-stack architecture, and modern web development.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-32 md:space-y-44">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};
