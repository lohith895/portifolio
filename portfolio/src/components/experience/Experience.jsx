import React from 'react';
import Timeline from './Timeline';
import EXPERIENCES, { EXPERIENCE_HEADER } from './experienceData';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

export const Experience = () => {
  return (
    <Section id="experience">
      <Container size="md">
        <SectionTitle
          badge={EXPERIENCE_HEADER.badge}
          title={EXPERIENCE_HEADER.title}
          subtitle={EXPERIENCE_HEADER.subtitle}
        />

        <Timeline experiences={EXPERIENCES} />
      </Container>
    </Section>
  );
};

export default Experience;
