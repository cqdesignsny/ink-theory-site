'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { tattooStyles } from '@/lib/data';
import {
  Contrast, Eye, Sun, Pen, CircleDot, Palette,
  Hexagon, Search, Type, Cpu, User, Flame,
  Sparkles, Minus, Droplets, Circle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Contrast, Eye, Sun, Pen, CircleDot, Palette,
  Hexagon, Search, Type, Cpu, User, Flame,
  Sparkles, Minus, Droplets, Circle,
};

// Show the most popular/impressive styles on the homepage
const featuredStyles = tattooStyles.slice(0, 8);

export function StylesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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

      const cards = gridRef.current?.querySelectorAll('.style-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
          }
        );
      }

      // Parallax glow movement
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -60,
          x: -40,
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
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-charcoal via-[#151520] to-ink-charcoal" />
      {/* Floating glow orbs */}
      <div ref={glowRef} className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-ink-purple/[0.05] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      {/* Grain overlay */}
      <div className="noise-bg absolute inset-0 opacity-25" />
      {/* Decorative vertical lines */}
      <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      {/* Horizontal accent lines */}
      <div className="absolute left-0 top-[20%] h-px w-1/4 bg-gradient-to-r from-transparent via-ink-purple/10 to-transparent" />
      <div className="absolute right-0 bottom-[25%] h-px w-1/3 bg-gradient-to-l from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Specializations
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl">
            Styles We Master
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-ink-muted">
            From photorealistic portraits to delicate fine line work, our artists bring expertise across every major tattoo style.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {featuredStyles.map((style) => {
            const Icon = iconMap[style.icon] || Circle;
            return (
              <div
                key={style.id}
                className="style-card group relative rounded-xl border border-white/5 bg-gradient-to-br from-ink-dark to-ink-charcoal/60 p-6 transition-all duration-500 hover:border-white/15 hover:shadow-lg hover:shadow-ink-purple/5"
              >
                {/* Card hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ink-purple/0 to-ink-purple/0 transition-all duration-500 group-hover:from-ink-purple/[0.03] group-hover:to-transparent" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-ink-silver transition-all duration-300 group-hover:bg-ink-purple/10 group-hover:text-ink-purple group-hover:shadow-lg group-hover:shadow-ink-purple/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-base font-bold text-ink-white">
                    {style.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {style.description}
                  </p>
                  <p className="mt-3 text-xs text-ink-muted">
                    {style.artists.length} {style.artists.length === 1 ? 'artist' : 'artists'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-purple px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-ink-purple-light hover:shadow-lg hover:shadow-ink-purple/20"
          >
            <span className="relative z-10">Find Your Style</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-ink-purple-dark to-ink-purple transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
