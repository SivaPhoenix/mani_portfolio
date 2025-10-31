import React from 'react';
import { MessageSquare, Instagram, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h3 className="text-4xl sm:text-5xl font-bold mb-8">Let's Collaborate</h3>
      <p className="text-xl text-gray-300 mb-12">
        Available for directing, cinematography, and photography projects worldwide
      </p>
      <div className="flex gap-6 justify-center flex-wrap">
        <a 
          href="https://wa.me/15551234567?text=Hi%20Alex%2C%20I%27d%20like%20to%20collaborate" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <MessageSquare size={20} />
          WhatsApp
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <Instagram size={20} />
          Instagram
        </a>
        <a 
          href="mailto:hello@alexrivera.com"
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <Mail size={20} />
          Email
        </a>
      </div>
    </section>
  );
}