import React from 'react';

const Header = () => {
  return (
    <header className="bg-surface text-text p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">PhoneResell</a>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-primary transition-colors duration-300">Home</a></li>
          <li><a href="#products" className="hover:text-primary transition-colors duration-300">Products</a></li>
          <li><a href="#features" className="hover:text-primary transition-colors duration-300">Features</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
