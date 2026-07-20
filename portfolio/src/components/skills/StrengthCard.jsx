import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export const StrengthCard = ({ title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-200 hover:border-blue-500/40 hover:text-blue-400 transition-all"
    >
      <FaCheckCircle className="text-blue-400 text-xs flex-shrink-0" />
      <span>{title}</span>
    </motion.div>
  );
};

export default StrengthCard;
