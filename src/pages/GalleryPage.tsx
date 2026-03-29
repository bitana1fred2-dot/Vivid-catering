import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryImages = [
    // Weddings (first group)
    { id: 1, src: 'https://i.postimg.cc/BQTnrZ9Y/wedding-vivid.png', category: 'weddings', title: 'Wedding Reception' },
    { id: 2, src: 'https://i.postimg.cc/ryG6cSXS/20260321-110744-JPG.jpg', category: 'weddings', title: 'Wedding Dining' },
    { id: 3, src: 'https://i.postimg.cc/ZYPkZrtD/Screenshot-20260321-110428.png', category: 'weddings', title: 'Wedding Feast' },
    
    // Corporate
    { id: 4, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', category: 'corporate', title: 'Corporate Dinner' },
    
    // Private Events
    { id: 5, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', category: 'private', title: 'Birthday Celebration' },
    { id: 6, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', category: 'private', title: 'Gourmet Plating' },
    { id: 7, src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800', category: 'private', title: 'Fine Dining' },
    { id: 8, src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800', category: 'private', title: 'Private Party Setup' },
    { id: 9, src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800', category: 'private', title: 'Celebration Dinner' },
    
    // Food
    { id: 10, src: 'https://i.postimg.cc/qMkxwTXm/Whats-App-Image-2026-03-17-at-1-15-05-PM.jpg', category: 'food', title: 'Premium Cuisine' },
    { id: 11, src: 'https://i.postimg.cc/8PYRdryJ/20260317-140113-JPG.jpg', category: 'food', title: 'Food Presentation' },
    { id: 12, src: 'https://i.postimg.cc/SNyfdh7w/Whats-App-Image-2026-03-17-at-1-15-26-PM.jpg', category: 'food', title: 'Culinary Art' },
    { id: 13, src: 'https://i.postimg.cc/Pr7Wb86b/20260317-140330-JPG.jpg', category: 'food', title: 'Food Display' },
    { id: 14, src: 'https://i.postimg.cc/ncHG2JYW/Whats-App-Image-2026-03-17-at-1-15-35-PM.jpg', category: 'food', title: 'Appetizer Platter' },
    { id: 15, src: 'https://i.postimg.cc/MZ0Y1TR6/Whats-App-Image-2026-03-17-at-1-28-37-PM.jpg', category: 'food', title: 'Dessert Selection' },
    
    // Beverages
    { id: 16, src: 'https://i.postimg.cc/7ZW761mZ/drinks-vivid-2.png', category: 'beverages', title: 'Signature Drinks' },
    { id: 17, src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800', category: 'beverages', title: 'Fresh Juices' },
    { id: 18, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', category: 'beverages', title: 'Premium Coffee' },
    { id: 19, src: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=800', category: 'beverages', title: 'Mocktails' },
    { id: 20, src: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800', category: 'beverages', title: 'Refreshments' },
    { id: 21, src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800', category: 'beverages', title: 'Drink Station' },
    
    // More Wedding images
    { id: 22, src: 'https://i.postimg.cc/h48Fg9Wp/20260321-110504-JPG.jpg', category: 'weddings', title: 'Wedding Setup' },
    { id: 23, src: 'https://i.postimg.cc/fW74Zxn7/20260321-110552-JPG.jpg', category: 'weddings', title: 'Wedding Decor' },
    { id: 24, src: 'https://i.postimg.cc/J73wmbVN/20260321-110614-JPG.jpg', category: 'weddings', title: 'Wedding Venue' },
    { id: 25, src: 'https://i.postimg.cc/66VswdJM/20260321-110633-JPG.jpg', category: 'weddings', title: 'Wedding Elegance' },
    { id: 26, src: 'https://i.postimg.cc/bY0X8Qct/20260321-110658-JPG.jpg', category: 'weddings', title: 'Wedding Service' },
    
    // Last 3 wedding images (at the very end)
    { id: 27, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', category: 'weddings', title: 'Wedding Table Setup' },
    { id: 28, src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800', category: 'weddings', title: 'Wedding Catering' },
    { id: 29, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', category: 'weddings', title: 'Wedding Celebration' },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'private', label: 'Private Events' },
    { id: 'food', label: 'Food' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
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
              <Link to="/#menu" className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">Menu</Link>
              <span className="text-amber-400 font-medium text-sm uppercase tracking-wider border-b-2 border-amber-400 pb-1">Gallery</span>
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
              {mobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 bg-black/95 rounded-lg px-4">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-white font-medium hover:text-amber-400 transition-colors">Home</Link>
                <Link to="/about" className="text-white font-medium hover:text-amber-400 transition-colors">About</Link>
                <Link to="/#services" className="text-white font-medium hover:text-amber-400 transition-colors">Services</Link>
                <Link to="/#menu" className="text-white font-medium hover:text-amber-400 transition-colors">Menu</Link>
                <span className="text-amber-400 font-medium">Gallery</span>
                <Link to="/#testimonials" className="text-white font-medium hover:text-amber-400 transition-colors">Testimonials</Link>
                <Link to="/#contact" className="text-white font-medium hover:text-amber-400 transition-colors">Contact</Link>
                <a href="tel:+250784347573" className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full text-white font-semibold text-center">
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://i.postimg.cc/qMkxwTXm/Whats-App-Image-2026-03-17-at-1-15-05-PM.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-amber-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Our Portfolio</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            A visual journey through our culinary artistry and memorable events
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-3 text-sm">Explore Our Work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Culinary Excellence in Every Frame</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of beautifully crafted dishes, stunning event setups, and unforgettable celebrations.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.src)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${index % 5 === 0 ? 'aspect-square' : 'aspect-square'}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{image.title}</p>
                    <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-amber-400 mb-2">500+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Events Catered</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-amber-400 mb-2">50K+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Happy Guests</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-amber-400 mb-2">4+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-amber-400 mb-2">100%</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Memorable Event?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring our culinary expertise to your special occasion. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRequestQuote}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-8 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="tel:+250784347573"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
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

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Image" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
