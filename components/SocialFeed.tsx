import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { InstagramBadge, FacebookBadge } from "@/components/SocialIcons";

const HANDLE = "@oldedominiontavern";

// Facebook Page Plugin — renders the page's live timeline in an iframe using
// just the public page URL (no access token or app setup required).
const fbFeedSrc =
  "https://www.facebook.com/plugins/page.php?" +
  new URLSearchParams({
    href: site.social.facebook,
    tabs: "timeline",
    width: "500",
    height: "640",
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  }).toString();

export default function SocialFeed() {
  return (
    <section className="border-t border-line bg-char">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-8 md:py-28">
        <Reveal className="mb-14 text-center">
          <span className="label">Follow Along</span>
          <h2 className="mt-4 font-display text-[clamp(30px,4.5vw,52px)] font-light leading-tight text-parchment">
            Latest from the tavern
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-[16px] font-light text-parchdim">
            Specials, events, and everyday moments — straight from our feed.
            Follow along at {HANDLE}.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Facebook live feed */}
          <Reveal>
            <div className="flex h-full flex-col overflow-hidden border border-line bg-char2">
              <div className="flex items-center gap-3 border-b border-line px-6 py-4">
                <FacebookBadge className="h-8 w-8" />
                <span className="font-display text-[20px] text-parchment">
                  On Facebook
                </span>
              </div>
              <div className="flex justify-center bg-white p-2">
                <iframe
                  title="Olde Dominion Tavern on Facebook"
                  src={fbFeedSrc}
                  className="h-[640px] w-full max-w-[500px]"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder={0}
                  allow="encrypted-media"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Instagram follow card */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-between border border-line bg-char2 p-8 md:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <InstagramBadge className="h-8 w-8" />
                  <span className="font-display text-[20px] text-parchment">
                    On Instagram
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[clamp(24px,3vw,34px)] font-light leading-tight text-parchment">
                  {HANDLE}
                </h3>
                <p className="mt-4 font-sans text-[16px] font-light leading-relaxed text-parchdim">
                  See the daily plates, the patio, and what&apos;s pouring at the
                  bar. Give us a follow and tag us on your next visit.
                </p>
              </div>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid mt-9 self-start"
              >
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
