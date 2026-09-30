import { Check, Eye, Hammer, Images, Target, Wrench } from 'lucide-react'
import type { DevLogEntry as Entry } from '@/lib/devlog'
import { EvidenceGallery } from '@/components/site/evidence-gallery'
import { Tag } from '@/components/site/tag'

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="reveal flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 md:p-7">
      <h2 className="flex items-center gap-3 font-display text-2xl font-semibold">
        <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

export function EntryMeta({ entry }: { entry: Entry }) {
  return (
    <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
      <div className="flex gap-1.5">
        <dt className="font-bold text-muted-foreground">Fecha:</dt>
        <dd className={entry.date ? 'font-semibold' : 'italic text-muted-foreground'}>{entry.date ?? 'Por definir'}</dd>
      </div>
      <div className="flex gap-1.5">
        <dt className="font-bold text-muted-foreground">Semana:</dt>
        <dd className={entry.week ? 'font-semibold' : 'italic text-muted-foreground'}>{entry.week ?? 'Por definir'}</dd>
      </div>
    </dl>
  )
}

export function EntryTags({ tags }: { tags: Entry['tags'] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Sistemas trabajados">
      {tags.map((t) => (
        <li key={t}>
          <Tag variant="outline" className="font-mono text-[11px]">
            {t}
          </Tag>
        </li>
      ))}
    </ul>
  )
}

export function DevLogEntry({ entry }: { entry: Entry }) {
  return (
    <div className="flex flex-col gap-5">
      <Block icon={Target} title="Qué queríamos probar">
        <p className="max-w-3xl text-pretty text-lg leading-relaxed">{entry.goal}</p>
      </Block>

      <Block icon={Hammer} title="Qué implementamos">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {entry.implemented.map((item) => (
            <li key={item} className="flex items-start gap-2.5 rounded-xl bg-secondary/55 px-3 py-2.5 text-sm font-semibold">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        {entry.context && (
          <aside className="rounded-2xl border-l-4 border-accent bg-accent/8 p-4">
            <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Contexto de la iteración</p>
            <p className="text-sm leading-relaxed">{entry.context}</p>
          </aside>
        )}
      </Block>

      <Block icon={Images} title="Evidencia">
        <p className="text-sm text-muted-foreground">
          Material pendiente de subir por el equipo. Cada casilla se reemplaza al agregar su archivo en{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">lib/devlog.ts</code>.
        </p>
        <EvidenceGallery items={entry.evidence} version={entry.version} />
      </Block>

      <Block icon={Eye} title="Qué observamos">
        <ul className="grid gap-3 md:grid-cols-2">
          {entry.findings.map((f, i) => (
            <li key={f.title} className="flex gap-3 rounded-2xl border border-border bg-background p-4">
              <span className="font-mono text-sm font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold leading-snug">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={Wrench} title="Qué cambiaremos">
        <ol className="flex flex-col gap-3">
          {entry.nextSteps.slice(0, 3).map((step, i) => (
            <li key={step} className="flex items-center gap-4 rounded-2xl bg-primary px-4 py-3.5 text-primary-foreground">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 font-mono text-sm font-bold">
                {i + 1}
              </span>
              <span className="font-semibold">{step}</span>
            </li>
          ))}
        </ol>
      </Block>
    </div>
  )
}
