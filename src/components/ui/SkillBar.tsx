'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  delay?: number;
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-mono text-white group-hover:text-violet-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="font-mono text-sm text-gray-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative h-3 bg-gray-800 border border-gray-700 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-violet-400 border-r-2 border-violet-300"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ 
            delay: delay + 0.3, 
            duration: 1, 
            ease: 'easeOut' 
          }}
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-pulse"></div>
        
        <div className="absolute inset-0 border border-gray-600 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}