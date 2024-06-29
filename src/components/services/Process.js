// src/components/services/Process.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon
import './Process.css';

function Process() {
  return (
    <section className="process">
      <div className="container">
        <h2 className="process-headline">Our Working Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <h3 className="step-title">1. Consultation</h3>
            <p className="step-description">
              We begin by understanding your business needs and requirements. Our team conducts thorough consultations to gather all the necessary information.
            </p>
          </div>
          {/* <FaArrowRight className="arrow-icon" /> */}
          <div className="process-step">
            <h3 className="step-title">2. Planning</h3>
            <p className="step-description">
              Based on the information gathered, we create a detailed project plan. This includes timelines, milestones, and resource allocation to ensure a smooth execution.
            </p>
          </div>
          {/* <FaArrowRight className="arrow-icon" /> */}
          <div className="process-step">
            <h3 className="step-title">3. Design</h3>
            <p className="step-description">
              Our design team works on creating user-friendly and visually appealing designs. We ensure that the design aligns with your brand identity and business objectives.
            </p>
          </div>
          {/* <FaArrowRight className="arrow-icon" /> */}
          <div className="process-step">
            <h3 className="step-title">4. Development</h3>
            <p className="step-description">
              Our skilled developers bring the designs to life by writing clean, efficient, and scalable code. We use the latest technologies and best practices in the industry.
            </p>
          </div>
          {/* <FaArrowRight className="arrow-icon" /> */}
          <div className="process-step">
            <h3 className="step-title">5. Testing</h3>
            <p className="step-description">
              Quality is our top priority. We conduct rigorous testing to ensure that the product is free of bugs and performs seamlessly across different devices and platforms.
            </p>
          </div>
          {/* <FaArrowRight className="arrow-icon" /> */}
          <div className="process-step">
            <h3 className="step-title">6. Deployment</h3>
            <p className="step-description">
              After successful testing, we deploy the product to the live environment. Our team ensures a smooth transition and provides support during the launch phase.
            </p>
          </div>
          {/* <FaArrowRight className="arrow-icon" /> */}
          <div className="process-step">
            <h3 className="step-title">7. Maintenance</h3>
            <p className="step-description">
              Our work doesn’t end with the launch. We provide ongoing maintenance and support to ensure that your product continues to perform optimally and meets your evolving needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
