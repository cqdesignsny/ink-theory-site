'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(
      contentRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    );
  }, []);

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Get in Touch
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
        </div>

        <div ref={contentRef} className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-ink-charcoal p-8">
              <h2 className="font-display text-xl font-bold text-ink-white">Montgomery, NY Studio</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-sm text-ink-silver">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-ink-silver" />
                  <div>
                    <p className="font-medium text-ink-white">663 Route 17K</p>
                    <p>Montgomery, NY 12566</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-silver">
                  <Phone size={18} className="shrink-0 text-ink-silver" />
                  <a href="tel:+18453852136" className="hover:text-ink-white">(845) 385-2136</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-silver">
                  <Mail size={18} className="shrink-0 text-ink-silver" />
                  <a href="mailto:Scminktheory@gmail.com" className="hover:text-ink-white">Scminktheory@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-silver">
                  <Clock size={18} className="shrink-0 text-ink-silver" />
                  <span>Mon–Sat: 10 AM – 8 PM</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-silver">
                  <Instagram size={18} className="shrink-0 text-ink-silver" />
                  <a href="https://instagram.com/inktheorytattoos" target="_blank" rel="noopener noreferrer" className="hover:text-ink-white">@inktheorytattoos</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-ink-charcoal p-8">
              <h3 className="font-display text-lg font-bold text-ink-white">Quick Booking</h3>
              <p className="mt-2 text-sm text-ink-muted">
                The fastest way to book is through our tattoo questionnaire. We&apos;ll match you with the perfect artist.
              </p>
              <Link
                href="/book"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-purple px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-purple-light"
              >
                Design Your Tattoo
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-ink-charcoal p-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
            <Send size={24} className="text-emerald-400" />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-ink-white">Message Sent!</h3>
          <p className="mt-2 text-sm text-ink-muted">We&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 bg-ink-charcoal p-8">
      <h2 className="font-display text-xl font-bold text-ink-white">Send a Message</h2>
      <p className="mt-1 text-sm text-ink-muted">For general inquiries. To book, use our questionnaire.</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="c-name" className="mb-2 block text-sm font-semibold text-ink-silver">Name</label>
          <input
            id="c-name"
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full rounded-xl border border-white/5 bg-ink-dark px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none focus:border-ink-purple/50"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="c-email" className="mb-2 block text-sm font-semibold text-ink-silver">Email</label>
            <input
              id="c-email"
              type="email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full rounded-xl border border-white/5 bg-ink-dark px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none focus:border-ink-purple/50"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="c-phone" className="mb-2 block text-sm font-semibold text-ink-silver">Phone</label>
            <input
              id="c-phone"
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-xl border border-white/5 bg-ink-dark px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none focus:border-ink-purple/50"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
        <div>
          <label htmlFor="c-message" className="mb-2 block text-sm font-semibold text-ink-silver">Message</label>
          <textarea
            id="c-message"
            required
            rows={4}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="w-full rounded-xl border border-white/5 bg-ink-dark px-4 py-3 text-sm text-ink-white placeholder-ink-muted/50 outline-none focus:border-ink-purple/50"
            placeholder="How can we help?"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink-purple py-3 text-sm font-bold text-white transition-all hover:bg-ink-purple-light"
      >
        Send Message
      </button>
    </form>
  );
}
