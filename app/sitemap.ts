import type { MetadataRoute } from "next";
import { env as server } from "@/lib/env.server";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = server.siteUrl.replace(/\/$/, "");
  const now = new Date();
  const routes = ["/", "/services", "/about", "/contact", "/projects"]; // add service detail pages as you create them
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
