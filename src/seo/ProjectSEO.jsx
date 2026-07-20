import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO, PAGE_TITLES } from './seoConfig';

export const ProjectSEO = ({ project }) => {
  const title = project
    ? `${project.title} | Case Study by Appala Lohith`
    : PAGE_TITLES.projects;

  const description = project
    ? project.shortDescription || project.fullDescription
    : "Explore engineering case studies by Appala Lohith Venkata Guptha including Anti-Proxy Smart Attendance System and Enterprise Hospital Management System.";

  const pageUrl = project
    ? `${DEFAULT_SEO.domain}/projects/${project.id}`
    : `${DEFAULT_SEO.domain}/projects`;

  const ogImage = project ? project.image : DEFAULT_SEO.ogImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={DEFAULT_SEO.author} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default ProjectSEO;
