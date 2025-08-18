'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/config/portfolio.json';

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-6 flex justify-center">
        <div className="text-center space-y-4">
          {/* Copyright and year */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 font-mono text-sm"
          >
            <span>© {currentYear} {personal.name}</span>
            <span className="hidden md:block">•</span>
            <span>All rights reserved</span>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 font-mono text-xs"
          >
            <span>Powered by Next.js • TypeScript • Tailwind CSS • Framer Motion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}