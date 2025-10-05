import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-surface rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-border">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text mb-2">{product.name}</h3>
        <p className="text-textSecondary text-sm mb-2">{product.brand}</p>
        <p className="text-primary text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <button className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-secondary-dark transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
