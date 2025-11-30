import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-beacon-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From the moment you decide to study abroad until you settle in your new country, Beacon Overseas is with you every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-6 p-8 rounded-xl transition-all hover:bg-slate-50 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right md:text-left'}`}
            >
              <div className="shrink-0 flex items-center justify-center md:justify-start">
                <div className="w-16 h-16 bg-blue-50 text-beacon-blue rounded-full flex items-center justify-center">
                  <service.icon size={32} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center text-beacon-light font-semibold hover:text-beacon-blue group">
                  Get Assistance <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps Visual */}
        <div className="mt-20 border-t pt-16">
          <h2 className="text-3xl font-bold text-center text-beacon-blue mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
            {[
              { step: 1, title: "Consultation", desc: "Free profile assessment" },
              { step: 2, title: "University Selection", desc: "Shortlisting best options" },
              { step: 3, title: "Admission", desc: "Application processing" },
              { step: 4, title: "Visa & Travel", desc: "Visa filing and departure" }
            ].map((item) => (
              <div key={item.step} className="bg-white p-4 text-center">
                <div className="w-10 h-10 bg-beacon-gold text-beacon-blue rounded-full font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10 shadow-sm">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;