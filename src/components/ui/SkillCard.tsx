'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    icon: string;
    experience?: string;
    description?: string;
  };
  delay?: number;
  Icon: LucideIcon;
}

export function SkillCard({ skill, delay = 0, Icon }: SkillCardProps) {
  const getExperienceText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    if (level >= 40) return "Beginner";
    return "Learning";
  };

  const getExperienceDescription = (name: string, level: number) => {
    const experience = getExperienceText(level);
    
    const descriptions: Record<string, string> = {
      "JavaScript": "Built multiple web applications and interactive features using modern ES6+ syntax",
      "TypeScript": "Developed type-safe applications with enhanced code quality and maintainability",
      "React": "Created dynamic user interfaces with hooks, context API, and component composition",
      "Next.js": "Built full-stack applications with SSR, SSG, and API routes for optimal performance",
      "Node.js": "Developed backend APIs, server-side logic, and handled database integrations",
      "Python": "Used for scripting, automation, data analysis, and backend development projects",
      "HTML/CSS": "Crafted semantic markup and responsive designs with modern CSS techniques",
      "Git": "Version control for all projects with branching, merging, and collaborative workflows",
      "Docker": "Containerized applications for consistent development and deployment environments",
      "PostgreSQL": "Designed and optimized relational databases for various web applications"
    };
    
    return descriptions[name] || `${experience} level experience in ${name}`;
  };

  return (
    <motion.div
      className="group relative bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow hover:border-violet-500 transition-colors"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-violet-500 border-2 border-violet-400 flex items-center justify-center pixel-art mr-4">
          <Icon size={24} className="text-black" />
        </div>
        <div>
          <h3 className="text-xl font-mono font-bold text-white group-hover:text-violet-400 transition-colors">
            {skill.name}
          </h3>
          <span className="text-sm font-mono text-violet-400 font-bold">
            {getExperienceText(skill.level)}
          </span>
        </div>
      </div>
      
      <p className="text-gray-300 font-mono text-sm leading-relaxed">
        {getExperienceDescription(skill.name, skill.level)}
      </p>

      {/* Pixel decorative border */}
      <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border-2 border-violet-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}