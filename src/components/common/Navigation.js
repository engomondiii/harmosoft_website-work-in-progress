// src/components/common/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/company-history">About Us</Link></li>
        <li><Link to="/services/details">Services</Link></li>
        <li><Link to="/products/list">Products</Link></li>
        <li><Link to="/solutions/industry">Solutions</Link></li>
        <li><Link to="/blog/company-news">Blog</Link></li>
        <li><Link to="/resources/whitepapers">Resources</Link></li>
        <li><Link to="/contact/form">Contact</Link></li>
        <li><Link to="/client-portal/login-signup">Client Portal</Link></li>
        <li><Link to="/testimonials/client-reviews">Testimonials</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
