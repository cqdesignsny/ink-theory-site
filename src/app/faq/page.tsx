import { Metadata } from 'next';
import { FAQSection } from '@/components/faq/FAQSection';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQs & Tattoo Aftercare',
  description:
    'Everything you need to know about getting a tattoo at Ink Theory. How to book, pricing ($250 to $4,000+), aftercare instructions, tattoo session times, and more. Montgomery, NY & Dallas, TX.',
  keywords: [
    'tattoo FAQ',
    'how much does a tattoo cost',
    'tattoo aftercare instructions',
    'how to book a tattoo appointment',
    'tattoo pricing near me',
    'tattoo session how long',
    'cover up tattoo questions',
    'tattoo minimum age',
    'tattoo consultation process',
    'Ink Theory FAQ',
    'Hudson Valley tattoo pricing',
    'Montgomery NY tattoo cost',
  ],
  openGraph: {
    title: 'FAQs & Tattoo Aftercare | Ink Theory Tattoos',
    description:
      'Tattoo pricing, booking process, aftercare guide, session times, and frequently asked questions. Montgomery, NY & Dallas, TX.',
    url: 'https://inktheorytattoos.com/faq',
  },
  twitter: {
    card: 'summary',
    title: 'FAQs & Tattoo Aftercare | Ink Theory Tattoos',
    description:
      'How much does a tattoo cost? How do I book? Aftercare tips and more.',
  },
  alternates: {
    canonical: 'https://inktheorytattoos.com/faq',
  },
};

// JSON-LD for FAQPage schema
function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <main className="min-h-screen bg-ink-black pt-24">
        <FAQSection />
      </main>
    </>
  );
}
