import { Metadata } from 'next';
import { TattooQuestionnaire } from '@/components/book/TattooQuestionnaire';

export const metadata: Metadata = {
  title: 'Book Your Tattoo Appointment',
  description:
    'Book a tattoo appointment at Ink Theory. Tell us your style, placement, and size, and we will match you with the right artist. Takes less than 2 minutes. Montgomery, NY & Dallas, TX.',
  keywords: [
    'book tattoo appointment',
    'tattoo consultation near me',
    'schedule tattoo appointment',
    'book tattoo online',
    'tattoo appointment Hudson Valley',
    'book realism tattoo',
    'tattoo questionnaire',
    'custom tattoo consultation',
    'Ink Theory booking',
    'Montgomery NY tattoo appointment',
    'Dallas TX tattoo booking',
    'tattoo deposit',
    'walk in tattoo shop near me',
  ],
  openGraph: {
    title: 'Book Your Tattoo Appointment | Ink Theory Tattoos',
    description:
      'Custom tattoo questionnaire. Choose your style, size, and placement, and get matched with the right artist at Ink Theory.',
    url: 'https://inktheorytattoos.com/book',
  },
  twitter: {
    card: 'summary',
    title: 'Book Your Tattoo Appointment | Ink Theory Tattoos',
    description:
      'Design your tattoo and get matched with the right artist. Takes less than 2 minutes.',
  },
  alternates: {
    canonical: 'https://inktheorytattoos.com/book',
  },
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-20">
      <TattooQuestionnaire />
    </main>
  );
}
