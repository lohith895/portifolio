import React from 'react';
import AchievementCard from './AchievementCard';
import ACHIEVEMENTS_DATA, { ACHIEVEMENTS_HEADER } from './achievementData';
import { SectionTitle } from '../common/SectionTitle';

export const Achievements = () => {
  return (
    <div className="space-y-4">
      <SectionTitle
        badge={ACHIEVEMENTS_HEADER.badge}
        title={ACHIEVEMENTS_HEADER.title}
        subtitle={ACHIEVEMENTS_HEADER.subtitle}
        center={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {ACHIEVEMENTS_DATA.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
