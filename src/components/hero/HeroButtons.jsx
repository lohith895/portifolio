import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { HERO_DATA } from './heroData';
import { scrollToElement } from '../../utils/helpers';
import { Button } from '../common/Button';

export const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
    >
      <Button
        variant="primary"
        size="lg"
        icon={FaArrowRight}
        onClick={() => scrollToElement('projects')}
      >
        View Projects
      </Button>

      <Button
        variant="outline"
        size="lg"
        icon={FaDownload}
        onClick={() => window.open(HERO_DATA.resumeUrl, '_blank')}
      >
        Download Resume
      </Button>

      <Button
        variant="ghost"
        size="lg"
        icon={FaPaperPlane}
        onClick={() => scrollToElement('contact')}
      >
        Contact Me
      </Button>
    </motion.div>
  );
};

export default HeroButtons;
