import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaPaperPlane } from 'react-icons/fa';
import navLinks from './navLinks';
import ThemeToggle from './ThemeToggle';
import { PERSONAL_INFO } from '../../../utils/constants';
import { Button } from '../../common/Button';

export const MobileMenu = ({ isOpen, onClose, activeSection, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md md:hidden"
          />

          {/* Slide Drawer from Right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-slate-900/95 border-l border-slate-800 p-6 flex flex-col justify-between md:hidden shadow-2xl backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="font-mono font-bold text-slate-100 text-sm">
                  &lt;AL/&gt; Navigation
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white rounded-xl glass-card"
                  aria-label="Close Menu"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.section;
                  return (
                    <button
                      key={link.id}
                      onClick={() => onNavigate(link.section)}
                      className={`text-left text-base font-medium px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-sm text-slate-400 font-medium">Appearance</span>
                <ThemeToggle />
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <Button
                  variant="outline"
                  size="md"
                  icon={FaDownload}
                  onClick={() => {
                    onClose();
                    window.open(PERSONAL_INFO.resumeUrl, '_blank');
                  }}
                >
                  Resume
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  icon={FaPaperPlane}
                  onClick={() => onNavigate('contact')}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
