// src/components/homepage/ServicesOverview.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.css';

function ServicesOverview() {
  return (
    <section className="services-overview">
      <div className="container">
        <h2 className="services-headline">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3 className="service-title">Custom Software Development</h3>
            <p className="service-description">
              Tailored software solutions to meet your business needs. Our team of experts will work with you to create robust and scalable applications.
            </p>
            <Link to="/services/details" className="service-link">Learn More</Link>
          </div>
          <div className="service-item">
            <h3 className="service-title">Cloud Solutions</h3>
            <p className="service-description">
              Transform your business with our comprehensive cloud services. We offer cloud migration, management, and optimization solutions.
            </p>
            <Link to="/services/details" className="service-link">Learn More</Link>
          </div>
          <div className="service-item">
            <h3 className="service-title">IT Consulting</h3>
            <p className="service-description">
              Our IT consulting services help you assess your current infrastructure and develop a strategy to improve efficiency and scalability.
            </p>
            <Link to="/services/details" className="service-link">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
