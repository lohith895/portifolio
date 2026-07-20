import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../../utils/constants';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20"
      >
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
          &lt;AL/&gt;
        </div>
      </motion.div>

      <span className="font-extrabold text-sm sm:text-base md:text-lg text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
        {PERSONAL_INFO.name}
      </span>
    </Link>
  );
};

export default Logo;
