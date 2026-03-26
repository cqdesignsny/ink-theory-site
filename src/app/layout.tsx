import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { faqs } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inktheorytattoos.com"),
  title: {
    default: "Ink Theory Tattoos | Premier Tattoo Studio in Hudson Valley, NY & Dallas, TX",
    template: "%s | Ink Theory Tattoos",
  },
  description:
    "Ink Theory Tattoos, led by Steven Martinez with 6M+ followers. Specializing in realism, black & grey, fine line, and custom tattoo artistry. Studio in Montgomery, NY (Hudson Valley). Dallas, TX by appointment only. Book your consultation today.",
  keywords: [
    "tattoo artist near me",
    "best tattoo shop Hudson Valley",
    "realism tattoo artist",
    "black and grey tattoo",
    "tattoo shop Montgomery NY",
    "Steven Martinez tattoo",
    "Ink Theory Tattoos",
    "tattoo studio New York",
    "Dallas tattoo artist",
    "fine line tattoo",
    "custom tattoo design",
    "portrait tattoo artist",
    "dotwork tattoo",
    "best tattoo artist New York",
    "Hudson Valley tattoo shop",
    "Newburgh tattoo",
    "Middletown tattoo",
    "Poughkeepsie tattoo artist",
    "tattoo shop near Newburgh NY",
    "tattoo shop near Middletown NY",
    "tattoo shop near Beacon NY",
    "tattoo artist Orange County NY",
    "tattoo artist Dutchess County NY",
    "Montgomery NY tattoo",
    "realism tattoo Hudson Valley",
    "cover up tattoo artist NY",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inktheorytattoos.com",
    siteName: "Ink Theory Tattoos",
    title: "Ink Theory Tattoos | Premier Tattoo Studio",
    description:
      "Led by Steven Martinez with 6M+ followers. Custom realism, black & grey, and fine line tattoos. Studio in Hudson Valley, NY. Dallas, TX by appointment only.",
    images: [
      {
        url: "https://inktheorytattoos.com/wp-content/uploads/2025/01/logo-seal-wht.png",
        width: 1200,
        height: 630,
        alt: "Ink Theory Tattoos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Theory Tattoos | Premier Tattoo Studio",
    description:
      "Led by Steven Martinez with 6M+ followers. Custom realism, black & grey, and fine line tattoos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://inktheorytattoos.com",
  },
};

// ─── JSON-LD: TattooParlor ──────────────────────────────────
const tattooParlorSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Ink Theory Tattoos",
  image: "https://inktheorytattoos.com/wp-content/uploads/2025/01/logo-seal-wht.png",
  url: "https://inktheorytattoos.com",
  telephone: "(845) 385-2136",
  email: "Scminktheory@gmail.com",
  description:
    "Premier tattoo studio led by Steven Martinez. Specializing in realism, black & grey, fine line, dotwork, and custom tattoo artistry. Studio in Hudson Valley, NY. Dallas-Fort Worth, TX by appointment only.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "663 Route 17K",
    addressLocality: "Montgomery",
    addressRegion: "NY",
    postalCode: "12566",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.5276,
    longitude: -74.2361,
  },
  areaServed: [
    "Montgomery, NY",
    "Newburgh, NY",
    "Middletown, NY",
    "Poughkeepsie, NY",
    "Beacon, NY",
    "Goshen, NY",
    "New Windsor, NY",
    "Walden, NY",
    "Pine Bush, NY",
    "Warwick, NY",
    "Monroe, NY",
    "Washingtonville, NY",
    "Cornwall, NY",
    "Chester, NY",
    "Highland, NY",
    "Woodbury, NY",
    "Central Valley, NY",
    "Harriman, NY",
    "New Paltz, NY",
    "West Point, NY",
    "Wallkill, NY",
    "Hudson Valley",
    "Orange County, NY",
    "Dutchess County, NY",
    "Ulster County, NY",
    "New York",
    "Dallas, TX",
    "Fort Worth, TX",
    "Dallas-Fort Worth, TX",
  ],
  founder: {
    "@type": "Person",
    name: "Steven Martinez",
    jobTitle: "Owner & Lead Artist",
    sameAs: [
      "https://instagram.com/scm_ink",
      "https://tiktok.com/@inktheorytattoos",
    ],
  },
  priceRange: "$250 - $4,000+",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "20:00",
  },
  sameAs: [
    "https://instagram.com/scm_ink",
    "https://tiktok.com/@inktheorytattoos",
    "https://facebook.com/inktheorytattoos",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Realism Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Black & Grey Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fine Line Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dotwork Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cover-Up Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Tattoo Design" } },
    ],
  },
};

// ─── JSON-LD: Person (Steven Martinez) ──────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steven Martinez",
  jobTitle: "Owner & Lead Tattoo Artist",
  worksFor: {
    "@type": "TattooParlor",
    name: "Ink Theory Tattoos",
    url: "https://inktheorytattoos.com",
  },
  description:
    "Steven Martinez is the owner and lead artist at Ink Theory Tattoos with over 6 million social media followers. Known for his realism, high contrast black & grey, and custom tattoo artistry.",
  knowsAbout: [
    "Tattoo Art",
    "Realism Tattoos",
    "Black and Grey Tattoos",
    "Portrait Tattoos",
    "Micro Realism",
    "Cyber Realism",
    "Custom Tattoo Design",
  ],
  sameAs: [
    "https://instagram.com/scm_ink",
    "https://tiktok.com/@inktheorytattoos",
  ],
};

// ─── JSON-LD: FAQPage ───────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to image CDN for faster image loads */}
        <link rel="preconnect" href="https://inktheorytattoos.com" />
        <link rel="dns-prefetch" href="https://inktheorytattoos.com" />

        {/* JSON-LD: TattooParlor */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tattooParlorSchema) }}
        />
        {/* JSON-LD: Person (Steven Martinez) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-ink-black text-ink-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
