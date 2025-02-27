import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://app.kit.com/forms/7509749/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_address: email }),
      });
      setEmail('');
      alert('Great! Your AI journey is about to be enhanced...');
    } catch (error) {
      alert('Great! Your AI journey is about to be enhanced...');
    }
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 blue-gradient-text">
            Tek's AI Newsletter
          </h2>
          <p className="text-xl text-light-gray mb-10">
            Stay up to date with new, innovative, inspiring insights that will help you succeed in the AI Space, health, and your life.
          </p>
          
          <motion.form 
            onSubmit={handleNewsletterSubmit}
            className="bg-dark-charcoal p-8 rounded-xl border border-bright-purple/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-deep-purple/50 border border-bright-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-purple"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-bright-purple text-white font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:translate-y-[-2px]"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">Join the vanguard of business revolutionaries. Get battle-tested AI strategies delivered to your inbox.</p>
          </motion.form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-dark-charcoal p-6 rounded-lg border border-bright-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-electric-blue mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Insights</h3>
              <p className="text-light-gray">Latest trends and breakthroughs in AI technology</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark-charcoal p-6 rounded-lg border border-bright-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-bright-purple mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Strategies</h3>
              <p className="text-light-gray">Proven tactics to scale your business with automation</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark-charcoal p-6 rounded-lg border border-bright-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-green-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ROI Maximizers</h3>
              <p className="text-light-gray">Tips to get the highest return on your AI investments</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;