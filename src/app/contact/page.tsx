import { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ink Theory Tattoos. Call, text, or email us. Visit our studio at 663 Route 17K, Montgomery, NY 12566. Phone: (845) 385-2136.',
  openGraph: {
    title: 'Contact Ink Theory Tattoos',
    description:
      'Reach out to book your tattoo consultation. Montgomery, NY studio, (845) 385-2136.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-24">
      <ContactSection />
    </main>
  );
}
