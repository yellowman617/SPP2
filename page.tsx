import React from 'react';
import Hero from '@/components/Hero';
import { PasswordGenerator } from '@/components/PasswordGenerator';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div id="generator" className="py-16">
        <PasswordGenerator />
      </div>
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
} 