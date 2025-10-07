export default function LogoLockup() {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
        <circle cx="20" cy="20" r="20" fill="#5a79ef"/>
        <path d="M26 9l-4 4a6 6 0 1 0 5 5l4-4-5-5z" fill="white"/>
      </svg>
      <div className="leading-tight">
        <div className="text-2xl font-extrabold tracking-tight text-brand-700">Cal Pride</div>
        <div className="text-2xl font-extrabold tracking-tight text-brand-700 -mt-2">Plumbing</div>
      </div>
    </div>
  )
}
