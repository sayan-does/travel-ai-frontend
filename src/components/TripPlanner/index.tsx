import React, { useState } from 'react';
import { PlannerForm } from './PlannerForm';
import { ItineraryDisplay } from './ItineraryDisplay';
import { useItinerary } from '../../hooks/useItinerary';
import { api } from '../../services/api';

export function TripPlanner() {
  const { itinerary, loading, error, generateItinerary } = useItinerary();
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [chatLoading, setChatLoading] = useState(false);

  const handleChatMessage = async (message: string) => {
    try {
      setChatLoading(true);
      const response = await api.sendChatMessage(message);
      setChatResponse(response.markdown);
    } catch (error) {
      console.error('Failed to get chat response:', error);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <section id="planner" className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      {/* ... existing code ... */}
      
      <div className="relative max-w-4xl mx-auto">
        {/* ... existing code ... */}
        
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

          {/* Add chat response display */}
          {chatResponse && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: chatResponse }} />
            </div>
          )}

          {chatLoading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Processing your request...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}