import React from 'react';
import { PROJECT_CATEGORIES } from '../../../data/projects';

export const ProjectFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
            activeCategory === category
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
              : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
