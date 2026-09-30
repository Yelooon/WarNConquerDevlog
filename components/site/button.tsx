import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-55 aria-disabled:cursor-not-allowed aria-disabled:opacity-55 [&_svg]:size-4 [&_svg]:shrink-0'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_3px_0_0_oklch(0.36_0.07_152)] hover:-translate-y-0.5 hover:shadow-[0_5px_0_0_oklch(0.36_0.07_152)] active:translate-y-0 active:shadow-none disabled:hover:translate-y-0',
  secondary:
    'border-2 border-primary/25 bg-card text-primary hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary',
  ghost: 'text-primary hover:bg-secondary',
}

export function buttonClasses(variant: Variant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
}: {
  href: string
  variant?: Variant
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button type="button" className={buttonClasses(variant, className)} {...props} />
}
