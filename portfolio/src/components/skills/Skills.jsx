import React, { useState, useMemo } from 'react';
import CategoryTabs from './CategoryTabs';
import SkillGrid from './SkillGrid';
import StrengthCard from './StrengthCard';
import LearningCard from './LearningCard';
import { SKILLS_LIST, CORE_STRENGTHS } from '../../data/skills';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return SKILLS_LIST;
    return SKILLS_LIST.filter(
      (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <Section id="skills" bg="muted">
      <Container>
        <SectionTitle
          badge="Technical Proficiency"
          title="Skills & Tech Stack"
          subtitle="Explore my technology stack across languages, backend frameworks, frontend, mobile apps, databases, and software engineering principles."
        />

        {/* Category Tabs */}
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Skills Grid */}
        <SkillGrid skills={filteredSkills} />

        {/* Core Strengths Section */}
        <div className="mt-14 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center">
            Software Engineering Capabilities & Core Strengths
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {CORE_STRENGTHS.map((strength, idx) => (
              <StrengthCard key={strength} title={strength} index={idx} />
            ))}
          </div>
        </div>

        {/* Currently Learning Section */}
        <LearningCard />
      </Container>
    </Section>
  );
};

export default Skills;
