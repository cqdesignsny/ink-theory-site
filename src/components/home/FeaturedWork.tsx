'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioImages } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

// Show first 10 on homepage
const featured = portfolioImages.slice(0, 10);

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll('.work-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Scroll-driven ambient glow movement
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: 100,
          y: -50,
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
      {/* Enhanced layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-[#0d0d12] to-ink-black" />
      {/* Floating ambient glow orbs */}
      <div ref={glowRef} className="absolute left-[-10%] top-1/4 h-[600px] w-[600px] rounded-full bg-ink-purple/[0.04] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      {/* Subtle grain overlay */}
      <div className="noise-bg absolute inset-0 opacity-30" />
      {/* Accent lines */}
      <div className="absolute left-0 top-[20%] h-px w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute right-0 bottom-[30%] h-px w-1/4 bg-gradient-to-l from-transparent via-ink-purple/[0.08] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl">
            Featured Work
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {featured.map((img, i) => (
            <div
              key={i}
              className="work-card group relative aspect-[3/4] overflow-hidden rounded-lg border border-white/[0.03] bg-ink-charcoal transition-all duration-500 hover:border-white/10 hover:shadow-lg hover:shadow-ink-purple/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-ink-white">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink-white transition-all hover:border-ink-silver hover:bg-white/5"
          >
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
