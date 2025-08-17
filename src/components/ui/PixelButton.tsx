'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface PixelButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function PixelButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button'
}: PixelButtonProps) {
  const baseClasses = 'relative font-mono font-bold transition-all duration-200 select-none pixel-art';
  
  const variantClasses = {
    primary: 'bg-violet-500 text-black border-4 border-violet-400 shadow-[8px_8px_0px_0px_#581C87] hover:shadow-[4px_4px_0px_0px_#581C87] hover:translate-x-[4px] hover:translate-y-[4px] before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:border-2 before:border-black before:pointer-events-none',
    secondary: 'bg-purple-500 text-white border-4 border-purple-400 shadow-[8px_8px_0px_0px_#7C2D92] hover:shadow-[4px_4px_0px_0px_#7C2D92] hover:translate-x-[4px] hover:translate-y-[4px] before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:border-2 before:border-black before:pointer-events-none',
    outline: 'bg-transparent text-violet-400 border-4 border-violet-500 shadow-[8px_8px_0px_0px_#581C87] hover:bg-violet-500 hover:text-black hover:shadow-[4px_4px_0px_0px_#581C87] hover:translate-x-[4px] hover:translate-y-[4px] before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:border-2 before:border-black before:pointer-events-none'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed shadow-none translate-x-[8px] translate-y-[8px]' 
    : 'cursor-pointer';

  return (
    <motion.button
      type={type}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}