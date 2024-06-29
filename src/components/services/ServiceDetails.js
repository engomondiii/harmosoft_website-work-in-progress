import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import customSoftwareImg from '../../assets/images/Custom Software Development.jpg';
import webDevelopmentImg from '../../assets/images/Web Development.jpg';
import mobileAppImg from '../../assets/images/Mobile App Development.jpg';
import cloudServicesImg from '../../assets/images/Cloud Services.jpg';
import uiuxDesignImg from '../../assets/images/UIUX Designer.jpg';
import qualityAssuranceImg from '../../assets/images/Quality Assurance and Testing.jpg';
import itConsultingImg from '../../assets/images/IT Consulting.jpg';
import dataAnalyticsImg from '../../assets/images/Data Analytics and Business Intelligence.jpg';
import cybersecurityImg from '../../assets/images/Cybersecurity Solutions.jpg';
import academyImg from '../../assets/images/Harmosoft Academy.jpg';
import proprietaryImg from '../../assets/images/Proprietary Software Solutions.jpg';
import networkingImg from '../../assets/images/Networking Installations.jpg';
import softwareInstallationImg from '../../assets/images/Software Installation.jpg';
import computerRepairImg from '../../assets/images/Computer Repair and Maintenance.jpg';
import firewallImg from '../../assets/images/Firewall Installation.png';
import computerSupplyImg from '../../assets/images/Computer Supply.jpg';
import seoOptimizationImg from '../../assets/images/SEO.png';
import labImg from '../../assets/images/lab.jpg';

const services = [
  { title: 'Custom Software Development', description: 'Our custom software development services are designed to meet the unique needs of your business. We specialize in creating scalable, robust, and innovative software solutions that drive business success. Our team of experienced developers works closely with you to understand your requirements and deliver a product that exceeds your expectations.', image: customSoftwareImg },
  { title: 'Web Development', description: 'Our web development services range from creating simple informational websites to complex platforms. We design and develop websites that are visually appealing, user-friendly, and optimized for performance, ensuring a seamless experience for your users.', image: webDevelopmentImg },
  { title: 'Mobile App Development', description: 'We create mobile applications for iOS and Android devices, tailored to meet the specific needs of your business. Our apps are designed to be intuitive, engaging, and high-performing, providing a great user experience.', image: mobileAppImg },
  { title: 'Cloud Services', description: 'Our cloud services offer scalable, secure, and cost-effective solutions for storage, hosting, and computing needs. We help businesses leverage the power of the cloud to improve efficiency and reduce costs.', image: cloudServicesImg },
  { title: 'UI/UX Design', description: 'We offer professional UI/UX design services to create intuitive and visually appealing interfaces. Our designs are focused on providing a seamless and enjoyable user experience.', image: uiuxDesignImg },
  { title: 'Quality Assurance and Testing', description: 'Our quality assurance and testing services ensure that your software is reliable and performs as expected. We conduct rigorous testing to identify and fix issues before your product goes live.', image: qualityAssuranceImg },
  { title: 'IT Consulting', description: 'Our IT consulting services provide strategic guidance and advisory to help businesses leverage technology for growth and innovation. We assess your current infrastructure and develop a strategy to improve efficiency and scalability.', image: itConsultingImg },
  { title: 'Data Analytics and Business Intelligence', description: 'We help businesses derive insights from their data through analytics and reporting solutions. Our services enable you to make data-driven decisions and gain a competitive edge.', image: dataAnalyticsImg },
  { title: 'Cybersecurity Solutions', description: 'We offer comprehensive cybersecurity solutions to protect your digital assets. Our services include security assessments, risk management, and implementation of advanced security measures.', image: cybersecurityImg },
  { title: 'Harmosoft Academy', description: 'Harmosoft Academy empowers aspiring software developers with the knowledge and skills they need to succeed in the tech industry. We offer comprehensive online courses, live workshops, and certification programs.', image: academyImg, link: '/academy' },
  { title: 'Proprietary Software Solutions', description: 'Our innovative software products, including StreamHub and Pawlser, are designed to enhance your business operations and monetization strategies. Explore our proprietary solutions to drive business success.', image: proprietaryImg },
  { title: 'Networking Installations', description: 'Our networking installation services include setting up and configuring network solutions for businesses, ensuring reliable and efficient connectivity.', image: networkingImg },
  { title: 'Software Installation', description: 'We offer software installation services to help businesses set up and configure software solutions effectively and efficiently.', image: softwareInstallationImg },
  { title: 'Computer Repair and Maintenance', description: 'Our computer repair and maintenance services ensure that your devices are running smoothly and efficiently, minimizing downtime and maximizing productivity.', image: computerRepairImg },
  { title: 'Firewall Installation', description: 'We install and configure firewalls to protect your business networks from cyber threats, ensuring the security and integrity of your data.', image: firewallImg },
  { title: 'Computer Supply', description: 'We supply computers and related hardware to businesses, offering high-quality equipment to meet your operational needs.', image: computerSupplyImg },
  { title: 'SEO Optimization', description: 'Our SEO optimization services improve your website’s search engine rankings, driving more traffic and increasing your online visibility.', image: seoOptimizationImg },
  { title: 'Harmosoft Lab', description: 'Harmosoft Lab provides access to high-performance computing, specialized software, and a range of resources to support tech research and development. Join our community to innovate and collaborate.', image: labImg, link: '/lab' }
];

function ServiceDetails() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="service-details">
      <div className="container">
        <h2 className="services-headline">Our Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-item" key={index} onClick={() => handleServiceClick(service)}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        {selectedService && (
          <div className="service-detail">
            <h3 className="service-detail-title">{selectedService.title}</h3>
            <p className="service-detail-description">{selectedService.description}</p>
            <button className="back-button" onClick={() => setSelectedService(null)}>Back to Services</button>
          </div>
        )}
        <div className="cta">
          <p>Interested in our services? <Link to="/client-portal/login-signup">Login to the Client Portal</Link> and book a service today!</p>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
