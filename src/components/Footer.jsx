import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface text-textSecondary py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">PhoneResell</h3>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">FAQ</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-text hover:text-primary transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-text hover:text-primary transition-colors duration-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-text hover:text-primary transition-colors duration-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <p className="text-sm mt-8">Designed with passion by Bolt AI</p>
      </div>
    </footer>
  );
};

export default Footer;
