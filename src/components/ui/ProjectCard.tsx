'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { GitHubRepo } from '@/utils/api';

interface ProjectCardProps {
  project: GitHubRepo;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'React': 'bg-cyan-500',
      'Vue': 'bg-emerald-500',
      'Python': 'bg-emerald-600',
      'Java': 'bg-orange-600',
      'Go': 'bg-cyan-600',
      'Rust': 'bg-orange-500',
      'C++': 'bg-blue-600',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-blue-500'
    };
    return colors[tech] || 'bg-gray-500';
  };

  return (
    <motion.div
      className={`group relative bg-gray-800 border-2 border-gray-700 p-6 transition-all duration-300 hover:border-violet-500 hover:shadow-[8px_8px_0px_0px_#8B5CF6] ${
        featured ? 'ring-2 ring-violet-500 ring-opacity-50' : ''
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {featured && (
        <div className="absolute -top-3 -left-3 bg-violet-500 text-black px-3 py-1 text-xs font-mono font-bold">
          FEATURED
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-mono font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
            {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h3>
          <p className="text-gray-400 text-sm font-mono leading-relaxed">
            {project.description || 'No description available'}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1 text-gray-400">
          <Star size={16} />
          <span className="text-sm font-mono">{project.stargazers_count}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400">
          <GitFork size={16} />
          <span className="text-sm font-mono">{project.forks_count}</span>
        </div>
        <div className="text-sm text-gray-500 font-mono">
          Updated {formatDate(project.updated_at)}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.language && (
          <span className={`inline-flex items-center px-2 py-1 text-xs font-mono text-white ${getTechColor(project.language)}`}>
            {project.language}
          </span>
        )}
        {project.topics?.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-mono border border-gray-600"
          >
            {topic}
          </span>
        ))}
        {project.topics && project.topics.length > 3 && (
          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-mono border border-gray-600">
            +{project.topics.length - 3} more
          </span>
        )}
      </div>

      <div className="flex space-x-3">
        <motion.a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-violet-600 text-white text-sm font-mono transition-colors border border-gray-600 hover:border-violet-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={16} />
          <span>Code</span>
        </motion.a>
        
        {project.homepage && (
          <motion.a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-mono transition-colors border border-violet-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </motion.a>
        )}
      </div>

      <div className="absolute inset-0 border-2 border-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}