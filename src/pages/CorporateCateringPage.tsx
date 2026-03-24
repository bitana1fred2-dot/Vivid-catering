import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CorporateCateringPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestQuote = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" 
                alt="Vivid Catering Logo" 
                className={`h-28 md:h-36 w-auto object-contain transition-all duration-500 ${isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
              />
            </Link>
            
            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center space-x-8 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <Link to="/" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">About</Link>
              <Link to="/#services" className="text-amber-400 font-medium text-sm uppercase tracking-wider border-b-2 border-amber-400 pb-1">Services</Link>
              <Link to="/#menu" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Menu</Link>
              <Link to="/#gallery" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Gallery</Link>
              <Link to="/#testimonials" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Testimonials</Link>
              <Link to="/#contact" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Contact</Link>
              <a href="tel:+250784347573" className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wider hover:from-amber-600 hover:to-amber-700 transition-all">
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden text-white p-2 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 bg-black/95 rounded-lg px-4">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/#services" className="text-amber-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link to="/#menu" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
                <Link to="/#gallery" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/#testimonials" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
                <Link to="/#contact" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                <a href="tel:+250784347573" className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full text-white font-semibold text-center">Call Now</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Our Services</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Corporate Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Elevating business gatherings with sophisticated culinary excellence
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-3 text-sm">Overview</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Professional Catering for Business Excellence</h2>
          </div>
          
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              In the corporate world, every detail matters. At Vivid Catering, we specialize in delivering exceptional culinary experiences that reflect your company's professionalism and attention to excellence. From board meetings to large-scale conferences, we understand the unique demands of corporate events.
            </p>
            <p>
              Our corporate catering services are designed to impress clients, motivate teams, and create memorable business experiences. We offer flexible menu options that accommodate diverse dietary requirements while maintaining the highest standards of quality and presentation.
            </p>
            <p>
              With punctual delivery, discreet service, and seamless execution, we ensure your corporate events run smoothly while your guests enjoy premium cuisine. Trust us to represent your brand with the same excellence you bring to your business.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-3 text-sm">Package Details</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">What's Included</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                Menu Options
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Executive breakfast and brunch packages
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Working lunch platters and boxed meals
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Cocktail reception and canapés
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Formal dinner service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Coffee breaks and refreshments
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                Event Types
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Board meetings and executive sessions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Conferences and seminars
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Product launches and presentations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Team building events
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Annual galas and award ceremonies
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Professional Service
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Professionally trained serving staff
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Discreet and efficient service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Dedicated event manager
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  On-time delivery guarantee
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Additional Benefits
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Branded menu cards available
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Dietary accommodation for all guests
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Premium presentation materials
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Corporate account options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-3 text-sm">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Initial Briefing</h3>
              <p className="text-gray-600 text-sm">Share your event details, objectives, and requirements with our team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Proposal & Menu</h3>
              <p className="text-gray-600 text-sm">Receive a detailed proposal with menu options tailored to your event</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Coordination</h3>
              <p className="text-gray-600 text-sm">We coordinate with your team and venue for seamless execution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Flawless Delivery</h3>
              <p className="text-gray-600 text-sm">We deliver exceptional service that reflects your brand's excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-3 text-sm">Our Work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Corporate Events Gallery</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/3Ndtgmwk/Whats-App-Image-2026-03-17-at-1-15-26-PM-1.jpg" alt="Corporate Event Setup" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/tJ87TQfk/coperate-vivid.png" alt="Corporate Catering" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/SsDMmPks/Whats-App-Image-2026-03-17-at-12-51-48-PM.jpg" alt="Business Meeting Catering" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/vTCDBFjX/Whats-App-Image-2026-03-18-at-11-45-32-AM-1.jpg" alt="Corporate Dining" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/j2BC509z/Whats-App-Image-2026-03-22-at-8-30-51-PM.jpg" alt="Corporate Event Service" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/SRHjsF59/Whats-App-Image-2026-03-22-at-8-31-14-PM-1.jpg" alt="Corporate Lunch" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-5">
            <p className="text-amber-600 font-medium tracking-widest uppercase mb-1 text-xs">Explore More</p>
            <h2 className="font-serif text-lg md:text-xl font-bold text-gray-900">Our Other Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Wedding Catering */}
            <Link to="/services/wedding-catering" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/BQTnrZ9Y/wedding-vivid.png" 
                  alt="Wedding Catering" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Wedding Catering</h3>
                <p className="text-gray-600 text-xs mb-2">Make your special day unforgettable.</p>
                <span className="inline-flex items-center text-amber-600 font-semibold text-sm group-hover:gap-1 transition-all">
                  Learn More 
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </div>
            </Link>

            {/* Private Parties */}
            <Link to="/services/private-events" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Private Parties" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Private Parties</h3>
                <p className="text-gray-600 text-xs mb-2">Celebrate birthdays, anniversaries, and special moments.</p>
                <span className="inline-flex items-center text-amber-600 font-semibold text-sm group-hover:gap-1 transition-all">
                  Learn More 
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </div>
            </Link>

            {/* Beverage Services */}
            <Link to="/services/beverage-services" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/7ZW761mZ/drinks-vivid-2.png" 
                  alt="Beverage Services" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Beverage Services</h3>
                <p className="text-gray-600 text-xs mb-2">Premium drinks and professional bar service.</p>
                <span className="inline-flex items-center text-amber-600 font-semibold text-sm group-hover:gap-1 transition-all">
                  Learn More 
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Corporate Event?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Partner with us for exceptional corporate catering that impresses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRequestQuote}
              className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all"
            >
              Request a Quote
            </button>
            <a 
              href="tel:+250784347573"
              className="border-2 border-gray-900 px-8 py-4 rounded-full text-gray-900 font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <img 
                  src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" 
                  alt="Vivid Catering Logo" 
                  className="h-32 w-auto brightness-0 invert object-contain"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">Premium catering services in Kigali, crafted with creativity, care, and class for unforgettable moments.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/services/corporate-catering" className="hover:text-amber-400 transition-colors">Corporate Catering</Link></li>
                <li><Link to="/services/wedding-catering" className="hover:text-amber-400 transition-colors">Wedding Catering</Link></li>
                <li><Link to="/services/private-events" className="hover:text-amber-400 transition-colors">Private Events</Link></li>
                <li><Link to="/services/beverage-services" className="hover:text-amber-400 transition-colors">Beverage Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/#gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
                <li><Link to="/#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>KK 524 St, Kigali</li>
                <li><a href="tel:+250784347573" className="hover:text-amber-400 transition-colors">0784 347 573</a></li>
                <li>Open 24 Hours</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Vivid Catering. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Premium Catering Services in Kigali, Rwanda</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
