import { Metadata } from 'next';
import { FAQSection } from '@/components/faq/FAQSection';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQs & Aftercare',
  description:
    'Everything you need to know about getting a tattoo at Ink Theory. Booking process, pricing, aftercare instructions, and more. Montgomery, NY & Dallas, TX.',
  openGraph: {
    title: 'FAQs & Aftercare | Ink Theory Tattoos',
    description:
      'Tattoo pricing, booking process, aftercare guide, and frequently asked questions.',
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
