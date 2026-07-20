import React from 'react';
import { FaLongArrowAltRight, FaCogs } from 'react-icons/fa';

export const ArchitectureCard = ({ architecture }) => {
  if (!architecture || architecture.length === 0) return null;

  return (
    <div className="glass-card p-4 rounded-2xl border border-blue-500/20 my-4 space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
        <FaCogs />
        <span>System Architecture Flow</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
        {architecture.map((node, idx) => (
          <React.Fragment key={idx}>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-semibold shadow-sm">
              {node}
            </span>
            {idx < architecture.length - 1 && (
              <FaLongArrowAltRight className="text-blue-400 text-sm hidden sm:inline" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureCard;
