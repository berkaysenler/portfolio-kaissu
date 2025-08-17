// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { 
//   Palette, Settings, Wrench, Code, Database, Globe, 
//   Terminal, GitBranch, Container, FileCode, Layers, Monitor 
// } from 'lucide-react';
// import { SkillCard } from '@/components/ui/SkillCard';
// import { ANIMATIONS } from '@/utils/constants';
// import portfolioData from '@/data/config/portfolio.json';

// export function Skills() {
//   const { skills } = portfolioData;
//   const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'tools'>('frontend');

//   const getSkillIcon = (skillName: string) => {
//     const iconMap: Record<string, any> = {
//       'JavaScript': Code,
//       'TypeScript': FileCode,
//       'React': Layers,
//       'Next.js': Monitor,
//       'HTML/CSS': Globe,
//       'Node.js': Terminal,
//       'Python': Code,
//       'PostgreSQL': Database,
//       'Git': GitBranch,
//       'Docker': Container
//     };
//     return iconMap[skillName] || Code;
//   };

//   const categories = [
//     { id: 'frontend' as const, label: 'Frontend', icon: <Palette size={20} /> },
//     { id: 'backend' as const, label: 'Backend', icon: <Settings size={20} /> },
//     { id: 'tools' as const, label: 'Tools', icon: <Wrench size={20} /> }
//   ];

//   const skillCategories = {
//     frontend: { skills: skills.frontend, description: 'Creating beautiful, responsive user interfaces' },
//     backend: { skills: skills.backend, description: 'Building robust server-side applications and APIs' },
//     tools: { skills: skills.tools, description: 'Development tools and technologies I work with' }
//   };

//   return (
//     <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 to-black">
//       <div className="container max-w-7xl mx-auto px-6">
//         <motion.div
//           className="text-center mb-8"
//           {...ANIMATIONS.fadeIn}
//         >
//           <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4 pixel-text">
//             Technical <span className="text-violet-500 pixel-glow">Skills</span>
//           </h2>
//           <div className="w-16 h-1 bg-violet-500 mx-auto mb-4 pixel-art"></div>
//           <p className="text-gray-400 max-w-xl mx-auto font-mono text-sm">
//             Technologies and tools I use to bring ideas to life
//           </p>
//         </motion.div>

//         <div className="w-full max-w-6xl">
//           <motion.div
//             className="flex flex-wrap justify-center gap-6 mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`relative px-6 py-3 font-mono font-bold transition-all duration-300 border-4 pixel-art ${
//                   activeCategory === category.id
//                     ? 'bg-violet-500 text-black border-violet-400 shadow-[8px_8px_0px_0px_#581C87] pixel-shadow'
//                     : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-violet-500 pixel-shadow-hover'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="mr-2">{category.icon}</span>
//                 {category.label}
//               </motion.button>
//             ))}
//           </motion.div>

//           <motion.div
//             key={activeCategory}
//             className="space-y-12 text-center"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div>
//               <h3 className="text-3xl font-mono font-bold text-violet-400 mb-4 flex items-center justify-center pixel-text">
//                 <span className="mr-3">{categories.find(c => c.id === activeCategory)?.icon}</span>
//                 {categories.find(c => c.id === activeCategory)?.label} Skills
//               </h3>
//               <p className="text-gray-300 font-mono text-lg max-w-2xl mx-auto mt-3">
//                 {skillCategories[activeCategory].description}
//               </p>
//             </div>
            
//             <div className="w-full grid md:grid-cols-2 gap-10 justify-items-stretch">
//               {skillCategories[activeCategory].skills.map((skill, index) => (
//                 <SkillCard
//                   key={skill.name}
//                   skill={skill}
//                   delay={index * 0.1}
//                   Icon={getSkillIcon(skill.name)}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }