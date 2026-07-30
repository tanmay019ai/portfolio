'use client';

import { Globe, ExternalLink, Mail, Link, Video } from 'lucide-react';

const socials = [
  { icon: Globe, label: 'GitHub', href: 'https://github.com/tanmay019ai' },
  { icon: Link, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanmay-srivastav-56009b32b' },
  { icon: ExternalLink, label: 'Instagram', href: 'https://instagram.com/tanmaysrivastav' },
  { icon: Video, label: 'YouTube', href: 'https://www.youtube.com/@thetanmay6750' },
  { icon: Mail, label: 'Email', href: 'mailto:tanmaysr019@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: '1px solid var(--border)', padding: '48px 0' }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div>
          <div className="font-space font-bold mb-2" style={{ fontSize: '20px', color: 'var(--white)', letterSpacing: '-0.02em' }}>
            Tanmay Srivastav<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Building Digital Experiences Beyond Gravity
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
            Ghaziabad, India 🇮🇳
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
            +91 84710 48881
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full glass hover:border-white/25 transition-all duration-300 group"
              style={{ cursor: 'none', textDecoration: 'none' }}
            >
              <Icon size={16} style={{ color: 'var(--text-secondary)' }} className="group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Tanmay Srivastav
        </p>
      </div>
    </footer>
  );
}
