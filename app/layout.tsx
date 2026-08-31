import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// Display: Cinzel — the all-caps serif used across oldedominiontavern.com.
const display = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

// Body: Montserrat — the site's primary paragraph font.
const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldedominiontavern.com",
  ),
  title: {
    default: "Olde Dominion Tavern | American Restaurant & Bar in Haymarket, VA",
    template: "%s | Olde Dominion Tavern",
  },
  description:
    "Haymarket's neighborhood tavern in Dominion Valley — a made-from-scratch American kitchen. Burgers, steaks, seafood, weekend brunch, and a dog-friendly patio. Walk-ins welcome, order online, or host your event.",
  openGraph: {
    title: "Olde Dominion Tavern",
    description:
      "A made-from-scratch American kitchen in Haymarket, VA — steak and wine by night, burgers with the family, and a patio where the dog is always welcome.",
    type: "website",
    images: [{ url: "/odt.png", width: 1350, height: 980, alt: "Olde Dominion Tavern" }],
  },
};

// Restaurant structured data — declares our Facebook & Instagram profiles
// (via `sameAs`) so search engines and social crawlers link the site to them.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Haymarket",
    addressRegion: "VA",
    postalCode: "20169",
    addressCountry: "US",
  },
  hasMap: site.mapUrl,
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-void font-sans text-parchment antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
