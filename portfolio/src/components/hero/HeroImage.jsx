import React from 'react';
import { motion } from 'framer-motion';
import FloatingTech from './FloatingTech';
import { PERSONAL_INFO } from '../../utils/constants';

export const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
    >
      {/* Background Soft Glow Circles */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 blur-2xl opacity-40 animate-pulse-glow" />

      {/* Modern Circular Image Frame */}
      <div className="relative w-full h-full rounded-full p-2.5 glass-panel border border-slate-700/80 overflow-hidden shadow-2xl z-10">
        <img
          src={PERSONAL_INFO.profileImage}
          alt={PERSONAL_INFO.name}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
          }}
        />
      </div>

      {/* Floating Animated Badges Around Image */}
      <FloatingTech />
    </motion.div>
  );
};

export default HeroImage;
