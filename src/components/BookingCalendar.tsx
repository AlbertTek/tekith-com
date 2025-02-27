import React, { useEffect } from 'react';

export const BookingCalendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if necessary
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full rounded-lg" 
      data-url="https://calendly.com/tekami-albert/30min" 
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};
