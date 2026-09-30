import type { Leader } from '@/lib/content'
import { toneClasses } from '@/lib/tone'
import { cn } from '@/lib/utils'
import { Tag } from '@/components/site/tag'

export function LeaderCard({ leader }: { leader: Leader }) {
  const tone = toneClasses[leader.tone]
  const inDev = leader.status === 'en-desarrollo'
  return (
    <article
      className={cn(
        'reveal group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-transform duration-200 hover:-translate-y-1',
        inDev ? 'border-dashed border-primary/30' : 'border-border',
      )}
    >
      <div
  className={cn(
    'relative aspect-[4/3] overflow-hidden bg-stripes-placeholder',
    tone.soft,
  )}
  role="img"
  aria-label={`Ilustración de ${leader.name}`}
>
  {leader.image ? (
    <img
      src={leader.image}
      alt={`Ilustración de ${leader.name}`}
      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
    />
  ) : (
    <>
      <div className="flex h-full items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="size-24"
        >
          <path
            d="M50 6 88 28v44L50 94 12 72V28Z"
            className={cn('fill-current opacity-25')}
          />
          <path
            d="M50 18 78 34v32L50 82 22 66V34Z"
            className="fill-card"
          />
        </svg>

        <span
          className={cn(
            'absolute font-display text-4xl font-bold',
            tone.text,
          )}
        >
          {leader.name.charAt(0)}
        </span>
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {'[ Arte del Líder ]'}
      </span>
    </>
  )}
</div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold">{leader.name}</h3>
          {inDev ? <Tag variant="muted">En desarrollo</Tag> : <Tag>En prototipo</Tag>}
        </div>
        <p className={cn('text-sm font-extrabold uppercase tracking-wide', tone.text)}>{leader.title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{leader.focus}</p>
      </div>
    </article>
  )
}
