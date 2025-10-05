import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductList />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
