import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="section py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-slate-900">Cal Pride Plumbing</h3>
          <p className="mt-2 text-slate-600">Lake Forest, CA · Serving Orange County</p>
          <p className="mt-2 text-slate-600">LIC# LICENSE_NUMBER_HERE · Licensed · Bonded · Insured</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-slate-700">
            <li><a className="hover:text-brand-700" href="tel:+19493753457">(949) 375‑3457</a></li>
            <li><a className="hover:text-brand-700" href="mailto:calprideplumbing@gmail.com">calprideplumbing@gmail.com</a></li>
            <li><Link className="hover:text-brand-700" href="/contact">Request service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-slate-700">
            <li><Link className="hover:text-brand-700" href="/services">Services</Link></li>
            <li><Link className="hover:text-brand-700" href="/about">About</Link></li>
            <li><a className="hover:text-brand-700" href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 text-slate-500">© {new Date().getFullYear()} Cal Pride Plumbing. All rights reserved.</div>
    </footer>
  )
}
