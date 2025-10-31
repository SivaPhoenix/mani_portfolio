import React from 'react';
import { ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function FilmsSection() {
  const films = [
    {
      title: "Echoes of Silence",
      year: "2024",
      duration: "15 min",
      festival: "Sundance Official Selection",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
      link: "#"
    },
    {
      title: "Urban Dreams",
      year: "2023",
      duration: "22 min",
      festival: "Cannes Short Film Corner",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
      link: "#"
    },
    {
      title: "The Last Frame",
      year: "2023",
      duration: "18 min",
      festival: "Berlin Film Festival",
      thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="films" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h3 data-aos="zoom-in" className="text-4xl sm:text-5xl font-bold mb-12 text-center">Short Films</h3>
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {films.map((film, idx) => (
          <a 
            key={idx}
            href={film.link}
            className="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={film.thumbnail} 
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{film.title}</h4>
              <p className="text-gray-300 text-sm mb-1">{film.year} • {film.duration}</p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                {film.festival}
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}