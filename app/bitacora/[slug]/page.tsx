import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { devLog } from '@/lib/devlog'
import { DevLogEntry, EntryMeta, EntryTags } from '@/components/site/dev-log-entry'
import { Tag } from '@/components/site/tag'

export function generateStaticParams() {
  return devLog.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = devLog.find((e) => e.slug === slug)
  return entry ? { title: `${entry.version} · ${entry.title}`, description: entry.goal } : {}
}

export default async function EntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = devLog.find((e) => e.slug === slug)
  if (!entry) notFound()

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:px-6 md:py-14">
      <Link
        href="/bitacora"
        className="inline-flex w-fit items-center gap-1.5 rounded-full text-sm font-bold text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver a la bitácora
      </Link>

      <header className="page-enter flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-primary px-2.5 py-1 font-mono text-sm font-bold text-primary-foreground">
            {entry.version}
          </span>
          {entry.badge && <Tag variant="accent">{entry.badge}</Tag>}
        </div>
        <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight md:text-5xl">{entry.title}</h1>
        <EntryMeta entry={entry} />
        <EntryTags tags={entry.tags} />
      </header>

      <DevLogEntry entry={entry} />
    </div>
  )
}
