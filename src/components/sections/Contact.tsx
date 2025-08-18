'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Globe, ExternalLink } from 'lucide-react';
import { PixelButton } from '@/components/ui/PixelButton';
import { ANIMATIONS } from '@/utils/constants';
import portfolioData from '@/data/config/portfolio.json';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function Contact() {
  const { personal, social } = portfolioData;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly.' 
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="min-h-[50vh] flex items-center justify-center py-28 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          className="text-center mb-20"
          {...ANIMATIONS.fadeIn}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-4 pixel-text">
            Get In <span className="text-violet-500 pixel-glow">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-lg">
            Ready to start a project together or just want to say hello? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 border-4 border-gray-700 p-8 pixel-shadow">
              <h3 className="text-2xl font-mono font-bold text-violet-400 mb-6 pixel-text">
                Let's Work Together
              </h3>
              <p className="text-gray-300 font-mono leading-relaxed mb-6">
                I'm currently seeking new opportunities and exciting projects. 
                Whether you have a specific role in mind, a project idea, 
                or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-gray-700 border border-gray-600 hover:border-violet-500 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="text-violet-400 group-hover:text-violet-300" size={24} />
                  <div>
                    <h4 className="font-mono text-white font-bold">Email</h4>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="font-mono text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-gray-700 border border-gray-600"
                >
                  <MapPin className="text-violet-400" size={24} />
                  <div>
                    <h4 className="font-mono text-white font-bold">Location</h4>
                    <p className="font-mono text-gray-400">{personal.location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="font-mono text-white font-bold mb-4">Connect with me</h4>
                <div className="flex space-x-4 gap-3">
                  {Object.entries(social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700 hover:bg-violet-600 flex items-center justify-center border-2 border-gray-600 hover:border-violet-500 transition-colors text-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {getPlatformIcon(platform)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border-2 border-gray-700 p-8 shadow-[8px_8px_0px_0px_#374151]">
              <h3 className="text-xl font-mono font-bold text-violet-400 mb-4">
                Quick Response Promise
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                I typically respond to emails within 24 hours. 
                For urgent matters, feel free to reach out on LinkedIn 
                for a faster response.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 border-2 border-gray-700 p-8 shadow-[8px_8px_0px_0px_#374151]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-mono font-bold text-violet-400 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-white font-bold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-violet-500 text-white font-mono transition-colors outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-white font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-violet-500 text-white font-mono transition-colors outline-none"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-white font-bold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-violet-500 text-white font-mono transition-colors outline-none"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-white font-bold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-violet-500 text-white font-mono transition-colors outline-none resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              {status.message && (
                <motion.div
                  className={`flex items-center space-x-2 p-3 border-2 ${
                    status.type === 'success' 
                      ? 'border-violet-500 bg-violet-500/10 text-violet-400' 
                      : status.type === 'error'
                      ? 'border-red-500 bg-red-500/10 text-red-400'
                      : 'border-blue-500 bg-blue-500/10 text-blue-400'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' && <CheckCircle size={20} />}
                  {status.type === 'error' && <AlertCircle size={20} />}
                  <span className="font-mono text-sm">{status.message}</span>
                </motion.div>
              )}

              <PixelButton
                type="submit"
                disabled={!isFormValid || status.type === 'loading'}
                variant="primary"
                size="lg"
                className="w-full h-15"
              >
                {status.type === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </PixelButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getPlatformIcon(platform: string) {
  const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
    portfolio: <Globe size={20} />
  };
  return iconMap[platform] || <ExternalLink size={20} />;
}