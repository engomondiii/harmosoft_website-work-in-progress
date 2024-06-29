// src/components/blog/CombinedBlog.js
import React from 'react';
import BlogPost from './BlogPost';
import CompanyNews from './CompanyNews';
import EducationalContent from './EducationalContent';
import IndustryNews from './IndustryNews';
import './CombinedBlog.css';

function CombinedBlog() {
  return (
    <div className="combined-blog">
      <BlogPost />
      <CompanyNews />
      <EducationalContent />
      <IndustryNews />
    </div>
  );
}

export default CombinedBlog;
