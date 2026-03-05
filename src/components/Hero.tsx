'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      const els = contentRef.current?.children;
      if (els) {
        gsap.fromTo(
          els,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }

      // Scroll-driven parallax on the whole content block
      gsap.to(contentRef.current, {
        yPercent: -30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Overlay darkens on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Video scale on scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden"
    >
      {/* Background Video / Image Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/gallery/black-and-grey-zeus-statue-forearm-tattoo.jpg"
          className="h-full w-full object-cover scale-105"
        >
          <source
            src="/ink-theory-hero-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[1] bg-gradient-to-b from-ink-black/70 via-ink-black/50 to-ink-black"
      />

      {/* Grain texture */}
      <div className="noise-bg absolute inset-0 z-[2]" />

      {/* Subtle accent lines */}
      <div className="absolute left-0 top-1/4 z-[2] h-px w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-1/3 z-[2] h-px w-1/3 bg-gradient-to-l from-transparent via-ink-purple/15 to-transparent" />

      {/* Content — single wrapper for clean parallax */}
      <div ref={contentRef} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Social Links Bar */}
        <div className="mb-8 flex items-center justify-center gap-5">
          <a
            href="https://instagram.com/scm_ink"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-ink-muted transition-colors hover:text-ink-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            <span className="text-sm font-medium">Instagram</span>
          </a>
          <div className="h-4 w-px bg-white/10" />
          <a
            href="https://tiktok.com/@inktheorytattoos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-ink-muted transition-colors hover:text-ink-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.81a8.23 8.23 0 004.76 1.52V6.88a4.85 4.85 0 01-1-.19z"/></svg>
            <span className="text-sm font-medium">TikTok</span>
          </a>
          <div className="h-4 w-px bg-white/10" />
          <a
            href="https://facebook.com/inktheorytattoos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-ink-muted transition-colors hover:text-ink-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            <span className="text-sm font-medium">Facebook</span>
          </a>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block text-ink-white">Elevating the Art</span>
          <span className="block text-ink-silver mt-2">of Tattoo</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl md:mt-8 md:text-2xl">
          Premium tattoo artistry by Steven Martinez &amp; team.
          <br className="hidden sm:block" />
          Hudson Valley, NY &bull; Dallas, TX
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-10">
          <Link
            href="/book"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-purple px-8 py-4 text-base font-bold text-white transition-all hover:bg-ink-purple-light hover:shadow-xl hover:shadow-ink-purple/20 sm:text-lg"
          >
            <span className="relative z-10">Design Your Tattoo</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-ink-purple-dark to-ink-purple transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-ink-white transition-all hover:border-ink-silver hover:text-ink-silver sm:text-lg"
          >
            View Our Work
          </Link>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12 md:mt-16">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-ink-white sm:text-3xl">5M+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">Followers</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-ink-white sm:text-3xl">10K+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">Tattoos Done</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-ink-white sm:text-3xl">6</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">Artists</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-ink-white sm:text-3xl">2</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">Studios</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-ink-muted" />
      </div>
    </section>
  );
}
