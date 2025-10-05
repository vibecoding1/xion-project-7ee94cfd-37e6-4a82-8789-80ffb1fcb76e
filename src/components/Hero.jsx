import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-background text-text h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold leading-tight mb-4 text-primary animate-fade-in-up">
          Your Next Smartphone Awaits
        </h1>
        <p className="text-xl text-textSecondary mb-8 animate-fade-in-up animation-delay-200">
          Discover the latest models, unbeatable deals, and seamless upgrades.
        </p>
        <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-400">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
