'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X, Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, ExternalLink } from 'lucide-react';
import { PixelButton } from './PixelButton';
import portfolioData from '@/data/config/portfolio.json';

export function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const { personal, social } = portfolioData;

  const toggleBubble = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-violet-500 hover:bg-violet-600 text-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#581C87] hover:shadow-[2px_2px_0px_0px_#581C87] transition-all duration-200 z-50 border-2 border-violet-400"
        onClick={toggleBubble}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          backgroundColor: isOpen ? '#ef4444' : '#8B5CF6'
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 bg-gray-800 border-2 border-gray-700 shadow-[8px_8px_0px_0px_#374151] z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-mono font-bold text-violet-400 mb-4 flex items-center">
                <MessageCircle className="mr-2" size={20} />
                Let's Connect!
              </h3>
              
              <p className="text-gray-300 font-mono text-sm mb-6">
                I'm always open to discussing new opportunities, 
                collaborations, or just having a chat about technology.
              </p>

              <div className="space-y-4 mb-6">
                <motion.a
                  href={`mailto:${personal.email}`}
                  className="flex items-center space-x-3 p-3 bg-gray-700 hover:bg-gray-600 transition-colors border border-gray-600 hover:border-violet-500 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="text-violet-400 group-hover:text-violet-300" size={18} />
                  <div>
                    <div className="font-mono text-white text-sm">Email</div>
                    <div className="font-mono text-gray-400 text-xs">{personal.email}</div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-3 p-3 bg-gray-700 border border-gray-600"
                >
                  <MapPin className="text-violet-400" size={18} />
                  <div>
                    <div className="font-mono text-white text-sm">Location</div>
                    <div className="font-mono text-gray-400 text-xs">{personal.location}</div>
                  </div>
                </motion.div>
              </div>

              <div className="flex space-x-2 mb-4">
                {Object.entries(social).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-violet-600 flex items-center justify-center border border-gray-600 hover:border-violet-500 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-gray-300 hover:text-white">
                      {getPlatformIcon(platform)}
                    </span>
                  </motion.a>
                ))}
              </div>

              <PixelButton
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Send Message
              </PixelButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function getPlatformIcon(platform: string) {
  const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={16} />,
    linkedin: <Linkedin size={16} />,
    twitter: <Twitter size={16} />,
    portfolio: <Globe size={16} />
  };
  return iconMap[platform] || <ExternalLink size={16} />;
}