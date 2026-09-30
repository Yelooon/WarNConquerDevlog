import { Castle, Flame, Hourglass, Mountain, Route, Sparkles, Trash2, Users, Waves, Zap } from 'lucide-react'
import type { SystemIcon, Tone } from '@/lib/content'
import { toneClasses } from '@/lib/tone'
import { cn } from '@/lib/utils'

const icons: Record<SystemIcon, React.ComponentType<{ className?: string }>> = {
  energy: Zap,
  units: Users,
  structures: Castle,
  magic: Sparkles,
  terraform: Mountain,
  routes: Route,
  ash: Flame,
  latent: Hourglass,
  purge: Trash2,
  collapse: Waves,
}

/** Tarjeta compacta para sistemas y biomas del juego. */
export function BiomeCard({
  name,
  summary,
  icon,
  tone,
  pending,
}: {
  name: string
  summary: string
  icon: SystemIcon
  tone: Tone
  pending?: boolean
}) {
  const Icon = icons[icon]
  return (
    <li className="reveal flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-2">
        <span className={cn('flex size-11 items-center justify-center rounded-xl', toneClasses[tone].soft)}>
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {pending && (
          <span className="rounded-full border border-dashed border-primary/35 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Por documentar
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold leading-tight">{name}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
    </li>
  )
}
