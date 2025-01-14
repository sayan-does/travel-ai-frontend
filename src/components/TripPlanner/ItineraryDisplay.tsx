import React from 'react';
import { Download } from 'lucide-react';
import { downloadPDF } from '../../utils/pdf';

export function ItineraryDisplay({ itinerary }) {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{itinerary.destination}</h3>
        <button
          onClick={() => downloadPDF(itinerary)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>

      <div className="space-y-6">
        {itinerary.days.map((day, index) => (
          <div key={index} className="pb-4 border-b last:border-0">
            <h4 className="font-medium text-gray-900 mb-2">Day {index + 1}</h4>
            <p className="text-gray-600">{day.activities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}