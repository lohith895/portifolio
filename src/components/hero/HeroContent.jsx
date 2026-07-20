import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HERO_DATA } from './heroData';
import HeroButtons from './HeroButtons';
import SocialLinks from './SocialLinks';

export const HeroContent = () => {
  // Build sequence for react-type-animation
  const sequence = HERO_DATA.titles.flatMap((title) => [title, 2000]);

  return (
    <div className="space-y-6 text-center lg:text-left">
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold shadow-md"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Available for Software Engineering Roles</span>
      </motion.div>

      {/* Greeting & Full Name */}
      <div className="space-y-2">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="block text-lg sm:text-xl font-medium text-slate-400"
        >
          {HERO_DATA.greeting}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-slate-100 leading-tight"
        >
          {HERO_DATA.name}
        </motion.h1>
      </div>

      {/* Dynamic Typing Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-400 h-12 flex items-center justify-center lg:justify-start"
      >
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="gradient-text"
        />
      </motion.div>

      {/* Short Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
      >
        {HERO_DATA.description}
      </motion.p>

      {/* CTA Buttons */}
      <HeroButtons />

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-2 flex items-center justify-center lg:justify-start"
      >
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default HeroContent;
