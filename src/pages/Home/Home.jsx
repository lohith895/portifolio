import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeSEO } from '../../seo';
import { IntroSplash } from '../../components/common/IntroSplash';
import { Hero } from '../../components/hero';
import { About } from '../../components/about';
import { Experience } from '../../components/experience';
import { Skills } from '../../components/skills';
import { ProjectsSection } from '../../components/projects';
import { Education } from '../../components/education';
import { Contact } from '../../components/contact';
import { scrollToElement } from '../../utils/helpers';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        scrollToElement(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <HomeSEO />
      <IntroSplash />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsSection />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
