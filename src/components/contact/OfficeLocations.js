// src/components/contact/OfficeLocations.js
import React from 'react';
import './OfficeLocations.css';

const offices = [
  {
    id: 1,
    city: 'San Francisco',
    address: '123 Market Street, San Francisco, CA 94103',
    mapLink: 'https://www.google.com/maps/place/123+Market+St,+San+Francisco,+CA+94103',
  },
  {
    id: 2,
    city: 'New York',
    address: '456 Park Avenue, New York, NY 10022',
    mapLink: 'https://www.google.com/maps/place/456+Park+Ave,+New+York,+NY+10022',
  },
  {
    id: 3,
    city: 'London',
    address: '789 King Street, London, UK SW1A 1AA',
    mapLink: 'https://www.google.com/maps/place/789+King+St,+London+SW1A+1AA,+UK',
  },
];

function OfficeLocations() {
  return (
    <section className="office-locations">
      <div className="container">
        <h2 className="locations-headline">Our Offices</h2>
        <div className="locations-list">
          {offices.map((office) => (
            <div className="location-item" key={office.id}>
              <h3 className="location-city">{office.city}</h3>
              <p className="location-address">{office.address}</p>
              <a href={office.mapLink} className="location-map-link" target="_blank" rel="noopener noreferrer">
                View on Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficeLocations;
