import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-beacon-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Beacon Overseas</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering students in Gujrat and across Pakistan to achieve their academic dreams globally.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-beacon-blue mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Beacon Overseas Education was established with a singular vision: to provide transparent, honest, and expert career counseling to students aspiring to study abroad. Located in the heart of Gujrat, we have grown to become a trusted name for international education consultancy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that studying abroad is not just about getting a degree—it's about building a future. Our team of experienced counselors works tirelessly to match students with universities that align with their academic profile, financial budget, and career aspirations.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://picsum.photos/id/2/800/600" alt="Office Meeting" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mission/Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-beacon-gold text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-beacon-blue">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">To provide accessible, accurate, and ethical education consultancy services that empower students to succeed globally.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-beacon-blue text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-beacon-blue">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">Integrity, Transparency, and Student-Centricity are the core pillars of our operations.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-beacon-gold text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-beacon-blue">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Team</h3>
            <p className="text-gray-600">A dedicated team of certified education counselors with deep knowledge of international admission processes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;