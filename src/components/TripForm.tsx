import React, { useState } from 'react';
import { Calendar, DollarSign, Map, Tag } from 'lucide-react';

const interests = [
  'Adventure', 'Relaxation', 'Culture', 'Food & Dining',
  'Nature', 'Shopping', 'History', 'Nightlife'
];

export function TripForm() {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    startDate: '',
    endDate: '',
    selectedInterests: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - to be implemented
    console.log('Form submitted:', formData);
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter(i => i !== interest)
        : [...prev.selectedInterests, interest]
    }));
  };

  return (
    <section id="plan-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tell Us About Your Trip!</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Map className="w-5 h-5" />
              Destination
            </label>
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.destination}
              onChange={e => setFormData(prev => ({ ...prev, destination: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <DollarSign className="w-5 h-5" />
              Budget Range
            </label>
            <select
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.budget}
              onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            >
              <option value="">Select your budget</option>
              <option value="budget">Budget ($0-$1500)</option>
              <option value="moderate">Moderate ($1500-$3000)</option>
              <option value="luxury">Luxury ($3000+)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Calendar className="w-5 h-5" />
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.startDate}
                onChange={e => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Calendar className="w-5 h-5" />
                End Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.endDate}
                onChange={e => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Tag className="w-5 h-5" />
              Interests
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {interests.map(interest => (
                <button
                  key={interest}
                  type="button"
                  className={`px-4 py-2 rounded-full border transition-all ${
                    formData.selectedInterests.includes(interest)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:border-blue-600'
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all"
          >
            Generate My Itinerary
          </button>
        </form>
      </div>
    </section>
  );
}