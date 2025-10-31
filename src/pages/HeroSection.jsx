import React from 'react';
import { Film, Camera } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mani from '../assets/mani.jpg';

export default function HeroSection() {

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-black">
      {/* Image container */}
      <div className="absolute inset-0">
        <img 
          src={mani} 
          alt="Director background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content container */}
      <div className="absolute inset-0 flex items-center md:items-center">
        <div className="w-full">
          <div className="w-full md:w-2/5 ml-auto px-6 md:pr-16 flex flex-col gap-4 md:gap-4">
            <h2 
              data-aos="fade-left" 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white md:text-slate-950 text-center md:text-right font-[Montserrat] mt-20 md:mt-0"
            >
              Manivannan
            </h2>
            <p 
              data-aos="fade-left" 
              data-aos-delay="100"
              className="text-2xl sm:text-3xl text-white md:text-slate-950 text-center md:text-right font-medium tracking-wide font-[Raleway] mt-4 md:mt-0"
            >
              Writter - Director - Photography
            </p>
            <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="200">
              <Film size={40} className="text-white md:text-slate-950 animate-bounce" />
              <Camera size={40} className="text-white md:text-slate-950 animate-bounce delay-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}