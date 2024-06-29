// src/components/services/CombinedServices.js
import React from 'react';
import CaseStudies from './CaseStudies';
import Process from './Process';
import ServiceDetails from './ServiceDetails';
import './CombinedServices.css';

function CombinedServices() {
  return (
    <section className="combined-services">
      <div className="container">
        {/* <h2 className="combined-services-headline">Our Services</h2> */}
        <ServiceDetails />
        <Process />
        {/* <CaseStudies /> */}
      </div>
    </section>
  );
}

export default CombinedServices;
