import React from 'react';

const Features = () => {
  const featureItems = [
    {
      icon: '🚀',
      title: 'Latest Models',
      description: 'Stay ahead with the newest smartphones on the market.',
    },
    {
      icon: '💰',
      title: 'Best Deals',
      description: 'Unbeatable prices and exclusive offers on all devices.',
    },
    {
      icon: '⚡',
      title: 'Fast Shipping',
      description: 'Get your new phone delivered to your doorstep in no time.',
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Our dedicated team is always here to help you.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-surface text-text">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-primary">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 border border-border"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-text mb-3">{feature.title}</h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
