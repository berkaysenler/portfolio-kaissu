'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Rocket, GraduationCap, Award, Heart, Target, FileText,
  Palette, Settings, Wrench, Code, Database, Globe, 
  Terminal, GitBranch, Container, FileCode, Layers, Monitor 
} from 'lucide-react';
import { SkillCard } from '@/components/ui/SkillCard';
import { ANIMATIONS } from '@/utils/constants';
import portfolioData from '@/data/config/portfolio.json';

export function AboutSkills() {
  const { personal, education, certifications, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'tools'>('frontend');

  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, any> = {
      'JavaScript': Code,
      'TypeScript': FileCode,
      'React': Layers,
      'Next.js': Monitor,
      'HTML/CSS': Globe,
      'Node.js': Terminal,
      'Python': Code,
      'PostgreSQL': Database,
      'Git': GitBranch,
      'Docker': Container
    };
    return iconMap[skillName] || Code;
  };

  const categories = [
    { id: 'frontend' as const, label: 'Frontend', icon: <Palette size={25} /> },
    { id: 'backend' as const, label: 'Backend', icon: <Settings size={25} /> },
    { id: 'tools' as const, label: 'Tools', icon: <Wrench size={25} /> }
  ];

  const skillCategories = {
    frontend: { skills: skills.frontend, description: 'Creating beautiful, responsive user interfaces' },
    backend: { skills: skills.backend, description: 'Building robust server-side applications and APIs' },
    tools: { skills: skills.tools, description: 'Development tools and technologies I work with' }
  };

  return (
    <section id="about" className="min-h-[50vh] flex items-center justify-center py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex justify-center">
        <div className="w-full grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* About Me Section - Takes 1 column */}
          <motion.div
            className="space-y-8 items-center flex flex-col"  
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4 pixel-text flex items-center flex-wrap justify-center">
                <Rocket className="mr-2 md:mr-3" size={28} />
                <span>About <span className="text-violet-500 pixel-glow">Me</span></span>
              </h2>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="bg-gray-800 border-4 border-gray-700 p-6 pixel-shadow">
                <h3 className="text-2xl font-mono font-bold text-violet-400 mb-4 pixel-text flex items-center gap-2">
                  <Rocket className="mr-3" size={24} />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed font-mono text-mg">
                  {personal.bio}
                </p>
              </div>

              <div className="bg-gray-800 border-4 border-gray-700 p-6 pixel-shadow">
                <h3 className="text-2xl font-mono font-bold text-violet-400 mb-4 pixel-text flex items-center gap-2">
                  <GraduationCap className="mr-3" size={24} />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-base font-mono text-white">{edu.degree}</h4>
                    <p className="text-violet-400 font-mono text-md">{edu.institution}</p>
                    <p className="text-md text-gray-400 font-mono">
                      {edu.duration} • GPA: {edu.gpa}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 border-4 border-gray-700 p-6 pixel-shadow">
                <h3 className="text-2xl font-mono font-bold text-violet-400 mb-4 pixel-text flex items-center gap-2">
                  <Heart className="mr-3" size={24} />
                  What I Love
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-800 border border-gray-700 p-3">
                    <h4 className="text-lg font-mono font-bold text-white mb-1">Problem Solving</h4>
                    <p className="text-gray-300 font-mono text-md">Breaking down complex challenges</p>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 p-3">
                    <h4 className="text-lg font-mono font-bold text-white mb-1">Clean Code</h4>
                    <p className="text-gray-300 font-mono text-md">Writing maintainable solutions</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border-4 border-gray-700 p-6 pixel-shadow">
                <h3 className="text-2xl font-mono font-bold text-violet-400 mb-4 pixel-text flex items-center gap-2">
                  <Target className="mr-3" size={24} />
                  Goals
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 gap-2">
                    <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
                    <span className="font-mono text-gray-300 text-md">Build impactful applications</span>
                  </div>
                  <div className="flex items-center space-x-2 gap-2">
                    <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
                    <span className="font-mono text-gray-300 text-md">Contribute to open source</span>
                  </div>
                  <div className="flex items-center space-x-2 gap-2">
                    <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
                    <span className="font-mono text-gray-300 text-md">Lead innovative projects</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border-4 border-gray-700 p-6 pixel-shadow">
                <h3 className="text-2xl font-mono font-bold text-violet-400 mb-4 pixel-text flex items-center gap-2">
                  <Award className="mr-3" size={24} />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-700 border border-gray-600 hover:border-violet-500 transition-colors">
                      <div>
                        <h4 className="font-mono text-white font-bold text-sm">{cert.name}</h4>
                        <p className="text-xs text-gray-400 font-mono">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-violet-400 font-mono">
                          {new Date(cert.date).getFullYear()}
                        </span>
                        {cert.credential && (
                          <a 
                            href={cert.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-xs text-gray-400 hover:text-violet-400 transition-colors mt-1"
                          >
                            View →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 border-4 border-gray-700 p-6 pixel-shadow">
                <h3 className="text-2xl font-mono font-bold text-violet-400 mb-4 pixel-text flex items-center gap-2">
                  <FileText className="mr-3" size={24} />
                  Resume
                </h3>
                <div className="text-center">
                  <p className="text-gray-300 font-mono text-sm mb-4">
                    View my resume to learn more about my background and experience.
                  </p>
                  <a
                    href={personal.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-black font-mono font-bold py-3 px-6 border-2 border-violet-400 hover:border-violet-300 transition-all duration-300 pixel-art"
                  >
                    <FileText size={20} />
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section - Takes 1 column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4 pixel-text flex items-center flex-wrap justify-center">
                <Code className="mr-2 md:mr-3" size={28} />
                <span>Technical <span className="text-violet-500 pixel-glow">Skills</span></span>
              </h2>
              
            </div>

            {/* Category Buttons */}
            <div className="flex flex-col sm:flex-row mb-6 gap-2 sm:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-1 py-3 sm:py-2 font-mono text-sm md:text-md font-bold transition-all duration-300 border-2 pixel-art flex flex-col sm:flex-col items-center ${
                    activeCategory === category.id
                      ? 'bg-violet-500 text-black border-violet-400'
                      : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-violet-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mb-1">{category.icon}</span>
                  <span className="text-xs sm:text-sm">{category.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              key={activeCategory}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-4">
                {skillCategories[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800 border-2 border-gray-700 p-4 hover:border-violet-500 transition-colors"
                  >
                    <div className="flex items-start mb-3 gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-violet-500 border border-violet-400 flex items-center justify-center pixel-art flex-shrink-0">
                        {React.createElement(getSkillIcon(skill.name), { size: 20, className: "text-black" })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-md font-mono font-bold text-white mb-1">
                          {skill.name}
                        </h3>
                        <span className="text-xs sm:text-sm font-mono text-violet-400 mb-2 block">
                          {skill.level >= 90 ? "Expert" : skill.level >= 75 ? "Advanced" : skill.level >= 60 ? "Intermediate" : "Learning"}
                        </span>
                        {skill.description && (
                          <p className="text-xs font-mono text-gray-400 leading-relaxed break-words">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}