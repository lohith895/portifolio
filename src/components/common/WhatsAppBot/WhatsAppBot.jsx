import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../../utils/constants';

export const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(PERSONAL_INFO.shortName)},%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Bot Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 250 }}
            className="mb-4 w-80 max-w-[85vw] rounded-2xl bg-slate-900/95 border border-emerald-500/40 shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl text-white shadow-inner">
                    <FaWhatsapp />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-snug">{PERSONAL_INFO.name}</h4>
                  <span className="text-[11px] text-emerald-100 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 bg-slate-950/60 text-xs">
              <div className="bg-slate-800/90 text-slate-200 p-3 rounded-2xl rounded-tr-xs border border-slate-700/60 space-y-1.5 shadow-md">
                <p className="leading-relaxed">
                  Hi there! 👋 Thank you for checking out my portfolio.
                </p>
                <p className="leading-relaxed text-slate-300">
                  Got a project inquiry, contract opportunity, or tech question? Click below to chat directly with me on WhatsApp!
                </p>
                <span className="text-[10px] font-mono text-slate-400 block text-right pt-1">Just now</span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
                <span>Start Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Round Trigger Button on Right Side */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Quick Chat"
        className="p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-2xl shadow-emerald-500/30 cursor-pointer flex items-center justify-center border border-emerald-400/40"
      >
        <FaWhatsapp className="text-2xl text-white group-hover:rotate-12 transition-transform duration-300" />
      </motion.button>
    </div>
  );
};

export default WhatsAppBot;
