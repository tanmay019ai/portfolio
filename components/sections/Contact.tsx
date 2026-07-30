'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '../shared/GlassCard';
import SectionTitle from '../shared/SectionTitle';
import { Send, Mail, Globe, Link, ExternalLink, X, ArrowRight } from 'lucide-react';

const socials = [
  { icon: Globe, label: 'GitHub', href: 'https://github.com/tanmay019ai', color: '#fff' },
  { icon: Link, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanmay-srivastav-56009b32b', color: '#0a66c2' },
  { icon: ExternalLink, label: 'Instagram', href: 'https://instagram.com/tanmaysrivastav', color: '#e1306c' },
  { icon: X, label: 'Twitter / X', href: 'https://twitter.com/tanmaysrivastav', color: '#fff' },
  { icon: Globe, label: 'YouTube', href: 'https://www.youtube.com/@thetanmay6750', color: '#ff0000' },
  { icon: ExternalLink, label: 'Phone — +91 84710 48881', href: 'tel:+918471048881', color: '#4ade80' },
  { icon: Mail, label: 'Email — tanmaysr019@gmail.com', href: 'mailto:tanmaysr019@gmail.com', color: '#7c6aff' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry: ${form.project}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.project}\n\nMessage:\n${form.message}`);
    window.open(`mailto:tanmaysr019@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '20%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,106,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            — Ready to launch?
          </p>
          <h2
            className="font-space gradient-text-subtle"
            style={{
              fontSize: 'clamp(40px, 8vw, 88px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: '20px',
            }}
          >
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Extraordinary.</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Have a project in mind? Looking for a collaborator? Want to discuss ideas?
            I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <h3
                className="font-space mb-6"
                style={{ fontSize: '20px', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.02em' }}
              >
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <span style={{ fontSize: '48px' }}>🚀</span>
                  <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--white)' }}>Message sent!</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { id: 'contact-name', name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'contact-email', name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { id: 'contact-project', name: 'project', label: 'Project Type', type: 'text', placeholder: 'Web app, Shopify store, Design...' },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.id}
                        style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        required={field.name !== 'project'}
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--border)',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          fontSize: '14px',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          cursor: 'text',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(124,106,255,0.5)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={4}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'border-color 0.2s',
                        cursor: 'text',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(124,106,255,0.5)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2 mt-2"
                    style={{ width: '100%', cursor: 'none' }}
                  >
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Right: Info + socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Response time card */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }}
                >
                  ⚡
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>Fast Response</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Usually within 24 hours</div>
                </div>
              </div>
              <div className="divider mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Timezone', value: 'IST (UTC+5:30)' },
                  { label: 'Availability', value: 'Mon – Sat' },
                  { label: 'Min. Budget', value: '₹5,000+' },
                  { label: 'Project Types', value: 'Any scale' },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Socials */}
            <div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                Connect with me
              </p>
              <div className="flex flex-col gap-2">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 glass rounded-xl group transition-all duration-300 hover:border-white/20"
                    style={{ textDecoration: 'none', cursor: 'none' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', flex: 1 }}>
                      {label}
                    </span>
                    <ArrowRight size={14} style={{ color: 'var(--text-muted)', transition: 'transform 0.2s' }}
                      className="group-hover:translate-x-1 group-hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
