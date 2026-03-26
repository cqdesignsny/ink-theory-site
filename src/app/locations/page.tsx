import { Metadata } from 'next';
import { LocationsDetail } from '@/components/locations/LocationsDetail';

export const metadata: Metadata = {
  title: 'Studios & Locations',
  description:
    'Visit Ink Theory Tattoos in Montgomery, NY (Hudson Valley). Dallas, TX available by appointment only with Steven Martinez. Private location, book well in advance. Serving Newburgh, Middletown, Poughkeepsie, Beacon, and the greater Hudson Valley.',
  openGraph: {
    title: 'Our Studios | Ink Theory Tattoos',
    description:
      'Montgomery, NY (Now Open) & Dallas, TX (By Appointment Only). Premium tattoo artistry by Steven Martinez.',
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <LocationsDetail />
    </main>
  );
}
