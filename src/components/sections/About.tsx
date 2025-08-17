// 'use client';

// import { motion } from 'framer-motion';
// import { Rocket, GraduationCap, Award, Heart, Target } from 'lucide-react';
// import { ANIMATIONS } from '@/utils/constants';
// import portfolioData from '@/data/config/portfolio.json';

// export function About() {
//   const { personal, education, certifications } = portfolioData;

//   return (
//     <section id="about" className="py-16 bg-gradient-to-b from-black to-gray-900">
//       <div className="container max-w-7xl mx-auto px-6">
//         <motion.div
//           className="text-center mb-12"
//           {...ANIMATIONS.fadeIn}
//         >
//           <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4 pixel-text">
//             About <span className="text-violet-500 pixel-glow">Me</span>
//           </h2>
//           <div className="w-16 h-1 bg-violet-500 mx-auto pixel-art"></div>
//         </motion.div>

//         <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-start">
//           <motion.div
//             className="space-y-12"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow">
//               <h3 className="text-2xl font-mono font-bold text-violet-400 mb-6 pixel-text flex items-center">
//                 <Rocket className="mr-3" size={28} />
//                 My Journey
//               </h3>
//               <p className="text-gray-300 leading-relaxed font-mono">
//                 {personal.bio}
//               </p>
//             </div>

//             <div className="bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow">
//               <h3 className="text-2xl font-mono font-bold text-violet-400 mb-6 pixel-text flex items-center">
//                 <GraduationCap className="mr-3" size={28} />
//                 Education
//               </h3>
//               {education.map((edu, index) => (
//                 <div key={index} className="space-y-2">
//                   <h4 className="text-lg font-mono text-white">{edu.degree}</h4>
//                   <p className="text-violet-400 font-mono">{edu.institution}</p>
//                   <p className="text-sm text-gray-400 font-mono">
//                     {edu.duration} • GPA: {edu.gpa}
//                   </p>
//                   <div className="flex flex-wrap gap-1 mt-2">
//                     {edu.coursework.map((course, courseIndex) => (
//                       <span
//                         key={courseIndex}
//                         className="px-2 py-1 bg-gray-700 text-xs font-mono text-gray-300 border border-gray-600"
//                       >
//                         {course}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow">
//               <h3 className="text-2xl font-mono font-bold text-violet-400 mb-6 pixel-text flex items-center">
//                 <Award className="mr-3" size={28} />
//                 Certifications
//               </h3>
//               <div className="space-y-3">
//                 {certifications.map((cert, index) => (
//                   <div key={index} className="flex justify-between items-center">
//                     <div>
//                       <h4 className="font-mono text-white">{cert.name}</h4>
//                       <p className="text-sm text-gray-400 font-mono">{cert.issuer}</p>
//                     </div>
//                     <span className="text-xs text-violet-400 font-mono">
//                       {new Date(cert.date).getFullYear()}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="space-y-12"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow text-center">
//               <h3 className="text-3xl font-mono font-bold text-violet-400 mb-6 pixel-text flex items-center justify-center">
//                 <Heart className="mr-3" size={32} />
//                 What I Love
//               </h3>
//               <div className="space-y-6">
//                 <div className="bg-gray-700 border-2 border-gray-600 p-4 pixel-art">
//                   <h4 className="text-lg font-mono font-bold text-white mb-2">Problem Solving</h4>
//                   <p className="text-gray-300 font-mono text-sm">Breaking down complex challenges into elegant solutions</p>
//                 </div>
//                 <div className="bg-gray-700 border-2 border-gray-600 p-4 pixel-art">
//                   <h4 className="text-lg font-mono font-bold text-white mb-2">Clean Code</h4>
//                   <p className="text-gray-300 font-mono text-sm">Writing maintainable, readable, and efficient code</p>
//                 </div>
//                 <div className="bg-gray-700 border-2 border-gray-600 p-4 pixel-art">
//                   <h4 className="text-lg font-mono font-bold text-white mb-2">Learning</h4>
//                   <p className="text-gray-300 font-mono text-sm">Constantly exploring new technologies and best practices</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow text-center">
//               <h3 className="text-3xl font-mono font-bold text-violet-400 mb-6 pixel-text flex items-center justify-center">
//                 <Target className="mr-3" size={32} />
//                 Goals
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
//                   <span className="font-mono text-gray-300">Build impactful applications</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
//                   <span className="font-mono text-gray-300">Contribute to open source</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
//                   <span className="font-mono text-gray-300">Mentor other developers</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 bg-violet-500 pixel-art"></div>
//                   <span className="font-mono text-gray-300">Lead innovative projects</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }