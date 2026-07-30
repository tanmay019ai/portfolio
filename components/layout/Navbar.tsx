'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../shared/MagneticButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#projects' },
  { label: 'Video', href: '#video' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: '0 32px',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: '1200px',
            height: '72px',
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 font-space font-bold cursor-none"
            style={{ fontSize: '17px', letterSpacing: '-0.02em', color: 'var(--white)' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 shadow-sm flex items-center justify-center bg-black/40">
              <img src="/assets/ts-logo.png" alt="TS Logo" className="w-full h-full object-cover" />
            </div>
            TS<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.div>

          {/* Glass pill nav — desktop */}
          <AnimatePresence>
            {scrolled ? (
              <motion.div
                key="pill"
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="hidden md:flex items-center gap-1 glass rounded-full px-3 py-2"
              >
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="nav-link px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
                    style={{ cursor: 'none', background: 'none', border: 'none', fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                ))}
              </motion.div>
            ) : (
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="nav-link"
                    style={{ cursor: 'none', background: 'none', border: 'none' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* CTA and Mobile hamburger */}
          <div className="flex items-center gap-4">
            <MagneticButton
              variant="ghost"
              href="#contact"
              className="text-sm px-4 py-2"
            >
              Hire Me
            </MagneticButton>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              style={{ cursor: 'none', background: 'none', border: 'none' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center glass-strong"
            style={{ backgroundColor: 'rgba(2,2,5,0.97)' }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="font-space"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 700,
                  color: 'var(--text-secondary)', padding: '12px 32px',
                  letterSpacing: '-0.03em', transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--white)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-secondary)'; }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
