import { Link } from 'react-router-dom';

export default function Footer() {
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
              <li><Link to="/services/wedding-catering" className="hover:text-amber-400 transition-colors">Wedding Catering</Link></li>
              <li><Link to="/services/corporate-catering" className="hover:text-amber-400 transition-colors">Corporate Catering</Link></li>
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
              <li><Link to="/menu" className="hover:text-amber-400 transition-colors">Menu</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>KK23 St, Kigali</li>
              <li><a href="tel:+250784347573" className="hover:text-amber-400 transition-colors">+250 784 347 573</a></li>
              <li>Open Monday-Sunday</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/250784347573" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <span className="text-lg">💬</span>
              </a>
              <a href="tel:+250784347573" className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <span className="text-lg">📞</span>
              </a>
            </div>
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
