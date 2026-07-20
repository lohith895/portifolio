import React from 'react';
import { motion } from 'framer-motion';
import { PROJECT_CATEGORIES } from '../../data/projects';

export const ProjectFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {PROJECT_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
              isActive
                ? 'text-white shadow-lg shadow-blue-500/20'
                : 'glass-card text-slate-400 hover:text-slate-100 hover:border-slate-700'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;
