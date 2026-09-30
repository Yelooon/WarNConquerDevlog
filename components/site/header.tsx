'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/content'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/site/logo-mark'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [lastPath, setLastPath] = useState(pathname)

  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">War &amp; Conquer</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Devlog</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3.5 py-2 text-sm font-bold transition-colors',
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/75 hover:bg-secondary hover:text-secondary-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Principal móvil"
        className={cn('border-t border-border/70 bg-background md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'block rounded-xl px-4 py-3 font-bold transition-colors',
                  isActive(item.href) ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
