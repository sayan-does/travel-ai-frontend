import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon: LucideIcon;
  label: string;
  options: Array<{ value: string; label: string }>;
}

export function Select({
  icon: Icon,
  label,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-gray-700 font-medium">
        <Icon className="w-5 h-5" />
        {label}
      </label>
      <select
        {...props}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-colors"
      >
        <option value="">Select {label}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}