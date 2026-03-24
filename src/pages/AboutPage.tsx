import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navigateToHomeSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Handle navigation to contact section on home page
  const handleRequestQuote = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll to hide navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img 
                src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" 
                alt="Vivid Catering" 
                className={`h-28 md:h-36 w-auto transition-all duration-500 object-contain ${isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center space-x-8 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <Link 
                to="/" 
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <span className="text-amber-400 font-medium text-sm uppercase tracking-wider border-b-2 border-amber-400 pb-1">
                About
              </span>
              <button
                type="button"
                onClick={() => navigateToHomeSection("services")}
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => navigateToHomeSection("menu")}
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                Menu
              </button>
              <button
                type="button"
                onClick={() => navigateToHomeSection("gallery")}
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                Gallery
              </button>
              <button
                type="button"
                onClick={() => navigateToHomeSection("testimonials")}
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                Testimonials
              </button>
              <button
                type="button"
                onClick={() => navigateToHomeSection("contact")}
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
              >
                Contact
              </button>
              <a 
                href="tel:+250784347573" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-colors"
              >
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
            <div className="lg:hidden mt-4 pb-4 border-t border-white/20 bg-black/95 rounded-lg px-4">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/" 
                  className="text-white font-medium hover:text-amber-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <span className="text-amber-400 font-medium">About</span>
                <button
                  type="button"
                  onClick={() => navigateToHomeSection("services")}
                  className="text-white font-medium hover:text-amber-400 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => navigateToHomeSection("menu")}
                  className="text-white font-medium hover:text-amber-400 transition-colors text-left"
                >
                  Menu
                </button>
                <button
                  type="button"
                  onClick={() => navigateToHomeSection("gallery")}
                  className="text-white font-medium hover:text-amber-400 transition-colors text-left"
                >
                  Gallery
                </button>
                <button
                  type="button"
                  onClick={() => navigateToHomeSection("testimonials")}
                  className="text-white font-medium hover:text-amber-400 transition-colors text-left"
                >
                  Testimonials
                </button>
                <button
                  type="button"
                  onClick={() => navigateToHomeSection("contact")}
                  className="text-white font-medium hover:text-amber-400 transition-colors text-left"
                >
                  Contact
                </button>
                <a 
                  href="tel:+250784347573" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium text-center transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 1. Hero Section - Full Width Image */}
      <section className="relative h-[85vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.postimg.cc/LsPQtXrj/Whats-App-Image-2026-03-18-at-11-45-32-AM.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Discover the story behind Kigali's premier catering service
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-amber-600 font-medium tracking-widest uppercase mb-3 text-sm">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Journey of Passion & Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Vivid Catering began with a simple dream: to bring exceptional culinary 
                  experiences to every event in Kigali. What started as a small operation driven by passion 
                  has blossomed into one of Rwanda's most trusted premium catering services.
                </p>
                <p>
                  Our founder recognized a gap in the market for truly exceptional catering that combines 
                  world-class cuisine with impeccable service. Every dish we create tells a story, every 
                  event we cater becomes a cherished memory.
                </p>
                <p>
                  Today, we've had the privilege of serving over 500 events, from intimate private dinners 
                  to grand corporate galas and dream weddings. Our growth is a testament to our unwavering 
                  commitment to excellence and the trust our clients place in us.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/5NQgjM0L/Whats-App-Image-2026-03-18-at-11-45-32-AM-(1).jpg"
                  alt="Vivid Catering Team"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl">
                <p className="font-serif text-4xl font-bold">4+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-medium tracking-widest uppercase mb-3 text-sm">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We go beyond catering to create unforgettable culinary experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Premium Quality */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Only the finest, freshest ingredients sourced from trusted suppliers make it to your plate.</p>
            </div>

            {/* Expert Chefs */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Expert Chefs</h3>
              <p className="text-gray-600 leading-relaxed">Our culinary team brings years of experience and creative excellence to every dish.</p>
            </div>

            {/* Stunning Presentation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Stunning Presentation</h3>
              <p className="text-gray-600 leading-relaxed">Every plate is a work of art, designed to delight the eyes before the taste buds.</p>
            </div>

            {/* 24/7 Availability */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">We're always ready to serve you, no matter when your event takes place.</p>
            </div>

            {/* Custom Menus */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Custom Menus</h3>
              <p className="text-gray-600 leading-relaxed">Tailored menus designed specifically for your event, preferences, and dietary needs.</p>
            </div>

            {/* Professional Service */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Professional Service</h3>
              <p className="text-gray-600 leading-relaxed">Trained staff who deliver seamless, attentive service from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-medium tracking-widest uppercase mb-3 text-sm">Our Purpose</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver exceptional catering experiences that exceed expectations, creating memorable 
                moments through outstanding cuisine, impeccable presentation, and genuine hospitality. 
                We strive to be the trusted partner for every celebration, big or small.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become Rwanda's leading premium catering company, recognized for culinary excellence, 
                innovation, and exceptional service. We aspire to set the standard for event catering 
                across East Africa while nurturing local talent and celebrating our rich culinary heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-medium tracking-widest uppercase mb-3 text-sm">What Guides Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that define who we are and how we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Excellence",
                description: "We pursue perfection in every dish, every presentation, and every interaction."
              },
              {
                number: "02",
                title: "Integrity",
                description: "Honesty and transparency guide all our relationships with clients and partners."
              },
              {
                number: "03",
                title: "Creativity",
                description: "We innovate constantly, bringing fresh ideas and unique flavors to every event."
              },
              {
                number: "04",
                title: "Care",
                description: "Genuine attention to detail and heartfelt service define our approach."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-bold text-white">{value.number}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Our Team Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-medium tracking-widest uppercase mb-3 text-sm">The People Behind the Magic</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to making your event extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://i.postimg.cc/C1F3Gx2r/Vivane.png",
                name: "Mizero Viviane",
                role: "Managing Director",
                description: "Visionary leader driving excellence"
              },
              {
                image: "",
                name: "Shema Honore",
                role: "Operation Manager",
                description: "Coordinating seamless event execution"
              },
              {
                image: "https://i.postimg.cc/L6TZDCnX/Chef-arsene.png",
                name: "Chef Arsene",
                role: "Executive Chef",
                description: "Crafting culinary masterpieces"
              },
              {
                image: "https://i.postimg.cc/Bnj2yH89/gpt-image-1-5-high-fidelity-a-make-for-me-a-profes.png",
                name: "Julia Kayinamura",
                role: "Secretary",
                description: "Ensuring seamless operations"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section - Ready to Create Something Extraordinary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let us bring your vision to life with exceptional catering that will leave a lasting impression on your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRequestQuote}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a 
              href="tel:+250784347573"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div>
              <img 
                src="https://i.postimg.cc/J0fRzCZt/Vivid-catering-logo-2.png" 
                alt="Vivid Catering" 
                className="h-24 w-auto brightness-0 invert mb-6"
              />
              <p className="text-gray-400 leading-relaxed">
                Premium catering services in Kigali, crafted with creativity, care, and class for unforgettable moments.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Wedding Catering</li>
                <li>Corporate Events</li>
                <li>Private Parties</li>
                <li>Executive Service</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>KK 524 St, Kigali</li>
                <li>
                  <a href="tel:+250784347573" className="hover:text-amber-400 transition-colors">
                    +250 784 347 573
                  </a>
                </li>
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
};

export default AboutPage;
