import React from 'react';
import { motion } from 'framer-motion';
import { FLOATING_TECH_ITEMS } from './heroData';

export const FloatingTech = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {FLOATING_TECH_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, idx % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              opacity: { delay: 0.5 + idx * 0.1, duration: 0.4 },
              scale: { delay: 0.5 + idx * 0.1, duration: 0.4 },
              y: { duration: 3.5 + idx, repeat: Infinity, ease: 'easeInOut' },
            }}
            className={`absolute ${item.position} px-3 py-2 rounded-2xl glass-card border border-blue-500/40 shadow-2xl flex items-center gap-2 pointer-events-auto backdrop-blur-xl bg-slate-900/90 z-30`}
          >
            <Icon className="text-lg sm:text-xl flex-shrink-0" style={{ color: item.color }} />
            <span className="text-xs font-bold text-slate-100 font-mono whitespace-nowrap">
              {item.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingTech;
