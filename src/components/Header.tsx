import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep-purple/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold purple-gradient-text">TEKITH</h1>
          </div>
          
          <nav className="hidden md:flex items-center justify-center space-x-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-md bg-bright-purple text-white font-bold hover:bg-opacity-90 transition-all"
            >
              CONTACT US
            </button>
            <button
              onClick={() => scrollToSection('newsletter')}
              className="px-4 py-2 rounded-md bg-bright-purple text-white font-bold hover:bg-opacity-90 transition-all"
            >
              AI NEWSLETTER
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="px-4 py-2 rounded-md bg-bright-purple text-white font-bold hover:bg-opacity-90 transition-all"
            >
              OUR PROCESS
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 rounded-md bg-bright-purple text-white font-bold hover:bg-opacity-90 transition-all"
            >
              FAQS
            </button>
          </nav>
          
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;