import React, { useState, useMemo } from 'react';
import { ProjectSEO } from '../../seo';
import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ProjectCard, ProjectFilter, ProjectModal } from '../../components/projects';
import PROJECTS from '../../data/projects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(
      (p) =>
        p.category.toLowerCase() === activeCategory.toLowerCase() ||
        p.technologies.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
    );
  }, [activeCategory]);

  return (
    <>
      <ProjectSEO />
      <Section className="pt-32 pb-20">
        <Container>
          <SectionTitle
            badge="Engineering Case Studies"
            title="Projects Library"
            subtitle="Explore in-depth case studies, system architecture diagrams, and production code repositories."
          />

          <ProjectFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewCaseStudy={(proj) => setSelectedModalProject(proj)}
              />
            ))}
          </div>

          {selectedModalProject && (
            <ProjectModal
              project={selectedModalProject}
              onClose={() => setSelectedModalProject(null)}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Projects;
