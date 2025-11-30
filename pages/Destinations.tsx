import React, { useState } from 'react';
import { COUNTRIES } from '../constants';
import { Check, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>(COUNTRIES[0].id);

  const activeCountry = COUNTRIES.find(c => c.id === selectedCountryId) || COUNTRIES[0];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-beacon-blue">Study Destinations</h1>
          <p className="text-gray-600 mt-2">Explore the admission requirements, programs, and opportunities in top countries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white shadow-md rounded-xl p-4 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4 px-2">Select Country</h3>
              <div className="space-y-1">
                {COUNTRIES.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountryId(country.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                      selectedCountryId === country.id 
                        ? 'bg-beacon-blue text-white shadow-md' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    {country.name}
                    {selectedCountryId === country.id && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Banner Image */}
              <div className="h-64 md:h-80 w-full relative">
                <img 
                  src={activeCountry.image} 
                  alt={activeCountry.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8">
                    <h2 className="text-4xl font-bold text-white mb-2">{activeCountry.name}</h2>
                    <p className="text-gray-200">{activeCountry.overview}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Popular Programs */}
                <div>
                  <h3 className="text-xl font-bold text-beacon-blue mb-4 border-l-4 border-beacon-gold pl-3">Popular Programs</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCountry.programs.map((prog, idx) => (
                      <span key={idx} className="bg-blue-50 text-beacon-blue px-3 py-1 rounded-full text-sm font-medium">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requirements Grid */}
                <div>
                  <h3 className="text-xl font-bold text-beacon-blue mb-4 border-l-4 border-beacon-gold pl-3">Admission Requirements</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeCountry.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose Section */}
                <div className="bg-beacon-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-beacon-blue mb-4">Why Study in {activeCountry.name}?</h3>
                  <ul className="space-y-3">
                    {activeCountry.whyChoose.map((reason, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-beacon-gold rounded-full"></span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t pt-8 flex justify-end">
                  <Link to="/contact" className="bg-beacon-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                    Apply for {activeCountry.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;