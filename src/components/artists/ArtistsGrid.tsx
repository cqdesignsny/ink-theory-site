'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { artists, tattooStyles } from '@/lib/data';
import { Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ArtistsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      );

      const cards = cardsRef.current?.querySelectorAll('.artist-full-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            The Team
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl md:text-6xl">
            Our Artists
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
            Every artist on our team has their own specialty. Whatever your style, you&apos;ll be working with someone who actually excels in it.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {artists.map((artist, i) => {
            const styleNames = artist.styles.map(sId => {
              const style = tattooStyles.find(s => s.id === sId);
              return style?.name || sId;
            });

            return (
              <div
                key={artist.id}
                className={`artist-full-card grid gap-8 rounded-2xl border border-white/5 bg-ink-charcoal p-6 md:grid-cols-3 md:p-8 ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} — Tattoo artist at Ink Theory`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/50 to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center md:col-span-2">
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-2xl font-bold text-ink-white sm:text-3xl">
                      {artist.name}
                    </h2>
                    {artist.featured && (
                      <span className="rounded-full bg-ink-purple/15 px-3 py-1 text-xs font-semibold text-ink-purple">
                        Lead Artist
                      </span>
                    )}
                  </div>

                  <div className="mt-2 text-sm text-ink-muted">
                    {artist.location === 'ny' ? 'Montgomery, NY' : artist.location === 'dallas' ? 'Dallas, TX' : 'Montgomery, NY & Dallas, TX'}
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-ink-silver">
                    {artist.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {styleNames.map(name => (
                      <span
                        key={name}
                        className="rounded-full border border-white/5 bg-ink-dark px-3 py-1 text-xs font-medium text-ink-silver"
                      >
                        {name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href="/book"
                      className="rounded-full bg-ink-purple px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-purple-light"
                    >
                      Book with {artist.name.split(' ')[0]}
                    </Link>
                    {artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink-white"
                      >
                        <Instagram size={16} />
                        <span className="hidden sm:inline">Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
