import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-beacon-blue text-white overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/10/1920/1080" 
          alt="Students graduating" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-beacon-blue via-beacon-blue/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-beacon-gold">
              <Star size={12} fill="currentColor" />
              Trusted Consultants in Gujrat
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Unlock Your Future with <span className="text-beacon-gold">Global Education</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
              We guide students towards prestigious universities in UK, USA, Germany, and beyond. Your journey to international success starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-beacon-gold text-beacon-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link 
                to="/destinations" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-beacon-blue transition-colors flex items-center justify-center"
              >
                Explore Countries
              </Link>
            </div>
          </div>

          {/* Hero Decoration/Image */}
          <div className="hidden md:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://picsum.photos/id/24/800/800" 
                alt="Happy Student" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white text-beacon-blue p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-2xl">1000+</p>
                <p className="text-sm font-medium text-gray-600">Successful Visas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;