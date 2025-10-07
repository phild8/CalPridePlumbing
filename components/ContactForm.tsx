'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    const formData = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" id="contact">
      <div className="grid md:grid-cols-2 gap-3">
        <input required name="name" placeholder="Your name" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
        <input required type="tel" name="phone" placeholder="Phone" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
      </div>
      <input type="email" name="email" placeholder="Email (optional)" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
      <input name="city" placeholder="City" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
      <textarea required name="message" placeholder="How can we help?" rows={5} className="rounded-xl border border-slate-300 bg-white px-4 py-3" />

      <div className="flex items-center gap-4">
        <button className="btn-primary" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : 'Send request'}
        </button>
        {status==='sent' && <span className="text-sm text-green-700">Thanks! We’ll call you soon.</span>}
        {status==='error' && <span className="text-sm text-red-700">Something went wrong. Please call us.</span>}
      </div>
      <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your request.</p>
    </form>
  )
}
