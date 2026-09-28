"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const labelClass =
  "mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-parchmute";
const fieldClass =
  "w-full border border-parchment/40 bg-white px-4 py-3 font-sans text-[15px] text-parchment outline-none transition-colors placeholder:text-parchmute focus:border-brass";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          birthday: data.get("birthday"),
          company: data.get("company"),
        }),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 border border-line bg-white px-6 py-16 text-center">
        <h3 className="font-display text-[clamp(22px,3vw,32px)] font-light text-brass">
          You&apos;re in.
        </h3>
        <p className="font-sans text-[15px] font-light text-parchdim">
          Thanks for signing up — we&apos;ll send news, specials, and events
          your way.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-white p-6 text-left md:p-10"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
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

      <div className="mt-5">
        <label htmlFor="birthday" className={labelClass}>
          Birthday *
        </label>
        <input
          id="birthday"
          name="birthday"
          type="date"
          required
          className={fieldClass}
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
          disabled={status === "loading"}
          className="rounded-full border border-brass px-10 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-brass transition-colors hover:bg-brass hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Signing up…" : "Sign Up"}
        </button>
      </div>
    </form>
  );
}
