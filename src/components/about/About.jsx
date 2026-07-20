import React from 'react';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import ABOUT_DATA from './aboutData';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

export const About = () => {
  return (
    <Section id="about" bg="muted">
      <Container>
        <SectionTitle
          badge={ABOUT_DATA.badge}
          title={ABOUT_DATA.heading}
          subtitle={ABOUT_DATA.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          <div className="lg:col-span-5">
            <AboutImage />
          </div>

          <div className="lg:col-span-7">
            <AboutContent />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
