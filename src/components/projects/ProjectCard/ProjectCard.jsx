import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Badge } from '../../common/Badge';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
    >
      <div>
        {/* Project Thumbnail Header */}
        <div className="relative aspect-video overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

          <div className="absolute top-3 right-3 flex items-center gap-2">
            <Badge variant="cyan" size="sm">
              {project.category}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md glass-panel text-slate-400 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4">
        <div className="flex items-center gap-3 pt-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 text-lg transition-colors"
              title="GitHub Repository"
            >
              <FaGithub />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 text-base transition-colors"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-3 group-hover:translate-x-1 transition-transform"
        >
          <span>Details</span>
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};
