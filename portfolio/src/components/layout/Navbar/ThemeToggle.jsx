import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative w-14 h-8 rounded-full glass-panel border border-slate-700/80 p-1 flex items-center justify-between cursor-pointer focus:outline-none min-h-[44px] min-w-[44px]"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <FaSun aria-hidden="true" className="text-amber-400 text-xs z-10 ml-1" />
      <FaMoon aria-hidden="true" className="text-blue-400 text-xs z-10 mr-1" />
      
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-blue-500 shadow-md"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
};

export default ThemeToggle;
