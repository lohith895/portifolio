import React from 'react';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import FeatureList from './FeatureList';
import ArchitectureCard from './ArchitectureCard';
import GitHubButton from './GitHubButton';
import LiveDemoButton from './LiveDemoButton';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { FaBookOpen } from 'react-icons/fa';

export const FeaturedProject = ({ project, reverse = false, onViewCaseStudy }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12"
    >
      <Card className="border border-blue-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
          {/* Banner Image */}
          <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-800 shadow-xl group">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="purple" size="md">
                  Featured Case Study
                </Badge>
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className={`lg:col-span-6 space-y-4 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center gap-2">
              <Badge variant="cyan" size="sm">
                {project.category}
              </Badge>
              {project.duration && (
                <span className="text-xs font-mono text-slate-400">
                  {project.duration}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>

            <TechStack technologies={project.technologies} />

            <FeatureList features={project.features.slice(0, 2)} />

            <ArchitectureCard architecture={project.architecture} />

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                icon={FaBookOpen}
                onClick={() => onViewCaseStudy(project)}
              >
                Read Case Study
              </Button>
              <GitHubButton url={project.github} />
              <LiveDemoButton url={project.demo} />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeaturedProject;
