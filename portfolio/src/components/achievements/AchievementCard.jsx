import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card hoverEffect={true} className="h-full flex flex-col justify-between space-y-3 border border-slate-800 hover:border-blue-500/40">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-xl glass-panel ${achievement.color || 'text-amber-400'} text-xl flex-shrink-0`}>
              {Icon ? <Icon /> : null}
            </div>
            {achievement.category && (
              <span className="text-[10px] font-mono text-slate-400 glass-panel px-2.5 py-1 rounded-full uppercase tracking-wider">
                {achievement.category}
              </span>
            )}
          </div>

          <h3 className="text-sm font-bold text-slate-100">{achievement.title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{achievement.description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default AchievementCard;
