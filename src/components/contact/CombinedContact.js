// src/components/contact/CombinedContact.js
import React from 'react';
import ContactForm from './ContactForm';
import OfficeLocations from './OfficeLocations';
import SocialMediaLinks from './SocialMediaLinks';
import './CombinedContact.css';

function CombinedContact() {
  return (
    <div className="combined-contact">
      <ContactForm />
      <OfficeLocations />
      <SocialMediaLinks />
    </div>
  );
}

export default CombinedContact;
