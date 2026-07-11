import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
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
    "Haymarket's neighborhood tavern in Dominion Valley — a made-from-scratch American kitchen. Burgers, steaks, seafood, weekend brunch, and a dog-friendly patio. Reserve, order online, or host your event.",
  openGraph: {
    title: "Olde Dominion Tavern",
    description:
      "A made-from-scratch American kitchen in Haymarket, VA — steak and wine by night, burgers with the family, and a patio where the dog is always welcome.",
    type: "website",
    images: [{ url: "/odt.png", width: 1350, height: 980, alt: "Olde Dominion Tavern" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-void font-sans text-parchment antialiased">
        <TopBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
