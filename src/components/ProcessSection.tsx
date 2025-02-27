import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GeometricElement from './GeometricElement';
import { processSteps } from '@/data/processSteps';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 blue-gradient-text">
            Your Battle Plan for Market Domination
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            We've engineered a proven process to transform your business operations with cutting-edge AI solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bright-purple to-electric-blue transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="service-number">
                {`0${index + 1}`}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-light-gray">{step.description}</p>
              
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 transform translate-x-5 translate-y-5">
                {index % 2 === 0 ? (
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#9013FE" d="M45.7,-76.9C58.9,-69.2,69.3,-55.4,76.3,-40.5C83.3,-25.6,86.9,-9.6,83.8,5.1C80.7,19.8,70.9,33.2,60.1,44.8C49.3,56.4,37.6,66.3,23.7,72.5C9.9,78.8,-6,81.5,-20.4,77.8C-34.8,74.1,-47.6,64,-58.7,51.7C-69.8,39.3,-79.1,24.8,-82.6,8.7C-86.1,-7.4,-83.8,-25.1,-75.2,-38.9C-66.6,-52.7,-51.8,-62.6,-37.1,-69.6C-22.4,-76.6,-7.8,-80.7,7.4,-82.2C22.5,-83.7,32.5,-84.6,45.7,-76.9Z" transform="translate(100 100)" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M47.7,-79.8C62.2,-71.8,74.7,-59.9,81.5,-45.1C88.3,-30.3,89.4,-12.7,85.6,3.3C81.8,19.2,73.1,33.5,63.1,46.4C53.1,59.3,41.8,70.8,27.9,77.1C14,83.5,-2.5,84.7,-17.4,80.1C-32.3,75.6,-45.6,65.3,-57.3,53.2C-69,41.1,-79.1,27.2,-83.1,11.5C-87.1,-4.2,-85,-21.7,-77.4,-36.2C-69.8,-50.7,-56.7,-62.2,-42.3,-70.2C-27.9,-78.2,-13.9,-82.7,1.2,-84.7C16.4,-86.7,33.2,-87.8,47.7,-79.8Z" transform="translate(100 100)" />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Geometric elements */}
      <div className="absolute top-1/4 left-10 opacity-30 hidden lg:block">
        <GeometricElement type="sphere" size={2} color="#9013FE" rotation={{ x: 0.005, y: 0.01, z: 0 }} />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-30 hidden lg:block">
        <GeometricElement type="cube" size={2} color="#4285F4" rotation={{ x: 0.01, y: 0.005, z: 0 }} />
      </div>
    </section>
  );
};

export default ProcessSection;