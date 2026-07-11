import { site } from "@/lib/site";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-brass">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-2 font-sans text-[11.5px] uppercase tracking-[0.1em] text-white/70 md:px-8">
        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="font-medium text-white transition-colors hover:text-white/70"
          >
            {site.phone}
          </a>
          <span className="hidden text-white/40 sm:inline">·</span>
          <span className="hidden sm:inline">
            Dominion Valley, Haymarket VA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/80 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/80 transition-colors hover:text-white"
          >
            <FacebookIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
