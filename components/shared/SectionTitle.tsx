'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = false,
  className,
}: SectionTitleProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <div ref={ref} className={cn('mb-16', center && 'text-center', className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <span className="w-5 h-px bg-[var(--accent)]" />
          <span
            style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {eyebrow}
          </span>
          <span className="w-5 h-px bg-[var(--accent)]" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-space"
        style={{
          fontSize: 'clamp(32px, 5vw, 54px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'var(--text-primary)',
        }}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl"
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            ...(center ? { margin: '20px auto 0' } : {}),
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
