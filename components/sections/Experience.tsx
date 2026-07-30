'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from '../shared/GlassCard';
import SectionTitle from '../shared/SectionTitle';
import { experience } from '@/data/experience';
import { Briefcase, MapPin } from 'lucide-react';


export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section" ref={ref}>
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-5%',
          top: '40%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,106,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="The journey so "
          highlight="far."
          subtitle="Building real products for real clients — across full-stack development, backend engineering, and frontend craft."
        />


        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, var(--border) 20%, var(--border) 80%, transparent)' }}
          />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="pl-0 md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 w-10 h-10 rounded-full hidden md:flex items-center justify-center"
                  style={{
                    background: item.current
                      ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                      : 'var(--surface)',
                    border: `1px solid ${item.current ? 'var(--accent)' : 'var(--border)'}`,
                    boxShadow: item.current ? '0 0 20px var(--accent-glow)' : 'none',
                    zIndex: 1,
                  }}
                >
                  <Briefcase size={16} style={{ color: item.current ? '#fff' : 'var(--text-muted)' }} />
                </div>

                <GlassCard className="p-6 group hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="font-space"
                          style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                        >
                          {item.role}
                        </h3>
                        {item.current && (
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{ background: 'rgba(124,106,255,0.15)', color: 'var(--accent-2)', border: '1px solid rgba(124,106,255,0.3)', fontSize: '11px' }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontWeight: 500 }}>{item.company}</span>
                        {item.location && (
                          <span className="flex items-center gap-1" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                            <MapPin size={11} /> {item.location}
                          </span>
                        )}
                      </div>

                    </div>
                    <div
                      className="glass px-3 py-1.5 rounded-lg"
                      style={{ fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}
                    >
                      {item.period}
                    </div>
                  </div>

                  <p style={{ fontSize: 'clamp(13px, 3vw, 14px)', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="tag" style={{ fontSize: '11px', padding: '3px 10px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
