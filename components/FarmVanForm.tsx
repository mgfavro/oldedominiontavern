"use client";

const field =
  "w-full border border-line bg-white px-4 py-3 font-sans text-[15px] text-parchment placeholder:text-parchmute transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass";

const fieldLabel = "label mb-2 block";

export default function FarmVanForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to Web3Forms — submission intentionally not implemented yet.
      }}
      className="space-y-6"
    >
      {/* TODO: wire to Web3Forms */}
      <div>
        <label htmlFor="fv-name" className={fieldLabel}>
          Name / Business
        </label>
        <input
          id="fv-name"
          name="name"
          type="text"
          autoComplete="organization"
          placeholder="Your name or business"
          className={field}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fv-email" className={fieldLabel}>
            Email
          </label>
          <input
            id="fv-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="fv-phone" className={fieldLabel}>
            Phone
          </label>
          <input
            id="fv-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(703) 000-0000"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="fv-about" className={fieldLabel}>
          Tell us about your company! What dates are you available to vend?
        </label>
        <textarea
          id="fv-about"
          name="about"
          rows={5}
          placeholder="A little about what you make, plus your availability…"
          className={`${field} resize-y`}
        />
      </div>

      <button type="submit" className="btn btn-solid w-full sm:w-auto">
        Submit
      </button>
    </form>
  );
}
