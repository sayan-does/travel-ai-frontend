import { useState } from 'react';
import { api } from '../services/api';
import type { Itinerary, TripFormData } from '../types';

export function useItinerary() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateItinerary = async (formData: TripFormData) => {
    try {
      setLoading(true);
      setError(null);

      // Ensure we have valid dates
      if (!formData.dates) {
        throw new Error('Please select travel dates');
      }

      // Parse the date string into start and end dates
      const date = new Date(formData.dates);
      const startDate = date.toISOString().split('T')[0];
      // For now, we'll set end date same as start date if only one date is selected
      const endDate = startDate;

      const response = await api.generateItinerary({
        destination: formData.destination,
        start_date: startDate,
        end_date: endDate,
        budget_level: formData.budget,
      });
      console.log('Backend response:', response);

      // Transform backend response to frontend Itinerary format
      const transformedItinerary: Itinerary = {
        destination: response.destination,
        days: response.daily_plans.map((day: any) => ({
          activities: day.activities
            .map((activity: any) =>
              `${activity.time}: ${activity.title} - $${activity.cost_estimate}\n${activity.description}`
            )
            .join('\n\n')
        }))
      };

      setItinerary(transformedItinerary);
      console.log('Transformed itinerary:', transformedItinerary);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate itinerary');
    } finally {
      setLoading(false);
    }
  };
  

  return { itinerary, loading, error, generateItinerary };
}