"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { env } from "@/lib/env.client";

export default function Header() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;
  const wrapRef = useRef<HTMLDivElement>(null);

  // Expose the live header height as a CSS var (handy for anchor offsets, etc.)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const setH = () =>
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    setH();
    window.addEventListener("resize", setH);
    return () => window.removeEventListener("resize", setH);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        // Sit *below* the blue BannerBar; fallback to 40px if the var isn't set.
        top: "var(--banner-h, 40px)",
        zIndex: 50,
        background: "rgba(255,255,255,.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        ref={wrapRef}
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          // Let items wrap on small screens so the row doesn't get cramped/overlap.
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
            <circle cx="20" cy="20" r="20" fill="#5a79ef" />
            <path d="M26 9l-4 4a6 6 0 1 0 5 5l4-4-5-5z" fill="white" />
          </svg>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontWeight: 800, color: "#2f4ec2" }}>Cal Pride</div>
            <div style={{ fontWeight: 800, color: "#2f4ec2", marginTop: -4 }}>Plumbing</div>
          </div>
        </Link>

        <nav
          style={{
            display: "flex",
            gap: 16,
            // Prevent long words from causing horizontal scroll on tiny screens.
            flexWrap: "wrap",
          }}
        >
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href={tel}
          style={{
            borderRadius: 16,
            background: "#3f61e0",
            color: "#fff",
            padding: "10px 16px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {env.phone}
        </a>
      </div>
    </header>
  );
}
