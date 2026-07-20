import React from 'react';
import TimelineItem from './TimelineItem';

export const Timeline = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-slate-800 space-y-10 ml-4 sm:ml-6 my-8">
      {experiences.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default Timeline;
