import { env } from "@/lib/env.client";

export default function BannerBar() {
  return (
    <div className="w-full bg-brand-600 text-white text-center py-2 text-sm"
         style={{ background: "#3f61e0", color: "#fff" }}>
      LICENSE # <span style={{ fontWeight: 700 }}>{env.license}</span> · Licensed · Bonded · Insured
    </div>
  );
}
