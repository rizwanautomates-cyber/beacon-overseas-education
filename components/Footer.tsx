import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-beacon-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-beacon-gold mb-4">BEACON</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner in international education. We build bridges to your future with transparency, expert guidance, and personalized support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-beacon-gold hover:text-beacon-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-beacon-gold hover:text-beacon-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-beacon-gold hover:text-beacon-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-beacon-gold transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-beacon-gold transition-colors">Destinations</Link></li>
              <li><Link to="/services" className="hover:text-beacon-gold transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-beacon-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-beacon-gold transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-beacon-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-beacon-gold shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-beacon-gold shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-beacon-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.timings}</span>
              </li>
            </ul>
          </div>

          {/* Map Preview */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Locate Us</h3>
            <div className="rounded-lg overflow-hidden h-40 border border-white/20">
             <iframe 
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-beacon-gold mt-2 inline-block hover:underline"
            >
              Get Directions on Google Maps &rarr;
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Beacon Overseas Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;