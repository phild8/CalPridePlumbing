"use client";
import { env } from "@/lib/env.client";

export default function CallFab() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;
  return (
    <a
      href={tel}
      aria-label={`Call ${env.phone}`}
      className="md:hidden fixed bottom-4 right-[max(env(safe-area-inset-right),1rem)] inline-flex items-center justify-center rounded-full shadow-lg"
      style={{ width: 56, height: 56, background: "#3f61e0", color: "#fff", zIndex: 60 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1.3.4 2.7.7 4.1.7a1.2 1.2 0 0 1 1.2 1.2V20a1.2 1.2 0 0 1-1.2 1.2C10.9 21.2 2.8 13.1 2.8 2.4A1.2 1.2 0 0 1 4 1.2h3.2a1.2 1.2 0 0 1 1.2 1.2c0 1.4.3 2.8.7 4.1.2.4.1.9-.3 1.2l-2.2 2.1z"/>
      </svg>
    </a>
  );
}
