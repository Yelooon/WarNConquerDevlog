import Link from 'next/link'
import { navItems } from '@/lib/content'
import { LogoMark } from '@/components/site/logo-mark'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-display text-xl font-bold">War &amp; Conquer</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Sitio de documentación y bitácora de desarrollo de un videojuego universitario en progreso. El contenido se
            actualiza a lo largo del semestre.
          </p>
        </div>
        <nav aria-label="Pie de página">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Secciones</p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-foreground/80 underline-offset-4 hover:text-primary hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground md:px-6">
          War &amp; Conquer — Proyecto universitario en desarrollo.
        </p>
      </div>
    </footer>
  )
}
