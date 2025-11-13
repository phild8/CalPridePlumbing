// lib/env.server.ts
import "server-only";
import { z } from "zod";

const ServerSchema = z.object({
  SITE_URL: z.string().url().optional(),
  RESEND_API_KEY: z.string().optional(),
  // Allow names / comma-separated values; don't force email() here
  CONTACT_TO: z.string().optional(),
  CONTACT_FROM: z.string().optional(),
  VERCEL_URL: z.string().optional(),
  VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
  NODE_ENV: z.string().optional(),
});

const raw = {
  SITE_URL: process.env.SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO: process.env.CONTACT_TO,
  CONTACT_FROM: process.env.CONTACT_FROM,
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_ENV: process.env.VERCEL_ENV,
  NODE_ENV: process.env.NODE_ENV,
};

const parsed = ServerSchema.safeParse(raw);
if (!parsed.success) {
  console.warn("Invalid server env vars:", parsed.error.flatten());
}

const d = parsed.success ? parsed.data : ({} as z.infer<typeof ServerSchema>);

const isProd =
  d.VERCEL_ENV === "production" || d.NODE_ENV === "production";

function computeSiteUrl(): string {
  if (isProd) {
    if (!d.SITE_URL) {
      throw new Error(
        "SITE_URL must be set to your canonical https URL in Production (e.g., https://calprideplumbing.com). " +
          "Set it in Vercel → Project → Settings → Environment Variables (Production) and redeploy."
      );
    }
    // validate & normalize
    new URL(d.SITE_URL);
    return d.SITE_URL.replace(/\/$/, "");
  }

  // Preview / Development: prefer SITE_URL if present, else Vercel preview URL, else localhost.
  const candidate =
    d.SITE_URL ||
    (d.VERCEL_URL ? `https://${d.VERCEL_URL}` : "http://localhost:3000");

  new URL(candidate);
  return candidate.replace(/\/$/, "");
}

export const env = {
  siteUrl: computeSiteUrl(),
  resendKey: d.RESEND_API_KEY,
  contactTo: d.CONTACT_TO,    // handle splitting/validation where you send mail
  contactFrom: d.CONTACT_FROM // can be "Name <email@domain>"
} as const;
