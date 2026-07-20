import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { STATS_DATA } from './aboutData';
import { Card } from '../common/Card';

export const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {STATS_DATA.map((stat, idx) => (
        <Card key={idx} className="text-center py-6">
          <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
            {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
            {stat.suffix}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {stat.label}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
