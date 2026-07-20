import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';

export const EducationTimeline = ({ educationList }) => {
  return (
    <div className="relative border-l-2 border-slate-800 space-y-8 ml-4 sm:ml-6 my-6">
      {educationList.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative group pl-8 sm:pl-10"
        >
          {/* Timeline Node Dot */}
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-400 flex items-center justify-center text-blue-400 font-mono font-bold text-xs shadow-lg shadow-blue-500/20 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300 z-10"
          >
            ●
          </motion.div>

          <EducationCard item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default EducationTimeline;
