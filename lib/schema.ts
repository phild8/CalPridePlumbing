import { env as client } from "@/lib/env.client";
import { env as server } from "@/lib/env.server";

const locality = client.city.split(",")[0] || "Lake Forest";
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Cal Pride Plumbing",
  url: server.siteUrl,
  image: "/og.jpg",
  telephone: client.phone,
  email: client.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: locality,
    addressRegion: "CA",
    addressCountry: "US"
  },
  areaServed: ["Lake Forest", "Orange County", "Irvine", "Mission Viejo", "Laguna Hills"],
  openingHours: "Mo-Sa 07:00-18:00",
  priceRange: "$$"
};
