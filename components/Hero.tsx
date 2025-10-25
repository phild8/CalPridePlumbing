import Badge from "@/components/Badge";
import { env } from "@/lib/env.client";

export default function Hero() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;
  return (
    <section className="paper">
      <div className="section grid lg:grid-cols-[auto,1fr,auto] items-center gap-6 py-12">
        <div className="hidden lg:block" aria-hidden />
        <div>
          <Badge>{env.city} · Family-owned</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-700">
            Cal Pride Plumbing
          </h1>
          <p className="mt-3 text-lg text-slate-700 max-w-2xl">
            Friendly, professional plumbing for Orange County homes & businesses.
            Fast response, honest pricing, and clean work you can be proud of.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Request Service</a>
            <a href={tel} className="btn-secondary">Call {env.phone}</a>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            LIC# {env.license} · Licensed · Bonded · Insured
          </p>
        </div>
        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
