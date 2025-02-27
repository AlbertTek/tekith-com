import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create an array of circles with different properties
  const circles = [
    { color: '#9013FE', size: '300px', left: '10%', top: '20%', duration: 20 },
    { color: '#4285F4', size: '400px', left: '70%', top: '10%', duration: 25 },
    { color: '#6E0DAD', size: '350px', left: '30%', top: '60%', duration: 22 },
    { color: '#B14AFF', size: '250px', left: '80%', top: '70%', duration: 18 },
    { color: '#3A0CA3', size: '320px', left: '5%', top: '80%', duration: 23 },
  ];

  return (
    <div ref={containerRef} className="animated-bg">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="blurry-circle"
          style={{
            backgroundColor: circle.color,
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -40, 20, -10, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;