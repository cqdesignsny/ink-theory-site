'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function LocationsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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

      const cards = cardsRef.current?.querySelectorAll('.location-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        );
      }

      // Scroll-driven glow drift
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: -60,
          y: 40,
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
      <div className="absolute inset-0 bg-gradient-to-br from-ink-black via-[#0e0e16] to-ink-black" />
      {/* Floating glow orbs */}
      <div ref={glowRef} className="absolute right-[-8%] top-[10%] h-[500px] w-[500px] rounded-full bg-ink-purple/[0.04] blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.015] blur-[100px]" />
      {/* Grain overlay */}
      <div className="noise-bg absolute inset-0 opacity-25" />
      {/* Accent lines */}
      <div className="absolute left-0 top-1/3 h-px w-1/4 bg-gradient-to-r from-transparent via-ink-purple/[0.08] to-transparent" />
      <div className="absolute right-0 bottom-1/4 h-px w-1/3 bg-gradient-to-l from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl">
            Our Studios
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2">
          {/* NY Location */}
          <div className="location-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-ink-charcoal to-ink-dark p-8 transition-all duration-500 hover:border-white/15 hover:shadow-lg hover:shadow-ink-purple/5 md:p-10">
            {/* Card inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink-purple/0 to-ink-purple/0 transition-all duration-500 group-hover:from-ink-purple/[0.02] group-hover:to-transparent" />
            {/* Top accent line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="relative flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-white">
                  Montgomery, NY
                </h3>
                <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Now Open
                </span>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
                <MapPin size={20} className="text-ink-silver transition-colors group-hover:text-emerald-400" />
              </div>
            </div>

            <div className="relative mt-6 space-y-3 text-sm text-ink-muted">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-ink-silver" />
                <span>663 Route 17K, Montgomery, NY 12566</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-ink-silver" />
                <a href="tel:+18453852136" className="transition-colors hover:text-ink-white">(845) 385-2136</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-ink-silver" />
                <span>Mon-Sat: 10 AM – 8 PM</span>
              </div>
            </div>

            <p className="relative mt-4 text-xs text-ink-muted">
              Serving the Hudson Valley &mdash; Newburgh, Middletown, Poughkeepsie, Beacon, Goshen &amp; beyond
            </p>

            <div className="relative mt-6 flex gap-3">
              <Link
                href="/book"
                className="rounded-full bg-ink-purple px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-purple-light hover:shadow-lg hover:shadow-ink-purple/20"
              >
                Book Here
              </Link>
              <Link
                href="/locations"
                className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-semibold text-ink-white transition-all hover:border-white/20 hover:bg-white/5"
              >
                Get Directions
              </Link>
            </div>
          </div>

          {/* Dallas Location */}
          <div className="location-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-ink-charcoal to-ink-dark p-8 transition-all duration-500 hover:border-white/15 hover:shadow-lg hover:shadow-ink-purple/5 md:p-10">
            {/* Card inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink-purple/0 to-ink-purple/0 transition-all duration-500 group-hover:from-ink-purple/[0.02] group-hover:to-transparent" />
            {/* Top accent line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-ink-purple/30 to-transparent" />

            <div className="relative flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-white">
                  Dallas, TX
                </h3>
                <span className="mt-2 inline-block rounded-full bg-ink-purple/15 px-3 py-1 text-xs font-semibold text-ink-purple">
                  Coming Soon
                </span>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-ink-purple/10 group-hover:text-ink-purple">
                <MapPin size={20} className="text-ink-silver transition-colors group-hover:text-ink-purple" />
              </div>
            </div>

            <p className="relative mt-6 text-sm leading-relaxed text-ink-muted">
              Ink Theory is expanding to the Dallas-Fort Worth metroplex. Be the first to book when we open our doors.
            </p>
            <p className="relative mt-4 text-xs text-ink-muted">
              Serving DFW &mdash; Fort Worth, Plano, Arlington, Frisco, McKinney &amp; beyond
            </p>

            <div className="relative mt-6">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full border border-ink-purple/30 px-6 py-2.5 text-sm font-semibold text-ink-purple transition-all hover:bg-ink-purple/10 hover:shadow-lg hover:shadow-ink-purple/10"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
