// src/components/TripPlanner/index.tsx

import React, { useState } from 'react';
import { useItinerary } from '../../hooks/useItinerary';
import { api } from '../../services/api';
import { PlannerForm } from './PlannerForm';
import { ItineraryDisplay } from './ItineraryDisplay';
import { TripFormData } from '../../types';

export function TripPlanner() {
  const { itinerary, loading, error, generateItinerary } = useItinerary();
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [chatLoading, setChatLoading] = useState(false);

  const handleSubmit = async (formData: TripFormData) => {
    await generateItinerary(formData);
  };

  const handleChatMessage = async (message: string) => {
    setChatLoading(true);
    try {
      const response = await api.sendChatMessage(message);
      setChatResponse(response.markdown);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <PlannerForm onSubmit={handleSubmit} />
        
        {loading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Generating your itinerary...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {itinerary && <ItineraryDisplay itinerary={itinerary} />}

        {chatResponse && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
            <div dangerouslySetInnerHTML={{ __html: chatResponse }} />
          </div>
        )}

        {chatLoading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Processing your request...</p>
          </div>
        )}
      </div>
    </section>
  );
}