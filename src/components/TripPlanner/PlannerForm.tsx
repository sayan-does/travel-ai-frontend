import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { useTripForm } from '../../hooks/useTripForm';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { TripFormData } from '../../types';

interface PlannerFormProps {
  onSubmit: (data: TripFormData) => Promise<void>;
}

const budgetOptions = [
  { value: 'budget', label: 'Budget (Under $1000)' },
  { value: 'moderate', label: 'Moderate ($1000-$3000)' },
  { value: 'luxury', label: 'Luxury ($3000+)' }
];

export function PlannerForm({ onSubmit }: PlannerFormProps) {
  const { formData, updateField, handleSubmit } = useTripForm(onSubmit);

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        icon={MapPin}
        label="Destination"
        placeholder="e.g., Paris, Tokyo"
        value={formData.destination}
        onChange={(e) => updateField('destination', e.target.value)}
        required
      />

      <Input
        icon={Calendar}
        label="Travel Date"
        type="date"
        value={formData.dates}
        onChange={(e) => updateField('dates', e.target.value)}
        min={today}
        required
      />

      <Select
        icon={DollarSign}
        label="Budget"
        options={budgetOptions}
        value={formData.budget}
        onChange={(e) => updateField('budget', e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium
                   hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!formData.destination || !formData.dates || !formData.budget}
      >
        Generate My Itinerary
      </button>
    </form>
  );
}