import { Metadata } from 'next';
import { LocationsDetail } from '@/components/locations/LocationsDetail';

export const metadata: Metadata = {
  title: 'Studios & Locations',
  description:
    'Visit Ink Theory Tattoos in Montgomery, NY (Hudson Valley) or join the waitlist for our new Dallas, TX studio. Serving Newburgh, Middletown, Poughkeepsie, Beacon, and the greater Hudson Valley.',
  openGraph: {
    title: 'Our Studios | Ink Theory Tattoos',
    description:
      'Montgomery, NY (Now Open) & Dallas, TX (Coming Soon). Premium tattoo studios by Steven Martinez.',
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <LocationsDetail />
    </main>
  );
}
