import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.email || !body?.message || !body?.name) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // PLACEHOLDER: connect Resend / Formspree / CRM here.
  console.info("[contact placeholder]", {
    name: body.name,
    email: body.email,
    company: body.company ?? null,
  });

  return NextResponse.json({ ok: true });
}
