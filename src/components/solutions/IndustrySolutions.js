// src/components/solutions/IndustrySolutions.js
import React from 'react';
import './IndustrySolutions.css';

const industrySolutions = [
  {
    industry: 'Healthcare',
    description: `Our healthcare solutions are designed to improve patient care, streamline operations, and ensure regulatory compliance. From electronic health records (EHR) to telemedicine platforms, we provide technology that enhances the efficiency and effectiveness of healthcare providers.`,
    solutions: [
      'Electronic Health Records (EHR)',
      'Telemedicine Platforms',
      'Patient Management Systems',
      'Medical Billing Software',
    ],
  },
  {
    industry: 'Finance',
    description: `We offer robust financial technology solutions that help institutions manage risk, ensure compliance, and improve customer experience. Our services include blockchain technology, fraud detection systems, and custom financial software development.`,
    solutions: [
      'Blockchain Technology',
      'Fraud Detection Systems',
      'Custom Financial Software',
      'Automated Trading Platforms',
    ],
  },
  {
    industry: 'Retail',
    description: `Our retail solutions help businesses enhance customer engagement, optimize inventory management, and streamline point-of-sale processes. From e-commerce platforms to loyalty programs, we provide the tools needed to succeed in a competitive market.`,
    solutions: [
      'E-commerce Platforms',
      'Inventory Management Systems',
      'Point-of-Sale Solutions',
      'Customer Loyalty Programs',
    ],
  },
  {
    industry: 'Manufacturing',
    description: `Our manufacturing solutions are designed to improve production efficiency, reduce costs, and ensure quality control. We offer services such as supply chain management systems, automation solutions, and predictive maintenance.`,
    solutions: [
      'Supply Chain Management',
      'Automation Solutions',
      'Predictive Maintenance',
      'Quality Control Systems',
    ],
  },
];

function IndustrySolutions() {
  return (
    <section className="industry-solutions">
      <div className="container">
        <h2 className="industry-headline">Industry Solutions</h2>
        {industrySolutions.map((industrySolution, index) => (
          <div className="industry-item" key={index}>
            <h3 className="industry-title">{industrySolution.industry}</h3>
            <p className="industry-description">{industrySolution.description}</p>
            <ul className="industry-solutions-list">
              {industrySolution.solutions.map((solution, solutionIndex) => (
                <li key={solutionIndex} className="industry-solution">{solution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustrySolutions;
