import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import { Section } from '../common/Section';
import { Container } from '../common/Container';

export const Hero = () => {
  return (
    <Section id="hero" className="min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Soft Glow Circles */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Mobile Order: Image first or Content first as preferred, Mobile Vertical Stack */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <HeroContent />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
            <HeroImage />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
