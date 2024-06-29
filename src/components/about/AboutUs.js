import React from 'react';
import CompanyHistory from './CompanyHistory';
import VisionMission from './VisionMission';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="floating-plate">
        <CompanyHistory />
      </div>
      <div className="floating-plate">
        <VisionMission />
      </div>
    </div>
  );
}

export default AboutUs;
