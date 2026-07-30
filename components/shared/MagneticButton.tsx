'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  id?: string;
}

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  href,
  onClick,
  id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 80;
      if (dist < maxDist) {
        const strength = (maxDist - dist) / maxDist;
        el.style.transform = `translate(${dx * strength * 0.35}px, ${dy * strength * 0.35}px)`;
      } else {
        el.style.transform = 'translate(0, 0)';
      }
    };

    const handleLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    const handleEnter = () => {
      el.style.transition = 'transform 0.1s ease';
    };

    window.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        id={id}
        href={href}
        className={cn(baseClass, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      id={id}
      onClick={onClick}
      className={cn(baseClass, className)}
    >
      {children}
    </button>
  );
}
