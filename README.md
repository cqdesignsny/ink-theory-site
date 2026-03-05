# Ink Theory Tattoos — Website

Premium tattoo studio website for **Ink Theory Tattoos**, led by Steven Martinez (5M+ social media followers). Studios in Montgomery, NY (Hudson Valley) and Dallas, TX (coming soon).

Built by **CQ Marketing**.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP + ScrollTrigger, Framer Motion
- **Fonts**: Inter (body), Space Grotesk (headings) via `next/font/google`
- **Images**: Served from `inktheorytattoos.com`, optimized by Next.js (WebP/AVIF)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout — SEO metadata, 3 JSON-LD schemas, fonts
    page.tsx            # Homepage — Hero + 7 dynamic sections
    globals.css         # Tailwind config + custom utilities
    gallery/page.tsx    # Portfolio gallery (masonry + lightbox)
    artists/page.tsx    # Artist team grid
    book/page.tsx       # Booking questionnaire (6-step wizard)
    locations/page.tsx  # Studio locations
    faq/page.tsx        # FAQ page
    contact/page.tsx    # Contact page
    areas/[slug]/       # 19 local SEO landing pages (SSG)
  components/
    Hero.tsx            # Full-screen video hero with GSAP parallax
    Navbar.tsx          # Fixed navigation with mobile menu
    Footer.tsx          # 4-column footer + service area links
    home/               # 7 homepage sections
    book/               # TattooQuestionnaire.tsx (6-step form)
    gallery/            # GalleryGrid.tsx (masonry + lightbox)
    artists/            # ArtistsGrid.tsx
  lib/
    data.ts             # Central data: artists, styles, placements, FAQs, images
    service-areas.ts    # 19 Hudson Valley service areas for local SEO
```

## Pages

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage with hero, featured work, about, team, styles, locations, testimonials, CTA |
| `/gallery` | Static | Full portfolio gallery with masonry layout and lightbox |
| `/artists` | Static | Artist team grid with style tags |
| `/book` | Static | 6-step tattoo booking questionnaire with artist matching |
| `/locations` | Static | Studio locations (Montgomery NY + Dallas TX coming soon) |
| `/faq` | Static | Frequently asked questions |
| `/contact` | Static | Contact information |
| `/areas/[slug]` | SSG (x19) | Local landing pages for surrounding Hudson Valley towns |

**Total: 29 pages** (8 static + 19 SSG + 2 Next.js internal)

## SEO

### Structured Data (JSON-LD)
Three schemas injected in the root layout:

1. **TattooParlor** — Business info, address, geo coordinates, hours, 7 service offerings, 29 service areas, social links
2. **Person** (Steven Martinez) — Owner profile, skills, social links
3. **FAQPage** — Dynamic FAQ schema built from data

### Local SEO
- 19 service area landing pages targeting Hudson Valley towns across Orange, Dutchess, and Ulster counties
- Each page has unique metadata, keywords, canonical URL, and LocalBusiness JSON-LD
- Footer includes internal links to 12 service areas + county listing for crawl authority
- Towns: Newburgh, Middletown, Poughkeepsie, Beacon, Goshen, Wallkill, New Windsor, Cornwall, Washingtonville, Walden, Pine Bush, Chester, Warwick, Monroe, Highland, New Paltz, Woodbury, Central Valley, Harriman

## Performance Optimizations

- **Image Optimization**: All images use Next.js `<Image>` with WebP/AVIF auto-conversion (no `unoptimized` flags)
- **Code Splitting**: Below-fold homepage sections use `next/dynamic` for lazy loading
- **Video**: Hero background video uses `preload="none"` with poster image fallback
- **Font Loading**: `display: "swap"` on all fonts to prevent FOIT
- **Preconnect**: `<link rel="preconnect">` and `<link rel="dns-prefetch">` for image CDN
- **Above-fold Priority**: Navbar logo and Hero content use `priority` loading

## Key Features

- **Tattoo Questionnaire**: 6-step booking wizard (Style → Placement → Size → Details → Artist Match → Contact) with intelligent artist matching based on style preferences
- **Masonry Gallery**: CSS columns-based layout with fullscreen lightbox and keyboard/click navigation
- **GSAP Animations**: Scroll-driven parallax, reveal animations, glow effects across all sections
- **Responsive Design**: Mobile-first with breakpoints for sm/md/lg/xl
- **Service Area Pages**: SSG local landing pages for 19 surrounding towns

## Environment

- Node.js 18+
- npm
- Next.js 16 with Turbopack (`next dev --turbopack`)

## Deployment

The site is configured for deployment on Vercel or any platform supporting Next.js. The `next.config.ts` includes `remotePatterns` for the `inktheorytattoos.com` image domain.

---

Built with Next.js by CQ Marketing for Ink Theory Tattoos.
