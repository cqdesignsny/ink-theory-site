import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';

// Below-fold sections — dynamically imported for code splitting
const FeaturedWork = dynamic(() =>
  import('@/components/home/FeaturedWork').then((m) => ({ default: m.FeaturedWork }))
);
const AboutSteven = dynamic(() =>
  import('@/components/home/AboutSteven').then((m) => ({ default: m.AboutSteven }))
);
const StylesShowcase = dynamic(() =>
  import('@/components/home/StylesShowcase').then((m) => ({ default: m.StylesShowcase }))
);
const TeamCarousel = dynamic(() =>
  import('@/components/home/TeamCarousel').then((m) => ({ default: m.TeamCarousel }))
);
const LocationsPreview = dynamic(() =>
  import('@/components/home/LocationsPreview').then((m) => ({ default: m.LocationsPreview }))
);
const Testimonials = dynamic(() =>
  import('@/components/home/Testimonials').then((m) => ({ default: m.Testimonials }))
);
const CTABanner = dynamic(() =>
  import('@/components/home/CTABanner').then((m) => ({ default: m.CTABanner }))
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutSteven />
      <StylesShowcase />
      <TeamCarousel />
      <LocationsPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
