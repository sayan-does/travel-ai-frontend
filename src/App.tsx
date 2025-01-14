import React from 'react';
import { Hero } from './components/Hero';
import { TripPlanner } from './components/TripPlanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TripPlanner />
      <Footer />
    </div>
  );
}