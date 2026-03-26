import { Metadata } from 'next';
import { ArtistsGrid } from '@/components/artists/ArtistsGrid';
import { artists, tattooStyles } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Meet Our Tattoo Artists',
  description:
    'Meet the 6 talented tattoo artists at Ink Theory. Steven Martinez (6M+ followers), Daron Fuller, Collin Hagerty, Adam Cordoba, Eric LeBron, and Jazzy Camacho. Specializing in realism, black & grey, fine line, dotwork, portraits, and more. Montgomery, NY.',
  keywords: [
    'tattoo artists near me',
    'best tattoo artist Hudson Valley',
    'Steven Martinez tattoo artist',
    'realism tattoo artist NY',
    'black and grey tattoo artist',
    'fine line tattoo artist near me',
    'dotwork tattoo artist',
    'portrait tattoo artist NY',
    'Ink Theory artists',
    'Montgomery NY tattoo artists',
    'tattoo team Hudson Valley',
    'female tattoo artist NY',
    'best tattoo artists New York',
  ],
  openGraph: {
    title: 'Meet Our Tattoo Artists | Ink Theory Tattoos',
    description:
      'World class tattoo artists specializing in realism, black & grey, fine line, dotwork, and more. Montgomery, NY & Dallas, TX.',
    url: 'https://inktheorytattoos.com/artists',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Tattoo Artists | Ink Theory Tattoos',
    description:
      '6 talented artists covering every major tattoo style. Book your consultation today.',
  },
  alternates: {
    canonical: 'https://inktheorytattoos.com/artists',
  },
};

// JSON-LD: Person schemas for each artist (AEO optimization)
function ArtistsSchema() {
  const schemas = artists.map((artist) => {
    const artistStyles = tattooStyles
      .filter((style) => style.artists.includes(artist.id))
      .map((style) => style.name);

    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: artist.name,
      jobTitle: artist.featured ? 'Owner & Lead Tattoo Artist' : 'Tattoo Artist',
      description: artist.bio,
      image: `https://inktheorytattoos.com${artist.image}`,
      worksFor: {
        '@type': 'TattooParlor',
        name: 'Ink Theory Tattoos',
        url: 'https://inktheorytattoos.com',
      },
      workLocation: {
        '@type': 'Place',
        name: artist.location === 'both'
          ? 'Montgomery, NY & Dallas, TX'
          : artist.location === 'ny'
            ? 'Montgomery, NY'
            : 'Dallas, TX',
      },
      knowsAbout: artistStyles,
      ...(artist.instagram ? { sameAs: [artist.instagram] } : {}),
    };
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function ArtistsPage() {
  return (
    <>
      <ArtistsSchema />
      <main className="min-h-screen bg-ink-black pt-24">
        <ArtistsGrid />
      </main>
    </>
  );
}
