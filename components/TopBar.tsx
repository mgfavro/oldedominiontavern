import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-brass">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2.5 font-sans text-[11.5px] uppercase tracking-[0.1em] text-white/70 md:px-8">
        <span className="hidden sm:inline">
          Dominion Valley · Haymarket, Virginia
        </span>
        <span className="sm:hidden">Haymarket, VA</span>
        <a
          href={site.phoneHref}
          className="font-medium text-white transition-colors hover:text-white/70"
        >
          {site.phone}
        </a>
      </div>
    </div>
  );
}
