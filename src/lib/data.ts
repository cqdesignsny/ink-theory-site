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
    bio: 'Owner and lead artist at Ink Theory. With over 6 million followers across social media, Steven is one of the most recognized tattoo artists in the country. His realism and high contrast black & grey work speaks for itself.',
    image: '/artists/steven-martinez.png',
    instagram: 'https://instagram.com/scm_ink',
    location: 'both',
    featured: true,
  },
  {
    id: 'daron-fuller',
    name: 'Daron Fuller',
    slug: 'daron-fuller',
    styles: ['black-grey', 'illustrative', 'tribal', 'fineline'],
    bio: 'Daron is one of the most versatile artists on the team. He moves between black & grey, illustrative, tribal, and fine line like it\'s nothing. Whatever your style, he can make it happen.',
    image: '/artists/daron-fuller.png',
    location: 'ny',
  },
  {
    id: 'collin-hagerty',
    name: 'Collin Hagerty',
    slug: 'collin-hagerty',
    styles: ['illustrative', 'realism', 'linework', 'minimal-color'],
    bio: 'Collin has a sharp eye for illustrative work and knows how to use just the right amount of color. His realism and linework are always clean, always on point.',
    image: '/artists/collin-hagerty.png',
    location: 'ny',
  },
  {
    id: 'adam-cordoba',
    name: 'Adam Cordoba',
    slug: 'adam-cordoba',
    styles: ['black-grey', 'realism', 'dotwork'],
    bio: 'Adam is all about the details. His dotwork combined with bold realism creates black & grey pieces that have serious depth. Every piece he does is dialed in.',
    image: '/artists/adam-cordoba.png',
    location: 'ny',
  },
  {
    id: 'eric-lebron',
    name: 'Eric LeBron',
    slug: 'eric-lebron',
    styles: ['dotwork', 'minimalistic'],
    bio: 'Eric keeps it clean and intentional. His dotwork and minimalistic pieces prove that less really is more. If you want something timeless and elegant, he\'s your guy.',
    image: '/artists/eric-lebron.png',
    location: 'ny',
  },
  {
    id: 'jazzy-camacho',
    name: 'Jazzy Camacho',
    slug: 'jazzy-camacho',
    styles: ['black-grey', 'realism', 'lettering'],
    bio: 'Jazzy puts her heart into every piece. Her black & grey realism and custom lettering hit different because she actually cares about telling your story through the work.',
    image: '/artists/jazzy-camacho.png',
    location: 'ny',
  },
];

// ─── Tattoo Styles ──────────────────────────────────────────
export const tattooStyles: TattooStyle[] = [
  { id: 'black-grey', name: 'Black & Grey', description: 'Classic monochromatic tattoos with smooth shading and depth', icon: 'Contrast', artists: ['steven-martinez', 'daron-fuller', 'adam-cordoba', 'jazzy-camacho'] },
  { id: 'realism', name: 'Realism', description: 'Photorealistic tattoos that bring images to life on skin', icon: 'Eye', artists: ['steven-martinez', 'collin-hagerty', 'adam-cordoba', 'jazzy-camacho'] },
  { id: 'high-contrast-bg', name: 'High Contrast B&G', description: 'Bold black & grey with dramatic light-dark contrast', icon: 'Sun', artists: ['steven-martinez'] },
  { id: 'fineline', name: 'Fine Line', description: 'Delicate, thin line tattoos packed with intricate detail', icon: 'Pen', artists: ['daron-fuller'] },
  { id: 'dotwork', name: 'Dotwork', description: 'Intricate patterns built entirely from individual dots', icon: 'CircleDot', artists: ['adam-cordoba', 'eric-lebron'] },
  { id: 'illustrative', name: 'Illustrative', description: 'Artistic designs that blend illustration with tattoo tradition', icon: 'Palette', artists: ['daron-fuller', 'collin-hagerty'] },
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
  { id: 'tiny', name: 'Tiny', description: '0 to 3 inches', estimatedTime: '1 to 2 hours', icon: 'Minimize2' },
  { id: 'palm', name: 'Palm Size', description: '4 to 7 inches', estimatedTime: '4 to 6 hours', icon: 'Hand' },
  { id: 'quarter-sleeve', name: 'Quarter Sleeve', description: 'Upper or lower arm section', estimatedTime: '6 to 8 hours', icon: 'ArrowUpDown' },
  { id: 'half-sleeve', name: 'Half Sleeve', description: 'Upper, lower, or outer arm', estimatedTime: 'About 2 days', icon: 'ArrowLeftRight' },
  { id: 'full-sleeve', name: 'Full Sleeve', description: 'Full arm coverage', estimatedTime: '3 to 4 days (8 hrs/day)', icon: 'Maximize2' },
];

// ─── Pricing ────────────────────────────────────────────────
export const priceTiers: PriceTier[] = [
  { placement: 'General Starting Price', range: '$250 to $500' },
  { placement: 'Neck & Armpits', range: '$500 to $800' },
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
    address: 'Private Location, By Appointment Only',
    phone: '(845) 385-2136',
    email: 'Scminktheory@gmail.com',
    status: 'appointment-only' as const,
    nearbyAreas: ['Fort Worth', 'Plano', 'Arlington', 'Frisco', 'McKinney', 'Denton', 'Irving', 'Grand Prairie', 'Garland', 'Mesquite'],
  },
];

// ─── FAQ Data ───────────────────────────────────────────────
export const faqs = [
  { q: 'How do I book an appointment?', a: 'Fill out our Design Your Tattoo questionnaire and we\'ll match you with the right artist. We\'ll text you within 24 hours to lock in your consultation. You can also text us directly at (845) 385-2136.' },
  { q: 'How much does a tattoo cost?', a: 'Most pieces start around $250 to $500. Specialty spots like neck ($500 to $800), feet ($1,600), and glutes ($2,200) have different rates. Bigger or more complex pieces can run $4,000+. It all depends on size, detail, and placement.' },
  { q: 'How long does a tattoo session take?', a: 'A small piece (0 to 3 inches) takes about 1 to 2 hours. Palm sized pieces run 4 to 6 hours. Quarter sleeves take 6 to 8 hours, half sleeves about 2 days, and full sleeves need 3 to 4 days at 8 hours per day.' },
  { q: 'Do you do cover-up tattoos?', a: 'Absolutely. Just send us reference photos of your existing tattoo when you book so we can figure out the best game plan.' },
  { q: 'What should I bring to my appointment?', a: 'Bring a valid photo ID, any reference images you have for your design, comfortable clothes that give easy access to the tattoo area, and snacks or water if you\'re sitting for a longer session.' },
  { q: 'How do I care for my new tattoo?', a: 'Keep the bandage on for 2 to 4 hours, then gently wash with lukewarm water and fragrance free soap. Apply a thin layer of unscented moisturizer 2 to 3 times a day. Stay out of pools, direct sunlight, and don\'t pick at it for 2 to 3 weeks.' },
  { q: 'Can I choose my artist?', a: 'For sure. Every artist on our team has their own specialty. You can request someone specific when you book, or we can match you based on the style you\'re going for.' },
  { q: 'Do you have a minimum age requirement?', a: 'You have to be 18 or older with a valid photo ID. No exceptions, even with parental consent.' },
  { q: 'What styles do you specialize in?', a: 'Our team does it all: Black & Grey, Realism, High Contrast B&G, Fine Line, Dotwork, Illustrative, Geometric, Micro Realism, Lettering, Cyber Realism, Portraits, Tribal, Anime, Linework, and Minimal Color.' },
  { q: 'Do you offer consultations?', a: 'Yes. Once you submit your tattoo details through our questionnaire, we\'ll set up a consultation to nail down your design, placement, and pricing.' },
  { q: 'Can I get tattooed in Dallas?', a: 'Yes. Steven tattoos in the Dallas Fort Worth area by appointment only. The location is private and only shared after your booking is confirmed. You\'ll need to book well in advance. Hit us up at (845) 385-2136 or Scminktheory@gmail.com to check availability.' },
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
