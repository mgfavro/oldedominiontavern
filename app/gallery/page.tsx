import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { IMG, GALLERY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Olde Dominion Tavern — the dining room, the bar, the patio, and the plates.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="A Look Inside"
        title="Gallery"
        subtitle="The room, the bar, the patio, the plates."
        image={IMG.gallery}
      />

      <section className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24">
        <GalleryGrid photos={GALLERY} />
      </section>
    </main>
  );
}
