import React from 'react';
import { motion } from 'framer-motion';
import GeometricElement from './GeometricElement';

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Design AI Solutions Tailored For Your Business Domination
          </motion.h1>
          
          <motion.p 
            className="text-xl text-light-gray max-w-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Deploy battle-tested AI solutions that crush tasks, demolish inefficiencies, and scale your empire 24/7/365.
          </motion.p>
          
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              onClick={scrollToBooking}
              className="px-8 py-4 bg-bright-purple text-white text-lg font-bold rounded-lg shadow-lg hover:bg-opacity-90 transform hover:translate-y-[-2px] transition-all"
            >
              Book Discovery Call
            </button>
          </motion.div>
          
          <motion.div 
            className="p-8 bg-dark-charcoal/80 backdrop-blur-md rounded-xl border border-bright-purple/20 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-red-500 font-bold mb-6 text-xl">WARNING: The automation revolution stops for no one.</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Relentless 24/7 Lead Generation Machine</h4>
                  <p className="text-light-gray">Never miss a potential client again with our automated lead capture systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bright-purple/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bright-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Military-Grade Task Automation</h4>
                  <p className="text-light-gray">Eliminate repetitive tasks and focus on what truly matters for your business.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Precision-Engineered Client Conversion Systems</h4>
                  <p className="text-light-gray">Turn prospects into paying clients with our conversion-optimized AI systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Zero Friction, Zero Waste, MAXIMUM Results</h4>
                  <p className="text-light-gray">Streamlined operations that eliminate bottlenecks and maximize efficiency.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Geometric elements */}
      <div className="absolute top-40 left-10 opacity-50 hidden lg:block">
        <GeometricElement type="cube" size={3} color="#9013FE" rotation={{ x: 0.005, y: 0.01, z: 0 }} />
      </div>
      <div className="absolute bottom-40 right-10 opacity-50 hidden lg:block">
        <GeometricElement type="sphere" size={2.5} color="#4285F4" rotation={{ x: 0.01, y: 0.005, z: 0 }} />
      </div>
    </section>
  );
};

export default HeroSection;