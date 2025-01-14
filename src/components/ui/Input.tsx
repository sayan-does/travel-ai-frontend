import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  label: string;
}

export function Input({
  icon: Icon,
  label,
  type = 'text',
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-gray-700 font-medium">
        <Icon className="w-5 h-5" />
        {label}
      </label>
      <input
        type={type}
        {...props}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-colors"
      />
    </div>
  );
}