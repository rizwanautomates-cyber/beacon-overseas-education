import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      
      {/* Phone Button (Mobile Only visible via CSS or utility if desired, keeping both for now) */}
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="bg-beacon-blue hover:bg-blue-800 text-white p-4 rounded-full shadow-lg shadow-blue-900/30 transition-transform hover:scale-110 flex items-center justify-center md:hidden"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingCTA;