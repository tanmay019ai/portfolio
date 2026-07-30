'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import SectionTitle from '../shared/SectionTitle';

const services = [
  { icon: '💻', label: 'Full Stack Development' },
  { icon: '🛍️', label: 'Shopify Development' },
  { icon: '🔧', label: 'Backend & APIs' },
  { icon: '🎨', label: 'Graphic Design' },
  { icon: '🎬', label: 'Video Editing' },
  { icon: '🤖', label: 'AI & Automation' },
  { icon: '🗄️', label: 'Database Management' },
  { icon: '☁️', label: 'Cloud Deployment' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="section" ref={ref}>
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-20%',
          top: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(124,106,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Glass card with floating */}
          <motion.div style={{ y }} className="relative">
            <GlassCard className="p-5 md:p-10" tilt>
              {/* Real Photo */}
              <div
                className="w-full rounded-xl mb-6 overflow-hidden relative group"
                style={{
                  height: '350px',
                  border: '1px solid rgba(124,106,255,0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src="/assets/tanmay-photo.jpg"
                  alt="Tanmay Srivastav"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <span key={s.label} className="tag">
                    {s.icon} {s.label}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)' }}>Open to Work</span>
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <div>
            <SectionTitle
              eyebrow="About Me"
              title="More than just a "
              highlight="developer."
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              <p style={{ fontSize: 'clamp(14px, 3.5vw, 17px)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                I&apos;m <strong style={{ color: 'var(--white)' }}>Tanmay Srivastav</strong> — a full-stack developer,
                AI enthusiast, and creative technologist originally from <strong style={{ color: 'var(--white)' }}>Basti, Uttar Pradesh</strong>,
                currently pursuing <strong style={{ color: 'var(--white)' }}>B.Tech in CSE (AI & ML) at Galgotias University, Greater Noida</strong>.
              </p>
              <p style={{ fontSize: 'clamp(14px, 3.5vw, 17px)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                From engineering scalable backends at Twwios Technologies, to building
                production web systems at Webdok, to crafting responsive frontends at SheenEdge —
                I&apos;ve shipped real products for real clients across the full stack.
              </p>
              <p style={{ fontSize: 'clamp(14px, 3.5vw, 17px)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                My goal: <strong style={{ color: 'var(--white)' }}>build things that actually work — fast,
                scalable, and beautifully engineered.</strong>
              </p>
            </motion.div>

            {/* Divider */}
            <div className="divider my-8" />

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: 'Location', value: 'Basti, Uttar Pradesh 🇮🇳' },
                { label: 'Education', value: 'Galgotias Univ (B.Tech CSE AI/ML)' },
                { label: 'Phone', value: '+91 84710 48881' },
                { label: 'Email', value: 'tanmaysr019@gmail.com' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
