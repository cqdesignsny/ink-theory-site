'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioImages } from '@/lib/data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.gallery-item');
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          scrollTrigger: { trigger: gridRef.current, start: 'top 90%' },
        }
      );
    }
  }, []);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < portfolioImages.length) {
      setLightbox(next);
    }
  };

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl md:text-6xl">
            Latest Work
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Browse our latest tattoo work from the Ink Theory team.
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="columns-2 gap-3 sm:columns-3 md:columns-4">
          {portfolioImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="gallery-item group mb-3 cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-ink-charcoal"
              onClick={() => setLightbox(i)}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-black/0 transition-all group-hover:bg-ink-black/30" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-ink-muted">Want to see more? Follow us on Instagram for daily work.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://instagram.com/scm_ink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-ink-white transition-all hover:border-white/20 hover:bg-white/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              @scm_ink
            </a>
            <Link
              href="/book"
              className="rounded-full bg-ink-purple px-6 py-3 text-sm font-bold text-white transition-all hover:bg-ink-purple-light"
            >
              Design Your Tattoo
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-black/95 p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 text-ink-muted hover:text-ink-white" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          {lightbox > 0 && (
            <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={e => { e.stopPropagation(); navigateLightbox(-1); }}>
              <ChevronLeft size={24} />
            </button>
          )}
          {lightbox < portfolioImages.length - 1 && (
            <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={e => { e.stopPropagation(); navigateLightbox(1); }}>
              <ChevronRight size={24} />
            </button>
          )}
          <div className="relative max-h-[85vh] max-w-4xl" onClick={e => e.stopPropagation()}>
            <Image
              src={portfolioImages[lightbox].src}
              alt={portfolioImages[lightbox].alt}
              width={800}
              height={1000}
              className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
