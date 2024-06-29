// src/components/solutions/CombinedSolutions.js
import React from 'react';
import IndustrySolutions from './IndustrySolutions';
import TechnologySolutions from './TechnologySolutions';
import './CombinedSolutions.css';

function CombinedSolutions() {
  return (
    <div className="combined-solutions">
      <IndustrySolutions />
      <TechnologySolutions />
    </div>
  );
}

export default CombinedSolutions;
