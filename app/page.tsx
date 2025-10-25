import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Badge from "@/components/Badge";
import Droplet from "./icons/Droplet";
import Wrench from "./icons/Wrench";
import { env } from "@/lib/env.client";

export default function HomePage() {
  const tel = `tel:+1${env.phone.replace(/\D/g, "")}`;

  return (
    <main>
      <Hero />

      {/* Services preview */}
      <section className="section mt-14">
        <h2 className="text-2xl font-bold text-ink">Services</h2>
        <p className="text-slate-600 mt-1">
          Repairs, installs, and maintenance done right the first time.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Leak detection & repair", <Droplet key="d" className="h-6 w-6" />],
            ["Water heaters (tank & tankless)", <Wrench key="w" className="h-6 w-6" />],
            ["Drain cleaning & hydro-jetting", <Droplet key="dd" className="h-6 w-6" />],
            ["Toilets, faucets, fixtures", <Wrench key="ww" className="h-6 w-6" />],
            ["Repipes & valves", <Wrench key="www" className="h-6 w-6" />],
            ["Garbage disposals & more", <Wrench key="wwww" className="h-6 w-6" />],
          ].map(([label, icon]) => (
            <div
              key={label as string}
              className="rounded-2xl bg-white p-5 shadow-soft border border-slate-200 flex items-center gap-3"
            >
              <div className="text-brand-600">{icon}</div>
              <div className="font-semibold">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a className="btn-secondary" href="/services">
            See all services
          </a>
        </div>
      </section>

      {/* Trust badges */}
      <section className="section mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 border border-slate-200">
            <Badge>Licensed · Bonded · Insured</Badge>
            <p className="mt-2 text-slate-700">
              LIC# {env.license} — work done to code with permits as required.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-slate-200">
            <Badge>Up-front pricing</Badge>
            <p className="mt-2 text-slate-700">
              Clear options before work begins — no surprises.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-slate-200">
            <Badge>Respect for your home</Badge>
            <p className="mt-2 text-slate-700">
              Clean shoe covers, tidy workspace, thorough cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section mt-20 grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">Request Service</h2>
          <p className="mt-1 text-slate-600">
            Tell us what you need. We’ll call you back shortly.
          </p>
          <ContactForm />
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-8 border border-slate-200">
            <h3 className="font-semibold text-ink">Call or Email</h3>
            <p className="mt-2">
              <a className="text-brand-700 font-semibold" href={tel}>
                {env.phone}
              </a>
            </p>
            <p className="mt-1">
              <a className="text-brand-700" href={`mailto:${env.email}`}>
                {env.email}
              </a>
            </p>
            <p className="mt-3 text-slate-600">
              {env.city} — Serving Orange County
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Map"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={env.mapsEmbed}
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section mt-20 mb-24 text-center">
        <a className="btn-primary" href={tel}>
          Tap to Call Now
        </a>
      </section>
    </main>
  );
}
