import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPaperPlane } from 'react-icons/fa';
import EducationTimeline from './EducationTimeline';
import EDUCATION_DATA, { EDUCATION_HEADER } from './educationData';
import { Certifications } from '../certifications';
import { Achievements } from '../achievements';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { PERSONAL_INFO } from '../../utils/constants';
import { scrollToElement } from '../../utils/helpers';

export const Education = () => {
  return (
    <Section id="education" bg="muted">
      <Container>
        {/* 1. Academic Education Section */}
        <div className="mb-16">
          <SectionTitle
            badge={EDUCATION_HEADER.badge}
            title={EDUCATION_HEADER.title}
            subtitle={EDUCATION_HEADER.subtitle}
          />
          <EducationTimeline educationList={EDUCATION_DATA} />
        </div>

        {/* 2. Certifications Section */}
        <div className="mb-16">
          <Certifications />
        </div>

        {/* 3. Achievements Section */}
        <div className="mb-16">
          <Achievements />
        </div>

        {/* 4. Resume CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-blue-500/30 text-center space-y-4 shadow-2xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Interested in working together?
          </h3>
          <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Download my complete curriculum vitae or get in touch directly to discuss full-time engineering opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={FaDownload}
              onClick={() => window.open(PERSONAL_INFO.resumeUrl, '_blank')}
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={FaPaperPlane}
              onClick={() => scrollToElement('contact')}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Education;
