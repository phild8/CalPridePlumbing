"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      city: String(fd.get("city") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        cache: "no-store", // avoid any caching shenanigans
      });

      let json: any = null;
      try {
        json = await res.json();
      } catch {
        // ignore parse errors; treat non-JSON as success if status OK
      }

      if (res.ok && (!json || json.ok !== false)) {
        setStatus("sent");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErr(json?.error || `Request failed (${res.status})`);
      }
    } catch (error: any) {
      setStatus("error");
      setErr(error?.message || "Network error");
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
        {status === "sent" && (
          <span className="text-green-700 text-sm">Thanks! We’ll call you soon.</span>
        )}
        {status === "error" && (
          <span className="text-red-700 text-sm">
            Something went wrong. {err ? `(${err}) ` : ""}Please call us.
          </span>
        )}
      </div>
      <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your request.</p>
    </form>
  );
}
