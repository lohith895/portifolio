import React from 'react';
import { PERSONAL_INFO } from '../../../utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl text-slate-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
