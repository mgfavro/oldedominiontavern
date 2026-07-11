type BadgeProps = { className?: string };

/** Instagram — magenta/purple gradient rounded square with a white camera glyph. */
export function InstagramBadge({ className = "h-9 w-9" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[10px] bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        className="h-1/2 w-1/2"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.7" cy="7.3" r="1.1" fill="#ffffff" stroke="none" />
      </svg>
    </span>
  );
}

/** Facebook — blue rounded square with a white "f" glyph. */
export function FacebookBadge({ className = "h-9 w-9" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[10px] bg-[#1877f2] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="#ffffff"
        className="h-3/5 w-3/5"
        aria-hidden="true"
      >
        <path d="M13.4 21v-7.5h2.53l.38-2.94H13.4V8.68c0-.85.24-1.43 1.46-1.43h1.56V4.62c-.27-.036-1.2-.116-2.28-.116-2.26 0-3.8 1.38-3.8 3.9v2.18H7.8v2.94h2.54V21h3.06z" />
      </svg>
    </span>
  );
}
