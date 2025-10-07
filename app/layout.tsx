import './globals.css'
import type { Metadata } from 'next'
import { jsonLd } from '@/lib/schema'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BannerBar from '@/components/BannerBar'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://calprideplumbing.example.com'),
  title: {
    default: 'Cal Pride Plumbing — Lake Forest, CA',
    template: '%s · Cal Pride Plumbing'
  },
  description: 'Friendly, professional plumbing in Orange County. Honest pricing, fast response. Call (949) 375-3457.',
  openGraph: {
    title: 'Cal Pride Plumbing',
    description: 'Orange County plumber. Licensed · Bonded · Insured.',
    type: 'website',
    locale: 'en_US'
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <BannerBar />
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
