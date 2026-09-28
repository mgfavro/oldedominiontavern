/**
 * Fetch the Wix form schema for WIX_FORM_ID and print each field's
 * target, label, type, and format.
 *
 *   npx tsx scripts/wix-form-fields.ts
 *
 * Reads WIX_API_KEY, WIX_SITE_ID, WIX_FORM_ID from the environment or .env.local.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  try {
    const text = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env.local is optional if the vars are already in the environment
  }
}

function collectStrings(
  value: unknown,
  keyName: string,
  found: string[],
): void {
  if (value == null) return;
  if (typeof value === "string") {
    if (keyName === "label" && value.trim()) found.push(value.trim());
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, keyName, found);
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      collectStrings(v, k, found);
    }
  }
}

function findFirst(obj: unknown, keys: string[]): unknown {
  if (obj == null || typeof obj !== "object") return undefined;
  const record = obj as Record<string, unknown>;
  for (const key of keys) {
    if (key in record && record[key] != null) return record[key];
  }
  for (const v of Object.values(record)) {
    const nested = findFirst(v, keys);
    if (nested != null) return nested;
  }
  return undefined;
}

type PrintedField = {
  target: string;
  label: string;
  identifier: string;
  inputType: string;
  componentType: string;
  format: string;
  contactField: string;
};

function describeField(field: unknown): PrintedField {
  const record = (field ?? {}) as Record<string, unknown>;
  const inputOptions = (record.inputOptions ?? {}) as Record<string, unknown>;
  const labels: string[] = [];
  collectStrings(field, "", labels);

  const formatRaw = findFirst(field, ["format"]);
  const componentType = findFirst(field, ["componentType"]);
  const contactMapping = (findFirst(field, ["contactMapping"]) ?? {}) as Record<
    string,
    unknown
  >;

  return {
    target: String(inputOptions.target ?? record.target ?? "(none)"),
    label: labels[0] ?? "(no label)",
    identifier: String(
      inputOptions.identifier ?? record.identifier ?? "(none)",
    ),
    inputType: String(inputOptions.inputType ?? record.inputType ?? "(none)"),
    componentType: String(componentType ?? "(none)"),
    format: String(formatRaw ?? "(none)"),
    contactField: String(contactMapping.contactField ?? "(none)"),
  };
}

function dateValueHint(field: PrintedField): string | null {
  const blob = `${field.identifier} ${field.componentType} ${field.format} ${field.contactField} ${field.label}`.toUpperCase();
  const isDate =
    field.format === "DATE" ||
    field.componentType.includes("DATE") ||
    blob.includes("BIRTH");
  if (!isDate) return null;
  if (field.format === "DATE_TIME") {
    return 'Expected value format: "YYYY-MM-DDTHH:mm:ss" (local date-time string)';
  }
  return 'Expected value format: "YYYY-MM-DD" (ISO date; Wix DATE format)';
}

async function main() {
  loadEnvLocal();

  const apiKey = process.env.WIX_API_KEY?.trim();
  const siteId = process.env.WIX_SITE_ID?.trim();
  const formId = process.env.WIX_FORM_ID?.trim();

  if (!apiKey || !siteId || !formId) {
    console.error(
      "Missing WIX_API_KEY, WIX_SITE_ID, or WIX_FORM_ID. Add them to .env.local and retry.",
    );
    process.exit(1);
  }

  const url = `https://www.wixapis.com/form-schema-service/v4/forms/${formId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: apiKey,
      "wix-site-id": siteId,
      "Content-Type": "application/json",
    },
  });

  const bodyText = await res.text();
  if (!res.ok) {
    console.error(`Wix Get Form failed: ${res.status} ${res.statusText}`);
    console.error(bodyText);
    process.exit(1);
  }

  const data = JSON.parse(bodyText) as {
    form?: { formFields?: unknown[]; namespace?: string };
    formFields?: unknown[];
    namespace?: string;
  };

  const form = data.form ?? data;
  const fields = (form.formFields ?? []) as unknown[];
  const namespace = form.namespace ?? data.namespace ?? "(unknown)";

  console.log(`Form ID:    ${formId}`);
  console.log(`Namespace:  ${namespace}`);
  console.log(`Fields:     ${fields.length}`);
  console.log("");
  console.log("Look for: First name, Last name, Email, Birthday, Subscribe");
  console.log("Use each field's `target` as the Create Submission key.");
  console.log("");

  for (const field of fields) {
    const printed = describeField(field);
    console.log("—".repeat(60));
    console.log(`  target:         ${printed.target}`);
    console.log(`  label:          ${printed.label}`);
    console.log(`  identifier:     ${printed.identifier}`);
    console.log(`  inputType:      ${printed.inputType}`);
    console.log(`  componentType:  ${printed.componentType}`);
    console.log(`  format:         ${printed.format}`);
    console.log(`  contactField:   ${printed.contactField}`);
    const hint = dateValueHint(printed);
    if (hint) console.log(`  ${hint}`);
  }

  if (fields.length === 0) {
    console.log("No formFields on the response. Raw payload:");
    console.log(JSON.stringify(data, null, 2));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
