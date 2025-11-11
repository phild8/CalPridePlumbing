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

    // Allow multiple recipients via comma-separated CONTACT_TO.
    // Fallback to your Gmail while you set up a mailbox at your domain.
    const to =
      process.env.CONTACT_TO?.split(",")
        .map((s) => s.trim())
        .filter(Boolean) || ["pjsdavs@gmail.com"];

    // Prefer your domain sender; override via CONTACT_FROM if set.
    const primaryFrom =
      (process.env.CONTACT_FROM?.trim() ||
        "Cal Pride Plumbing <service@calprideplumbing.com>");

    // Safety fallback if the domain isn't verified yet.
    const fallbackFrom = "onboarding@resend.dev";

    if (!resendKey) {
      console.log("Contact request (no RESEND_API_KEY):", {
        name,
        phone,
        email,
        city,
        message,
      });
      return NextResponse.json(
        { ok: true },
        { headers: { "cache-control": "no-store" } }
      );
    }

    const resend = new Resend(resendKey);

    // Compose one message object we can reuse
    const baseMessage = {
      to,
      subject: `New service request from ${name}`,
      reply_to: email,
      text:
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email || "n/a"}\n` +
        `City: ${city || "n/a"}\n\n` +
        `Message:\n${message}`,
    };

    try {
      // Try sending with your domain sender
      await resend.emails.send({
        from: primaryFrom,
        ...baseMessage,
      } as any);
    } catch (err: any) {
      // If domain isn't verified or similar, retry with onboarding sender.
      console.error("Primary send failed:", err?.message || err);
      try {
        await resend.emails.send({
          from: fallbackFrom,
          ...baseMessage,
        } as any);
      } catch (err2: any) {
        console.error("Fallback send failed:", err2?.message || err2);
        // Still return ok:true so the UI doesn't show an error to the user
      }
    }

    return NextResponse.json(
      { ok: true },
      { headers: { "cache-control": "no-store" } }
    );
  } catch (err: any) {
    console.error("Contact route error:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500, headers: { "cache-control": "no-store" } }
    );
  }
}
