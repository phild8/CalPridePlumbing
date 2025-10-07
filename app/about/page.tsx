export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main className="section py-12">
      <h1 className="text-3xl font-extrabold text-brand-700">About Cal Pride Plumbing</h1>
      <p className="mt-3 text-slate-700 max-w-3xl">
        Founded by <strong>Scott Feeley</strong> in Lake Forest, Cal Pride Plumbing is a local, family‑owned business.
        We value integrity, clear communication, and craftsmanship. Every job gets the same attention to detail—whether
        it’s a quick leak repair or a full repipe.
      </p>
      <ul className="mt-6 grid md:grid-cols-2 gap-4">
        <li className="rounded-2xl bg-white p-6 border border-slate-200">Licensed, bonded, and insured (LIC# LICENSE_NUMBER_HERE).</li>
        <li className="rounded-2xl bg-white p-6 border border-slate-200">Serving Lake Forest and the greater Orange County area.</li>
        <li className="rounded-2xl bg-white p-6 border border-slate-200">Up‑front pricing with options to fit your budget.</li>
        <li className="rounded-2xl bg-white p-6 border border-slate-200">Respect for your home — shoe covers and spotless cleanup.</li>
      </ul>
    </main>
  )
}
