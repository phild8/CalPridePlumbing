export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Cal Pride Plumbing',
  url: 'https://www.calprideplumbing.com',
  image: '/og.jpg',
  telephone: '+1-949-375-3457',
  email: 'calprideplumbing@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lake Forest',
    addressRegion: 'CA',
    addressCountry: 'US'
  },
  areaServed: ['Lake Forest', 'Orange County', 'Irvine', 'Mission Viejo', 'Laguna Hills'],
  openingHours: 'Mo-Sa 07:00-18:00',
  priceRange: '$$'
}
