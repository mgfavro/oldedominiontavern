import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/site";

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
          {Array.from({ length: 9 }).map((_, i) => (
            <Reveal key={i} delay={(i % 3) * 70}>
              <div
                className={`flex items-center justify-center border border-line bg-char2 ${
                  i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-parchmute">
                  Photo {i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
