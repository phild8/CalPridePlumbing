import Badge from './Badge'
import PatternLeft from './PatternLeft'
import PatternRight from './PatternRight'

export default function Hero() {
  return (
    <section className="paper">
      <div className="section grid lg:grid-cols-[auto,1fr,auto] items-center gap-6 py-12">
        <PatternLeft />
        <div>
          <Badge>Lake Forest, CA · Family‑owned</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-700">Cal Pride Plumbing</h1>
          <p className="mt-3 text-lg text-slate-700 max-w-2xl">
            Friendly, professional plumbing for Orange County homes & businesses. Fast response, honest pricing, and clean work you can be proud of.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Request Service</a>
            <a href="tel:+19493753457" className="btn-secondary">Call (949) 375‑3457</a>
          </div>
          <p className="mt-4 text-sm text-slate-600">LIC# LICENSE_NUMBER_HERE · Licensed · Bonded · Insured</p>
        </div>
        <PatternRight />
      </div>
    </section>
  )
}
