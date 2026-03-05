import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Star, ArrowRight } from 'lucide-react';
import { serviceAreas, getAllServiceAreaSlugs, getServiceAreaBySlug } from '@/lib/service-areas';
import { artists, tattooStyles } from '@/lib/data';

// ─── Static params for build-time generation ──────────────────
export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

// ─── Dynamic metadata per town ────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};

  const title = `Best Tattoo Shop Near ${area.name}, ${area.state} | Ink Theory Tattoos`;
  const description = `Looking for a tattoo artist near ${area.name}, ${area.state}? Ink Theory Tattoos in Montgomery, NY is just ${area.distance} away. Specializing in realism, black & grey, fine line, and custom tattoo artistry. Book your consultation today.`;

  return {
    title,
    description,
    keywords: [
      `tattoo shop near ${area.name} NY`,
      `tattoo artist ${area.name}`,
      `best tattoo ${area.name} NY`,
      `${area.name} tattoo studio`,
      `tattoo shop ${area.county}`,
      `realism tattoo ${area.name}`,
      `black and grey tattoo ${area.name}`,
      `custom tattoo near ${area.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://inktheorytattoos.com/areas/${area.slug}`,
      siteName: 'Ink Theory Tattoos',
      type: 'website',
    },
    alternates: {
      canonical: `https://inktheorytattoos.com/areas/${area.slug}`,
    },
  };
}

// ─── Page Component ───────────────────────────────────────────
export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  // Select featured artists (first 3)
  const featuredArtists = artists.slice(0, 3);

  // Select featured styles (first 6)
  const featuredStyles = tattooStyles.slice(0, 6);

  // JSON-LD for this specific service area page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: 'Ink Theory Tattoos',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2025/01/logo-seal-wht.png',
    url: `https://inktheorytattoos.com/areas/${area.slug}`,
    telephone: '(845) 385-2136',
    email: 'Scminktheory@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '663 Route 17K',
      addressLocality: 'Montgomery',
      addressRegion: 'NY',
      postalCode: '12566',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5276,
      longitude: -74.2361,
    },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: area.county,
      },
    },
    priceRange: '$250 - $4,000+',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-ink-charcoal/30 to-ink-black" />
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-ink-purple/[0.04] blur-[120px]" />
        <div className="noise-bg absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-charcoal/50 px-4 py-2 text-xs font-medium text-ink-silver">
            <MapPin size={14} className="text-ink-purple" />
            {area.distance} from {area.name}
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold text-ink-white sm:text-5xl md:text-6xl">
            Best Tattoo Studio Near{' '}
            <span className="text-ink-silver">{area.name}, {area.state}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
            {area.description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-ink-purple px-8 py-4 text-base font-bold text-white transition-all hover:bg-ink-purple-light hover:shadow-lg hover:shadow-ink-purple/20"
            >
              Design Your Tattoo
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+18453852136"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-ink-white transition-all hover:border-white/25 hover:bg-white/5"
            >
              <Phone size={16} />
              (845) 385-2136
            </a>
          </div>
        </div>
      </section>

      {/* Why Ink Theory Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black to-ink-charcoal/40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
                Why Choose Us
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink-white sm:text-4xl">
                {area.name}&apos;s Preferred Tattoo Studio
              </h2>
              <div className="mt-4 h-px w-16 bg-ink-purple" />

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-purple/10">
                    <Star size={20} className="text-ink-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-white">5M+ Followers Trust Us</h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      Led by Steven Martinez, one of the most followed tattoo artists in the country.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-purple/10">
                    <MapPin size={20} className="text-ink-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-white">Just {area.distance} from {area.name}</h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      Conveniently located at 663 Route 17K in Montgomery, NY. Easy access from {area.county}.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-purple/10">
                    <ArrowRight size={20} className="text-ink-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-white">6 Specialist Artists</h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      Each artist brings unique specializations — from realism to dotwork to fine line — ensuring your tattoo is crafted by an expert in your chosen style.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-ink-charcoal">
              <Image
                src="https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-6b.jpg"
                alt={`Ink Theory Tattoos studio — serving ${area.name}, ${area.state}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-charcoal/40 to-ink-black" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
              Our Artists
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-white sm:text-4xl">
              Meet the Team Serving {area.name}
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-ink-purple to-transparent" />
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {featuredArtists.map((artist) => (
              <div
                key={artist.id}
                className="group overflow-hidden rounded-xl border border-white/5 bg-ink-charcoal transition-all hover:border-white/10"
              >
                <div className="relative aspect-square">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} — tattoo artist serving ${area.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-ink-white">{artist.name}</h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    {artist.styles.slice(0, 3).map(s => s.replace(/-/g, ' ')).join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/artists"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-purple transition-colors hover:text-ink-purple-light"
            >
              View All Artists
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tattoo Styles */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black to-ink-charcoal/30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-silver">
              Specializations
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-white sm:text-4xl">
              Tattoo Styles Available Near {area.name}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredStyles.map((style) => (
              <div
                key={style.id}
                className="rounded-xl border border-white/5 bg-ink-charcoal/50 p-5 transition-all hover:border-white/10"
              >
                <h3 className="font-display text-base font-bold text-ink-white">{style.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Directions CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-charcoal/30 to-ink-black" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-ink-white sm:text-4xl">
            Ready to Get Inked?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Our Montgomery studio is just {area.distance} from {area.name}. Book your consultation today and let us bring your vision to life.
          </p>

          <div className="mt-8 rounded-xl border border-white/5 bg-ink-charcoal/50 p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
              <div className="flex items-center gap-2 text-sm text-ink-silver">
                <MapPin size={16} className="text-ink-purple" />
                663 Route 17K, Montgomery, NY 12566
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-silver">
                <Phone size={16} className="text-ink-purple" />
                <a href="tel:+18453852136" className="hover:text-ink-white">(845) 385-2136</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-silver">
                <Mail size={16} className="text-ink-purple" />
                <a href="mailto:Scminktheory@gmail.com" className="hover:text-ink-white">Email Us</a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-ink-purple px-8 py-4 text-base font-bold text-white transition-all hover:bg-ink-purple-light hover:shadow-lg hover:shadow-ink-purple/20"
            >
              Design Your Tattoo
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-ink-white transition-all hover:border-white/25 hover:bg-white/5"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-ink-black" />
        <div className="relative mx-auto max-w-7xl px-6">
          <h3 className="mb-6 text-center font-display text-lg font-bold text-ink-white">
            Also Serving Nearby Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas
              .filter((a) => a.slug !== area.slug)
              .slice(0, 12)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="rounded-full border border-white/5 bg-ink-charcoal/50 px-4 py-2 text-xs font-medium text-ink-muted transition-all hover:border-white/15 hover:text-ink-white"
                >
                  {a.name}, {a.state}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
