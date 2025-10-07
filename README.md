# Cal Pride Plumbing — Website

A Next.js + Tailwind site designed to mirror the business card style (bold blue tools, water drops, light gray paper). Ready for Vercel deployment.

## Quick Start

```bash
pnpm create next-app@latest cal-pride-plumbing --ts --app --eslint --tailwind --src-dir=false --import-alias "@/*"
# Replace generated files with the ones in this folder (copy/paste).

pnpm i
pnpm dev
```

## Configure Email (Resend)
1. Create a free account at resend.com and get an API key.
2. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO` = `calprideplumbing@gmail.com`
   - `CONTACT_FROM` = a verified domain email (e.g., `site@calprideplumbing.com`)
3. Deploy; the contact form posts to `/api/contact`.

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Set environment variables above.
4. Click **Deploy**. Done.

## Customization Checklist
- [ ] Replace `LICENSE_NUMBER_HERE` everywhere.
- [ ] Update hours and service area in `lib/schema.ts`.
- [ ] Swap `public/og.jpg` with a real image.
- [ ] Add reviews/testimonials if available.
- [ ] Connect Google Business Profile & link it.

## Notes
- Uses App Router, TypeScript, Tailwind CSS.
- Mobile-first and SEO-friendly with LocalBusiness JSON-LD.
