export const metadata = { title: 'Services' }

const services = [
  { title: 'Leak detection & repair', desc: 'Pinpoint leaks in walls, ceilings, and slabs; repair lines and fixtures.' },
  { title: 'Water heaters', desc: 'Install & service tank or tankless systems; flushes, anode rods, pilot & ignition.' },
  { title: 'Drain cleaning', desc: 'Clogs, slow drains, hydro‑jetting, root intrusions, camera inspections.' },
  { title: 'Toilets & faucets', desc: 'New installs, rebuilds, cartridges, wax rings, shutoff valves.' },
  { title: 'Repipes & valves', desc: 'Copper, PEX, main shutoff, PRV, angle stops; whole‑home upgrades.' },
  { title: 'Garbage disposals', desc: 'New installs, jams, leaks & replacements.' },
]

export default function ServicesPage() {
  return (
    <main className="section py-12">
      <h1 className="text-3xl font-extrabold text-brand-700">Plumbing Services</h1>
      <p className="mt-2 text-slate-700">Quality work for homes and small businesses across Orange County.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <div key={s.title} className="rounded-2xl bg-white p-6 border border-slate-200">
            <h3 className="font-semibold text-ink">{s.title}</h3>
            <p className="mt-1 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="/contact" className="btn-primary">Request a quote</a>
      </div>
    </main>
  )
}
