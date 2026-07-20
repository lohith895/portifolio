import React from 'react';
import { motion } from 'framer-motion';
import { FLOATING_TECH_ITEMS } from './heroData';

export const FloatingTech = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {FLOATING_TECH_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, idx % 2 === 0 ? -8 : 8, 0],
            }}
            transition={{
              opacity: { delay: 0.6 + idx * 0.1, duration: 0.4 },
              scale: { delay: 0.6 + idx * 0.1, duration: 0.4 },
              y: { duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' },
            }}
            className={`absolute ${item.position} p-2.5 sm:p-3 rounded-2xl glass-card border border-slate-700/80 shadow-xl flex items-center gap-2 pointer-events-auto backdrop-blur-md`}
          >
            <Icon className="text-lg sm:text-xl" style={{ color: item.color }} />
            <span className="text-xs font-semibold text-slate-200 font-mono hidden sm:inline">
              {item.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingTech;
