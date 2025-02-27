import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import NewsletterSection from './components/NewsletterSection';
import FaqSection from './components/FaqSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-purple-black-gradient text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <ProcessSection />
      <NewsletterSection />
      <FaqSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default App;