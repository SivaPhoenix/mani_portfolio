import React from 'react';
import { Film, Camera } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mani from '../assets/mani.jpg';

export default function HeroSection() {

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Full-width image container */}
      <div className="absolute inset-0">
        <img 
          src={mani} 
          alt="Director background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container - positioned on the right */}
      <div className="relative h-screen flex items-center justify-end">
        <div className="w-full md:w-1/2 lg:w-2/5 text-right pr-8 md:pr-16 lg:pr-24">
          <h2 
            data-aos="fade-left" 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent"
          >
            Manivannan
          </h2>
          <p 
            data-aos="fade-left" 
            data-aos-delay="100"
            className="text-2xl sm:text-2xl text-slate-950 mb-8 ml-auto"
          >
            Writter - Director - Photography
          </p>
          <div className="flex gap-6 justify-end" data-aos="fade-up" data-aos-delay="200">
            <Film size={32} className="animate-bounce text-slate-950" />
            <Camera size={32} className="animate-bounce delay-100 text-slate-950" />
          </div>
        </div>
      </div>
    </section>
  );
}