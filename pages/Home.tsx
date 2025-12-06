import React from 'react';
import Hero from '../components/Hero';
import { COUNTRIES, SERVICES, TESTIMONIALS, FAQS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <Hero />

      {/* Features / Why Choose Us Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-beacon-blue mb-4">Why Time Wise Consultant?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just process visas; we build careers. Our transparent and personalized approach sets us apart.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Counseling", desc: "Certified counselors with years of experience." },
              { title: "Transparent Process", desc: "No hidden charges, clear documentation guidance." },
              { title: "High Success Rate", desc: "Proven track record of visa approvals for top countries." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-beacon-gold">
                <CheckCircle className="text-beacon-blue mb-4 w-10 h-10" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-beacon-blue mb-2">Study Destinations</h2>
              <p className="text-gray-600">Explore opportunities in the world's best educational hubs.</p>
            </div>
            <Link to="/destinations" className="hidden md:flex items-center text-beacon-light font-bold hover:text-beacon-blue">
              View All <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.slice(0, 3).map((country) => (
              <Link key={country.id} to="/destinations" className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all h-80">
                <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{country.overview}</p>
                  <span className="text-beacon-gold text-sm font-bold mt-3 flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/destinations" className="inline-flex items-center text-beacon-light font-bold">
              View All Destinations <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 bg-beacon-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Comprehensive support from your first consultation until you land in your dream country.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <service.icon className="w-10 h-10 text-beacon-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-beacon-blue text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" />
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-beacon-blue">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.university}, {testimonial.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-beacon-blue text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-800">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-beacon-light" /> : <ChevronDown className="text-gray-400" />}
                </button>
                <div 
                  className={`px-6 text-gray-600 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beacon-blue to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-blue-100 mb-8">Book a free consultation today and let our experts guide you to your dream university.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-beacon-gold text-beacon-blue px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/923358710682" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-beacon-blue transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;