import React from 'react';
import { Badge } from '../common/Badge';

export const TechStack = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.map((tech) => (
        <Badge key={tech} variant="cyan" size="sm" className="font-mono">
          {tech}
        </Badge>
      ))}
    </div>
  );
};

export default TechStack;
