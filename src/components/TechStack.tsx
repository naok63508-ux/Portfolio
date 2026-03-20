import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string; // devicon class name
}

const techItems: TechItem[] = [
  // Languages
  { name: "Python", icon: "devicon-python-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  // Frontend
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original" },
  // Backend
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "FastAPI", icon: "devicon-fastapi-plain" },
  // AI / ML
  { name: "TensorFlow", icon: "devicon-tensorflow-original" },
  { name: "PyTorch", icon: "devicon-pytorch-original" },
  { name: "OpenCV", icon: "devicon-opencv-plain" },
  // Databases
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  // DevOps & Cloud
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Azure", icon: "devicon-azure-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  // Tools
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "VS Code", icon: "devicon-vscode-plain" },
  { name: "Vercel", icon: "devicon-vercel-original" },
  { name: "Jupyter", icon: "devicon-jupyter-plain" },
  { name: "Figma", icon: "devicon-figma-plain" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  show: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

export const TechStack: React.FC = () => {
  return (
    <section 
      id="tech-stack" 
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 border-t border-white/5 overflow-hidden"
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
          <source src="/videos/techstack-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050505]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase pointer-events-auto">
            TECH STACK
          </h3>
          <p className="mt-6 text-[#A1A1A1] max-w-xl mx-auto text-base md:text-lg font-light">
            The tools and technologies I work with daily to build intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <motion.div 
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 md:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techItems.map((tech, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.12, y: -6, boxShadow: "0 8px 30px rgba(255,255,255,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col items-center justify-center aspect-square bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 cursor-default pointer-events-auto"
            >
              <i className={`${tech.icon} text-3xl md:text-4xl text-[#666] group-hover:text-white transition-colors duration-300`} />
              <span className="mt-2 text-[10px] md:text-xs text-[#555] group-hover:text-[#A1A1A1] transition-colors duration-300 font-medium tracking-wide text-center px-1 leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
