'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className, hover = true, tilt = false, onClick }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tilt) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.02)`;
    };

    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [tilt]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        'glass rounded-2xl transition-all duration-300',
        hover && 'hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.14)]',
        tilt && 'tilt-card',
        className
      )}
      style={{ transition: tilt ? 'transform 0.15s ease' : undefined }}
    >
      {children}
    </div>
  );
}
