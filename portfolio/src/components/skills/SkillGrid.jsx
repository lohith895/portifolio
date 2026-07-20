import React from 'react';
import SkillCard from './SkillCard';

export const SkillGrid = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      {skills.map((skill, index) => (
        <SkillCard key={skill.id || skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default SkillGrid;
