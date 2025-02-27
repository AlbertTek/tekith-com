import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GeometricElement from './GeometricElement';

const BookingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if necessary
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    "10X'd Their Operating Capacity",
    "Slashed Response Times by 95%",
    "Automated 90% of Daily Operations",
    "Scaled Revenue While Cutting Costs"
  ];

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 blue-gradient-text">
            Ready To Crush Your Competition?
          </h2>
          <p className="text-2xl text-light-gray max-w-3xl mx-auto">
            Claim Your AI Strategy Session To Map Your Automation Journey.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-charcoal rounded-xl overflow-hidden border border-bright-purple/20 shadow-xl"
        >
          <div 
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/tekami-albert/30min" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Join the ranks of business operators who've:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-dark-charcoal p-4 rounded-lg border border-bright-purple/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-bright-purple/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bright-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Geometric elements */}
      <div className="absolute top-1/4 right-10 opacity-30 hidden lg:block">
        <GeometricElement type="cube" size={2} color="#9013FE" rotation={{ x: 0.005, y: 0.01, z: 0 }} />
      </div>
    </section>
  );
};

export default BookingSection;