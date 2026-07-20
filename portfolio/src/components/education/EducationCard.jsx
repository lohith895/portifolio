import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import { Card } from '../common/Card';

export const EducationCard = ({ item }) => {
  return (
    <Card className="space-y-4 shadow-xl border border-slate-800 hover:border-blue-500/40 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 text-2xl border border-blue-500/20 flex-shrink-0">
            <FaGraduationCap />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">{item.degree}</h3>
            <span className="text-xs font-semibold text-blue-400 block">{item.field}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="glass-panel px-3 py-1 rounded-full text-emerald-400 font-bold font-mono">
            {item.grade}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="font-semibold text-slate-200">{item.institution}</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <FaCalendarAlt className="text-blue-400" />
          {item.period}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-purple-400" />
          {item.location}
        </span>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

      {item.highlights && (
        <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          {item.highlights.map((h, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <FaAward className="text-amber-400 text-xs flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default EducationCard;
