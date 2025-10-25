import { z } from "zod";

const ClientSchema = z.object({
  NEXT_PUBLIC_PHONE: z.string().min(7).optional(),
  NEXT_PUBLIC_EMAIL: z.string().email().optional(),
  NEXT_PUBLIC_LICENSE: z.string().min(1).optional(),
  NEXT_PUBLIC_CITY: z.string().min(1).optional(),
  NEXT_PUBLIC_GMAPS_EMBED: z.string().url().optional()
});

const raw = {
  NEXT_PUBLIC_PHONE: process.env.NEXT_PUBLIC_PHONE,
  NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  NEXT_PUBLIC_LICENSE: process.env.NEXT_PUBLIC_LICENSE,
  NEXT_PUBLIC_CITY: process.env.NEXT_PUBLIC_CITY,
  NEXT_PUBLIC_GMAPS_EMBED: process.env.NEXT_PUBLIC_GMAPS_EMBED
};

const parsed = ClientSchema.safeParse(raw);
if (!parsed.success) {
  console.warn("Invalid public env vars:", parsed.error.flatten());
}

export const env = {
  phone: (parsed.success && parsed.data.NEXT_PUBLIC_PHONE) || "(949) 375-3457",
  email: (parsed.success && parsed.data.NEXT_PUBLIC_EMAIL) || "calprideplumbing@gmail.com",
  license: (parsed.success && parsed.data.NEXT_PUBLIC_LICENSE) || "1122931",
  city: (parsed.success && parsed.data.NEXT_PUBLIC_CITY) || "Lake Forest, CA",
  mapsEmbed:
    (parsed.success && parsed.data.NEXT_PUBLIC_GMAPS_EMBED) ||
    "https://www.google.com/maps?q=Lake%20Forest%2C%20CA&output=embed"
} as const;

export function telHref() {
  const digits = (env.phone || "").replace(/\D/g, "");
  return digits ? `tel:+1${digits}` : "tel:+19493753457";
}
