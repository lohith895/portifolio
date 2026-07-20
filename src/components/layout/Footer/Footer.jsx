import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronUp, FaHeart } from 'react-icons/fa';
import { PERSONAL_INFO, NAV_LINKS } from '../../../utils/constants';
import { scrollToElement } from '../../../utils/helpers';
import { SocialLinks } from '../../common/SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl text-slate-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                AL
              </div>
              <span className="font-bold text-xl text-slate-100">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>
            <SocialLinks />
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToElement(link.path)}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Projects Library
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Interactive Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <FaHeart className="text-rose-500 inline" aria-label="love" />
            <span>React & Tailwind CSS</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 transition-all hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <FaChevronUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
