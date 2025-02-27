import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { faqs } from '@/data/faqs';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 blue-gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Get answers to common questions about our AI automation solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-dark-charcoal rounded-xl overflow-hidden border border-bright-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-bright-purple/10 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-bright-purple transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 text-light-gray border-t border-bright-purple/20">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;