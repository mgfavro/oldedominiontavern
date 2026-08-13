type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/45 via-void/25 to-void" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-24 md:px-8 md:py-28">
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-11 bg-[#e8d3a0]" />
          <span className="label hero-label">{eyebrow}</span>
        </div>
        <h1 className="hero-text font-display text-[clamp(40px,7vw,84px)] font-light leading-[0.98]">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-text mt-5 max-w-xl font-sans text-[17px] font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
