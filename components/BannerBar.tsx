import { env } from "@/lib/env.client";

export default function BannerBar() {
  return (
    <div style={{ width: "100%", background: "#3f61e0", color: "#fff", textAlign: "center", padding: "8px 0", fontSize: 14 }}>
      LICENSE # <span style={{ fontWeight: 700 }}>{env.license}</span> · Licensed · Bonded · Insured
    </div>
  );
}
