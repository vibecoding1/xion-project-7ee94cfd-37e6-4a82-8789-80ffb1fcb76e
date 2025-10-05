import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20 text-center shadow-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Ready to Upgrade Your Phone?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Join thousands of satisfied customers and experience the best in mobile technology.
        </p>
        <button className="bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore All Phones
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
