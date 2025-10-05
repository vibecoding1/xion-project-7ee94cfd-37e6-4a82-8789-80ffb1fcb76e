import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <section id="products" className="py-16 bg-background text-text">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-primary">Our Latest Phones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
