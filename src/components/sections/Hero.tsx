'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Globe, ExternalLink } from 'lucide-react';
import { PixelAvatar } from '@/components/ui/PixelAvatar';
import { TypingAnimation } from '@/components/ui/TypingAnimation';
import { PixelButton } from '@/components/ui/PixelButton';
import { ANIMATIONS } from '@/utils/constants';
import portfolioData from '@/data/config/portfolio.json';

export function Hero() {
  const { personal, social } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]"></div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="flex flex-col items-center space-y-6 md:space-y-8 gap-4 md:gap-6"
          {...ANIMATIONS.fadeIn}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
          >
            <PixelAvatar 
              src={personal.avatar}
              alt={personal.name}
              size="xl"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold text-white pixel-text">
              Hello, I'm{' '}
              <span className="text-violet-400 pixel-glow">
                {personal.name}
              </span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-mono text-gray-300 mb-4 md:mb-6">
              {personal.title}
            </h2>
          </motion.div>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="text-sm md:text-lg lg:text-xl font-mono text-gray-400 h-12 md:h-16 flex items-center justify-center px-4">
              <TypingAnimation 
                text={personal.tagline}
                speed={80}
                className="text-center"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <PixelButton
              onClick={() => scrollToSection('projects')}
              variant="primary"
              size="lg"
            >
              View My Work
            </PixelButton>
            
            <PixelButton
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
            >
              Get In Touch
            </PixelButton>
          </motion.div>

          <motion.div
            className="flex space-x-4 md:space-x-8 pt-4 md:pt-6 gap-3 md:gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            {Object.entries(social).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors text-2xl pixel-pulse "
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {getPlatformIcon(platform)}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-violet-500 flex justify-center pixel-art">
          <div className="w-1 h-3 bg-violet-500 mt-2 pixel-art"></div>
        </div>
      </motion.div>
    </section>
  );
}

function getPlatformIcon(platform: string) {
  const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={40} className="md:w-12 md:h-12" />,
    linkedin: <Linkedin size={40} className="md:w-12 md:h-12" />,
    twitter: <Twitter size={40} className="md:w-12 md:h-12" />,
    portfolio: <Globe size={40} className="md:w-12 md:h-12" />
  };
  return iconMap[platform] || <ExternalLink size={40} className="md:w-12 md:h-12" />;
}