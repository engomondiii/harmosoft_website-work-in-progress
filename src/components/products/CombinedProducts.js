// src/components/products/CombinedProducts.js
import React from 'react';
import DemoRequest from './DemoRequest';
import ProductList from './ProductList';
import SupportDocumentation from './SupportDocumentation';
import './CombinedProducts.css';

function CombinedProducts() {
  return (
    <section className="combined-products">
      <div className="product-section">
        <ProductList />
      </div>
      <div className="product-section">
        <SupportDocumentation />
      </div>
      <div className="product-section">
        <DemoRequest />
      </div>
    </section>
  );
}

export default CombinedProducts;
