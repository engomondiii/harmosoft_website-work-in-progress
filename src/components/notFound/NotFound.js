// src/components/notFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found-headline">404</h1>
        <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="home-link">Go to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
