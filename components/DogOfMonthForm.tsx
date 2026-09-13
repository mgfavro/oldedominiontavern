"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "681a8d99-0c35-4045-a280-458333533bd8";

type Status = "idle" | "submitting" | "success" | "error";

const labelClass =
  "mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-parchmute";
const fieldClass =
  "w-full border border-parchment/40 bg-white px-4 py-3 font-sans text-[15px] text-parchment outline-none transition-colors placeholder:text-parchmute focus:border-brass";

export default function DogOfMonthForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Dog of the Month Nomination");
    formData.append("from_name", "Olde Dominion Tavern Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 border border-line bg-white px-6 py-16 text-center">
        <h3 className="font-display text-[clamp(22px,3vw,32px)] font-light text-brass">
          Thanks for the nomination!
        </h3>
        <p className="font-sans text-[15px] font-light text-parchdim">
          We&apos;ve received your pup&apos;s entry — keep an eye on our socials
          for the next Dog of the Month.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-white p-6 text-left md:p-10"
    >
      {/* Honeypot — visually hidden spam trap */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {/* Row 1: First / Last name */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className={labelClass}>
            Your First Name *
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClass}>
            Your Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Row 2: Email / Phone */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Row 3: Dog name / Breed */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="dog_name" className={labelClass}>
            Dog&apos;s Name *
          </label>
          <input
            id="dog_name"
            name="dog_name"
            type="text"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="breed" className={labelClass}>
            Breed
          </label>
          <input
            id="breed"
            name="breed"
            type="text"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Photo link */}
      <div className="mt-5">
        <label htmlFor="photo_url" className={labelClass}>
          Photo Link
        </label>
        <input
          id="photo_url"
          name="photo_url"
          type="url"
          inputMode="url"
          placeholder="https://…"
          className={fieldClass}
        />
        <p className="mt-2 font-sans text-[13px] font-light leading-relaxed text-parchmute">
          Paste a link to your dog&apos;s photo — a Google Drive/Photos share
          link, an Instagram post, or any public image URL. Make sure the link is
          set so anyone can view it.
        </p>
      </div>

      {/* Story */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          What makes your dog the best? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="mt-6 text-center font-sans text-[14px] text-wine">
          Something went wrong — please try again.
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full border border-brass px-10 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-brass transition-colors hover:bg-brass hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Submit Nomination"}
        </button>
      </div>
    </form>
  );
}
