import React from 'react';
import SkillGrid from './SkillGrid';

export const SkillCategory = ({ title, skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="space-y-3 my-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
        {title}
      </h3>
      <SkillGrid skills={skills} />
    </div>
  );
};

export default SkillCategory;
