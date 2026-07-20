import React from 'react';
import { Badge } from '../common/Badge';

export const TechBadge = ({ name }) => {
  return (
    <Badge variant="cyan" size="sm" className="font-mono">
      {name}
    </Badge>
  );
};

export default TechBadge;
