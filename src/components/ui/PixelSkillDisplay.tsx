'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PixelSkillDisplayProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  delay?: number;
}

export function PixelSkillDisplay({ skill, delay = 0 }: PixelSkillDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Convert level to 5-star system
  const stars = Math.round(skill.level / 20);
  
  return (
    <motion.div
      className="group bg-gray-800 border-4 border-gray-700 p-4 pixel-shadow-hover relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl pixel-art">{skill.icon}</span>
          <span className="font-mono font-bold text-white group-hover:text-violet-400 transition-colors text-lg">
            {skill.name}
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 border-2 border-black pixel-art ${
              i < stars ? 'bg-violet-500' : 'bg-gray-600'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ 
              delay: delay + 0.2 + (i * 0.1), 
              duration: 0.3,
              type: 'spring',
              stiffness: 300
            }}
          >
            <div className={`w-full h-full border border-gray-800 ${
              i < stars ? 'bg-gradient-to-br from-violet-400 to-violet-600' : ''
            }`}>
              {i < stars && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-violet-200 pixel-art"></div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
        <span className="ml-3 font-mono text-sm text-violet-400 font-bold">
          {skill.level}%
        </span>
      </div>

      {/* Pixel decorative border */}
      <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border-2 border-violet-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}