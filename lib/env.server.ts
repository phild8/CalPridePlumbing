import "server-only";
import { z } from "zod";

const ServerSchema = z.object({
  SITE_URL: z.string().url().optional(),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_TO: z.string().email().optional(),
  CONTACT_FROM: z.string().email().optional(),
  VERCEL_URL: z.string().optional(),
});

const raw = {
  SITE_URL: process.env.SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO: process.env.CONTACT_TO,
  CONTACT_FROM: process.env.CONTACT_FROM,
  VERCEL_URL: process.env.VERCEL_URL,
};

const parsed = ServerSchema.safeParse(raw);
if (!parsed.success) {
  console.warn("Invalid server env vars:", parsed.error.flatten());
}

function fallbackSiteUrl() {
  const url =
    (parsed.success && parsed.data.SITE_URL) ||
    (parsed.success && parsed.data.VERCEL_URL ? `https://${parsed.data.VERCEL_URL}` : "https://example.com");
  try {
    new URL(url);
    return url;
  } catch {
    return "https://example.com";
  }
}

export const env = {
  siteUrl: fallbackSiteUrl(),
  resendKey: parsed.success ? parsed.data.RESEND_API_KEY : undefined,
  contactTo: (parsed.success && parsed.data.CONTACT_TO) || "calprideplumbing@gmail.com",
  contactFrom: (parsed.success && parsed.data.CONTACT_FROM) || "site@calprideplumbing.com",
} as const;
