export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company: string | null;
};

type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 100,
  email: 254,
  company: 120,
  message: 5000,
} as const;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(body: unknown): ContactValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid body" };
  }

  const record = body as Record<string, unknown>;
  const name = asString(record.name);
  const email = asString(record.email);
  const message = asString(record.message);
  const companyRaw = asString(record.company);
  const company = companyRaw || null;

  if (!name || !email || !message) {
    return { ok: false, error: "Missing fields" };
  }
  if (name.length > LIMITS.name) {
    return { ok: false, error: "Name too long" };
  }
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Invalid email" };
  }
  if (company && company.length > LIMITS.company) {
    return { ok: false, error: "Company too long" };
  }
  if (message.length > LIMITS.message) {
    return { ok: false, error: "Message too long" };
  }

  return { ok: true, data: { name, email, message, company } };
}
