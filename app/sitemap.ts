// app/sitemap.ts
import type { MetadataRoute } from "next";
import { env as server } from "@/lib/env.server";

export const dynamic = "force-static"; // build-time generation only

export default function sitemap(): MetadataRoute.Sitemap {
  const raw = server.siteUrl;
  if (!raw || /(^|\b)example\.com\b/i.test(raw)) {
    throw new Error(
      "SITE_URL must be set to your canonical domain (e.g., https://calprideplumbing.com). " +
      "Update it in Vercel → Project → Settings → Environment Variables (Production) and redeploy."
    );
  }

  const siteUrl = raw.replace(/\/$/, "");
  const now = new Date();

  const routes = ["/", "/services", "/about", "/projects", "/contact"];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
