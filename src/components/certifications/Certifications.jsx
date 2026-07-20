import React from 'react';
import CertificationCard from './CertificationCard';
import CERTIFICATIONS_DATA, { CERTIFICATIONS_HEADER } from './certificationData';
import { SectionTitle } from '../common/SectionTitle';

export const Certifications = () => {
  return (
    <div className="space-y-4">
      <SectionTitle
        badge={CERTIFICATIONS_HEADER.badge}
        title={CERTIFICATIONS_HEADER.title}
        subtitle={CERTIFICATIONS_HEADER.subtitle}
        center={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <CertificationCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
