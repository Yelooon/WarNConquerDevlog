import { Cpu, Gamepad2, Monitor, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const icons = { genre: Gamepad2, players: Users, platform: Monitor, engine: Cpu }

export function GameInfoCard({
  label,
  value,
  icon,
}: {
  label: string
  value: string | null
  icon: keyof typeof icons
}) {
  const Icon = icons[icon]
  const pending = value === null
  return (
    <div
      className={cn(
        'reveal flex h-full flex-col gap-3 rounded-2xl border bg-card p-5',
        pending ? 'border-dashed border-primary/30' : 'border-border',
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
      <dd className={cn('font-display text-lg font-semibold leading-snug', pending && 'italic text-muted-foreground')}>
        {pending ? 'Por definir' : value}
      </dd>
    </div>
  )
}
