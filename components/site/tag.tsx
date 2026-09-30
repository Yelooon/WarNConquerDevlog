import { cn } from '@/lib/utils'

type TagVariant = 'default' | 'outline' | 'accent' | 'sun' | 'sky' | 'muted'

const variants: Record<TagVariant, string> = {
  default: 'bg-secondary text-secondary-foreground',
  outline: 'border border-border bg-card text-foreground',
  accent: 'bg-accent text-accent-foreground',
  sun: 'bg-sun text-sun-foreground',
  sky: 'bg-sky text-sky-foreground',
  muted: 'bg-muted text-muted-foreground',
}

export function Tag({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode
  variant?: TagVariant
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
