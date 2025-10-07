import Droplet from '@/app/icons/Droplet'

export default function PatternRight() {
  return (
    <div aria-hidden className="hidden lg:flex flex-col gap-6 pl-6 items-end">
      {Array.from({ length: 6 }).map((_, i) => (
        <Droplet key={i} className="h-16 w-16 text-brand-400" />
      ))}
    </div>
  )
}
