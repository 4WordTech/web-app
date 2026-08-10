"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Name" name="name" required placeholder="Your name" />
      <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
      <Field label="Company" name="company" placeholder="Optional" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What IT work do you need?"
          className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none ring-accent/40 placeholder:text-muted focus:ring-2"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      {status === "sent" ? (
        <p className="text-sm text-accent">
          Received locally. Wire `/api/contact` to email or a CRM when you’re ready.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-400">Something went wrong. Try email instead.</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-line bg-bg px-4 text-sm outline-none ring-accent/40 placeholder:text-muted focus:ring-2"
      />
    </div>
  );
}
