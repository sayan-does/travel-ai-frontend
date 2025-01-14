import React from 'react';
import { PlannerForm } from './PlannerForm';
import { ItineraryDisplay } from './ItineraryDisplay';
import { useItinerary } from '../../hooks/useItinerary';

export function TripPlanner() {
  const { itinerary, loading, error, generateItinerary } = useItinerary();

  return (
    <section id="planner" className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50" />
        <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-50 rounded-full opacity-30" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-40" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Customize Your Trip
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <PlannerForm onSubmit={generateItinerary} />

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Generating your perfect itinerary...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mt-6">
              {error}
            </div>
          )}

          {itinerary && <ItineraryDisplay itinerary={itinerary} />}
        </div>
      </div>
    </section>
  );
}