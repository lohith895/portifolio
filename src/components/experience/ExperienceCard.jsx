import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import TechBadge from './TechBadge';
import AchievementCard from './AchievementCard';
import { Card } from '../common/Card';

export const ExperienceCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="space-y-5 shadow-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
      {/* Header: Company & Role */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3.5">
          {/* Logo Placeholder */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-[1px] shadow-lg flex-shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center font-mono font-black text-blue-400 text-sm">
              {item.logoPlaceholder || "JOB"}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-100">{item.company}</h3>
            <span className="text-sm font-semibold text-blue-400 block">{item.role}</span>
          </div>
        </div>

        {/* Date & Location */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 glass-panel px-3 py-1 rounded-full font-mono text-slate-300">
            <FaCalendarAlt className="text-blue-400" />
            {item.duration}
          </span>
          <span className="flex items-center gap-1.5 glass-panel px-3 py-1 rounded-full">
            <FaMapMarkerAlt className="text-purple-400" />
            {item.location}
          </span>
        </div>
      </div>

      {/* Technology Stack Badges */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
          Technologies Used
        </span>
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Achievement Cards Preview */}
      {item.highlightAchievements && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {item.highlightAchievements.map((ach, idx) => (
            <AchievementCard key={idx} category={ach.category} text={ach.text} />
          ))}
        </div>
      )}

      {/* Expandable Bullet List */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden space-y-2 pt-3 border-t border-slate-800/80"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Key Responsibilities & Accomplishments
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {item.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand / Collapse Button */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
        >
          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
          {isExpanded ? <FaChevronUp /> : <FaArrowRight />}
        </button>
      </div>
    </Card>
  );
};

export default ExperienceCard;
