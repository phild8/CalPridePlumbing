import Link from "next/link";
import { env } from "@/lib/env.client";

export default function Header() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;

  return (
    <header className="cp-header">
      <div className="cp-row">
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

        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Phone pill — hidden on small screens to avoid horizontal jiggle */}
        <a href={tel} className="cp-phoneChip">
          {env.phone}
        </a>
      </div>

      {/* Scoped CSS (styled-jsx) */}
      <style jsx>{`
        .cp-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #e5e7eb;
        }
        .cp-row {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* Safe-area aware horizontal padding to prevent overflow on devices with notches */
          padding-top: 12px;
          padding-bottom: 12px;
          padding-left: max(16px, env(safe-area-inset-left));
          padding-right: max(16px, env(safe-area-inset-right));
        }
        .cp-phoneChip {
          border-radius: 16px;
          background: #3f61e0;
          color: #fff;
          padding: 10px 16px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap; /* prevent wrapping */
          max-width: 92vw; /* ensure it never forces horizontal scroll */
          overflow: hidden;
          text-overflow: ellipsis;
        }
        /* Hide the phone pill on small screens to eliminate side-to-side movement */
        @media (max-width: 768px) {
          .cp-phoneChip {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
