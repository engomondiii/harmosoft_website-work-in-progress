// src/components/resources/CombinedResources.js
import React from 'react';
import CaseStudies from './CaseStudies';
import WebinarsEvents from './WebinarsEvents';
import Whitepapers from './Whitepapers';
import './CombinedResources.css';

function CombinedResources() {
  return (
    <div className="combined-resources">
      <CaseStudies />
      <WebinarsEvents />
      <Whitepapers />
    </div>
  );
}

export default CombinedResources;
