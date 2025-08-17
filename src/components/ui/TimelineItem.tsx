'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface TimelineItemProps {
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
    achievements: string[];
  };
  index: number;
  isLast?: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center mb-12"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className={`flex-1 ${isEven ? 'order-1 pr-8' : 'order-3 pl-8'} `}>
        <motion.div
          className="bg-gray-800 border-2 border-gray-700 p-6 relative shadow-[8px_8px_0px_0px_#374151] hover:border-violet-500 transition-colors group"
          whileHover={{ y: -5 }}
        >
          <div className={`absolute top-6 w-4 h-4 bg-gray-800 border-2 border-gray-700 transform rotate-45  ${
            isEven ? '-right-2' : '-left-2'
          } group-hover:border-violet-500`}></div>
          
          <div className="mb-4">
            <h3 className="text-xl font-mono font-bold text-white group-hover:text-violet-400 transition-colors">
              {experience.position}
            </h3>
            <h4 className="text-lg font-mono text-violet-400 mb-2">
              {experience.company}
            </h4>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span className="font-mono">{experience.duration}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          <div className="mb-4">
            <h5 className="text-sm font-mono font-bold text-violet-400 mb-2 flex items-center">
              <TrendingUp size={14} className="mr-1" />
              Key Achievements
            </h5>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="text-gray-300 text-sm font-mono flex items-start">
                  <span className="text-violet-500 mr-2">▸</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-mono border border-gray-600 group-hover:border-violet-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="order-2 flex flex-col items-center">
        <motion.div
          className="w-6 h-6 bg-violet-500 border-4 border-gray-900 rounded-full z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
          viewport={{ once: true }}
        />
        
        {!isLast && (
          <motion.div
            className="w-1 h-24 bg-gradient-to-b from-violet-500 to-transparent mt-2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
            viewport={{ once: true }}
          />
        )}
      </div>

      <div className={`flex-1 ${isEven ? 'order-3' : 'order-1'}`}></div>
    </motion.div>
  );
}