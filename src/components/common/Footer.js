import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`footer ${isHomePage ? 'home-footer' : 'other-footer'}`}>
      <div className="container">
        <div className="footer-section">
          <h4>Our Website</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/company-history">About Us</a></li>
            <li><a href="/services/details">Services</a></li>
            <li><a href="/products/list">Products</a></li>
            <li><a href="/solutions/industry">Solutions</a></li>
            <li><a href="/blog/company-news">Blog</a></li>
            <li><a href="/resources/whitepapers">Resources</a></li>
            <li><a href="/contact/form">Contact</a></li>
            <li><a href="/client-portal/login-signup">Client Portal</a></li>
            <li><a href="/testimonials/client-reviews">Testimonials</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Harmosoft Academy</h4>
          <ul>
            <li><a href="/academy">Harmosoft Academy</a></li>
            <li><a href="/academy/course-listings">Course Listings</a></li>
            <li><a href="/academy/course-details">Course Details</a></li>
            <li><a href="/academy/tutorials">Tutorials</a></li>
            <li><a href="/academy/webinars">Webinars</a></li>
            <li><a href="/academy/certifications">Certifications</a></li>
            <li><a href="/academy/instructors">Instructors</a></li>
            <li><a href="/academy/student-dashboard">Student Dashboard</a></li>
            <li><a href="/academy/enrollments">Enrollments</a></li>
            <li><a href="/academy/career-development">Career Development</a></li>
            <li><a href="/academy/contact">Contact Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Harmosoft Lab</h4>
          <ul>
            <li><a href="/lab">Harmosoft Lab</a></li>
            <li><a href="/lab#high-performance-computing">High-Performance Computing Access</a></li>
            <li><a href="/lab#specialized-software">Specialized Software</a></li>
            <li><a href="/lab#tech-research">Tech Research and Development</a></li>
            <li><a href="/lab#workshops">Workshops and Training</a></li>
            <li><a href="/lab#innovation-hub">Innovation Hub</a></li>
            <li><a href="/lab#networking">Networking and Collaboration Spaces</a></li>
            <li><a href="/lab#prototyping">Prototyping and Testing</a></li>
            <li><a href="/lab#library">Library and Resource Center</a></li>
            <li><a href="/lab#community">Community Engagement</a></li>
            <li><a href="/lab#support">Support and Mentoring</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/details">Service Details</a></li>
            <li><a href="/services/process">Process</a></li>
            <li><a href="/services/case-studies">Case Studies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="/products/list">Product List</a></li>
            <li><a href="/products/demo-request">Demo Request</a></li>
            <li><a href="/products/support-documentation">Support Documentation</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/solutions/industry">Industry Solutions</a></li>
            <li><a href="/solutions/technology">Technology Solutions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter Subscription</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
          <ul>
            <li>Email: <a href="mailto:info@harmosoft.co.ke">info@harmosoft.co.ke</a></li>
            <li>Phone: <a href="tel:+254790883802">+254790883802</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Harmosoft. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
