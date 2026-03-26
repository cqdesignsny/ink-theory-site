// ============================================================
// Service Area Data for Local SEO Landing Pages
// Surrounding towns near Montgomery, NY
// ============================================================

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  state: string;
  distance: string; // from Montgomery studio
  description: string;
  nearbyLandmarks?: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'newburgh',
    name: 'Newburgh',
    county: 'Orange County',
    state: 'NY',
    distance: '10 minutes',
    description:
      'Serving Newburgh and the greater Newburgh area with premium tattoo artistry. Our Montgomery studio is just a short drive from downtown Newburgh, making Ink Theory the go-to destination for custom realism, black & grey, and fine line tattoos in the Newburgh area.',
    nearbyLandmarks: ['Newburgh Waterfront', 'Washington\'s Headquarters', 'Downing Park'],
  },
  {
    slug: 'middletown',
    name: 'Middletown',
    county: 'Orange County',
    state: 'NY',
    distance: '15 minutes',
    description:
      'Ink Theory proudly serves Middletown and the surrounding community. Located just 15 minutes away in Montgomery, our studio offers world-class tattoo artistry to Middletown residents seeking the best in realism, portrait, and custom tattoo work.',
    nearbyLandmarks: ['Fancher-Davidge Park', 'Paramount Theatre'],
  },
  {
    slug: 'poughkeepsie',
    name: 'Poughkeepsie',
    county: 'Dutchess County',
    state: 'NY',
    distance: '30 minutes',
    description:
      'Looking for the best tattoo artist near Poughkeepsie? Ink Theory in Montgomery is worth the short drive. Led by Steven Martinez with over 6 million followers, our team specializes in realism, black & grey, and custom tattoo designs that Poughkeepsie clients love.',
    nearbyLandmarks: ['Walkway Over the Hudson', 'Marist College', 'Vassar College'],
  },
  {
    slug: 'beacon',
    name: 'Beacon',
    county: 'Dutchess County',
    state: 'NY',
    distance: '25 minutes',
    description:
      'Beacon\'s art-loving community trusts Ink Theory for premium tattoo artistry. Just 25 minutes from Beacon, our Montgomery studio brings world-class realism and fine line tattooing to the Hudson Valley\'s creative hub.',
    nearbyLandmarks: ['Dia:Beacon', 'Mount Beacon', 'Main Street Gallery District'],
  },
  {
    slug: 'goshen',
    name: 'Goshen',
    county: 'Orange County',
    state: 'NY',
    distance: '10 minutes',
    description:
      'Goshen residents choose Ink Theory for the best tattoo experience in Orange County. Our Montgomery studio is just 10 minutes from the village of Goshen, offering custom realism, black & grey, dotwork, and portrait tattoos.',
    nearbyLandmarks: ['Goshen Historic Track', 'Harness Racing Museum'],
  },
  {
    slug: 'wallkill',
    name: 'Wallkill',
    county: 'Orange County',
    state: 'NY',
    distance: '5 minutes',
    description:
      'As the closest town to our studio, Wallkill residents enjoy easy access to Ink Theory\'s premium tattoo services. Just minutes away on Route 17K, we offer the Hudson Valley\'s best realism and custom tattoo artistry.',
  },
  {
    slug: 'new-windsor',
    name: 'New Windsor',
    county: 'Orange County',
    state: 'NY',
    distance: '15 minutes',
    description:
      'New Windsor clients love the short trip to Ink Theory in Montgomery for premium tattoo work. Our team of skilled artists specializes in realism, black & grey, fine line, and portrait tattoos that exceed expectations.',
    nearbyLandmarks: ['New Windsor Cantonment', 'Stewart International Airport area'],
  },
  {
    slug: 'cornwall',
    name: 'Cornwall',
    county: 'Orange County',
    state: 'NY',
    distance: '20 minutes',
    description:
      'Cornwall residents seeking top-tier tattoo artistry choose Ink Theory. Our Montgomery studio is a quick 20-minute drive and features artists skilled in realism, dotwork, and custom designs that Cornwall clients recommend.',
    nearbyLandmarks: ['Storm King Art Center', 'Black Rock Forest', 'Cornwall Waterfront'],
  },
  {
    slug: 'washingtonville',
    name: 'Washingtonville',
    county: 'Orange County',
    state: 'NY',
    distance: '10 minutes',
    description:
      'Washingtonville is one of our closest service areas. Ink Theory in Montgomery delivers premium tattoo artistry with specializations in realism, black & grey, and custom designs, all just a short drive from downtown Washingtonville.',
    nearbyLandmarks: ['Brotherhood Winery'],
  },
  {
    slug: 'walden',
    name: 'Walden',
    county: 'Orange County',
    state: 'NY',
    distance: '10 minutes',
    description:
      'Walden residents trust Ink Theory for the best tattoo experience in Orange County. Our Montgomery studio is just 10 minutes away, offering custom realism, fine line, and portrait tattoo work by artists who are passionate about their craft.',
  },
  {
    slug: 'pine-bush',
    name: 'Pine Bush',
    county: 'Orange County',
    state: 'NY',
    distance: '15 minutes',
    description:
      'Pine Bush clients make the easy drive to Ink Theory for Hudson Valley\'s premier tattoo artistry. From realism to dotwork to custom lettering, our Montgomery studio serves Pine Bush with world-class tattoo work.',
  },
  {
    slug: 'chester',
    name: 'Chester',
    county: 'Orange County',
    state: 'NY',
    distance: '20 minutes',
    description:
      'Chester residents looking for premium tattoo artistry choose Ink Theory in Montgomery. Our skilled team of artists brings together realism, black & grey, and custom design expertise just 20 minutes from Chester.',
  },
  {
    slug: 'warwick',
    name: 'Warwick',
    county: 'Orange County',
    state: 'NY',
    distance: '25 minutes',
    description:
      'Warwick clients make the trip to Ink Theory knowing they\'re getting the best tattoo artistry in the Hudson Valley. Our Montgomery studio features artists who specialize in realism, portrait work, and custom tattoo design.',
    nearbyLandmarks: ['Warwick Village', 'Pennings Farm', 'Appalachian Trail access'],
  },
  {
    slug: 'monroe',
    name: 'Monroe',
    county: 'Orange County',
    state: 'NY',
    distance: '20 minutes',
    description:
      'Monroe residents choose Ink Theory for custom tattoo artistry that stands out. Our Montgomery studio is a short drive from Monroe and features the Hudson Valley\'s best realism, black & grey, and fine line tattoo artists.',
    nearbyLandmarks: ['Museum Village', 'Goosepond Mountain State Park'],
  },
  {
    slug: 'highland',
    name: 'Highland',
    county: 'Ulster County',
    state: 'NY',
    distance: '30 minutes',
    description:
      'Highland and Ulster County residents seeking premium tattoo artistry make the drive to Ink Theory in Montgomery. Led by Steven Martinez, our team delivers exceptional realism, portrait, and custom tattoo work.',
    nearbyLandmarks: ['Walkway Over the Hudson (west entrance)', 'Hudson Valley wineries'],
  },
  {
    slug: 'new-paltz',
    name: 'New Paltz',
    county: 'Ulster County',
    state: 'NY',
    distance: '30 minutes',
    description:
      'New Paltz\'s creative community chooses Ink Theory for premium tattoo artistry. Just 30 minutes from the Mohonk Preserve area, our Montgomery studio offers realism, fine line, and custom designs that New Paltz residents love.',
    nearbyLandmarks: ['Mohonk Preserve', 'SUNY New Paltz', 'Minnewaska State Park'],
  },
  {
    slug: 'woodbury',
    name: 'Woodbury',
    county: 'Orange County',
    state: 'NY',
    distance: '20 minutes',
    description:
      'Woodbury residents trust Ink Theory for the best tattoo experience in the Hudson Valley. Our Montgomery studio is an easy 20-minute drive, offering world-class realism, black & grey, and custom tattoo artistry.',
    nearbyLandmarks: ['Woodbury Common Premium Outlets'],
  },
  {
    slug: 'central-valley',
    name: 'Central Valley',
    county: 'Orange County',
    state: 'NY',
    distance: '20 minutes',
    description:
      'Central Valley clients choose Ink Theory for premium tattoo artistry just a short drive away in Montgomery. Our team specializes in realism, portrait work, dotwork, and custom designs.',
    nearbyLandmarks: ['Woodbury Common Premium Outlets', 'Harriman State Park'],
  },
  {
    slug: 'harriman',
    name: 'Harriman',
    county: 'Orange County',
    state: 'NY',
    distance: '20 minutes',
    description:
      'Harriman residents enjoy easy access to Ink Theory\'s premium tattoo services in nearby Montgomery. From realism to fine line to custom designs, our artists deliver exceptional tattoo work for the Harriman community.',
    nearbyLandmarks: ['Harriman State Park', 'Appalachian Trail'],
  },
];

// Helper to get all service area slugs for static generation
export function getAllServiceAreaSlugs(): string[] {
  return serviceAreas.map((area) => area.slug);
}

// Helper to find a service area by slug
export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
