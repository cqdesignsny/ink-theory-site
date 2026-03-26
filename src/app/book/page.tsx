import { Metadata } from 'next';
import { TattooQuestionnaire } from '@/components/book/TattooQuestionnaire';

export const metadata: Metadata = {
  title: 'Design Your Tattoo',
  description:
    'Start here. Tell us what you\'re looking for, pick your style, and we\'ll match you with the right artist. Takes less than 2 minutes.',
  openGraph: {
    title: 'Design Your Tattoo | Ink Theory Tattoos',
    description:
      'Custom tattoo questionnaire. Choose your style, size, and placement, and get matched with the right artist at Ink Theory.',
  },
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-20">
      <TattooQuestionnaire />
    </main>
  );
}
