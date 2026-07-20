import React from 'react';
import navLinks from './navLinks';

export const DesktopMenu = ({ activeSection, isHomePage, onNavigate }) => {
  return (
    <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-slate-800 shadow-lg">
      {navLinks.map((link) => {
        const isActive = isHomePage && activeSection === link.section;
        return (
          <button
            key={link.id}
            onClick={() => onNavigate(link.section)}
            aria-current={isActive ? 'page' : undefined}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center ${
              isActive
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {link.name}
          </button>
        );
      })}
    </nav>
  );
};

export default DesktopMenu;
