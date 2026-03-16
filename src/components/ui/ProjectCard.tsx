'use client';

import { motion, type Variants } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string | null;
  color: string;
  tech: string[];
  tags: string[];
  github: string;
  live: string | null;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const getTechColor = (tech: string): string => {
  const colors: Record<string, string> = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    React: '#61DAFB',
    'Next.js': '#FFFFFF',
    Vue: '#42B883',
    Python: '#3776AB',
    Java: '#ED8B00',
    Kotlin: '#7F52FF',
    Go: '#00ADD8',
    Rust: '#CE422B',
    'C++': '#00599C',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Android: '#3DDC84',
    OpenAI: '#74AA9C',
    'REST API': '#FF6B6B',
    'Riot API': '#C89B3C',
  };
  return colors[tech] || '#6B7280';
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-gray-900 border-2 border-gray-700 overflow-hidden cursor-default
        hover:border-violet-500 hover:shadow-[6px_6px_0px_0px_#8B5CF6]
        transition-shadow transition-border duration-300"
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-3 left-3 z-20 px-2 py-0.5 text-[10px] font-mono font-bold text-black"
          style={{ backgroundColor: project.color }}
        >
          FEATURED
        </div>
      )}

      {/* Image / Gradient placeholder */}
      <div className="relative h-44 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <GradientPlaceholder color={project.color} title={project.title} />
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3 z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-900 border border-gray-600 hover:border-violet-400 text-white text-xs font-mono transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <Github size={14} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-white text-xs font-mono transition-colors border"
              style={{ backgroundColor: project.color, borderColor: project.color }}
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-mono font-bold text-white group-hover:text-violet-300 transition-colors leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0 mt-0.5"
          />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs font-mono leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono border border-gray-700 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map(t => (
            <span key={t} className="flex items-center gap-1 text-[11px] font-mono text-gray-300">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getTechColor(t) }}
              />
              {t}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-2 border-t border-gray-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-xs font-mono transition-colors"
          >
            <Github size={13} />
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-xs font-mono transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Subtle inner glow border on hover */}
      <div className="absolute inset-0 border-2 border-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

function GradientPlaceholder({ color, title }: { color: string; title: string }) {
  return (
    <motion.div
      className="w-full h-full flex items-end p-4"
      style={{
        background: `linear-gradient(135deg, ${color}22 0%, ${color}44 50%, ${color}11 100%)`,
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      {/* Decorative grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${title}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
      </svg>

      {/* Glow orb */}
      <motion.div
        className="absolute top-6 right-6 rounded-full blur-2xl opacity-30"
        style={{ width: 80, height: 80, backgroundColor: color }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Project initial letters */}
      <span
        className="relative z-10 text-4xl font-mono font-bold opacity-30 select-none"
        style={{ color }}
      >
        {title
          .split(' ')
          .map(w => w[0])
          .join('')
          .slice(0, 3)}
      </span>
    </motion.div>
  );
}
