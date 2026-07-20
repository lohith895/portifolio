import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';
import PROJECTS from '../../data/projects';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';

export const ProjectsSection = () => {
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

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          badge="Engineering Case Studies"
          title="Featured Projects"
          subtitle="Explore in-depth engineering case studies showcasing system architecture, feature cards, and technical solutions."
        />

        {/* Category Filters */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Featured Projects List */}
        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <FeaturedProject
              key={project.id}
              project={project}
              reverse={idx % 2 !== 0}
              onViewCaseStudy={(proj) => setSelectedModalProject(proj)}
            />
          ))}
        </div>

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="mt-12 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              More Projects & Architectures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewCaseStudy={(proj) => setSelectedModalProject(proj)}
                />
              ))}
            </div>
          </div>
        )}

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg" icon={FaArrowRight}>
              Explore Complete Projects Library
            </Button>
          </Link>
        </div>

        {/* Case Study Detail Modal */}
        {selectedModalProject && (
          <ProjectModal
            project={selectedModalProject}
            onClose={() => setSelectedModalProject(null)}
          />
        )}
      </Container>
    </Section>
  );
};

export default ProjectsSection;
