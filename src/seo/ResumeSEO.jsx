import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO, PAGE_TITLES } from './seoConfig';

export const ResumeSEO = () => {
  const pageUrl = `${DEFAULT_SEO.domain}/resume`;
  const title = PAGE_TITLES.resume;
  const description = "View and download the official resume of Appala Lohith Venkata Guptha, Software Engineer specializing in Java, Spring Boot, React, Node.js, and Flutter.";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={DEFAULT_SEO.author} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_SEO.ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={DEFAULT_SEO.ogImage} />
    </Helmet>
  );
};

export default ResumeSEO;
