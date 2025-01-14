import React from 'react';
import { Facebook, Instagram, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 bg-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6" />
            <span className="text-xl font-semibold">TravelAI</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contact@travelai.com" className="hover:text-blue-300 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-blue-200">© 2025 TravelAI</p>
        </div>
      </div>
    </footer>
  );
}