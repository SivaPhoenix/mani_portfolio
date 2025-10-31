import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './pages/Navigation';
import HeroSection from './pages/HeroSection';
import FilmsSection from './pages/FilmsSection';
import PhotographySection from './pages/PhotographySection';
import ContactSection from './pages/ContactSection';
import Footer from './pages/Footer';
import './index.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });

    // Handle scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
          <Navigation 
            scrolled={scrolled} 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            scrollToSection={scrollToSection} 
          />
          <HeroSection />
          <FilmsSection />
          <PhotographySection />
          <ContactSection />
          <Footer />
    
          <style jsx>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 1s ease-out;
            }
            .delay-100 {
              animation-delay: 0.1s;
            }
          `}</style>
        </div>
  );
}
