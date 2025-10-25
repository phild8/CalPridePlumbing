import Link from "next/link";
import { env } from "@/lib/env.client";

export default function Header() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)",
      borderBottom: "1px solid #e5e7eb"
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "12px 16px",
                    display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
            <circle cx="20" cy="20" r="20" fill="#5a79ef"/>
            <path d="M26 9l-4 4a6 6 0 1 0 5 5l4-4-5-5z" fill="white"/>
          </svg>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontWeight: 800, color: "#2f4ec2" }}>Cal Pride</div>
            <div style={{ fontWeight: 800, color: "#2f4ec2", marginTop: -4 }}>Plumbing</div>
          </div>
        </Link>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a href={tel}
           style={{ borderRadius: 16, background: "#3f61e0", color: "#fff",
                    padding: "10px 16px", fontWeight: 700, textDecoration: "none" }}>
          {env.phone}
        </a>
      </div>
    </header>
  );
}
