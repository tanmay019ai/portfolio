'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from '../shared/MagneticButton';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

const HeroScene = dynamic(() => import('../three/HeroScene'), {
  ssr: false,
  loading: () => null,
});

const titles = [
  'Building Digital Experiences Beyond Gravity.',
  'Beyond Code. Beyond Design. Beyond Limits.',
  'Engineering Ideas Into Reality.',
  'Where Code Meets Creativity.',
  'Creating Products That Scale.',
];

const stats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '30+', label: 'Brands Designed' },
  { value: '3+', label: 'Years Experience' },
  { value: '∞', label: 'Ideas Per Day' },
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIdx((i) => (i + 1) % titles.length);
        setVisible(true);
      }, 500);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
      <section
        id="home"
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          minHeight: '100dvh',
          background: 'var(--bg)',
        }}
      >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

      {/* Radial gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(124,106,255,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Three.js Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className="flex items-center gap-2 px-4 py-2 glass rounded-full"
              style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}
            >
              <Sparkles size={12} style={{ color: 'var(--accent)' }} />
              Available for freelance work
              <span
                className="w-2 h-2 rounded-full animate-pulse-glow"
                style={{ background: '#4ade80' }}
              />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-space gradient-text-subtle"
            style={{
              fontSize: 'clamp(32px, 7vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: '12px',
            }}
          >
            Tanmay
            <br />
            Srivastav
          </motion.h1>

          {/* Animated subtitle */}
          <div style={{ height: 'clamp(36px, 5vw, 54px)', overflow: 'hidden', marginBottom: '28px' }}>
            <AnimatePresence mode="wait">
              {visible && (
                <motion.p
                  key={titleIdx}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className="gradient-text font-space"
                  style={{
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {titles[titleIdx]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              maxWidth: '580px',
              marginBottom: '40px',
            }}
          >
            I don&apos;t just build websites. I design brands, engineer scalable applications,
            edit cinematic content, and help businesses grow through technology,
            automation, and creative storytelling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <MagneticButton
              id="hero-view-projects"
              href="#projects"
              variant="primary"
            >
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              id="hero-hire-me"
              href="#contact"
              variant="ghost"
            >
              Hire Me
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span
                  className="font-space gradient-text"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
