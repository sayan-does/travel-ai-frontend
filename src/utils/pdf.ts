import jsPDF from 'jspdf';
import type { Itinerary } from '../types';

export function downloadPDF(itinerary: Itinerary) {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text(`Travel Itinerary - ${itinerary.destination}`, 20, 20);
  
  let yPosition = 40;
  
  // Add each day's activities
  itinerary.days.forEach((day, index) => {
    // Add new page if we're running out of space
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(16);
    doc.text(`Day ${index + 1}`, 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(12);
    const activities = doc.splitTextToSize(day.activities, 170);
    doc.text(activities, 20, yPosition);
    yPosition += (activities.length * 7) + 10;
  });
  
  // Save the PDF
  doc.save(`${itinerary.destination.toLowerCase()}-itinerary.pdf`);
}