'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface PixelAvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function PixelAvatar({ 
  src, 
  alt = 'Avatar', 
  size = 'lg', 
  className = '' 
}: PixelAvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const PixelFallback = () => (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-violet-500 to-violet-600 border-4 border-violet-400 flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-2 bg-violet-400 opacity-30"></div>
      <div className="absolute top-4 left-4 w-2 h-2 bg-black"></div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-black"></div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black"></div>
      <div className="text-black font-mono font-bold text-xs">DEV</div>
    </div>
  );

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeClasses[size]} object-cover border-4 border-violet-500 shadow-[8px_8px_0px_0px_#581C87] image-rendering-pixelated`}
          onError={() => setImageError(true)}
          style={{ imageRendering: 'pixelated' }}
        />
      ) : (
        <PixelFallback />
      )}
      
      <motion.div
        className="absolute -inset-1 border-2 border-violet-400 opacity-0"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}