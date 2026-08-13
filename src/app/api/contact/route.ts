import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = validateContactPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 501 },
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: "Upstream failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Upstream failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
