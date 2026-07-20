import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../common/Button';

export const GitHubButton = ({ url }) => {
  if (!url) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      icon={FaGithub}
      onClick={() => window.open(url, '_blank')}
    >
      GitHub Repository
    </Button>
  );
};

export default GitHubButton;
