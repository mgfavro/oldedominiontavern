"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "7f3b79af-4530-4a4d-b432-c2ae1d18ac59";

type Status = "idle" | "submitting" | "success" | "error";

/** 30-minute slots from 11:00 AM to 9:30 PM. */
const TIME_SLOTS: string[] = (() => {
  const slots: string[] = [];
  for (let minutes = 11 * 60; minutes <= 21 * 60 + 30; minutes += 30) {
    const h24 = Math.floor(minutes / 60);
    const m = minutes % 60;
    const period = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    slots.push(`${h12}:${m.toString().padStart(2, "0")} ${period}`);
  }
  return slots;
})();

const labelClass =
  "mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-parchmute";
const fieldClass =
  "w-full border border-parchment/40 bg-white px-4 py-3 font-sans text-[15px] text-parchment outline-none transition-colors placeholder:text-parchmute focus:border-brass";

export default function BookEventForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Book An Event Inquiry");
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
          Thanks — we&apos;ll be in touch soon!
        </h3>
        <p className="font-sans text-[15px] font-light text-parchdim">
          Your event request has been sent to our team.
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
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClass}>
            Last Name
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

      {/* Row 2: Phone / Date / Time */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
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
        <div>
          <label htmlFor="event_date" className={labelClass}>
            Select a date *
          </label>
          <input
            id="event_date"
            name="event_date"
            type="date"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="event_time" className={labelClass}>
            Time *
          </label>
          <select
            id="event_time"
            name="event_time"
            required
            defaultValue="6:00 PM"
            className={fieldClass}
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Email */}
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

      {/* Guest Count */}
      <div className="mt-5">
        <label htmlFor="guest_count" className={labelClass}>
          Guest Count *
        </label>
        <input
          id="guest_count"
          name="guest_count"
          type="number"
          min={1}
          required
          className={fieldClass}
        />
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Tell us about your event *
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
          Something went wrong — please try again or call us.
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full border border-brass px-10 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-brass transition-colors hover:bg-brass hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
