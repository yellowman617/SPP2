import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Generator from './components/Generator';
import Pricing from './components/Pricing';
import BulkPurchase from './components/BulkPurchase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Generator />
      <Pricing />
      <BulkPurchase />
      <Features />
      <Testimonials />
      <Footer />
      <ChatBox />
    </main>
  );
}

export default App; 