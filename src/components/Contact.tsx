import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full bg-[#050505] text-white overflow-hidden border-t border-white/5"
    >
      {/* Main Contact Body */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-32 pb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-white/40 mb-6"
        >
          Contact
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl pointer-events-auto"
        >
          Interested in collaboration? Let's connect and create{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#404040] to-white italic">together!</span>
        </motion.h3>
      </div>

      {/* "Open to Work" Marquee Band */}
      <div className="relative py-6 bg-white/[0.03] border-y border-white/5 overflow-hidden">
        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center whitespace-nowrap text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight mx-6 md:mx-10">
              Open to Work
              <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white mx-6 md:mx-10 inline-block" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer Contact Links */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-16">
        <motion.div 
          className="flex flex-wrap gap-8 md:gap-16 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Email */}
          <a href="mailto:mikael@email.com" className="group flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <Mail className="w-5 h-5 text-white" />
            <div>
              <p className="text-sm font-semibold text-white">Email</p>
              <p className="text-xs text-[#A1A1A1]">mikael@email.com</p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+5500000000000" className="group flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <Phone className="w-5 h-5 text-white" />
            <div>
              <p className="text-sm font-semibold text-white">Phone</p>
              <p className="text-xs text-[#A1A1A1]">+55 00 00000-0000</p>
            </div>
          </a>

          {/* Github */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <Github className="w-5 h-5 text-white" />
            <p className="text-sm font-semibold text-white">Github</p>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <Linkedin className="w-5 h-5 text-white" />
            <p className="text-sm font-semibold text-white">LinkedIn</p>
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[#555] text-xs">
          <p>© 2026 Mikael Barbosa. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React, Framer Motion & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};
