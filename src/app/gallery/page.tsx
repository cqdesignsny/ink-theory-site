import { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse the Ink Theory tattoo portfolio. Realism, black & grey, fine line, dotwork, and more — see the artistry of Steven Martinez and team. Montgomery, NY & Dallas, TX.',
  openGraph: {
    title: 'Tattoo Gallery | Ink Theory Tattoos',
    description:
      'Explore our portfolio of custom tattoo work. Realism, black & grey, portraits, fine line, and more.',
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <GalleryGrid />
    </main>
  );
}
