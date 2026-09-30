import { ArrowRight, ScrollText } from 'lucide-react'
import { site } from '@/lib/content'
import { ButtonLink } from '@/components/site/button'
import { IslandMap } from '@/components/site/island-map'
import { Tag } from '@/components/site/tag'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-leaf-pattern">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-[1.05fr_1fr] md:px-6 md:pb-24 md:pt-20">
        <div className="page-enter flex flex-col items-start gap-6">
          <Tag variant="sun">Videojuego en desarrollo</Tag>
          <div className="flex flex-col gap-3">
            <h1 id="hero-title" className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              WAR <span className="text-accent">&amp;</span>
              <br />
              CONQUER
            </h1>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">{site.tagline}</p>
          </div>
          <p className="max-w-md text-pretty font-display text-xl leading-snug text-foreground/85 md:text-2xl">
            {`“${site.pitch}”`}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/concepto">
              Explorar el proyecto
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/bitacora" variant="secondary">
              <ScrollText />
              Ver la bitácora
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] border border-border bg-sky/45 p-4 shadow-[0_20px_50px_-30px_oklch(0.47_0.085_152/0.6)] md:p-6">
            <IslandMap />
            <p className="absolute bottom-4 left-4 rounded-full bg-card/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:bottom-6 md:left-6">
              {'[ Arte principal — por definir ]'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
