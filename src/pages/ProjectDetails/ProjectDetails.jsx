import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import { PROJECTS } from '../../data/projects';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Project Not Found</h2>
        <p className="text-slate-400 mb-6">The requested project detail page does not exist.</p>
        <Link to="/projects">
          <Button variant="primary" icon={FaArrowLeft}>
            Back to Projects Library
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium mb-8"
        >
          <FaArrowLeft />
          <span>Back to Projects Library</span>
        </Link>

        {/* Hero Section */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="purple" size="md">
                Featured Project
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="md"
                icon={FaExternalLinkAlt}
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                Visit Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="md"
                icon={FaGithub}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                View Source Code
              </Button>
            )}
          </div>
        </div>

        {/* Project Image Banner */}
        <div className="rounded-3xl overflow-hidden glass-card border border-slate-800 mb-12 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[480px] object-cover"
          />
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="space-y-4">
              <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                <span>Key Architectural Features</span>
              </h2>
              <ul className="space-y-3 text-slate-300 text-sm">
                {project.keyFeatures?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {project.challengesSolved && (
              <Card className="space-y-3">
                <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <FaLightbulb className="text-amber-400" />
                  <span>Technical Challenges & Solutions</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.challengesSolved}
                </p>
              </Card>
            )}
          </div>

          {/* Sidebar Tech Stack */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="cyan" size="md">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
