import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { NAV_LINKS, PERSONAL_INFO } from '../../../utils/constants';
import { ThemeToggle } from '../../ui/ThemeToggle';
import { SocialLinks } from '../../common/SocialLinks';

export const Sidebar = ({ isOpen, onClose, activeSection, onNavClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-slate-900/95 border-l border-slate-800 p-6 flex flex-col justify-between md:hidden shadow-2xl backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <span className="font-bold text-slate-100">{PERSONAL_INFO.name}</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white rounded-lg glass-card"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => onNavClick(link.path)}
                    className={`text-left text-lg font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === link.path
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Theme</span>
                <ThemeToggle />
              </div>
              <SocialLinks />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
