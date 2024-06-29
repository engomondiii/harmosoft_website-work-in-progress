// src/components/contact/SocialMediaLinks.js
import React from 'react';
import './SocialMediaLinks.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialMediaLinks = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/Harmosoft',
    icon: <FaFacebook />,
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/Harmosoft',
    icon: <FaTwitter />,
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/harmosoft',
    icon: <FaLinkedin />,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/Harmosoft',
    icon: <FaInstagram />,
  },
];

function SocialMediaLinks() {
  return (
    <section className="social-media-links">
      <div className="container">
        <h2 className="social-media-headline">Follow Us</h2>
        <div className="social-media-list">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="social-media-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span className="social-media-platform">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaLinks;
