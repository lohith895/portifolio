import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLightbulb, FaExclamationCircle } from 'react-icons/fa';
import TechStack from './TechStack';
import FeatureList from './FeatureList';
import ArchitectureCard from './ArchitectureCard';
import ProjectGallery from './ProjectGallery';
import GitHubButton from './GitHubButton';
import LiveDemoButton from './LiveDemoButton';
import { Badge } from '../common/Badge';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="space-y-1">
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white"
              aria-label="Close Case Study"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden aspect-video max-h-80 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Technology Stack */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Technologies Used
            </span>
            <TechStack technologies={project.technologies} />
          </div>

          {/* Project Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Project Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution Cards */}
          {project.problem && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl border border-rose-500/20 space-y-1">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase">
                  <FaExclamationCircle />
                  <span>Problem Statement</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                  <FaLightbulb />
                  <span>Engineering Solution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          )}

          {/* System Architecture */}
          <ArchitectureCard architecture={project.architecture} />

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Key Features
            </h3>
            <FeatureList features={project.features} />
          </div>

          {/* Technical Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Technical Challenges & Solutions
              </h3>
              <div className="space-y-2">
                {project.challenges.map((c, idx) => (
                  <div key={idx} className="glass-card p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-slate-200 block">{c.title}</span>
                    <span className="text-xs text-slate-400 leading-relaxed block">{c.solution}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshot Gallery */}
          <ProjectGallery images={project.images} />

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <GitHubButton url={project.github} />
            <LiveDemoButton url={project.demo} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
