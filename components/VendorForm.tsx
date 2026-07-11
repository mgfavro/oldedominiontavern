"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "681a8d99-0c35-4045-a280-458333533bd8";

type Status = "idle" | "submitting" | "success" | "error";

const labelClass =
  "mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-parchmute";
const fieldClass =
  "w-full border border-parchment/40 bg-white px-4 py-3 font-sans text-[15px] text-parchment outline-none transition-colors placeholder:text-parchmute focus:border-brass";

export default function VendorForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Farm Van Vendor Inquiry");
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
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="font-sans text-[15px] font-light text-parchdim">
          We&apos;ve received your vendor inquiry and will reach out soon.
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

      {/* Name / Business */}
      <div>
        <label htmlFor="vendor_name" className={labelClass}>
          Name / Business *
        </label>
        <input
          id="vendor_name"
          name="name"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      {/* Email / Phone */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="vendor_email" className={labelClass}>
            Email *
          </label>
          <input
            id="vendor_email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="vendor_phone" className={labelClass}>
            Phone
          </label>
          <input
            id="vendor_phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="vendor_message" className={labelClass}>
          Tell us about your company! What dates are you available to vend? *
        </label>
        <textarea
          id="vendor_message"
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
          {status === "submitting" ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
