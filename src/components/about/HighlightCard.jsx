import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const HighlightCard = ({ highlight, index }) => {
  const Icon = highlight.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card hoverEffect={true} className="flex gap-4 items-start h-full">
        <div className={`p-3 rounded-xl glass-panel ${highlight.color} text-2xl flex-shrink-0`}>
          <Icon />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-100 mb-1">{highlight.title}</h4>
          <p className="text-xs text-slate-400 leading-relaxed">{highlight.description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default HighlightCard;
