import { useState } from 'react';
import type { TripFormData } from '../types';

const initialFormData: TripFormData = {
  destination: '',
  dates: '',
  budget: ''
};

export function useTripForm(onSubmit: (data: TripFormData) => void) {
  const [formData, setFormData] = useState<TripFormData>(initialFormData);

  const updateField = (field: keyof TripFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return { formData, updateField, handleSubmit };
}