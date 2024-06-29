import React from 'react';
import './VisionMission.css';

function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="container">
        <h2 className="section-headline">Our Vision & Mission</h2>
        <div className="vision">
          <h3 className="vision-headline">Our Vision</h3>
          <p className="vision-description">
            At Harmosoft, our vision is to be a global leader in technology solutions, driving innovation and excellence in every industry we serve. We strive to empower businesses with state-of-the-art technology that transforms their operations and enables them to achieve their full potential.
          </p>
        </div>
        <div className="mission">
          <h3 className="mission-headline">Our Mission</h3>
          <p className="mission-description">
            Our mission is to deliver innovative, reliable, and high-quality technology solutions that meet the evolving needs of our clients. We are committed to building long-term partnerships with our clients by providing exceptional service and support. Our goal is to help businesses thrive in the digital age through cutting-edge technology and unparalleled expertise.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
