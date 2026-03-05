// ============================================================
// Ink Theory Tattoos — Central Data Store
// All artist info, styles, pricing, sizes from the Notion wiki
// ============================================================

export interface Artist {
  id: string;
  name: string;
  slug: string;
  styles: string[];
  bio: string;
  image: string;
  instagram?: string;
  location: 'ny' | 'dallas' | 'both';
  featured?: boolean;
}

export interface TattooStyle {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  artists: string[]; // artist IDs who do this style
}

export interface BodyPlacement {
  id: string;
  name: string;
  icon: string;
  priceModifier?: string;
}

export interface TattooSize {
  id: string;
  name: string;
  description: string;
  estimatedTime: string;
  icon: string;
}

export interface PriceTier {
  placement: string;
  range: string;
}

// ─── Artists ─────────────────────────────────────────────────
export const artists: Artist[] = [
  {
    id: 'steven-martinez',
    name: 'Steven Martinez',
    slug: 'steven-martinez',
    styles: ['black-grey', 'realism', 'high-contrast-bg'],
    bio: 'Owner and lead artist at Ink Theory. With over 5 million followers across social media, Steven is recognized as one of the top tattoo artists in the country, known for his breathtaking realism and high-contrast black & grey work.',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2025/07/ink-theory-teamsteven.jpg',
    instagram: 'https://instagram.com/scm_ink',
    location: 'both',
    featured: true,
  },
  {
    id: 'daron-fuller',
    name: 'Daron Fuller',
    slug: 'daron-fuller',
    styles: ['black-grey', 'illustrative', 'tribal', 'fineline'],
    bio: 'Daron brings a versatile range to Ink Theory, seamlessly blending black & grey fundamentals with illustrative flair, tribal heritage designs, and precise fine line work.',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2025/07/ink-theory-teamArtboard-2.jpg',
    location: 'ny',
  },
  {
    id: 'collin-hagerty',
    name: 'Collin Hagerty',
    slug: 'collin-hagerty',
    styles: ['illustrative', 'realism', 'linework', 'minimal-color'],
    bio: 'Collin\'s artistic eye for illustrative work with minimal color creates pieces that stand out. His realism and clean linework make every tattoo a masterpiece.',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2025/07/ink-theory-teamArtboard-4.jpg',
    location: 'ny',
  },
  {
    id: 'adam-cordoba',
    name: 'Adam Cordoba',
    slug: 'adam-cordoba',
    styles: ['black-grey', 'realism', 'dotwork'],
    bio: 'Adam specializes in the delicate art of dotwork combined with bold realism. His black & grey pieces are rich with depth and meticulous detail.',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2025/07/ink-theory-team-7.jpg',
    location: 'ny',
  },
  {
    id: 'eric-lebron',
    name: 'Eric LeBron',
    slug: 'eric-lebron',
    styles: ['dotwork', 'minimalistic'],
    bio: 'Eric\'s minimalistic approach and mastery of dotwork creates clean, elegant tattoos. His less-is-more philosophy produces timeless pieces.',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2025/07/ink-theory-teamArtboard-5.jpg',
    location: 'ny',
  },
  {
    id: 'jazzy-camacho',
    name: 'Jazzy Camacho',
    slug: 'jazzy-camacho',
    styles: ['black-grey', 'realism', 'lettering'],
    bio: 'Jazzy brings passion and precision to every piece, excelling in black & grey realism and custom lettering that tells each client\'s unique story.',
    image: 'https://inktheorytattoos.com/wp-content/uploads/2026/01/jozzy.png',
    location: 'ny',
  },
];

// ─── Tattoo Styles ──────────────────────────────────────────
export const tattooStyles: TattooStyle[] = [
  { id: 'black-grey', name: 'Black & Grey', description: 'Classic monochromatic tattoos with smooth shading and depth', icon: 'Contrast', artists: ['steven-martinez', 'daron-fuller', 'adam-cordoba', 'jazzy-camacho'] },
  { id: 'realism', name: 'Realism', description: 'Photorealistic tattoos that bring images to life on skin', icon: 'Eye', artists: ['steven-martinez', 'collin-hagerty', 'adam-cordoba', 'jazzy-camacho'] },
  { id: 'high-contrast-bg', name: 'High Contrast B&G', description: 'Bold black & grey with dramatic light-dark contrast', icon: 'Sun', artists: ['steven-martinez'] },
  { id: 'fineline', name: 'Fine Line', description: 'Delicate, thin-line tattoos with intricate detail', icon: 'Pen', artists: ['daron-fuller'] },
  { id: 'dotwork', name: 'Dotwork', description: 'Intricate patterns created entirely from individual dots', icon: 'CircleDot', artists: ['adam-cordoba', 'eric-lebron'] },
  { id: 'illustrative', name: 'Illustrative', description: 'Artistic designs blending illustration with tattoo tradition', icon: 'Palette', artists: ['daron-fuller', 'collin-hagerty'] },
  { id: 'geometric', name: 'Geometric', description: 'Clean geometric shapes and sacred geometry patterns', icon: 'Hexagon', artists: ['eric-lebron'] },
  { id: 'micro-realism', name: 'Micro Realism', description: 'Tiny photorealistic tattoos with incredible detail', icon: 'Search', artists: ['steven-martinez', 'adam-cordoba'] },
  { id: 'lettering', name: 'Lettering', description: 'Custom script, fonts, and typographic tattoo art', icon: 'Type', artists: ['jazzy-camacho'] },
  { id: 'cyber-realism', name: 'Cyber Realism', description: 'Futuristic realism blending tech aesthetics with organic forms', icon: 'Cpu', artists: ['steven-martinez'] },
  { id: 'portraits', name: 'Portraits', description: 'Lifelike portrait tattoos of people and pets', icon: 'User', artists: ['steven-martinez', 'jazzy-camacho'] },
  { id: 'tribal', name: 'Tribal', description: 'Bold tribal patterns honoring cultural traditions', icon: 'Flame', artists: ['daron-fuller'] },
  { id: 'anime', name: 'Anime', description: 'Japanese anime and manga inspired tattoo designs', icon: 'Sparkles', artists: ['collin-hagerty'] },
  { id: 'linework', name: 'Linework', description: 'Clean continuous line art and minimal line designs', icon: 'Minus', artists: ['collin-hagerty'] },
  { id: 'minimal-color', name: 'Minimal Color', description: 'Subtle color accents within predominantly black designs', icon: 'Droplets', artists: ['collin-hagerty'] },
  { id: 'minimalistic', name: 'Minimalistic', description: 'Simple, clean designs with maximum impact', icon: 'Circle', artists: ['eric-lebron'] },
];

// ─── Body Placements ────────────────────────────────────────
export const bodyPlacements: BodyPlacement[] = [
  { id: 'arm', name: 'Arms', icon: 'Dumbbell' },
  { id: 'back', name: 'Back', icon: 'RectangleVertical' },
  { id: 'chest', name: 'Chest / Pecs', icon: 'Shield' },
  { id: 'torso', name: 'Torso', icon: 'Shirt' },
  { id: 'leg', name: 'Legs', icon: 'Ruler' },
  { id: 'ribs', name: 'Ribs', icon: 'AlignJustify' },
  { id: 'hand', name: 'Hands', icon: 'Hand' },
  { id: 'neck', name: 'Neck', icon: 'CircleUser' },
  { id: 'abdomen', name: 'Abdomen', icon: 'Target' },
  { id: 'feet', name: 'Feet', icon: 'Footprints' },
  { id: 'glutes', name: 'Glutes', icon: 'Gem' },
  { id: 'face', name: 'Face', icon: 'Smile' },
];

// ─── Placement → Size Logic ───────────────────────────────────
// Maps each body placement to which sizes make sense
export const placementSizeMap: Record<string, string[]> = {
  arm: ['tiny', 'palm', 'quarter-sleeve', 'half-sleeve', 'full-sleeve'],
  back: ['tiny', 'palm', 'quarter-sleeve', 'half-sleeve', 'full-sleeve'],
  chest: ['tiny', 'palm', 'quarter-sleeve', 'half-sleeve'],
  torso: ['tiny', 'palm', 'quarter-sleeve', 'half-sleeve'],
  leg: ['tiny', 'palm', 'quarter-sleeve', 'half-sleeve', 'full-sleeve'],
  ribs: ['tiny', 'palm', 'quarter-sleeve'],
  hand: ['tiny', 'palm'],
  neck: ['tiny', 'palm'],
  abdomen: ['tiny', 'palm', 'quarter-sleeve'],
  feet: ['tiny', 'palm'],
  glutes: ['tiny', 'palm', 'quarter-sleeve'],
  face: ['tiny', 'palm'],
};

// ─── Sizes ──────────────────────────────────────────────────
export const tattooSizes: TattooSize[] = [
  { id: 'tiny', name: 'Tiny', description: '0–3 inches', estimatedTime: '1–2 hours', icon: 'Minimize2' },
  { id: 'palm', name: 'Palm Size', description: '4–7 inches', estimatedTime: '4–6 hours', icon: 'Hand' },
  { id: 'quarter-sleeve', name: 'Quarter Sleeve', description: 'Upper or lower arm section', estimatedTime: '6–8 hours', icon: 'ArrowUpDown' },
  { id: 'half-sleeve', name: 'Half Sleeve', description: 'Upper, lower, or outer arm', estimatedTime: '~2 days', icon: 'ArrowLeftRight' },
  { id: 'full-sleeve', name: 'Full Sleeve', description: 'Full arm coverage', estimatedTime: '3–4 days (8 hrs/day)', icon: 'Maximize2' },
];

// ─── Pricing ────────────────────────────────────────────────
export const priceTiers: PriceTier[] = [
  { placement: 'General Starting Price', range: '$250 – $500' },
  { placement: 'Neck & Armpits', range: '$500 – $800' },
  { placement: 'Feet', range: '$1,600' },
  { placement: 'Glutes', range: '$2,200' },
  { placement: 'Large / Complex Pieces', range: 'Up to $4,000+' },
];

export const detailLevels = [
  { id: 'low', name: 'Low Detail', description: 'Simple designs, minimal shading', icon: 'Minus' },
  { id: 'mid', name: 'Mid Detail', description: 'Moderate complexity with shading and texture', icon: 'Equal' },
  { id: 'advanced', name: 'Advanced / High Detail', description: 'Complex realism, intricate patterns, full coverage', icon: 'Layers' },
];

// ─── Locations ──────────────────────────────────────────────
export const locations = [
  {
    id: 'ny',
    name: 'Montgomery, NY',
    address: '663 Route 17K, Montgomery, NY 12566',
    phone: '(845) 385-2136',
    email: 'Scminktheory@gmail.com',
    status: 'open' as const,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5!2d-74.2361!3d41.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e0a7b9c4b8a7%3A0x1234567890!2s663+NY-17K%2C+Montgomery%2C+NY+12566!5e0!3m2!1sen!2sus!4v1234567890',
    nearbyAreas: ['Newburgh', 'Middletown', 'Poughkeepsie', 'Beacon', 'Goshen', 'New Windsor', 'Walden', 'Pine Bush', 'Warwick', 'Monroe', 'Washingtonville', 'Cornwall', 'West Point'],
  },
  {
    id: 'dallas',
    name: 'Dallas, TX',
    address: 'Coming Soon',
    phone: '(845) 385-2136',
    email: 'Scminktheory@gmail.com',
    status: 'coming-soon' as const,
    nearbyAreas: ['Fort Worth', 'Plano', 'Arlington', 'Frisco', 'McKinney', 'Denton', 'Irving', 'Grand Prairie', 'Garland', 'Mesquite'],
  },
];

// ─── FAQ Data ───────────────────────────────────────────────
export const faqs = [
  { q: 'How do I book an appointment?', a: 'Fill out our Design Your Tattoo questionnaire and we\'ll match you with the perfect artist. We\'ll text you within 24 hours to confirm your consultation. You can also text us directly at (845) 385-2136.' },
  { q: 'How much does a tattoo cost?', a: 'Pricing starts at $250–$500 for most placements. Specialty areas like neck ($500–$800), feet ($1,600), and glutes ($2,200) have different rates. Large or complex pieces can run $4,000+. Final pricing depends on size, detail level, and placement.' },
  { q: 'How long does a tattoo session take?', a: 'A tiny tattoo (0–3 inches) takes 1–2 hours. Palm-sized pieces take 4–6 hours. A quarter sleeve is 6–8 hours, half sleeves take about 2 days, and full sleeves require 3–4 days at 8 hours per day.' },
  { q: 'Do you do cover-up tattoos?', a: 'Yes! We accept cover-up work. Please include reference photos of your existing tattoo when booking so we can assess the best approach.' },
  { q: 'What should I bring to my appointment?', a: 'Bring a valid photo ID, reference images for your design, comfortable clothing that allows easy access to the tattoo area, and snacks/water for longer sessions.' },
  { q: 'How do I care for my new tattoo?', a: 'Keep the bandage on for 2–4 hours, then gently wash with lukewarm water and fragrance-free soap. Apply a thin layer of unscented moisturizer 2–3 times daily. Avoid submerging in water, direct sunlight, and picking at scabs for 2–3 weeks.' },
  { q: 'Can I choose my artist?', a: 'Absolutely. Each of our artists specializes in different styles. You can request a specific artist when booking, or let us match you based on your desired style for the best result.' },
  { q: 'Do you have a minimum age requirement?', a: 'You must be 18 years or older with a valid photo ID. We do not tattoo minors, even with parental consent.' },
  { q: 'What styles do you specialize in?', a: 'Our team covers Black & Grey, Realism, High Contrast B&G, Fine Line, Dotwork, Illustrative, Geometric, Micro Realism, Lettering, Cyber Realism, Portraits, Tribal, Anime, Linework, and Minimal Color.' },
  { q: 'Do you offer consultations?', a: 'Yes, consultations are part of our booking process. After you submit your tattoo details through our questionnaire, we\'ll schedule a consultation to finalize your design, placement, and pricing.' },
];

// ─── Helper: Match artists to a style ───────────────────────
export function getArtistsForStyle(styleId: string): Artist[] {
  const style = tattooStyles.find(s => s.id === styleId);
  if (!style) return [];
  return artists.filter(a => style.artists.includes(a.id));
}

// ─── Helper: Get recommended artists based on selections ────
export function getRecommendedArtists(selectedStyles: string[], location?: 'ny' | 'dallas'): Artist[] {
  const matchingArtistIds = new Set<string>();
  selectedStyles.forEach(styleId => {
    const style = tattooStyles.find(s => s.id === styleId);
    if (style) {
      style.artists.forEach(id => matchingArtistIds.add(id));
    }
  });

  let matched = artists.filter(a => matchingArtistIds.has(a.id));

  if (location) {
    matched = matched.filter(a => a.location === location || a.location === 'both');
  }

  // Sort by number of matching styles (most matches first)
  matched.sort((a, b) => {
    const aMatches = a.styles.filter(s => selectedStyles.includes(s)).length;
    const bMatches = b.styles.filter(s => selectedStyles.includes(s)).length;
    return bMatches - aMatches;
  });

  return matched;
}

// ─── Portfolio Images ────────────────────────────────────────
export const portfolioImages = [
  { src: '/gallery/black-and-grey-zeus-statue-forearm-tattoo.jpg', alt: 'Black and grey realistic Zeus statue tattoo with ribbon detail on forearm by Ink Theory' },
  { src: '/gallery/black-and-grey-lion-spartan-warrior-shoulder-tattoo.jpg', alt: 'Black and grey roaring lion and Spartan warrior tattoo on upper arm by Ink Theory' },
  { src: '/gallery/black-and-grey-hannya-mask-portrait-arm-tattoo.jpg', alt: 'Black and grey Japanese hannya mask merged with woman portrait tattoo on arm by Ink Theory' },
  { src: '/gallery/black-and-grey-greek-god-portrait-forearm-tattoo.jpg', alt: 'Black and grey realistic Greek god bearded portrait tattoo on forearm by Ink Theory' },
  { src: '/gallery/black-and-grey-virgin-mary-praying-forearm-tattoo.jpg', alt: 'Black and grey Virgin Mary praying with radiant halo tattoo on forearm by Ink Theory' },
  { src: '/gallery/black-and-grey-cowboy-horseback-forearm-tattoo.jpg', alt: 'Black and grey realistic cowboy on horseback tattoo on forearm by Ink Theory' },
  { src: '/gallery/black-and-grey-woman-tiger-surreal-leg-tattoo.jpg', alt: 'Black and grey surreal woman and tiger face morph tattoo on leg by Ink Theory' },
  { src: '/gallery/black-and-grey-religious-king-statue-leg-tattoo.jpg', alt: 'Black and grey religious king statue with crown and halo tattoo on leg by Ink Theory' },
  { src: '/gallery/black-and-grey-jesus-crown-of-thorns-forearm-tattoo.jpg', alt: 'Black and grey Jesus Christ with crown of thorns and sacred heart tattoo on forearm by Ink Theory' },
  { src: '/gallery/black-and-grey-roaring-lion-spartan-shoulder-tattoo.jpg', alt: 'Black and grey roaring lion with Spartan warrior tattoo on shoulder by Ink Theory' },
  { src: '/gallery/black-and-grey-virgin-mary-closeup-portrait-tattoo.jpg', alt: 'Black and grey Virgin Mary closeup portrait tattoo with radiant halo by Ink Theory' },
  { src: '/gallery/black-and-grey-skull-ripping-skin-leg-tattoo.jpg', alt: 'Black and grey realistic skull ripping through skin tattoo on leg by Ink Theory' },
];

// ─── Shop / Studio Images ───────────────────────────────────
export const shopImages = [
  'https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-1.png',
  'https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-2.png',
  'https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-6b.jpg',
  'https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-7.jpg',
  'https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-17.jpg',
  'https://inktheorytattoos.com/wp-content/uploads/2025/01/tattoo-shop-18.jpg',
];

// ─── Site images ────────────────────────────────────────────
export const siteImages = {
  logo: 'https://inktheorytattoos.com/wp-content/uploads/2025/01/logo-seal-wht.png',
  steven: 'https://inktheorytattoos.com/wp-content/uploads/2025/01/career-coach-3.png',
  heroOverlay: 'https://inktheorytattoos.com/wp-content/uploads/2025/02/point-up-2-534x1024.png',
};
