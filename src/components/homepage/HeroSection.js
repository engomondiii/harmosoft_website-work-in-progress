// src/components/homepage/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroImage from '../../assets/images/Dale.webp';

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">Welcome to Harmosoft</h1>
          <p className="hero-description">Innovative Tech Solutions for Your Business</p>
          <Link to="/services" className="hero-cta-button">Explore Our Services</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
