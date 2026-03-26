import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { serviceAreas } from '@/lib/service-areas';

const footerNav = [
  { label: 'Artists', href: '/artists' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Studios', href: '/locations' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Now', href: '/book' },
];

// Show a curated subset of service areas in the footer
const footerServiceAreas = serviceAreas.slice(0, 12);

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://inktheorytattoos.com/wp-content/uploads/2025/01/logo-seal-wht.png"
                alt="Ink Theory Tattoos"
                width={56}
                height={56}
                className="h-14 w-14"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Premier tattoo studio led by Steven Martinez. Custom realism, black &amp; grey, and fine line artistry.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/scm_ink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink-gray px-4 py-2 text-xs font-medium text-ink-muted transition-all hover:bg-ink-purple hover:text-white"
              >
                <Instagram size={16} />
                @scm_ink
              </a>
              <a
                href="https://tiktok.com/@inktheorytattoos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink-gray px-4 py-2 text-xs font-medium text-ink-muted transition-all hover:bg-ink-purple hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.83 4.83 0 01-1-.1z" />
                </svg>
                TikTok
              </a>
              <a
                href="https://facebook.com/inktheorytattoos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-gray text-ink-muted transition-all hover:bg-ink-purple hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NY Location */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-white">
              Montgomery, NY
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ink-purple" />
                <span>663 Route 17K<br />Montgomery, NY 12566</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-ink-purple" />
                <a href="tel:+18453852136" className="hover:text-ink-white">(845) 385-2136</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-ink-purple" />
                <a href="mailto:Scminktheory@gmail.com" className="hover:text-ink-white">Scminktheory@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Dallas Location */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-white">
              Dallas, TX
            </h3>
            <div className="mt-4">
              <span className="inline-block rounded-full bg-ink-purple/20 px-3 py-1 text-xs font-semibold text-ink-purple">
                By Appointment Only
              </span>
              <p className="mt-3 text-sm text-ink-muted">
                Steven tattoos in Dallas by appointment only. Private location, book well in advance.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-sm font-medium text-ink-purple hover:text-ink-purple-light"
              >
                Inquire &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Service Areas — Local SEO Links */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <h3 className="mb-4 text-center font-display text-xs font-bold uppercase tracking-wider text-ink-silver">
            Proudly Serving the Hudson Valley
          </h3>
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-1">
            {footerServiceAreas.map((area, i) => (
              <span key={area.slug} className="inline-flex items-center">
                <Link
                  href={`/areas/${area.slug}`}
                  className="text-xs text-ink-muted transition-colors hover:text-ink-purple"
                >
                  {area.name}
                </Link>
                {i < footerServiceAreas.length - 1 && (
                  <span className="mx-1 text-white/10">&middot;</span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-3 text-center text-[10px] text-ink-muted/60">
            Orange County &middot; Dutchess County &middot; Ulster County &middot; Greater Hudson Valley, NY
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Ink Theory Tattoos. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Serving the Hudson Valley, Greater NYC &amp; Dallas-Fort Worth
          </p>
        </div>
      </div>
    </footer>
  );
}
