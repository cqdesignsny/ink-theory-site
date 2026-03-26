'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { locations } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export function LocationsDetail() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.loc-card');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.2, delay: 0.3 }
      );
    }
  }, []);

  const ny = locations.find(l => l.id === 'ny')!;
  const dallas = locations.find(l => l.id === 'dallas')!;

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
            Visit Us
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-white sm:text-5xl md:text-6xl">
            Our Studios
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
            Premium tattoo studios with a clean, comfortable environment built for the best work.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {/* Montgomery, NY */}
          <div className="loc-card overflow-hidden rounded-2xl border border-white/5 bg-ink-charcoal">
            <div className="grid md:grid-cols-2">
              {/* Map Embed */}
              <div className="relative min-h-[300px] bg-ink-gray md:min-h-[400px]">
                {ny.mapUrl ? (
                  <iframe
                    src={ny.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ink Theory Montgomery NY Location"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <MapPin size={48} className="text-ink-muted" />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-3xl font-bold text-ink-white">Montgomery, NY</h2>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Open
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-ink-silver">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-ink-silver" />
                    <div>
                      <p className="font-medium text-ink-white">663 Route 17K</p>
                      <p>Montgomery, NY 12566</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-ink-silver">
                    <Phone size={18} className="shrink-0 text-ink-silver" />
                    <a href="tel:+18453852136" className="transition-colors hover:text-ink-white">(845) 385-2136</a>
                  </div>
                  <div className="flex items-center gap-3 text-ink-silver">
                    <Mail size={18} className="shrink-0 text-ink-silver" />
                    <a href="mailto:Scminktheory@gmail.com" className="transition-colors hover:text-ink-white">Scminktheory@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-ink-silver">
                    <Clock size={18} className="shrink-0 text-ink-silver" />
                    <span>Mon thru Sat: 10 AM to 8 PM</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Serving</p>
                  <p className="mt-1 text-sm text-ink-silver">
                    {ny.nearbyAreas?.join(', ')}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="rounded-full bg-ink-purple px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-purple-light"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={`https://www.google.com/maps/dir//${encodeURIComponent(ny.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-sm font-semibold text-ink-white transition-all hover:border-white/20"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dallas, TX */}
          <div className="loc-card rounded-2xl border border-white/5 bg-ink-charcoal p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-3xl font-bold text-ink-white">Dallas, TX</h2>
                  <span className="rounded-full bg-ink-purple/15 px-3 py-1 text-xs font-semibold text-ink-purple">
                    By Appointment Only
                  </span>
                </div>
                <p className="mt-4 max-w-xl text-base text-ink-silver">
                  Steven tattoos in the Dallas Fort Worth area by appointment only. The location is private and shared once your booking is confirmed. Spots fill up fast so make sure you reach out early to lock something in.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-ink-silver">
                <Phone size={18} className="shrink-0 text-ink-silver" />
                <a href="tel:+18453852136" className="transition-colors hover:text-ink-white">(845) 385-2136</a>
              </div>
              <div className="flex items-center gap-3 text-ink-silver">
                <Mail size={18} className="shrink-0 text-ink-silver" />
                <a href="mailto:Scminktheory@gmail.com" className="transition-colors hover:text-ink-white">Scminktheory@gmail.com</a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Serving</p>
              <p className="mt-1 text-sm text-ink-silver">
                {dallas.nearbyAreas?.join(', ')}
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-purple/30 px-6 py-2.5 text-sm font-semibold text-ink-purple transition-all hover:bg-ink-purple/10"
              >
                Inquire About Dallas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
