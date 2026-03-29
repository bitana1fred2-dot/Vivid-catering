import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PageNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" 
              alt="Vivid Catering Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className="nav-link text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+250784347573" className="btn-gold px-6 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wider">
              Call Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white font-medium hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
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
