import type { MetadataRoute } from "next";
import { env as server } from "@/lib/env.server";

export default function robots(): MetadataRoute.Robots {
  const base = server.siteUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
