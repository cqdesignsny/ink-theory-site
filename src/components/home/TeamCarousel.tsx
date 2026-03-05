'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { artists } from '@/lib/data';
import { Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function TeamCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.team-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-ink-charcoal/40 to-ink-black" />
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-ink-purple/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/3 rounded-full bg-white/[0.015] blur-3xl" />
      {/* Horizontal accent lines */}
      <div className="absolute left-0 top-1/3 h-px w-1/5 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute right-0 top-2/3 h-px w-1/4 bg-gradient-to-l from-transparent via-ink-purple/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            The Team
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl">
            Meet Our Artists
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-ink-muted">
            Each artist brings a unique specialization, ensuring your tattoo is crafted by someone who truly excels in your chosen style.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="team-card group relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-ink-charcoal transition-all duration-500 group-hover:border-white/15 group-hover:shadow-lg group-hover:shadow-ink-purple/5">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/20 to-transparent" />

                {/* Hover overlay with actions */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 pb-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Link
                      href="/book"
                      className="rounded-full bg-ink-purple px-3 py-1.5 text-[10px] font-bold text-white transition-all hover:bg-ink-purple-light sm:text-xs"
                    >
                      Book
                    </Link>
                    {artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full bg-white/10 p-1.5 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                      >
                        <Instagram size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Name & info below card */}
              <div className="mt-3 text-center">
                <h3 className="font-display text-sm font-bold text-ink-white sm:text-base">
                  {artist.name}
                </h3>
                {artist.featured && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-purple">
                    Lead Artist
                  </span>
                )}
                <p className="mt-0.5 text-[10px] text-ink-muted sm:text-xs">
                  {artist.location === 'ny' ? 'Montgomery, NY' : artist.location === 'dallas' ? 'Dallas, TX' : 'NY & TX'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/artists"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink-white transition-all hover:border-ink-silver hover:bg-white/5"
          >
            View All Artists
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
