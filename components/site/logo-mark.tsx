import { cn } from '@/lib/utils'

/** Marca provisional mientras no exista el logo definitivo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn('size-9', className)}>
      <path d="M20 3 35 11.5v17L20 37 5 28.5v-17Z" className="fill-primary" />
      <path d="M20 9 30 14.7v10.6L20 31l-10-5.7V14.7Z" className="fill-secondary" />
      <path d="M20 13c-4 1.5-6.5 4.6-6.5 8.4 0 1 .2 1.8.5 2.6 1-3 3-5.2 6-6.6-2.2 1.8-3.6 4-4.1 6.6.9.4 1.8.6 2.8.6 4.1 0 6.8-4.3 6.8-11.6Z" className="fill-primary" />
    </svg>
  )
}
