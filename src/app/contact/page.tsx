import { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ink Theory Tattoos. Call or text (845) 385-2136, email Scminktheory@gmail.com, or visit our studio at 663 Route 17K, Montgomery, NY 12566. Open Mon thru Sat, 10 AM to 8 PM.',
  keywords: [
    'contact tattoo shop',
    'Ink Theory phone number',
    'tattoo shop phone number',
    'tattoo shop Montgomery NY',
    'Ink Theory email',
    'tattoo shop address Hudson Valley',
    'tattoo shop hours',
    'tattoo consultation contact',
    'Ink Theory Tattoos contact',
  ],
  openGraph: {
    title: 'Contact Ink Theory Tattoos',
    description:
      'Call or text (845) 385-2136. Visit us at 663 Route 17K, Montgomery, NY 12566. Open Mon thru Sat.',
    url: 'https://inktheorytattoos.com/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Ink Theory Tattoos',
    description:
      'Call or text (845) 385-2136. Montgomery, NY studio open Mon thru Sat, 10 AM to 8 PM.',
  },
  alternates: {
    canonical: 'https://inktheorytattoos.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <ContactSection />
    </main>
  );
}
