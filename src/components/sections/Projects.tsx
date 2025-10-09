'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { useGitHub } from '@/hooks/useGitHub';
import { ANIMATIONS } from '@/utils/constants';
import portfolioData from '@/data/config/portfolio.json';
import { Loader2, AlertCircle, RefreshCw, FolderOpen } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  
  const { repos, loading, error, refetch } = useGitHub({
    username: projects.github_username,
    selected: projects.selected,
    overrides: projects.overrides
  });

  const displayedRepos = showAll ? repos : repos.slice(0, 6);

  const LoadingState = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Loader2 className="w-8 h-8 text-violet-500 animate-spin mb-4" />
      <p className="text-gray-400 font-mono">Loading projects from GitHub...</p>
    </div>
  );

  const ErrorState = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
      <p className="text-gray-400 font-mono mb-4">Failed to load projects</p>
      <PixelButton onClick={refetch} variant="outline" size="sm">
        <RefreshCw className="w-4 h-4 mr-2" />
        Retry
      </PixelButton>
    </div>
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <FolderOpen className="w-16 h-16 text-violet-400 mb-4" />
      <p className="text-gray-400 font-mono">No repositories found</p>
    </div>
  );

  return (
    <section id="projects" className="min-h-[50vh] flex items-center justify-center py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-3">
        <motion.div
          className="text-center mb-20"
          {...ANIMATIONS.fadeIn}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4 pixel-text">
            My <span className="text-violet-500 pixel-glow">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-lg">
            Recent projects fetched directly from GitHub showcasing my development skills.
          </p>
        </motion.div>

        {loading && <LoadingState />}
        {error && <ErrorState />}
        {!loading && !error && repos.length === 0 && <EmptyState />}
        
        {!loading && !error && repos.length > 0 && (
          <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {displayedRepos.map((repo) => (
                <ProjectCard
                  key={repo.id}
                  project={repo}
                  featured={projects.selected.includes(repo.name)}
                />
              ))}
            </div>

            {repos.length > 6 && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <PixelButton
                  onClick={() => setShowAll(!showAll)}
                  variant="outline"
                  size="lg"
                >
                  {showAll ? 'Show Less' : `View All ${repos.length} Projects`}
                </PixelButton>
              </motion.div>
            )}

            <motion.div
              className="text-center mt-12 flex flex-col gap-3 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 font-mono text-md mb-4">
                Want to see more? Check out my GitHub profile
              </p>
              <PixelButton
                onClick={() => window.open(`https://github.com/${projects.github_username}`, '_blank')}
                variant="secondary"
                size="lg"
              >
                View GitHub Profile
              </PixelButton>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}