import { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { portfolioImages } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Tattoo Portfolio & Gallery',
  description:
    'Browse the Ink Theory tattoo portfolio featuring realism, black & grey, fine line, dotwork, portraits, and custom work by Steven Martinez and team. Montgomery, NY (Hudson Valley) and Dallas, TX.',
  keywords: [
    'tattoo gallery near me',
    'best tattoo portfolio Hudson Valley',
    'realism tattoo examples',
    'black and grey tattoo portfolio',
    'tattoo before and after',
    'portrait tattoo gallery',
    'fine line tattoo examples',
    'custom tattoo designs',
    'Steven Martinez tattoo portfolio',
    'Ink Theory gallery',
    'Montgomery NY tattoo gallery',
    'Hudson Valley tattoo portfolio',
    'best realism tattoo artist portfolio',
    'dotwork tattoo examples',
    'tattoo inspiration gallery',
  ],
  openGraph: {
    title: 'Tattoo Portfolio & Gallery | Ink Theory Tattoos',
    description:
      'Explore our portfolio of custom tattoo work. Realism, black & grey, portraits, fine line, dotwork, and more by Steven Martinez and team.',
    url: 'https://inktheorytattoos.com/gallery',
    images: [
      {
        url: 'https://inktheorytattoos.com/wp-content/uploads/2025/01/logo-seal-wht.png',
        width: 1200,
        height: 630,
        alt: 'Ink Theory Tattoos Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tattoo Portfolio & Gallery | Ink Theory Tattoos',
    description:
      'Custom realism, black & grey, portraits, fine line, and more. Browse our work.',
  },
  alternates: {
    canonical: 'https://inktheorytattoos.com/gallery',
  },
};

// JSON-LD: ImageGallery schema for rich results
function GallerySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Ink Theory Tattoos Portfolio',
    description:
      'Portfolio of custom tattoo work by the artists at Ink Theory Tattoos. Featuring realism, black & grey, fine line, dotwork, portraits, and more.',
    url: 'https://inktheorytattoos.com/gallery',
    creator: {
      '@type': 'Organization',
      name: 'Ink Theory Tattoos',
      url: 'https://inktheorytattoos.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Tattoo Art',
    },
    image: portfolioImages.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `https://inktheorytattoos.com${img.src}`,
      name: img.alt,
      description: img.alt,
      creator: {
        '@type': 'Organization',
        name: 'Ink Theory Tattoos',
      },
    })),
    numberOfItems: portfolioImages.length,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Ink Theory Tattoos',
      url: 'https://inktheorytattoos.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function GalleryPage() {
  return (
    <>
      <GallerySchema />
      <main className="min-h-screen bg-ink-black pt-24">
        <GalleryGrid />
      </main>
    </>
  );
}
