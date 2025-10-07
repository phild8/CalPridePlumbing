import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(3),
  email: z.string().email().optional().or(z.literal('')),
  city: z.string().optional(),
  message: z.string().min(1)
})

export async function POST(req: Request) {
  const data = await req.json()
  const parsed = schema.safeParse(data)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid form' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO || 'calprideplumbing@gmail.com'
  const from = process.env.CONTACT_FROM || 'site@calprideplumbing.com'

  if (!resendKey) {
    console.log('Contact request (no email configured):', parsed.data)
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(resendKey)
  await resend.emails.send({
    to,
    from,
    subject: `New service request from ${parsed.data.name}`,
    reply_to: parsed.data.email || undefined,
    text: `Name: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email || 'n/a'}\nCity: ${parsed.data.city || 'n/a'}\n\nMessage:\n${parsed.data.message}`
  })

  return NextResponse.json({ ok: true })
}
