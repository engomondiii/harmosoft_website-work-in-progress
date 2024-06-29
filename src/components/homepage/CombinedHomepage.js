// src/components/homepage/CombinedHomepage.js
import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from '../about/AboutUs';
import CombinedServices from '../services/CombinedServices';
import CombinedProducts from '../products/CombinedProducts';
import CombinedResources from '../resources/CombinedResources';
import CombinedSolutions from '../solutions/CombinedSolutions';
import CombinedContact from '../contact/CombinedContact';

function CombinedHomepage() {
  return (
    <div>
      <HeroSection />
      {/* <AboutUs /> */}
      <CombinedServices />
      <CombinedProducts />
      <CombinedSolutions />

      <CombinedResources />
      <CombinedContact />
    </div>
  );
}

export default CombinedHomepage;
