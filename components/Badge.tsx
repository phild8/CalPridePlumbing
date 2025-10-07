import { ReactNode } from 'react'
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-brand-700 text-xs font-semibold">
      {children}
    </span>
  )
}
