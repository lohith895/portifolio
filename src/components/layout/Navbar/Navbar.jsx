import React, { useState, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import { useScroll } from '../../../hooks/useScroll';
import { scrollToElement } from '../../../utils/helpers';
import './Navbar.css';

export const Navbar = memo(() => {
  const { isScrolled, scrollDirection, activeSection } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const handleNavigate = (sectionId) => {
    setMenuOpen(false);
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToElement(sectionId);
    }
  };

  const isHidden = scrollDirection === 'down' && isScrolled && !menuOpen;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: isHidden ? -80 : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`navbar-root flex items-center ${
          isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu Navbar matching Image 1 */}
          <DesktopMenu
            activeSection={activeSection}
            isHomePage={isHomePage}
            onNavigate={handleNavigate}
          />

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* 3 Dashlines Menu Trigger Button (Hidden on Desktop, Visible on Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-slate-800 text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/90 transition-all duration-200 cursor-pointer shadow-lg group"
              aria-label="Open Navigation Menu"
            >
              <div className="flex flex-col justify-center items-center w-5 h-4 gap-1">
                <span className="w-5 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-6 group-hover:bg-cyan-400" />
                <span className="w-4 h-0.5 bg-slate-200 rounded-full transition-all duration-300 group-hover:w-6 group-hover:bg-white" />
                <span className="w-5 h-0.5 bg-purple-400 rounded-full transition-all duration-300 group-hover:w-6 group-hover:bg-purple-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-cyan-400">
                Menu
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
});

export default Navbar;
