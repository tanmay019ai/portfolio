'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from '../shared/GlassCard';
import SectionTitle from '../shared/SectionTitle';
import { expertise } from '@/data/expertise';

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="expertise" className="section" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-10%',
          top: '30%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(124,106,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        <SectionTitle
          eyebrow="My Expertise"
          title="Everything you need, "
          highlight="under one roof."
          subtitle="From code to design to content — I handle the full spectrum of digital creation so you don't have to juggle multiple freelancers."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
            >
              <GlassCard
                className="p-5 md:p-7 h-full group"
                tilt
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-2xl"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}35`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-space mb-3"
                  style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '16px' }}
                >
                  {item.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span key={skill} className="tag" style={{ fontSize: '11px', padding: '3px 10px' }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
