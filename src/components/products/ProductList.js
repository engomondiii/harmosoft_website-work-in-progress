// src/components/products/ProductList.js
import React, { useEffect, useRef } from 'react';
import './ProductList.css';

const products = [
  {
    name: 'Product One',
    description: 'Product One is a powerful tool designed to streamline your business processes and improve efficiency.',
    features: [
      'Feature 1: High Performance',
      'Feature 2: User-Friendly Interface',
      'Feature 3: Scalability',
      'Feature 4: Security',
    ],
  },
  {
    name: 'Product Two',
    description: 'Product Two offers robust solutions for data management and analysis, enabling you to make informed decisions.',
    features: [
      'Feature 1: Real-Time Data Processing',
      'Feature 2: Advanced Analytics',
      'Feature 3: Customizable Dashboards',
      'Feature 4: Data Security',
    ],
  },
  {
    name: 'Product Three',
    description: 'Product Three provides comprehensive tools for customer relationship management, enhancing your engagement with clients.',
    features: [
      'Feature 1: Contact Management',
      'Feature 2: Sales Automation',
      'Feature 3: Customer Support',
      'Feature 4: Reporting and Analytics',
    ],
  },
  {
    name: 'Product Three',
    description: 'Product Three provides comprehensive tools for customer relationship management, enhancing your engagement with clients.',
    features: [
      'Feature 1: Contact Management',
      'Feature 2: Sales Automation',
      'Feature 3: Customer Support',
      'Feature 4: Reporting and Analytics',
    ],
  },
  {
    name: 'Product Three',
    description: 'Product Three provides comprehensive tools for customer relationship management, enhancing your engagement with clients.',
    features: [
      'Feature 1: Contact Management',
      'Feature 2: Sales Automation',
      'Feature 3: Customer Support',
      'Feature 4: Reporting and Analytics',
    ],
  },
];

function ProductList() {
  const productsRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (productsRef.current) {
        productsRef.current.scrollLeft += 1;
      }
    }, 50);

    const stopScroll = () => clearInterval(scrollInterval);
    const startScroll = () => {
      clearInterval(scrollInterval);
      setInterval(() => {
        if (productsRef.current) {
          productsRef.current.scrollLeft += 1;
        }
      }, 50);
    };

    productsRef.current.addEventListener('mouseover', stopScroll);
    productsRef.current.addEventListener('mouseout', startScroll);

    return () => {
      clearInterval(scrollInterval);
      if (productsRef.current) {
        productsRef.current.removeEventListener('mouseover', stopScroll);
        productsRef.current.removeEventListener('mouseout', startScroll);
      }
    };
  }, []);

  return (
    <section className="product-list">
      <div className="container">
        <h2 className="products-headline">Our Products</h2>
        <div className="products" ref={productsRef}>
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="product-feature">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
