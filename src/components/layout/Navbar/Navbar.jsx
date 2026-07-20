import React, { useState, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaDownload, FaPaperPlane } from 'react-icons/fa';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import { useScroll } from '../../../hooks/useScroll';
import { PERSONAL_INFO } from '../../../utils/constants';
import { scrollToElement } from '../../../utils/helpers';
import { Button } from '../../common/Button';
import './Navbar.css';

export const Navbar = memo(() => {
  const { isScrolled, scrollDirection, activeSection } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const handleNavigate = (sectionId) => {
    setMobileOpen(false);
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToElement(sectionId);
    }
  };

  // Hide on scroll down after 100px
  const isHidden = scrollDirection === 'down' && isScrolled && !mobileOpen;

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
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopMenu
            activeSection={activeSection}
            isHomePage={isHomePage}
            onNavigate={handleNavigate}
          />

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              icon={FaDownload}
              onClick={() => window.open(PERSONAL_INFO.resumeUrl, '_blank')}
            >
              Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={FaPaperPlane}
              onClick={() => handleNavigate('contact')}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white"
              aria-label="Open Navigation Menu"
            >
              <FaBars className="text-lg" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
});

export default Navbar;
