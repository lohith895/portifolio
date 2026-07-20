import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO, PAGE_TITLES } from './seoConfig';

export const HomeSEO = () => {
  const pageUrl = DEFAULT_SEO.domain;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": DEFAULT_SEO.author,
    "alternateName": "Appala Lohith",
    "url": pageUrl,
    "image": DEFAULT_SEO.ogImage,
    "jobTitle": "Software Engineer & Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "B2B Infotech Pvt. Ltd."
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "PSCMRCET"
    },
    "sameAs": [
      DEFAULT_SEO.socials.github,
      DEFAULT_SEO.socials.linkedin,
      DEFAULT_SEO.socials.leetcode
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "React.js",
      "Node.js",
      "Flutter",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Generative AI"
    ]
  };

  return (
    <Helmet>
      {/* Title */}
      <title>{PAGE_TITLES.home}</title>
      <meta name="title" content={PAGE_TITLES.home} />
      <meta name="description" content={DEFAULT_SEO.description} />
      <meta name="keywords" content={DEFAULT_SEO.keywords.join(', ')} />
      <meta name="author" content={DEFAULT_SEO.author} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={PAGE_TITLES.home} />
      <meta property="og:description" content={DEFAULT_SEO.description} />
      <meta property="og:image" content={DEFAULT_SEO.ogImage} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />

      {/* Twitter / X */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={PAGE_TITLES.home} />
      <meta property="twitter:description" content={DEFAULT_SEO.description} />
      <meta property="twitter:image" content={DEFAULT_SEO.ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default HomeSEO;
