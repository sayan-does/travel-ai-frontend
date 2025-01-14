import React from 'react';
import { Globe } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-semibold text-gray-900">TravelAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600">Features</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-blue-600">How it Works</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600">Contact</button>
        </div>
      </nav>
    </header>
  );
}