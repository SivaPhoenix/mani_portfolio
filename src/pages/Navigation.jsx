import React from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/animations.css';

export default function Navigation({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight font-[Raleway] transition-all duration-300 ease-in-out hover:scale-105 text-slate-950">MM</h1>
        
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('films')} className="text-slate-950 hover:text-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1">Films</button>
          <button onClick={() => scrollToSection('photography')} className="text-slate-950 hover:text-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1">Photography</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-950 hover:text-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1">Contact</button>
        </div>

        <button className="md:hidden transition-transform duration-300 ease-in-out hover:scale-110 text-slate-950" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/98 absolute top-full left-0 w-full py-6 px-4 border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col gap-4 stagger-animation">
            <button onClick={() => scrollToSection('films')} className="text-left py-2 text-slate-950 hover:text-gray-600 transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-2">Films</button>
            <button onClick={() => scrollToSection('photography')} className="text-left py-2 text-slate-950 hover:text-gray-600 transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-2">Photography</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-slate-950 hover:text-gray-600 transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-2">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}