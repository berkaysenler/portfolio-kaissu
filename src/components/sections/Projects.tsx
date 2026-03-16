'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { ANIMATIONS } from '@/utils/constants';
import portfolioData from '@/data/config/portfolio.json';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const filters = ['All', 'Featured'] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const projects = portfolioData.projects as {
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
  }[];

  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const displayed =
    activeFilter === 'Featured'
      ? projects.filter(p => p.featured)
      : [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section
      id="projects"
      className="min-h-[50vh] flex items-center justify-center py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-10">
        {/* Section header */}
        <motion.div className="text-center" {...ANIMATIONS.fadeIn}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4 pixel-text">
            My <span className="text-violet-500 pixel-glow">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-lg">
            A curated selection of things I&apos;ve built — from AI tools to mobile apps.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-xs font-mono border-2 transition-all duration-200 ${
                activeFilter === f
                  ? 'border-violet-500 bg-violet-500 text-black'
                  : 'border-gray-700 text-gray-400 hover:border-violet-500 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {displayed.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className="text-center flex flex-col gap-3 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 font-mono text-sm">
            Want to see more? Check out my GitHub profile
          </p>
          <PixelButton
            onClick={() => window.open('https://github.com/berkaysenler', '_blank')}
            variant="secondary"
            size="lg"
          >
            View GitHub Profile
          </PixelButton>
        </motion.div>
      </div>
    </section>
  );
}
