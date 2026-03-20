import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for super fluid and premium mouse following
  const springConfig = { damping: 25, stiffness: 350, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Determine bounds and position
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    // Listen to mouse hovering over any interactive or massively scaled text
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Look up tree to find interactive elements
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('h1') || 
        target.closest('h2') ||
        target.closest('h3') 
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide the default cursor completely using global styles to let the custom one shine
  useEffect(() => {
    document.body.style.cursor = 'none';
    const iteractiveElements = document.querySelectorAll('a, button');
    iteractiveElements.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#EAB308] mix-blend-difference pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 5 : 1, // Expands to 5x size on hover
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    />
  );
};
