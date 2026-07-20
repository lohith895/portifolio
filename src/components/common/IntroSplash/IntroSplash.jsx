import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../../utils/constants';

export const IntroSplash = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-scroll / slide-up after 2.2 seconds
    const timer = setTimeout(() => {
      handleComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    // Smooth scroll to top / hero section
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0.95 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-slate-950 text-slate-100 flex flex-col items-center justify-between p-6 sm:p-12 overflow-hidden select-none pointer-events-auto"
        >
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          {/* Top Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full flex items-center justify-between max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Portfolio Experience
              </span>
            </div>
            <button
              onClick={handleComplete}
              className="text-xs font-mono font-semibold tracking-wider text-slate-400 hover:text-cyan-400 px-3.5 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/40 glass-card transition-all cursor-pointer"
            >
              Skip Intro ↑
            </button>
          </motion.div>

          {/* Center Name & Title Display */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-mono font-semibold shadow-lg"
            >
              WELCOME TO THE PORTFOLIO OF
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight gradient-text leading-tight drop-shadow-2xl"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-2xl text-slate-300 font-medium max-w-2xl"
            >
              {PERSONAL_INFO.title}
            </motion.p>
          </div>

          {/* Bottom Loading Progress & Auto-scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full flex flex-col items-center max-w-md mx-auto space-y-3"
          >
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 shadow-inner">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-semibold tracking-wider">
              <span>Entering Portfolio...</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
