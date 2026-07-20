import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20"
      >
        <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center font-mono font-black text-cyan-400 text-sm tracking-tighter">
          &lt;AL/&gt;
        </div>
      </motion.div>

      <div className="flex flex-col">
        <span className="font-bold text-base text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors">
          Appala<span className="text-blue-500">.</span>Lohith
        </span>
        <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
          Software Engineer
        </span>
      </div>
    </Link>
  );
};

export default Logo;
