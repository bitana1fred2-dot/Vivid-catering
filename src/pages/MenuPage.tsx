import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
              <Link to="/#services" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Services</Link>
              <Link to="/menu" className="text-amber-400 font-medium text-sm uppercase tracking-wider border-b-2 border-amber-400 pb-1">Menu</Link>
              <Link to="/gallery" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Gallery</Link>
              <Link to="/#testimonials" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Testimonials</Link>
              <Link to="/#contact" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Contact</Link>
              <a href="tel:+250784347573" className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wider hover:from-amber-600 hover:to-amber-700 transition-all">
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden text-white p-2 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 bg-black/95 rounded-lg px-4">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/#services" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/menu" className="text-amber-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
                <Link to="/gallery" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/#testimonials" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
                <Link to="/#contact" className="text-white font-medium hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <a href="tel:+250784347573" className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full text-white font-semibold text-center">Call Now</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh]">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Our Menu"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Our Menu</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Crafted with passion, served with excellence
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Menu 1 */}
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://i.postimg.cc/BvdgnXGL/20260320-093418-JPG.jpg" 
                  alt="Wedding Menu 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Wedding Menu 2 */}
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://i.postimg.cc/0N6nv7hM/20260320-093450-JPG.jpg" 
                  alt="Wedding Menu 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Wedding Menu 3 */}
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://i.postimg.cc/3wPBxdHv/20260320-093521-JPG.jpg" 
                  alt="Wedding Menu 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Create Your Perfect Menu?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let us design a customized menu tailored to your event and preferences.
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
                <img src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" alt="Vivid Catering Logo" className="h-32 w-auto brightness-0 invert object-contain" />
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
                <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
                <li><Link to="/#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
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
    </div>
  );
};

export default MenuPage;
