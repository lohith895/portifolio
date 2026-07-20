import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const SkillCard = memo(({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 10) * 0.05 }}
    >
      <Card
        hoverEffect={true}
        className="flex items-center gap-3.5 p-4 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
      >
        <div
          className="p-3 rounded-xl glass-panel text-2xl flex-shrink-0 group-hover:scale-110 transition-transform"
          style={{ color: skill.color || '#3B82F6' }}
        >
          {Icon ? <Icon /> : null}
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors truncate">
            {skill.name}
          </h4>
          <span className="text-[11px] font-mono text-slate-400 block truncate">
            {skill.subtitle || skill.category}
          </span>
        </div>
      </Card>
    </motion.div>
  );
});

export default SkillCard;
