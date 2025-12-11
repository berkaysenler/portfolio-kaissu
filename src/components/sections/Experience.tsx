'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { ANIMATIONS } from '@/utils/constants';
import portfolioData from '@/data/config/portfolio.json';

interface ExperienceData {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export function Experience() {
  const { experience } = portfolioData as { experience: ExperienceData[] };

  return (
    <section id="experience" className="min-h-[50vh] flex items-center justify-center py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <motion.div
          className="text-center mb-16"
          {...ANIMATIONS.fadeIn}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4 pixel-text">
            Work <span className="text-violet-500 pixel-glow">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-violet-500 mx-auto mb-4 pixel-art"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-lg">
            My professional journey and experiences that shaped my development skills
          </p>
        </motion.div>

        <div className="w-full max-w-4xl ">
          {experience.length > 0 ? (
            experience.map((exp, index) => (
              <TimelineItem
                key={`${exp.company}-${exp.position}`}
                experience={exp}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-16 h-16 text-violet-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-mono font-bold text-white mb-4">
                Starting My Journey
              </h3>
              <p className="text-gray-400 font-mono max-w-md mx-auto">
                As a recent graduate, I'm eager to begin my professional career 
                and contribute to exciting projects in the tech industry.
              </p>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}