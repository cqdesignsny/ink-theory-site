import { Metadata } from 'next';
import { TattooQuestionnaire } from '@/components/book/TattooQuestionnaire';

export const metadata: Metadata = {
  title: 'Design Your Tattoo',
  description:
    'Start your custom tattoo journey with Ink Theory. Tell us your vision, choose your style, and we\'ll match you with the perfect artist. Book your consultation in under 2 minutes.',
  openGraph: {
    title: 'Design Your Tattoo | Ink Theory Tattoos',
    description:
      'Custom tattoo questionnaire — choose your style, size, and placement. Get matched with the perfect artist at Ink Theory.',
  },
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-ink-black pt-20">
      <TattooQuestionnaire />
    </main>
  );
}
