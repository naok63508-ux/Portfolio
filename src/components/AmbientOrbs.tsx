import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ambient floating gradient orbs that drift slowly across sections,
 * giving the portfolio an alive, breathing feel.
 */
export const AmbientOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Top-right orb — large, slow drift */}
      <motion.div
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
        animate={{ 
          x: [0, 40, -20, 0], 
          y: [0, -30, 20, 0] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-left orb — smaller, faster pulse */}
      <motion.div
        className="absolute -bottom-[150px] -left-[150px] w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }}
        animate={{ 
          x: [0, -30, 15, 0], 
          y: [0, 25, -15, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center-right floating orb — deep subtle */}
      <motion.div
        className="absolute top-[50%] right-[5%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)' }}
        animate={{ 
          y: [0, -60, 30, 0],
          x: [0, -20, 10, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
