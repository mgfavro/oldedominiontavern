"use client";

import { useState } from "react";
import Link from "next/link";
import { site, nav } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-[22px] font-medium tracking-wordmark text-parchment"
          onClick={() => setOpen(false)}
        >
          Olde Dominion <span className="text-brass">Tavern</span>
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-sans text-[13px] uppercase tracking-[0.14em] text-parchdim transition-colors hover:text-parchment"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.ext.resy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Reserve a Table
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="text-parchment lg:hidden"
          aria-label="Open menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-void lg:hidden">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <span className="font-display text-[22px] font-medium tracking-wordmark text-parchment">
              Olde Dominion <span className="text-brass">Tavern</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-parchment"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-6 py-8">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-4 font-display text-[26px] font-light text-parchment"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={site.ext.resy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-6"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
