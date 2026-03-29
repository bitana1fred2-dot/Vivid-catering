import { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import MenuPage from './pages/MenuPage';
import WeddingCateringPage from './pages/WeddingCateringPage';
import CorporateCateringPage from './pages/CorporateCateringPage';
import PrivateEventsPage from './pages/PrivateEventsPage';
import BeverageServicesPage from './pages/BeverageServicesPage';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : ''}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" 
              alt="Vivid Catering Logo" 
              className={`h-28 md:h-36 w-auto transition-all duration-500 object-contain ${isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
            />
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center space-x-8 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="nav-link text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+250784347573" className="btn-gold px-6 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wider">
              Call Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden text-white p-2 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 bg-black/95 rounded-lg px-4">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white font-medium hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+250784347573" className="btn-gold px-6 py-3 rounded-full text-white font-semibold text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Fade In Observer Hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// FadeIn Wrapper Component
function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

// Hero Section
function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Catering background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      <div className="max-w-7xl mx-auto px-6 pt-48 pb-32 relative z-10 text-center">
        <FadeIn className="flex flex-col items-center justify-center mt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-24 text-center drop-shadow-lg">
            Exceptional Catering for<br />
            <span className="gold-gradient">Unforgettable Moments</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-gold px-10 py-4 rounded-full text-white font-semibold text-lg uppercase tracking-wider pulse-gold"
            >
              Request a Quote
            </a>
            <a 
              href="#menu"
              onClick={(e) => scrollToSection(e, '#menu')}
              className="px-10 py-4 rounded-full border-2 border-white text-white font-semibold text-lg uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Menu
            </a>
          </div>
        </FadeIn>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 floating">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/rmPFGgRK/Whats-App-Image-2026-03-18-at-11-45-32-AM.jpg" 
                alt="Vivid Catering Team" 
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-amber-500 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="font-serif text-4xl font-bold">4+</p>
                <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
            <p className="text-amber-600 font-medium tracking-[0.3em] uppercase mb-4 text-sm">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">The Art of Exceptional Catering</h2>
            <div className="decorative-line mb-8"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vivid Catering is a Kigali-based premium catering company renowned for exceptional food, boundless creativity, and unparalleled service excellence.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We have earned the trust of corporate institutions, banks, wedding couples, and distinguished individuals hosting high-profile private events. Every detail is handled with precision, elegance, and genuine care.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Premium ingredients sourced with care', 'Award-winning culinary team', 'Seamless event coordination'].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300">
              More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with exquisite culinary creations.',
      image: 'https://i.postimg.cc/BQTnrZ9Y/wedding-vivid.png',
      link: '/services/wedding-catering',
    },
    {
      title: 'Corporate Events',
      description: 'Impress clients and stakeholders with sophisticated business dining.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/corporate-catering',
    },
    {
      title: 'Private Parties',
      description: "Celebrate life's milestones with personalized menus and impeccable service.",
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/private-events',
    },
    {
      title: 'Event Beverage Service',
      description: 'Complete your event with premium beverages and signature mocktails.',
      image: 'https://i.postimg.cc/7ZW761mZ/drinks-vivid-2.png',
      link: '/services/beverage-services',
    },
  ];

  return (
    <section id="services" className="py-16 bg-stone-50">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="decorative-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Exceptional culinary experiences tailored to your unique vision and occasion.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 px-5 rounded-xl hover:bg-amber-600 transition-all duration-300 group/btn">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Menu Section
function MenuSection() {
  const [activeTab, setActiveTab] = useState('appetizers');

  const tabs = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const menuItems: Record<string, { title: string; description: string; image: string; badge: string }[]> = {
    appetizers: [
      { title: 'Gourmet Bruschetta', description: 'Toasted artisan bread topped with fresh tomatoes, basil, garlic, and premium olive oil.', image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Premium Selection' },
      { title: 'Crispy Spring Rolls', description: 'Golden crispy rolls filled with vegetables and served with sweet chili dipping sauce.', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Guest Favorite' },
      { title: 'Caprese Salad', description: 'Fresh mozzarella, vine-ripened tomatoes, and basil drizzled with balsamic glaze.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Light & Fresh' },
    ],
    mains: [
      { title: 'Pan-Seared Salmon', description: 'Atlantic salmon with lemon butter sauce, served with seasonal vegetables and herbs.', image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=600', badge: "Chef's Special" },
      { title: 'Beef Tenderloin', description: 'Premium cut beef, perfectly cooked to your preference with red wine reduction.', image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Signature Dish' },
      { title: 'Chicken Supreme', description: 'Herb-crusted chicken breast with creamy mushroom sauce and roasted potatoes.', image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Classic Favorite' },
    ],
    desserts: [
      { title: 'Belgian Chocolate Cake', description: 'Rich chocolate layers with silky ganache and fresh berries.', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Indulgent' },
      { title: 'Classic Tiramisu', description: 'Italian mascarpone cream with espresso-soaked ladyfingers and cocoa.', image: 'https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Italian Classic' },
      { title: 'Fresh Fruit Tart', description: 'Buttery pastry shell with vanilla custard and glazed seasonal fruits.', image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600', badge: 'Light & Sweet' },
    ],
    beverages: [
      { title: 'Fresh Fruit Juices', description: 'Freshly pressed seasonal fruits and tropical blends.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: 'Refreshing' },
      { title: 'Premium Coffee', description: 'Locally sourced Rwandan coffee, expertly brewed to perfection.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: 'Local Pride' },
      { title: 'Signature Mocktails', description: 'Creative non-alcoholic cocktails crafted with fresh ingredients.', image: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: 'Creative Mix' },
    ],
  };

  return (
    <section id="menu" className="py-16 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Our Offerings</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Culinary Menu</h2>
          <div className="decorative-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Exquisite dishes crafted with passion, premium ingredients, and artistic presentation.</p>
        </FadeIn>
        
        {/* Menu Tabs */}
        <FadeIn className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </FadeIn>
        
        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeTab].map((item, index) => (
            <FadeIn key={`${activeTab}-${index}`}>
              <div className="menu-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold">{item.badge}</span>
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* CTA */}
        <FadeIn className="text-center mt-16">
          <p className="text-gray-600 mb-6">All menus can be customized based on your event requirements and budget.</p>
          <Link 
            to="/menu"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const galleryItems = [
    { image: 'https://i.postimg.cc/qMkxwTXm/Whats-App-Image-2026-03-17-at-1-15-05-PM.jpg', label: 'Event Catering' },
    { image: 'https://i.postimg.cc/8PYRdryJ/20260317-140113-JPG.jpg', label: 'Premium Presentation' },
    { image: 'https://i.postimg.cc/SNyfdh7w/Whats-App-Image-2026-03-17-at-1-15-26-PM.jpg', label: 'Elegant Setup' },
    { image: 'https://i.postimg.cc/Pr7Wb86b/20260317-140330-JPG.jpg', label: 'Food Display' },
    { image: 'https://i.postimg.cc/ncHG2JYW/Whats-App-Image-2026-03-17-at-1-15-35-PM.jpg', label: '5-Star Service' },
    { image: 'https://i.postimg.cc/MZ0Y1TR6/Whats-App-Image-2026-03-17-at-1-28-37-PM.jpg', label: 'Unforgettable Experience' },
  ];

  return (
    <section id="gallery" className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Our Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Culinary Artistry</h2>
          <div className="decorative-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A glimpse into our world of exquisite presentations and unforgettable events.</p>
        </FadeIn>
        
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 flex items-end p-6 transition-opacity duration-300">
                  <p className="text-white font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            <span>View Full Gallery</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    { text: 'Exceptional quality and professionalism. They exceeded all our expectations!', author: 'Daddy Gold', event: 'Private Party' },
    { text: 'Outstanding catering service! The food and presentation were incredible.', author: 'Jean Marie', event: 'Corporate Event' },
    { text: 'Incredible service and food! They made our wedding absolutely perfect.', author: 'Aline N.', event: 'Wedding Reception' },
    { text: 'Top-notch catering with amazing attention to detail. Highly recommended!', author: 'Tonny Trades', event: 'Executive Event' },
  ];

  return (
    <section id="testimonials" className="py-12 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-8">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase mb-3 text-sm">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
          <div className="decorative-line mx-auto"></div>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex text-amber-400 mb-3">
                  <span className="text-lg">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">"{testimonial.text}"</p>
                <p className="text-gray-900 font-semibold">— {testimonial.author}</p>
                <p className="text-amber-600 text-sm">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  const partners = [
    { name: 'Equity Bank Rwanda', logo: 'https://i.postimg.cc/yx08zZzW/Equity-bank-logo.png' },
    { name: 'Rwanda FDA', logo: 'https://i.postimg.cc/MH1p8Q8H/Rwanda-fda-logo.png' },
    { name: 'Davido 5 Tour', logo: 'https://i.postimg.cc/3RctHkZg/Davido-5-tour.png' },
    { name: 'Kabisa', logo: 'https://i.postimg.cc/ydM85T2S/Kabisa-Logo.png' },
    { name: 'UMST University', logo: 'https://i.postimg.cc/x8Ntj9s4/umst-university.png' },
    { name: 'Africa Facilities Management', logo: 'https://i.postimg.cc/mk18ZTdj/Africa-facilities.png' },
  ];

  return (
    <section className="py-12 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-8">
          <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-2 text-sm">Trusted Partners</p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">Companies We've Served</h3>
        </FadeIn>
        
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl px-4 py-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="h-10 md:h-12 object-contain" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event_type: '',
    number_of_people: '',
    event_date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const eventTypeLabels: Record<string, string> = {
      wedding: 'Wedding',
      corporate: 'Corporate Event',
      birthday: 'Birthday Party',
      private: 'Private Celebration',
      executive: 'Executive/VIP Event',
      other: 'Other'
    };
    
    const message = `Hello Vivid Catering! I would like to request a quote.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Event Type:* ${eventTypeLabels[formData.event_type] || formData.event_type}
*Number of People:* ${formData.number_of_people}
*Event Date:* ${formData.event_date}
*Message:* ${formData.message || 'N/A'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/250784347573?text=${encodedMessage}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', event_type: '', number_of_people: '', event_date: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Let's Create Magic Together</h2>
          <div className="decorative-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ready to elevate your next event? Contact us today for a personalized consultation.</p>
        </FadeIn>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white h-full">
              <h3 className="font-serif text-3xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-gray-300">KK23 St, Kigali, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <a href="tel:+250784347573" className="text-gray-300 hover:text-amber-400 transition-colors">+250 784 347 573</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Hours</h4>
                    <p className="text-gray-300">Open Monday-Sunday</p>
                    <p className="text-sm text-gray-400">Available for any event, anytime</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="font-semibold mb-6">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+250784347573" className="btn-gold px-8 py-4 rounded-full text-white font-semibold text-center">
                    📞 Call Now
                  </a>
                  <a 
                    href="https://wa.me/250784347573?text=Hello%20Vivid%20Catering!%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Contact Form */}
          <FadeIn>
            <form onSubmit={handleSubmit} className="bg-stone-50 rounded-3xl p-10">
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8">Request a Quote</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" 
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" 
                    placeholder="07XX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                  <select 
                    name="event_type"
                    value={formData.event_type}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="private">Private Celebration</option>
                    <option value="executive">Executive/VIP Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of People *</label>
                  <select 
                    name="number_of_people"
                    value={formData.number_of_people}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select number of people</option>
                    <option value="1-20">1 - 20 people</option>
                    <option value="21-50">21 - 50 people</option>
                    <option value="51-100">51 - 100 people</option>
                    <option value="101-200">101 - 200 people</option>
                    <option value="201-500">201 - 500 people</option>
                    <option value="500+">500+ people</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
                  <input 
                    type="date" 
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    min={today}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none" 
                    placeholder="Tell us about your event, number of guests, special requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full px-8 py-5 rounded-xl text-white font-bold text-lg uppercase tracking-wider transition-all duration-300 ${
                    isSubmitted ? 'bg-green-500' : 'btn-gold'
                  }`}
                >
                  {isSubmitted ? '✓ Request Sent!' : 'Submit Request'}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
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
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-amber-400 transition-colors">Corporate Catering</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-amber-400 transition-colors">Wedding Catering</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-amber-400 transition-colors">Private Events</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-amber-400 transition-colors">Executive Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>KK23 St, Kigali</li>
              <li><a href="tel:+250784347573" className="hover:text-amber-400 transition-colors">+250 784 347 573</a></li>
              <li>Open Monday-Sunday</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Vivid Catering. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Premium Catering Services in Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="bg-stone-50 text-gray-800 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Scroll to hash on page load
function ScrollToHash() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

// Main App Component
function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/services/wedding-catering" element={<WeddingCateringPage />} />
        <Route path="/services/corporate-catering" element={<CorporateCateringPage />} />
        <Route path="/services/private-events" element={<PrivateEventsPage />} />
        <Route path="/services/beverage-services" element={<BeverageServicesPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
