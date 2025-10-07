import Wrench from '@/app/icons/Wrench'

export default function PatternLeft() {
  return (
    <div aria-hidden className="hidden lg:flex flex-col gap-6 pr-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Wrench key={i} className="h-16 w-16 text-brand-400" />
      ))}
    </div>
  )
}
