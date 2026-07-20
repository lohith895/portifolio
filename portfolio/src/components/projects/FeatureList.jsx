import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const FeatureList = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
      {features.map((feature, idx) => (
        <div key={idx} className="glass-card p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-400 text-xs flex-shrink-0" />
            <h5 className="text-xs font-bold text-slate-100">{feature.title}</h5>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed pl-5">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
