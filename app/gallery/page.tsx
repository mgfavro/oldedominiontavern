import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
        subtitle="The room, the bar, the patio, the plates. Drop your own photos into /public and swap these tiles in."
        image={IMG.gallery}
      />

      <section className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 70}>
              <div
                className={`overflow-hidden border border-line bg-char2 ${
                  i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
