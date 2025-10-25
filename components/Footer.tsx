import Link from "next/link";
import { env } from "@/lib/env.client";

export default function Footer() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;
  return (
    <footer style={{ marginTop: 40, borderTop: "1px solid #e5e7eb", background: "#fff" }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto", padding: "40px 16px",
        display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
      }}>
        <div>
          <h3 style={{ margin: 0 }}>Cal Pride Plumbing</h3>
          <p style={{ margin: "8px 0", color: "#475569" }}>Lake Forest, CA · Serving Orange County</p>
          <p style={{ margin: 0, color: "#475569" }}>LIC# {env.license} · Licensed · Bonded · Insured</p>
        </div>
        <div>
          <h4 style={{ margin: 0 }}>Contact</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: "8px 0", color: "#1f2937" }}>
            <li><a href={tel}>{env.phone}</a></li>
            <li><a href={`mailto:${env.email}`}>{env.email}</a></li>
            <li><Link href="/contact">Request service</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ margin: 0 }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: "8px 0" }}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: 12, color: "#6b7280", padding: "12px 0" }}>
        © {new Date().getFullYear()} Cal Pride Plumbing. All rights reserved.
      </div>
    </footer>
  );
}
