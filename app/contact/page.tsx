import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <main className="section py-12">
      <h1 className="text-3xl font-extrabold text-brand-700">Contact</h1>
      <p className="mt-1 text-slate-700">Call <a className="text-brand-700" href="tel:+19493753457">(949) 375‑3457</a> or request service below.</p>
      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white p-8 border border-slate-200"><ContactForm /></div>
        <div className="rounded-2xl bg-white p-8 border border-slate-200">
          <h2 className="font-semibold text-ink">Business Details</h2>
          <ul className="mt-2 space-y-2 text-slate-700">
            <li>Lake Forest, CA</li>
            <li>Email: <a className="text-brand-700" href="mailto:calprideplumbing@gmail.com">calprideplumbing@gmail.com</a></li>
            <li>Phone: <a className="text-brand-700" href="tel:+19493753457">(949) 375‑3457</a></li>
            <li>License: LIC# LICENSE_NUMBER_HERE</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
