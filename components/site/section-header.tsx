import { cn } from '@/lib/utils'

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  id,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
          <LeafMark />
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={cn(
          'font-display font-semibold leading-tight text-foreground',
          Heading === 'h1' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl',
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn('max-w-2xl text-pretty leading-relaxed text-muted-foreground', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  )
}

function LeafMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 fill-current">
      <path d="M14 2C7 2 2 5.5 2 11c0 1.2.3 2.2.8 3 .5-3 2.6-6 6.2-7.8-2.6 2-4.3 4.4-5 7.3.8.3 1.6.5 2.5.5C12 14 14 8.5 14 2Z" />
    </svg>
  )
}
