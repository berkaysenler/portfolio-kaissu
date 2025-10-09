'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface HorizontalTimelineItemProps {
  item: {
    title: string;
    subtitle?: string;
    description?: string;
    href?: string;
    tags?: string[];
    rightMeta?: string; // e.g. "★ 123" or "Next.js • TS"
  };
  index: number;
}

export function HorizontalTimelineItem({ item, index }: HorizontalTimelineItemProps) {
  return (
    <motion.div
      className="relative min-w-[270px] max-w-[300px] snap-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {/* dot on the track */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-violet-500 border-4 border-gray-900 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10" />

      {/* card */}
      <motion.div
        className="bg-gray-800 border-2 border-gray-700 p-6 relative shadow-[8px_8px_0px_0px_#374151] hover:border-violet-500 transition-colors group"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-base md:text-lg font-mono font-bold text-white group-hover:text-violet-400 transition-colors">
            {item.title}
          </h3>
          {item.rightMeta && (
            <span className="ml-3 text-xs font-mono text-violet-400 whitespace-nowrap">
              {item.rightMeta}
            </span>
          )}
        </div>

        {item.subtitle && (
          <p className="text-violet-400 font-mono text-xs mt-1">{item.subtitle}</p>
        )}

        {item.description && (
          <p className="text-gray-300 font-mono text-xs leading-relaxed mt-3 line-clamp-4">
            {item.description}
          </p>
        )}

        {!!item.tags?.length && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.slice(0, 5).map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-[11px] font-mono border border-gray-600 group-hover:border-violet-500 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {item.href && (
          <button
            onClick={() => window.open(item.href!, '_blank')}
            className="mt-4 inline-flex items-center px-3 py-1.5 border-2 border-violet-500 text-xs font-mono font-bold bg-gray-900 text-violet-300 hover:bg-violet-500 hover:text-black transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-2" />
            View
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
