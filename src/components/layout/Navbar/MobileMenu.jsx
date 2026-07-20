import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaPaperPlane, FaHome, FaUser, FaBriefcase, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import navLinks from './navLinks';
import ThemeToggle from './ThemeToggle';
import { PERSONAL_INFO } from '../../../utils/constants';
import { Button } from '../../common/Button';

const iconMap = {
  hero: FaHome,
  about: FaUser,
  experience: FaBriefcase,
  skills: FaCode,
  projects: FaFolderOpen,
  contact: FaEnvelope,
};

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
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Slide Drawer from Right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-slate-900/95 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="font-mono font-bold text-slate-100 text-sm flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="p-2.5 text-slate-400 hover:text-white rounded-xl glass-card transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* Nav items matching Image 2 with active pill style */}
              <nav className="mt-8 flex flex-col gap-2.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.section;
                  const Icon = iconMap[link.section] || FaHome;
                  return (
                    <button
                      key={link.id}
                      onClick={() => onNavigate(link.section)}
                      className={`text-left font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={isActive ? 'text-white' : 'text-slate-400'} />
                        <span>{link.name}</span>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Appearance</span>
                <ThemeToggle />
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-2">
                <Button
                  variant="outline"
                  size="md"
                  icon={FaDownload}
                  onClick={() => {
                    onClose();
                    window.open(PERSONAL_INFO.resumeUrl, '_blank');
                  }}
                >
                  Resume PDF
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
