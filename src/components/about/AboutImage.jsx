import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaAward } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../utils/constants';

export const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md mx-auto space-y-4"
    >
      {/* Glow background blur */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 pointer-events-none" />

      <div className="relative glass-panel rounded-3xl p-3 border border-slate-700/80 overflow-hidden shadow-2xl">
        <img
          src={PERSONAL_INFO.profileImage}
          alt={PERSONAL_INFO.name}
          loading="lazy"
          className="w-full h-80 sm:h-96 object-cover rounded-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
          }}
        />
      </div>

      {/* Floating Info Overlay Cards */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="glass-card p-3 rounded-2xl border border-blue-500/30 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 text-lg">
            <FaAward />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-100 block">1+ Years</span>
            <span className="text-[10px] text-slate-400">Engineering</span>
          </div>
        </div>

        <div className="glass-card p-3 rounded-2xl border border-purple-500/30 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 text-lg">
            <FaLaptopCode />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-100 block">4+ Projects</span>
            <span className="text-[10px] text-slate-400">Production</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
