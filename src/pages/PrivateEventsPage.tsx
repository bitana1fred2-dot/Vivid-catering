import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PrivateEventsPage() {
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Our Services</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Private Parties
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Celebrating life's special moments with exquisite culinary artistry
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-3 text-sm">Overview</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Celebrate Every Milestone in Style</h2>
          </div>
          
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Life is filled with moments worth celebrating – birthdays, anniversaries, graduations, baby showers, and countless other milestones that bring loved ones together. At Vivid Catering, we believe these occasions deserve extraordinary culinary experiences that create lasting memories.
            </p>
            <p>
              Whether you're planning an intimate dinner party for close friends or a grand celebration for hundreds of guests, our team crafts personalized menus that reflect your unique style and preferences. From elegant cocktail parties to themed celebrations, we handle every detail with creativity and precision.
            </p>
            <p>
              Our private party catering goes beyond just great food – we create complete experiences. With stunning presentations, professional service, and attention to every detail, we transform your celebration into an unforgettable event that you and your guests will cherish forever.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                  </svg>
                </span>
                Celebration Types
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Birthday parties for all ages
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Anniversary celebrations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Graduation parties
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Baby showers and christenings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Holiday gatherings
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Menu Options
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Fully customized menu planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Themed cuisine options
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Appetizers and finger foods
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Buffet or plated service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Custom cakes and desserts
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                Presentation & Décor
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Themed food displays
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Elegant table arrangements
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Coordinated color schemes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Premium serving pieces
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Full Service
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Friendly professional staff
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Complete setup and cleanup
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Bar service available
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  Entertainment coordination
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
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Share Your Vision</h3>
              <p className="text-gray-600 text-sm">Tell us about your celebration, theme, and what makes it special</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Custom Planning</h3>
              <p className="text-gray-600 text-sm">We design a personalized menu and event plan just for you</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Perfect Preparation</h3>
              <p className="text-gray-600 text-sm">Our team prepares everything with love and attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Celebrate!</h3>
              <p className="text-gray-600 text-sm">Relax and enjoy your party while we take care of everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-2 text-xs">Our Work</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">Private Events Gallery</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600" alt="Birthday Party" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/WpWKhb40/Whats-App-Image-2026-03-17-at-1-15-05-PM-1.jpg" alt="Private Event Setup" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/T1ptrgPW/Whats-App-Image-2026-03-17-at-1-15-19-PM-1.jpg" alt="Celebration Catering" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/3Ndtgmwk/Whats-App-Image-2026-03-17-at-1-15-26-PM-1.jpg" alt="Gourmet Food Display" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/RhNgcK06/Whats-App-Image-2026-03-17-at-1-15-30-PM-1.jpg" alt="Private Party Service" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://i.postimg.cc/d3L58r0C/Whats-App-Image-2026-03-17-at-1-15-39-PM.jpg" alt="Private Dinner" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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

            {/* Corporate Events */}
            <Link to="/services/corporate-catering" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Corporate Events" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-bold text-gray-900 mb-1">Corporate Events</h3>
                <p className="text-gray-600 text-xs mb-2">Professional catering for business meetings and conferences.</p>
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
            Ready to Plan Your Celebration?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let us help you create a party that everyone will remember.
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
