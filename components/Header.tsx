import Link from 'next/link'
import LogoLockup from './LogoLockup'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 shadow-sm">
      <div className="section flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <LogoLockup />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/services" className="hover:text-brand-700">Services</Link>
          <Link href="/about" className="hover:text-brand-700">About</Link>
          <Link href="/contact" className="hover:text-brand-700">Contact</Link>
        </nav>
        <a href="tel:+19493753457" className="btn-primary ml-4">(949) 375‑3457</a>
      </div>
    </header>
  )
}
