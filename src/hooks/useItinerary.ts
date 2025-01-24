// src/hooks/useItinerary.ts

import { useState } from 'react';
import { api } from '../services/api';
import { Itinerary, TripFormData } from '../types';

export function useItinerary() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateItinerary = async (formData: TripFormData) => {
    setLoading(true);
    setError(null);

    try {
      if (!formData.dates) {
        throw new Error('Travel dates are required');
      }

      const date = new Date(formData.dates);
      const start_date = date.toISOString().split('T')[0];
      // For simplicity, using the same date as end_date. Modify if needed.
      const end_date = start_date;

      const response = await api.generateItinerary({
        destination: formData.destination,
        start_date,
        end_date,
        budget_level: formData.budget,
      });

      // Transform the response into the expected Itinerary format
      const transformedItinerary: Itinerary = {
        destination: formData.destination,
        days: response.days || [],
      };

      setItinerary(transformedItinerary);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate itinerary');
    } finally {
      setLoading(false);
    }
  };

  return { itinerary, loading, error, generateItinerary };
}