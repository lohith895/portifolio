import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSpinner } from 'react-icons/fa';
import { CURRENTLY_LEARNING } from '../../data/skills';
import { Card } from '../common/Card';

export const LearningCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <Card className="border border-blue-500/30 bg-slate-900/80 p-6 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 text-xl border border-blue-500/20">
            <FaGraduationCap />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>Currently Learning & Exploring</span>
              <FaSpinner className="text-blue-400 text-xs animate-spin" />
            </h4>
            <p className="text-xs text-slate-400">Actively expanding expertise in advanced cloud architecture and distributed engineering patterns.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CURRENTLY_LEARNING.map((item, idx) => (
            <div key={idx} className="glass-card p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-blue-400 block">{item.name}</span>
              <span className="text-[11px] text-slate-400 block leading-tight">{item.description}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default LearningCard;
