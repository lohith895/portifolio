import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import ExperienceCard from './ExperienceCard';

export const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group pl-8 sm:pl-12"
    >
      {/* Animated Timeline Node Dot */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-400 flex items-center justify-center text-blue-400 text-xs shadow-lg shadow-blue-500/20 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300 z-10"
      >
        <FaBriefcase className="text-[10px]" />
      </motion.div>

      {/* Experience Card */}
      <ExperienceCard item={item} />
    </motion.div>
  );
};

export default TimelineItem;
