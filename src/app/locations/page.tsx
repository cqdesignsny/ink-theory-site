import { Metadata } from 'next';
import { LocationsDetail } from '@/components/locations/LocationsDetail';

export const metadata: Metadata = {
  title: 'Studio Locations',
  description:
    'Visit Ink Theory Tattoos at 663 Route 17K, Montgomery, NY 12566 (Hudson Valley). Open Mon thru Sat, 10 AM to 8 PM. Dallas, TX available by appointment only with Steven Martinez. Serving Newburgh, Middletown, Poughkeepsie, Beacon, and the greater Hudson Valley.',
  keywords: [
    'tattoo shop near me',
    'tattoo studio Montgomery NY',
    'tattoo shop Hudson Valley',
    'Ink Theory location',
    'tattoo shop directions',
    'tattoo studio hours',
    'Dallas tattoo studio',
    'tattoo shop Orange County NY',
    'tattoo shop Newburgh NY',
    'tattoo shop Middletown NY',
    'tattoo studio near Poughkeepsie',
    'tattoo shop near Beacon NY',
    'tattoo shop open today',
  ],
  openGraph: {
    title: 'Studio Locations | Ink Theory Tattoos',
    description:
      'Montgomery, NY (Now Open) & Dallas, TX (By Appointment Only). Premium tattoo artistry by Steven Martinez and team.',
    url: 'https://inktheorytattoos.com/locations',
  },
  twitter: {
    card: 'summary',
    title: 'Studio Locations | Ink Theory Tattoos',
    description:
      '663 Route 17K, Montgomery, NY. Open Mon thru Sat. Dallas by appointment only.',
  },
  alternates: {
    canonical: 'https://inktheorytattoos.com/locations',
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <LocationsDetail />
    </main>
  );
}
