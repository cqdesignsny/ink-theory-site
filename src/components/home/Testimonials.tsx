'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Michael R.',
    location: 'Newburgh, NY',
    text: 'Steven did an incredible half sleeve for me. The detail in the realism work is unmatched. Worth every penny and the drive.',
    rating: 5,
    style: 'Realism',
  },
  {
    name: 'Sarah T.',
    location: 'Middletown, NY',
    text: 'Best tattoo experience I\'ve ever had. The studio is clean, professional, and the whole team made me feel comfortable. My fine line piece healed perfectly.',
    rating: 5,
    style: 'Fine Line',
  },
  {
    name: 'James L.',
    location: 'Poughkeepsie, NY',
    text: 'I drove an hour to get tattooed here and I\'d do it again in a heartbeat. Adam\'s dotwork is on another level. This studio is the real deal.',
    rating: 5,
    style: 'Dotwork',
  },
  {
    name: 'Angela M.',
    location: 'Beacon, NY',
    text: 'From the booking process to the final result, everything was seamless. Jazzy nailed the lettering I wanted. Already planning my next piece.',
    rating: 5,
    style: 'Lettering',
  },
];

export function Testimonials() {
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

      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        );
      }

      // Scroll-driven glow float
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -50,
          x: 30,
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
      <div className="absolute inset-0 bg-gradient-to-b from-ink-charcoal via-[#131318] to-ink-charcoal" />
      {/* Floating glow orbs */}
      <div ref={glowRef} className="absolute right-[-5%] top-[15%] h-[450px] w-[450px] rounded-full bg-ink-purple/[0.04] blur-[120px]" />
      <div className="absolute bottom-[-8%] left-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[100px]" />
      {/* Grain overlay */}
      <div className="noise-bg absolute inset-0 opacity-25" />
      {/* Accent lines */}
      <div className="absolute left-0 top-[30%] h-px w-1/5 bg-gradient-to-r from-transparent via-ink-purple/[0.08] to-transparent" />
      <div className="absolute right-0 bottom-[35%] h-px w-1/4 bg-gradient-to-l from-transparent via-white/[0.04] to-transparent" />
      {/* Vertical accent */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl">
            What Clients Say
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
        </div>

        <div
          ref={cardsRef}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-ink-dark to-ink-charcoal/50 p-6 transition-all duration-500 hover:border-white/15 hover:shadow-lg hover:shadow-ink-purple/5"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ink-purple/0 to-ink-purple/0 transition-all duration-500 group-hover:from-ink-purple/[0.03] group-hover:to-transparent" />
              {/* Top accent line */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-silver">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 border-t border-white/5 pt-4">
                  <p className="text-sm font-semibold text-ink-white">{t.name}</p>
                  <p className="text-xs text-ink-muted">
                    {t.location} &middot; {t.style}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
