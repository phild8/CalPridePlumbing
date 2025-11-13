import type { MetadataRoute } from "next";
import { env as server } from "@/lib/env.server";

export const dynamic = "force-static"; // build-time

export default function sitemap(): MetadataRoute.Sitemap {
  const fallbackBase = "https://calprideplumbing.com";
  const siteUrl = (server.siteUrl || fallbackBase).replace(/\/$/, "");
  const now = new Date();

  const routes = ["/", "/services", "/about", "/projects", "/contact"];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,             // Next will serialize this to ISO
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
