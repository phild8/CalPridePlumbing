import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime on Vercel

// Trim all string inputs
const t = (v: unknown) => (typeof v === "string" ? v.trim() : v);

// Validate + normalize payload
const schema = z.object({
  name: z.preprocess(t, z.string().min(1, "Name is required")),
  phone: z.preprocess(t, z.string().min(3, "Phone is required")),
  email: z
    .preprocess(t, z.string().email().optional())
    .or(z.literal("").transform(() => undefined)),
  city: z.preprocess(t, z.string().optional()),
  message: z.preprocess(t, z.string().min(1, "Message is required")),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      // Optional: include issues for debugging (comment out if you prefer)
      return NextResponse.json(
        { ok: false, error: "Invalid form", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, email, city, message } = parsed.data;

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "calprideplumbing@gmail.com";
    // Use Resend's onboarding sender by default to avoid domain verification issues
    const from = process.env.CONTACT_FROM || "onboarding@resend.dev";

    if (!resendKey) {
      console.log("Contact request (no email configured):", { name, phone, email, city, message });
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(resendKey);

    try {
      await resend.emails.send({
        to,
        from,
        subject: `New service request from ${name}`,
        // If you later verify a domain and want "reply-to", this works with Resend:
        reply_to: email, // omit when undefined
        text:
          `Name: ${name}\n` +
          `Phone: ${phone}\n` +
          `Email: ${email || "n/a"}\n` +
          `City: ${city || "n/a"}\n\n` +
          `Message:\n${message}`,
      } as any);
    } catch (err: any) {
      // Don't break UX — log for you, still return ok
      console.error("Resend send failed:", err?.message || err);
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact route error:", err?.message || err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
