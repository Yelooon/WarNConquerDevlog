import { Flag, Flame, Layers, Mountain, RotateCw, Sparkles, Swords, Zap } from 'lucide-react'
import { coreLoop, type CoreLoopIcon } from '@/lib/content'
import { cn } from '@/lib/utils'

const icons: Record<CoreLoopIcon, React.ComponentType<{ className?: string }>> = {
  energy: Zap,
  draw: Layers,
  terraform: Mountain,
  cards: Sparkles,
  combat: Swords,
  ash: Flame,
  control: Flag,
}

const tones = [
  'bg-sun text-sun-foreground',
  'bg-sky text-sky-foreground',
  'bg-secondary text-secondary-foreground',
  'bg-sun text-sun-foreground',
  'bg-accent text-accent-foreground',
  'bg-muted text-foreground',
  'bg-primary text-primary-foreground',
]

export function CoreLoop() {
  return (
    <div className="flex flex-col gap-4">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {coreLoop.map((step, i) => {
          const Icon = icons[step.icon]
          return (
            <li
              key={step.title}
              className="reveal group relative flex gap-4 rounded-2xl border border-border bg-card p-4 transition-transform duration-200 hover:-translate-y-0.5 lg:flex-col"
            >
              <div className="flex items-center gap-3">
                <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl', tones[i])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground lg:ml-auto">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans text-sm font-extrabold uppercase tracking-wide">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          )
        })}
        <li className="reveal flex items-center gap-4 rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/50 p-4 lg:flex-col lg:justify-center lg:text-center">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-primary">
            <RotateCw className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-primary">Repetir</p>
            <p className="text-sm text-muted-foreground">El ciclo vuelve a comenzar.</p>
          </div>
        </li>
      </ol>
    </div>
  )
}
