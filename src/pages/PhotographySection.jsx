import React from 'react';
import { Camera } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function PhotographySection() {
  const photos = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop"
  ];

  return (
    <section id="photography" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h3 data-aos="zoom-out" className="text-4xl sm:text-5xl font-bold mb-12 text-center">Photography</h3>
      <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, idx) => (
          <div 
            key={idx}
            className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
          >
            <img 
              src={photo} 
              alt={`Photography ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera size={40} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}