'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import SectionTitle from '../shared/SectionTitle';
import { Play, Video, ExternalLink } from 'lucide-react';

const videoProjects = [
  {
    title: 'Commercial Ad Production',
    description: 'Full production pipeline: script, edit, color grade, sound design, motion graphics.',
    tags: ['Commercial', 'Motion Graphics', 'Color Grading'],
    icon: '📹',
    accentColor: '#f06',
  },
  {
    title: 'AI-Generated Content',
    description: 'AI video creation and nostalgia-driven content for YouTube — reaching thousands of views.',
    tags: ['AI Videos', 'YouTube', 'Content Strategy'],
    icon: '🤖',
    accentColor: '#7c6aff',
  },
  {
    title: 'Short-Form & Reels',
    description: 'Cinematic reels and short-form content optimized for Instagram, YouTube Shorts.',
    tags: ['Reels', 'Short-form', 'YouTube Shorts'],
    icon: '🎞️',
    accentColor: '#c4f',
  },
];

export default function VideoShowcase() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="video" className="section" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '30%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(240,0,102,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        <SectionTitle
          eyebrow="Video & Content Creation"
          title="Cinematic content that "
          highlight="moves people."
          subtitle="From commercial ads to AI-generated short-form content — I produce, edit, color grade, and tell stories through video that drive engagement and growth."
          center
        />

        {/* Main video player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <GlassCard className="overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#000' }}>
              {/* Real video element */}
              <video
                ref={videoRef}
                src="/assets/showreel.mp4"
                className="w-full h-full object-cover"
                controls={playing}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                style={{ display: 'block' }}
              />

              {/* Custom play overlay — hides once playing */}
              {!playing && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,0,102,0.12) 0%, rgba(2,2,5,0.85) 100%)',
                  }}
                  onClick={handlePlay}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

                  {/* Ambient glow orb */}
                  <div
                    className="absolute"
                    style={{
                      width: '400px',
                      height: '400px',
                      borderRadius: '50%',
                      background: 'radial-gradient(ellipse, rgba(240,0,102,0.15) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Play button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '2px solid rgba(255,255,255,0.35)',
                      backdropFilter: 'blur(16px)',
                      boxShadow: '0 0 80px rgba(240,0,102,0.4), 0 0 30px rgba(255,255,255,0.1)',
                    }}
                  >
                    <Play size={32} style={{ color: '#fff', marginLeft: '5px' }} />
                  </motion.div>

                  {/* Label */}
                  <div className="relative z-10 text-center">
                    <p
                      className="font-space"
                      style={{ fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}
                    >
                      Play Showreel
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>
                      Video Editing & Content Creation
                    </p>
                  </div>

                  {/* Corner badge */}
                  <div
                    className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(240,0,102,0.18)',
                      border: '1px solid rgba(240,0,102,0.35)',
                      color: '#ff3377',
                    }}
                  >
                    🎬 Showreel 2025
                  </div>
                </motion.div>
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* YouTube channel card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <a
            href="https://www.youtube.com/@thetanmay6750"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', cursor: 'none' }}
          >
            <GlassCard className="p-5 group hover:border-red-500/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* YouTube thumbnail preview */}
                <div
                  className="w-28 h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,0,0,0.15), rgba(0,0,0,0.8))',
                    border: '1px solid rgba(255,0,0,0.2)',
                  }}
                >
                  <Video size={28} style={{ color: '#ff0000' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Video size={14} style={{ color: '#ff0000', flexShrink: 0 }} />
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      YouTube Channel
                    </span>
                  </div>
                  <h4
                    className="font-space"
                    style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.02em' }}
                  >
                    @thetanmay6750
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                    AI-generated videos &amp; nostalgia content — cinematic short-form storytelling
                  </p>
                </div>

                <ExternalLink
                  size={18}
                  style={{ color: 'var(--text-muted)', flexShrink: 0, transition: 'color 0.2s' }}
                  className="group-hover:text-white"
                />
              </div>
            </GlassCard>
          </a>
        </motion.div>

        {/* Video service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videoProjects.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <GlassCard className="p-6 h-full group relative overflow-hidden" tilt>
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-2xl"
                  style={{
                    background: `${item.accentColor}15`,
                    border: `1px solid ${item.accentColor}30`,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-space mb-2"
                  style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: '11px', padding: '2px 9px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)` }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
