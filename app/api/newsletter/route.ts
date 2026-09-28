import { NextResponse } from "next/server";

const WIX_SUBMISSIONS_URL =
  "https://www.wixapis.com/form-submission-service/v4/submissions";

/**
 * Wix form field `target` keys from `npx tsx scripts/wix-form-fields.ts`.
 * Birthday is Wix DATE format: "YYYY-MM-DD".
 */
const WIX_FIELD = {
  firstName: "first_name_1aec",
  lastName: "last_name_c6b1",
  email: "email_471d",
  birthday: "birthday_2d54",
  subscribe: "form_field_17f5",
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function wixHeaders() {
  const apiKey = process.env.WIX_API_KEY?.trim();
  const siteId = process.env.WIX_SITE_ID?.trim();
  if (!apiKey || !siteId) return null;
  return {
    Authorization: apiKey,
    "wix-site-id": siteId,
    "Content-Type": "application/json",
  };
}

/** True if value is a real calendar date strictly before today (YYYY-MM-DD). */
function isRealPastDate(iso: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const [year, month, day] = iso.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  if (
    utc.getUTCFullYear() !== year ||
    utc.getUTCMonth() !== month - 1 ||
    utc.getUTCDate() !== day
  ) {
    return false;
  }
  const now = new Date();
  const todayUtc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  return utc.getTime() < todayUtc;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden honeypot — bots that fill it get a fake success.
  if (asString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const firstName = asString(body.firstName);
  const lastName = asString(body.lastName);
  const email = asString(body.email);
  const birthday = asString(body.birthday);

  if (!firstName || !lastName || !email || !birthday) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  if (!isRealPastDate(birthday)) {
    return NextResponse.json(
      { error: "Enter a valid birthday in the past." },
      { status: 400 },
    );
  }

  const headers = wixHeaders();
  const formId = process.env.WIX_FORM_ID?.trim();
  if (!headers || !formId) {
    console.error("Newsletter signup: missing WIX_API_KEY, WIX_SITE_ID, or WIX_FORM_ID.");
    return NextResponse.json({ error: "Something went wrong." }, { status: 502 });
  }

  // Birthday is Wix DATE format: YYYY-MM-DD (same as the native date input).
  const wixBody = {
    submission: {
      formId,
      submissions: {
        [WIX_FIELD.firstName]: firstName,
        [WIX_FIELD.lastName]: lastName,
        [WIX_FIELD.email]: email,
        [WIX_FIELD.birthday]: birthday,
        [WIX_FIELD.subscribe]: true,
      },
    },
  };

  try {
    const res = await fetch(WIX_SUBMISSIONS_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(wixBody),
    });
    const text = await res.text();

    if (!res.ok) {
      console.error("Wix Create Submission failed:", res.status, text);
      return NextResponse.json({ error: "Something went wrong." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Wix Create Submission error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 502 });
  }
}
