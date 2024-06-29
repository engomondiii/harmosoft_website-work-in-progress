// src/components/products/SupportDocumentation.js
import React from 'react';
import './SupportDocumentation.css';

const supportDocs = [
  {
    title: 'Product One Manual',
    link: '/docs/product-one-manual.pdf',
    type: 'Manual',
  },
  {
    title: 'Product Two Manual',
    link: '/docs/product-two-manual.pdf',
    type: 'Manual',
  },
  {
    title: 'Product Three Manual',
    link: '/docs/product-three-manual.pdf',
    type: 'Manual',
  },
  {
    title: 'Product One FAQ',
    link: '/docs/product-one-faq.pdf',
    type: 'FAQ',
  },
  {
    title: 'Product Two FAQ',
    link: '/docs/product-two-faq.pdf',
    type: 'FAQ',
  },
  {
    title: 'Product Three FAQ',
    link: '/docs/product-three-faq.pdf',
    type: 'FAQ',
  },
];

function SupportDocumentation() {
  return (
    <section className="support-documentation">
      <div className="container">
        <h2 className="docs-headline">Support Documentation</h2>
        <div className="docs-list">
          {supportDocs.map((doc, index) => (
            <div className="doc-item" key={index}>
              <h3 className="doc-title">{doc.title}</h3>
              <p className="doc-type">{doc.type}</p>
              <a href={doc.link} className="doc-link" target="_blank" rel="noopener noreferrer">
                View Document
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportDocumentation;
