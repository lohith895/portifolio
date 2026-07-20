import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { ABOUT_DATA, HIGHLIGHTS, STRENGTHS } from './aboutData';
import HighlightCard from './HighlightCard';
import Stats from './Stats';
import { Button } from '../common/Button';
import { scrollToElement } from '../../utils/helpers';

export const AboutContent = () => {
  return (
    <div className="space-y-8">
      {/* Story */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-100"
        >
          Passionate Software Engineer & Problem Solver
        </motion.h3>

        {ABOUT_DATA.story.map((paragraph, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="text-slate-300 text-base leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Checkmarks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
        {ABOUT_DATA.checkmarks.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-slate-300">
            <FaCheckCircle className="text-blue-400 text-sm flex-shrink-0" />
            <span className="text-xs font-semibold">{item}</span>
          </div>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="space-y-3 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Core Focus Areas
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HIGHLIGHTS.map((h, index) => (
            <HighlightCard key={h.id} highlight={h} index={index} />
          ))}
        </div>
      </div>

      {/* Engineering Strength Cards */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Engineering Approach & Strengths
        </h4>
        <div className="flex flex-wrap gap-2">
          {STRENGTHS.map((strength) => {
            const Icon = strength.icon;
            return (
              <span
                key={strength.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card border border-slate-800 text-xs font-medium text-slate-200"
              >
                <Icon className="text-blue-400 text-xs" />
                <span>{strength.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Statistics */}
      <Stats />

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-2xl border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl"
      >
        <div>
          <h4 className="text-lg font-bold text-slate-100">{ABOUT_DATA.ctaText}</h4>
          <p className="text-xs text-slate-400 mt-1">Available for full-time roles, contract engineering, & innovative projects.</p>
        </div>
        <Button
          variant="primary"
          size="md"
          icon={FaPaperPlane}
          onClick={() => scrollToElement('contact')}
        >
          Contact Me
        </Button>
      </motion.div>
    </div>
  );
};

export default AboutContent;
