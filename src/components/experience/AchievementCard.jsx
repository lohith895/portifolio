import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const AchievementCard = ({ category, text }) => {
  return (
    <div className="glass-card p-3 rounded-xl border border-slate-800 flex items-start gap-2.5 hover:border-blue-500/30 transition-all">
      <FaCheckCircle className="text-blue-400 text-sm mt-0.5 flex-shrink-0" />
      <div>
        <span className="text-xs font-bold text-slate-100 block">{category}</span>
        <span className="text-xs text-slate-400 leading-relaxed">{text}</span>
      </div>
    </div>
  );
};

export default AchievementCard;
