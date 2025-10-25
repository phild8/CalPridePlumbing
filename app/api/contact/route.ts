import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime on Vercel

// Trim helper
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
      return NextResponse.json(
        { ok: false, error: "Invalid form", issues: parsed.error.flatten() },
        { status: 400, headers: { "cache-control": "no-store" } }
      );
    }

    const { name, phone, email, city, message } = parsed.data;

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "calprideplumbing@gmail.com";
    // Use Resend onboarding sender until your domain is verified:
    const from = process.env.CONTACT_FROM || "onboarding@resend.dev";

    if (!resendKey) {
      console.log("Contact request (no email configured):", { name, phone, email, city, message });
      return NextResponse.json({ ok: true }, { headers: { "cache-control": "no-store" } });
    }

    const resend = new Resend(resendKey);

    try {
      await resend.emails.send({
        to,
        from,
        subject: `New service request from ${name}`,
        reply_to: email,
        text:
          `Name: ${name}\n` +
          `Phone: ${phone}\n` +
          `Email: ${email || "n/a"}\n` +
          `City: ${city || "n/a"}\n\n` +
          `Message:\n${message}`,
      } as any);
    } catch (err: any) {
      console.error("Resend send failed:", err?.message || err);
      // Do not fail the user experience if email fails:
    }

    return NextResponse.json({ ok: true }, { headers: { "cache-control": "no-store" } });
  } catch (err: any) {
    console.error("Contact route error:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500, headers: { "cache-control": "no-store" } }
    );
  }
}
