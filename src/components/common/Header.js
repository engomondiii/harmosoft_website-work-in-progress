import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for navbar
import './Header.css';
import logo from '../../assets/images/logo2.jpeg';

function Header() {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${location.pathname === '/' ? 'home-header' : 'other-header'} ${isScrolling ? 'scrolling' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Harmosoft Logo" />
          <span className="logo-text">Harmosoft</span>
        </Link>
        <nav className="navigation">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLogoClick}>Home</Link></li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <Link to="/about" className={`dropdown-link ${location.pathname.startsWith('/about') ? 'active' : ''}`} onClick={handleLogoClick}>
                About Us
              </Link>
              {dropdown === 'about' && (
                <ul className="dropdown-menu">
                  <li><Link to="/about/company-history" className={location.pathname === '/about/company-history' ? 'active' : ''}>Company History</Link></li>
                  <li><Link to="/about/vision-mission" className={location.pathname === '/about/vision-mission' ? 'active' : ''}>Vision & Mission</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <Link to="/services" className={`dropdown-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} onClick={handleLogoClick}>
                Services
              </Link>
              {dropdown === 'services' && (
                <ul className="dropdown-menu">
                  <li><Link to="/services/details" className={location.pathname === '/services/details' ? 'active' : ''}>Service Details</Link></li>
                  <li><Link to="/services/process" className={location.pathname === '/services/process' ? 'active' : ''}>Process</Link></li>
                  <li><Link to="/services/case-studies" className={location.pathname === '/services/case-studies' ? 'active' : ''}>Case Studies</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
              <Link to="/products" className={`dropdown-link ${location.pathname.startsWith('/products') ? 'active' : ''}`} onClick={handleLogoClick}>
                Products
              </Link>
              {dropdown === 'products' && (
                <ul className="dropdown-menu">
                  <li><Link to="/products/list" className={location.pathname === '/products/list' ? 'active' : ''}>Product List</Link></li>
                  <li><Link to="/products/demo-request" className={location.pathname === '/products/demo-request' ? 'active' : ''}>Demo Request</Link></li>
                  <li><Link to="/products/support-documentation" className={location.pathname === '/products/support-documentation' ? 'active' : ''}>Support Documentation</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
              <Link to="/solutions" className={`dropdown-link ${location.pathname.startsWith('/solutions') ? 'active' : ''}`} onClick={handleLogoClick}>
                Solutions
              </Link>
              {dropdown === 'solutions' && (
                <ul className="dropdown-menu">
                  <li><Link to="/solutions/industry" className={location.pathname === '/solutions/industry' ? 'active' : ''}>Industry Solutions</Link></li>
                  <li><Link to="/solutions/technology" className={location.pathname === '/solutions/technology' ? 'active' : ''}>Technology Solutions</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <Link to="/blog" className={`dropdown-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`} onClick={handleLogoClick}>
                Blog
              </Link>
              {dropdown === 'blog' && (
                <ul className="dropdown-menu">
                  <li><Link to="/blog/company-news" className={location.pathname === '/blog/company-news' ? 'active' : ''}>Company News</Link></li>
                  <li><Link to="/blog/industry-news" className={location.pathname === '/blog/industry-news' ? 'active' : ''}>Industry News</Link></li>
                  <li><Link to="/blog/educational-content" className={location.pathname === '/blog/educational-content' ? 'active' : ''}>Educational Content</Link></li>
                  <li><Link to="/blog/post" className={location.pathname === '/blog/post' ? 'active' : ''}>Blog Post</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
              <Link to="/resources" className={`dropdown-link ${location.pathname.startsWith('/resources') ? 'active' : ''}`} onClick={handleLogoClick}>
                Resources
              </Link>
              {dropdown === 'resources' && (
                <ul className="dropdown-menu">
                  <li><Link to="/resources/case-studies" className={location.pathname === '/resources/case-studies' ? 'active' : ''}>Case Studies</Link></li>
                  <li><Link to="/resources/webinars-events" className={location.pathname === '/resources/webinars-events' ? 'active' : ''}>Webinars & Events</Link></li>
                  <li><Link to="/resources/whitepapers" className={location.pathname === '/resources/whitepapers' ? 'active' : ''}>Whitepapers</Link></li>
                  <li><Link to="/academy" className={location.pathname === '/academy' ? 'active' : ''}>Harmosoft Academy</Link></li>
                  <li><Link to="/lab" className={location.pathname === '/lab' ? 'active' : ''}>Harmosoft Lab</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>
              <Link to="/contact" className={`dropdown-link ${location.pathname.startsWith('/contact') ? 'active' : ''}`} onClick={handleLogoClick}>
                Contact
              </Link>
              {dropdown === 'contact' && (
                <ul className="dropdown-menu">
                  <li><Link to="/contact/form" className={location.pathname === '/contact/form' ? 'active' : ''}>Contact Form</Link></li>
                  <li><Link to="/contact/office-locations" className={location.pathname === '/contact/office-locations' ? 'active' : ''}>Office Locations</Link></li>
                  <li><Link to="/contact/social-media-links" className={location.pathname === '/contact/social-media-links' ? 'active' : ''}>Social Media Links</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/client-portal/login-signup" className={location.pathname === '/client-portal/login-signup' ? 'active' : ''}>Client Portal</Link></li>
            <li><Link to="/about/careers" className={location.pathname === '/about/careers' ? 'active' : ''}>Careers</Link></li>
            <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;
