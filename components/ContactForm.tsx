"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} id="contact" className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Name</label>
          <input className="input" name="name" required placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Phone</label>
          <input className="input" name="phone" required type="tel" placeholder="(###) ###-####" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Email (optional)</label>
        <input className="input" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">City</label>
        <input className="input" name="city" placeholder="City" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">How can we help?</label>
        <textarea className="input" name="message" rows={5} required placeholder="Describe the issue" />
      </div>
      <div className="flex items-center gap-3">
        <button className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        {status === "sent" && <span className="text-green-700 text-sm">Thanks! We’ll call you soon.</span>}
        {status === "error" && <span className="text-red-700 text-sm">Something went wrong. Please call us.</span>}
      </div>
      <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your request.</p>
    </form>
  );
}
