import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import type { DevLogEntry } from '@/lib/devlog'
import { EntryMeta, EntryTags } from '@/components/site/dev-log-entry'
import { Tag } from '@/components/site/tag'

export function Timeline({ entries }: { entries: DevLogEntry[] }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l-2 border-dashed border-primary/30 pl-6 md:pl-10">
      {entries.map((entry, i) => (
        <li key={entry.slug} className="reveal relative">
          <span
            aria-hidden="true"
            className="absolute -left-[2.15rem] top-6 flex size-5 items-center justify-center rounded-full border-4 border-background bg-primary md:-left-[3.15rem]"
          />
          <article className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 transition-transform duration-200 hover:-translate-y-0.5 md:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-primary px-2.5 py-1 font-mono text-sm font-bold text-primary-foreground">
                {entry.version}
              </span>
              {i === 0 && <Tag variant="sun">Más reciente</Tag>}
              {entry.badge && <Tag variant="accent">{entry.badge}</Tag>}
            </div>
            <h2 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
              <Link href={`/bitacora/${entry.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
                {entry.title}
              </Link>
            </h2>
            <EntryMeta entry={entry} />
            <p className="max-w-3xl leading-relaxed text-muted-foreground">{entry.goal}</p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <EntryTags tags={entry.tags} />
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                Leer iteración
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </article>
        </li>
      ))}
      <li className="relative">
        <span
          aria-hidden="true"
          className="absolute -left-[2.15rem] top-5 size-5 rounded-full border-2 border-dashed border-primary/40 bg-background md:-left-[3.15rem]"
        />
        <div className="flex items-center gap-3 rounded-3xl border-2 border-dashed border-primary/25 p-5 text-muted-foreground">
          <Plus className="size-5" aria-hidden="true" />
          <p className="text-sm">Las próximas iteraciones se agregarán aquí durante el semestre.</p>
        </div>
      </li>
    </ol>
  )
}
