export const PIXEL_COLORS = {
  primary: '#8B5CF6',
  secondary: '#A855F7',
  accent: '#C084FC',
  background: '#0a0a0a',
  surface: '#1a1a1a',
  text: '#ffffff',
  textSecondary: '#b0b0b0',
  border: '#333333',
  success: '#8B5CF6',
  warning: '#F59E0B',
  error: '#EF4444',
  darkPurple: '#581C87',
  lightPurple: '#DDD6FE'
} as const;

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  }
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;