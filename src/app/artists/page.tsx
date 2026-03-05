import { Metadata } from 'next';
import { ArtistsGrid } from '@/components/artists/ArtistsGrid';

export const metadata: Metadata = {
  title: 'Our Artists',
  description:
    'Meet the talented tattoo artists at Ink Theory. From photorealistic portraits to delicate fine line work, our team of 6 specialists covers every major tattoo style. Book your consultation today.',
  openGraph: {
    title: 'Meet Our Artists | Ink Theory Tattoos',
    description:
      'World-class tattoo artists specializing in realism, black & grey, fine line, dotwork, and more. Montgomery, NY & Dallas, TX.',
  },
};

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <ArtistsGrid />
    </main>
  );
}
