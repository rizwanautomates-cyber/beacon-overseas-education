import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-beacon-blue/95 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-beacon-blue text-white' : 'bg-white text-beacon-blue'}`}>
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-wide ${scrolled ? 'text-beacon-blue' : 'text-white'}`}>
                TIME WISE
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                Consultant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-beacon-gold ${
                  location.pathname === link.path 
                    ? 'text-beacon-gold font-semibold' 
                    : scrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-beacon-gold text-beacon-blue px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition-transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-beacon-blue' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium border-b border-gray-100 pb-2 ${
                location.pathname === link.path ? 'text-beacon-blue' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="bg-beacon-blue text-white text-center py-3 rounded-lg font-semibold mt-4"
          >
            Call: {CONTACT_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;