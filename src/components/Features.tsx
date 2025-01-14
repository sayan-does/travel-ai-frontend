import React from 'react';
import { Map, Compass, PackageSearch } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Personalized Itineraries',
    description: 'Get custom travel plans tailored to your preferences, timeline, and budget.'
  },
  {
    icon: Compass,
    title: 'Hidden Gems and Activities',
    description: 'Discover unique local experiences and off-the-beaten-path destinations.'
  },
  {
    icon: PackageSearch,
    title: 'AI-Powered Packing List',
    description: 'Never forget essential items with smart packing recommendations based on your destination.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose TravelAI?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}