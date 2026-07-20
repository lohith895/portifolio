import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TechStack from './TechStack';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';

export const ProjectCard = memo(({ project, index, onViewCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        hoverEffect={true}
        className="h-full flex flex-col justify-between overflow-hidden border border-slate-800 hover:border-blue-500/40 hover:scale-[1.02] transition-all duration-300 shadow-xl group"
      >
        <div>
          {/* Banner Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
              }}
            />
            <div className="absolute top-3 right-3">
              <Badge variant="cyan" size="sm">
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-2 mb-4">
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="mb-4">
            <TechStack technologies={project.technologies.slice(0, 4)} />
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 text-base transition-colors"
                title="GitHub Repo"
              >
                <FaGithub />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          <button
            onClick={() => onViewCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            <span>View Case Study</span>
            <FaArrowRight className="text-[10px]" />
          </button>
        </div>
      </Card>
    </motion.div>
  );
});

export default ProjectCard;
