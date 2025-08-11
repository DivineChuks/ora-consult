"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/20'
      : 'bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm'
      }`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-pulse opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-blue-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
            </div> */}
            {/* <div>
              <span className="text-xl sm:text-2xl font-black bg-blue-600 bg-clip-text text-transparent tracking-tight">
                ORA CONSULTS
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-300 rounded-full"></div>
            </div> */}
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="/ora.png"
                alt="Ora Logo"
                className='w-12 h-10 md:w-16 rounded-md md:h-12 object-contain hover:opacity-80 transition-opacity'
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {[
              { name: 'About', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'FAQ', id: 'faq' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 group font-medium"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('booking')}
            className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold"
          >
            <span>Book Consultation</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:animate-bounce"></div>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-all duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-3 border-t border-gradient-to-r from-gray-200/50 to-gray-100/50">
            <div className="space-y-1">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'FAQ', id: 'faq' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 rounded-xl font-medium transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold transform hover:scale-105"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"></div>
    </header>
  );
};

export default Header;