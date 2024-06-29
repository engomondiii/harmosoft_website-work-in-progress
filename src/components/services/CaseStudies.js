// src/components/services/CaseStudies.js
import React, { useState } from 'react';
import './CaseStudies.css';

const caseStudies = [
  {
    title: 'Project Alpha',
    client: 'ABC Corp',
    description: 'Project Alpha involved the development of a custom enterprise software solution for ABC Corp. The project aimed to streamline their business processes and improve overall efficiency.',
    details: `ABC Corp approached us with the need for a comprehensive software solution to manage their operations. Our team conducted a thorough analysis of their requirements and developed a custom enterprise software solution. The project included:
    - Custom software development
    - Integration with existing systems
    - User training and support
    The solution significantly improved ABC Corp's operational efficiency and provided real-time insights into their business processes.`
  },
  {
    title: 'Cloud Migration for XYZ Ltd',
    client: 'XYZ Ltd',
    description: 'We successfully migrated XYZ Ltd\'s legacy systems to the cloud, ensuring minimal downtime and enhanced performance.',
    details: `XYZ Ltd faced challenges with their on-premise infrastructure, including scalability and maintenance issues. Our cloud solutions team executed a seamless cloud migration, which involved:
    - Detailed assessment of existing systems
    - Planning and execution of cloud migration
    - Post-migration optimization and support
    The migration resulted in improved system performance, scalability, and reduced operational costs for XYZ Ltd.`
  },
  {
    title: 'UI/UX Redesign for Tech Innovators',
    client: 'Tech Innovators',
    description: 'We redesigned the user interface and user experience for Tech Innovators\' flagship product, resulting in increased user satisfaction and engagement.',
    details: `Tech Innovators needed to revamp the UI/UX of their flagship product to enhance user satisfaction. Our design team worked closely with their stakeholders to understand user needs and delivered:
    - Comprehensive UI/UX redesign
    - User testing and feedback incorporation
    - Implementation and post-launch support
    The redesign led to a significant increase in user engagement and positive feedback from Tech Innovators' customers.`
  }
];

function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const handleCaseStudyClick = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="case-studies-headline">Case Studies</h2>
        <div className="case-studies-list">
          {caseStudies.map((caseStudy, index) => (
            <div className="case-study-item" key={index} onClick={() => handleCaseStudyClick(caseStudy)}>
              <h3 className="case-study-title">{caseStudy.title}</h3>
              <p className="case-study-client">{caseStudy.client}</p>
              <p className="case-study-description">{caseStudy.description}</p>
            </div>
          ))}
        </div>
        {selectedCaseStudy && (
          <div className="case-study-detail">
            <h3 className="case-study-detail-title">{selectedCaseStudy.title}</h3>
            <p className="case-study-detail-client"><strong>Client:</strong> {selectedCaseStudy.client}</p>
            <p className="case-study-detail-description">{selectedCaseStudy.details}</p>
            <button className="back-button" onClick={() => setSelectedCaseStudy(null)}>Back to Case Studies</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CaseStudies;
