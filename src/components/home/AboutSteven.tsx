'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { artists } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const steven = artists.find(a => a.id === 'steven-martinez')!;

export function AboutSteven() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      // Parallax glow movement on scroll
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -80,
          x: 40,
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Enhanced layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-charcoal via-[#12121a] to-ink-black" />
      {/* Floating glow orbs */}
      <div ref={glowRef} className="absolute right-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-ink-purple/[0.06] blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[100px]" />
      {/* Grain */}
      <div className="noise-bg absolute inset-0 opacity-25" />
      {/* Accent lines */}
      <div className="absolute right-0 top-1/4 h-px w-1/3 bg-gradient-to-l from-transparent via-ink-purple/10 to-transparent" />
      <div className="absolute left-0 bottom-1/3 h-px w-1/4 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.04] bg-ink-gray">
              <Image
                src={steven.image}
                alt={`${steven.name} — Lead artist at Ink Theory Tattoos`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/40 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-white/5" />
            {/* Purple accent glow behind image */}
            <div className="absolute -bottom-8 -left-8 -z-20 h-1/2 w-1/2 rounded-full bg-ink-purple/10 blur-3xl" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
              Meet the Founder
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl">
              Steven Martinez
            </h2>
            <div className="mt-4 h-px w-16 bg-ink-purple" />

            <p className="mt-6 text-lg leading-relaxed text-ink-silver">
              {steven.bio}
            </p>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="font-display text-3xl font-bold text-ink-white">5M+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  Followers
                </div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="font-display text-3xl font-bold text-ink-white">10K+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  Tattoos
                </div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="font-display text-3xl font-bold text-ink-white">15+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  Years
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-purple px-6 py-3 text-sm font-bold text-white transition-all hover:bg-ink-purple-light hover:shadow-lg hover:shadow-ink-purple/20"
              >
                <span className="relative z-10">Book with Steven</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-ink-purple-dark to-ink-purple transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              {steven.instagram && (
                <a
                  href={steven.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-ink-muted transition-all hover:border-white/20 hover:text-ink-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  @scm_ink
                </a>
              )}
              <a
                href="https://tiktok.com/@inktheorytattoos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-ink-muted transition-all hover:border-white/20 hover:text-ink-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.81a8.23 8.23 0 004.76 1.52V6.88a4.85 4.85 0 01-1-.19z"/></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
