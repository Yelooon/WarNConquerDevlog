import type { MediaType } from '@/lib/media'
import { MediaPlaceholder } from '@/components/site/media-placeholder'
import { Tag } from '@/components/site/tag'

export function ComingSoon({
  status,
  title,
  description,
  mediaType,
  mediaLabel,
  mediaHint,
  src,
  badge,
  formats,
  children,
}: {
  status: string
  title: string
  description: string
  mediaType: MediaType
  mediaLabel: string
  mediaHint: string
  src?: string
  badge?: string
  formats: string[]
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 md:px-6 md:py-16">
      <div className="page-enter flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          <Tag variant="accent">{status}</Tag>
          {badge && <Tag variant="sun">{badge}</Tag>}
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="rounded-[2rem] border border-border bg-card p-3 shadow-[0_20px_50px_-35px_oklch(0.47_0.085_152/0.7)] md:p-5">
        <MediaPlaceholder type={mediaType} label={mediaLabel} hint={mediaHint} src={src} size="lg" aspect="video" />
      </div>

      <div className="flex flex-col items-center gap-5">
        {children}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Preparado para</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {formats.map((f) => (
              <li key={f}>
                <Tag variant="outline">{f}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
