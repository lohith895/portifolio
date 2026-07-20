import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '../common/Button';

export const LiveDemoButton = ({ url }) => {
  if (!url) return null;

  return (
    <Button
      variant="primary"
      size="sm"
      icon={FaExternalLinkAlt}
      onClick={() => window.open(url, '_blank')}
    >
      Live Demo
    </Button>
  );
};

export default LiveDemoButton;
