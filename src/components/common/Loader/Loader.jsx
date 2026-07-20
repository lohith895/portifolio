import React from 'react';
import { motion } from 'framer-motion';

export const Loader = ({ fullScreen = true }) => {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      {/* Brand Initial Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 p-[2px] shadow-2xl"
      >
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black font-mono text-2xl text-blue-400">
          AL
        </div>
      </motion.div>

      {/* Text */}
      <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
        Loading Portfolio...
      </span>

      {/* Progress Bar Line */}
      <div className="w-44 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;
