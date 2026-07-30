'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '../shared/GlassCard';
import SectionTitle from '../shared/SectionTitle';
import { projects } from '@/data/projects';
import { ArrowUpRight, Globe } from 'lucide-react';

const categories = ['All', 'Full Stack', 'Shopify', 'Backend', 'Creative'];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" ref={ref}>
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%',
          bottom: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects that "
          highlight="speak louder."
          subtitle="A curated selection of work across development, design, and content — each built with intention and obsessive attention to quality."
          center
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex overflow-x-auto flex-nowrap md:flex-wrap md:justify-center gap-2 mb-12 pb-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                cursor: 'none',
                background: activeCategory === cat ? 'var(--white)' : 'var(--surface)',
                color: activeCategory === cat ? 'var(--bg)' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid transparent' : '1px solid var(--border)',
                fontWeight: activeCategory === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              layout
            >
              <GlassCard className="overflow-hidden h-full group" tilt>
                {/* Project visual header */}
                <div
                  className="relative w-full flex items-center justify-center"
                  style={{
                    height: 'clamp(140px, 30vw, 180px)',
                    background: `linear-gradient(135deg, ${project.accentColor}22 0%, transparent 60%), var(--bg-secondary)`,
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${project.accentColor}20`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}40`,
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                    >
                      ★ Featured
                    </div>
                  )}

                  {/* Visual placeholder or real thumbnail */}
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="text-5xl opacity-60"
                      style={{ filter: 'drop-shadow(0 0 20px currentColor)' }}
                    >
                      {project.category === 'Full Stack' ? '⚡' :
                       project.category === 'Shopify' ? '🛍️' :
                       project.category === 'Design' ? '🎨' :
                       project.category === 'Backend' ? '🔧' :
                       project.category === 'Video' ? '🎬' :
                       project.category === 'Creative' ? '🪐' : '✨'}
                    </div>
                  )}

                  {/* Hover overlay with links */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(2,2,5,0.8)', backdropFilter: 'blur(4px)' }}
                  >
                    <a
                      href={project.link}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                      style={{
                        background: 'var(--white)', color: 'var(--bg)',
                        cursor: 'none',
                        textDecoration: 'none',
                      }}
                    >
                      View <ArrowUpRight size={14} />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium glass transition-all"
                        style={{ color: 'var(--white)', cursor: 'none', textDecoration: 'none' }}
                      >
                        <Globe size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="font-space mb-2"
                    style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag" style={{ fontSize: '11px', padding: '2px 9px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* More work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '12px' }}>
            Want to see more work or discuss your project?
          </p>
          <a
            href="#contact"
            className="btn-ghost inline-flex"
            style={{ textDecoration: 'none', cursor: 'none' }}
          >
            Let&apos;s Talk <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
