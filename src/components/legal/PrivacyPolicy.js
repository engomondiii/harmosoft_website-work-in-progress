// src/components/legal/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <div className="container">
        <h2 className="privacy-policy-headline">Privacy Policy</h2>
        <div className="privacy-policy-content">
          <p>
            At Harmosoft, we are committed to protecting your privacy. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          
          <h3>Information Collection</h3>
          <p>
            We may collect personal information that you provide to us directly, such as your name, email address, phone number, and other contact details. We also collect information about your interactions with our website and services, including IP addresses, browser types, and pages visited.
          </p>
          
          <h3>Use of Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users. Specifically, we may use your information to:
          </p>
          <ul>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Process transactions and send you related information.</li>
            <li>Improve and personalize our services.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>
          
          <h3>Information Sharing</h3>
          <p>
            We do not share your personal information with third parties except in the following circumstances:
          </p>
          <ul>
            <li>With your consent or at your direction.</li>
            <li>To comply with legal obligations, such as responding to a subpoena or court order.</li>
            <li>To protect the rights, property, or safety of Harmosoft, our users, or others.</li>
            <li>In connection with a merger, acquisition, or sale of assets.</li>
          </ul>
          
          <h3>Data Security</h3>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no internet-based service can be 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h3>Your Choices</h3>
          <p>
            You have the right to access, update, or delete your personal information. You can do this by contacting us at [contact email]. You may also opt out of receiving promotional communications from us by following the instructions in those communications.
          </p>
          
          <h3>Changes to This Policy</h3>
          <p>
            We may update this privacy policy from time to time. If we make significant changes, we will notify you by email or through a notice on our website. Your continued use of our services after any changes to this policy will constitute your acceptance of the changes.
          </p>
          
          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about this privacy policy, please contact us at [contact email].
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
