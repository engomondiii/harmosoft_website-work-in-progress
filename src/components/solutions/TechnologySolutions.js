// src/components/solutions/TechnologySolutions.js
import React from 'react';
import './TechnologySolutions.css';

const technologySolutions = [
  {
    technology: 'Cloud Computing',
    description: `Our cloud computing solutions enable businesses to scale their operations, reduce costs, and enhance flexibility. We provide services that cover cloud migration, cloud-native application development, and cloud management.`,
    solutions: [
      'Cloud Migration',
      'Cloud-Native Application Development',
      'Cloud Management and Optimization',
      'Disaster Recovery',
    ],
  },
  {
    technology: 'Artificial Intelligence',
    description: `Leverage the power of artificial intelligence to drive innovation and efficiency in your business. Our AI solutions include machine learning models, natural language processing, and computer vision applications.`,
    solutions: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI-Powered Chatbots',
    ],
  },
  {
    technology: 'Blockchain',
    description: `Blockchain technology offers secure, transparent, and decentralized solutions for various industries. We provide blockchain development services, smart contracts, and blockchain integration.`,
    solutions: [
      'Blockchain Development',
      'Smart Contracts',
      'Blockchain Integration',
      'Cryptocurrency Solutions',
    ],
  },
  {
    technology: 'Internet of Things (IoT)',
    description: `Our IoT solutions help businesses connect and manage devices, gather valuable data, and improve operational efficiency. We offer IoT platform development, device management, and data analytics.`,
    solutions: [
      'IoT Platform Development',
      'Device Management',
      'Data Analytics',
      'IoT Security',
    ],
  },
];

function TechnologySolutions() {
  return (
    <section className="technology-solutions">
      <div className="container">
        <h2 className="technology-headline">Technology Solutions</h2>
        {technologySolutions.map((techSolution, index) => (
          <div className="technology-item" key={index}>
            <h3 className="technology-title">{techSolution.technology}</h3>
            <p className="technology-description">{techSolution.description}</p>
            <ul className="technology-solutions-list">
              {techSolution.solutions.map((solution, solutionIndex) => (
                <li key={solutionIndex} className="technology-solution">{solution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologySolutions;
