'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      // Scroll-driven glow pulse
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.15,
          opacity: 0.7,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-[#0c0c14] to-ink-black" />
      {/* Floating glow orbs */}
      <div ref={glowRef} className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-purple/[0.04] blur-[150px]" />
      <div className="absolute bottom-0 left-[-5%] h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[80px]" />
      {/* Grain */}
      <div className="noise-bg absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={contentRef}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-ink-charcoal via-[#16161f] to-ink-dark p-12 text-center md:p-20"
        >
          {/* Inner card glow effects */}
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-ink-purple/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-ink-purple/20 to-transparent" />
          {/* Corner glow accents */}
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-ink-purple/[0.06] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-ink-purple/[0.04] blur-3xl" />
          {/* Inner grain */}
          <div className="noise-bg absolute inset-0 opacity-15" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
              Ready to Start?
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink-white sm:text-5xl md:text-6xl">
              Design Your Tattoo
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
              Tell us your vision and we&apos;ll match you with the perfect artist. Start your custom tattoo journey in under 2 minutes.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/book"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-purple px-10 py-4 text-base font-bold text-white transition-all hover:bg-ink-purple-light hover:shadow-xl hover:shadow-ink-purple/25 sm:text-lg"
              >
                <span className="relative z-10">Start Your Design</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-ink-purple-dark to-ink-purple transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <a
                href="sms:+18453852136"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-ink-white transition-all hover:border-ink-silver hover:bg-white/5 sm:text-lg"
              >
                <Phone className="h-5 w-5" />
                Text to Book
              </a>
            </div>

            <p className="mt-6 text-sm text-ink-muted">
              Or text us directly at{' '}
              <a href="sms:+18453852136" className="font-medium text-ink-silver hover:text-ink-white transition-colors">
                (845) 385-2136
              </a>
            </p>

            {/* Social links */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="https://instagram.com/scm_ink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                @scm_ink
              </a>
              <span className="h-3 w-px bg-white/10" />
              <a
                href="https://tiktok.com/@inktheorytattoos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.81a8.23 8.23 0 004.76 1.52V6.88a4.85 4.85 0 01-1-.19z"/></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
