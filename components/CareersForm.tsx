"use client";

const field =
  "w-full border border-line bg-white px-4 py-3 font-sans text-[15px] text-parchment placeholder:text-parchmute transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass";

const fieldLabel = "label mb-2 block";

export default function CareersForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to Web3Forms — submission intentionally not implemented yet.
      }}
      className="space-y-6"
    >
      {/* TODO: wire to Web3Forms */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={fieldLabel}>
            Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="c-email" className={fieldLabel}>
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-phone" className={fieldLabel}>
            Phone
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(703) 000-0000"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="c-position" className={fieldLabel}>
            Position
          </label>
          <input
            id="c-position"
            name="position"
            type="text"
            placeholder="Which role are you applying for?"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-resume" className={fieldLabel}>
          Upload Resume
        </label>
        <input
          id="c-resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full border border-line bg-white px-4 py-3 font-sans text-[15px] text-parchment file:mr-4 file:border-0 file:bg-char file:px-4 file:py-2 file:font-sans file:text-[12px] file:font-semibold file:uppercase file:tracking-[0.12em] file:text-brass hover:file:bg-line/60"
        />
        <p className="mt-2 font-sans text-[13px] text-parchmute">
          Upload supported file (Max 15MB)
        </p>
      </div>

      <button type="submit" className="btn btn-solid w-full sm:w-auto">
        Submit
      </button>
    </form>
  );
}
