import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const CertificationCard = ({ cert, index }) => {
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card hoverEffect={true} className="h-full flex flex-col justify-between space-y-4 border border-slate-800 hover:border-blue-500/40">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl glass-panel text-2xl flex-shrink-0" style={{ color: cert.color || '#3B82F6' }}>
              {Icon ? <Icon /> : null}
            </div>
            <span className="text-xs font-mono text-slate-400 glass-panel px-2.5 py-1 rounded-full">
              {cert.date}
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-100">{cert.title}</h3>
            <span className="text-xs text-blue-400 font-semibold block mt-0.5">{cert.issuer}</span>
          </div>

          {cert.skills && (
            <div className="flex flex-wrap gap-1 pt-1">
              {cert.skills.map((s) => (
                <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-md glass-panel text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="font-mono text-[10px] text-slate-500 truncate max-w-[120px]">
            {cert.credentialId}
          </span>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Verify <FaExternalLinkAlt className="text-[10px]" />
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default CertificationCard;
