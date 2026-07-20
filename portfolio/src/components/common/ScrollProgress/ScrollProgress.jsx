import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900/50 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-md shadow-blue-500/50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: 'easeOut', duration: 0.1 }}
      />
    </div>
  );
};

export default ScrollProgress;
