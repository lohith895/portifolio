import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../../hooks/useTheme';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileTap={{ scale: 0.9, rotate: 15 }}
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`p-2.5 rounded-xl glass-card text-amber-400 dark:text-cyan-400 hover:scale-110 transition-all duration-300 shadow-md ${className}`}
    >
      {isDark ? <FaSun className="text-xl text-amber-400" /> : <FaMoon className="text-xl text-purple-400" />}
    </motion.button>
  );
};
