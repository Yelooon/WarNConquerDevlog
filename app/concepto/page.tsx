import type { Metadata } from 'next'
import { Crown, Globe2 } from 'lucide-react'
import { genreTags, leaders, systems } from '@/lib/content'
import { SectionHeader } from '@/components/site/section-header'
import { BiomeCard } from '@/components/site/biome-card'
import { LeaderCard } from '@/components/site/leader-card'
import { IslandMap } from '@/components/site/island-map'
import { Tag } from '@/components/site/tag'

export const metadata: Metadata = {
  title: 'Concepto del juego',
  description: 'Premisa, objetivo, sistemas principales y Líderes de War & Conquer.',
}

export default function ConceptoPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-12 md:px-6 md:py-16">
      <div className="page-enter">
        <SectionHeader
          as="h1"
          eyebrow="Documento de concepto"
          title="Concepto del juego"
          description="Las ideas que sostienen el diseño de War & Conquer."
        />
      </div>

      <section aria-labelledby="premisa" className="grid items-center gap-8 md:grid-cols-2">
        <div className="reveal flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-sky/60 text-sky-foreground">
              <Globe2 className="size-5" aria-hidden="true" />
            </span>
            <h2 id="premisa" className="font-display text-3xl font-semibold">Premisa</h2>
            <p className="text-pretty text-lg leading-relaxed">
              El juego sucede en un archipiélago de islas flotantes surgido después de la fractura del Núcleo del
              Mundo.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Crown className="size-5" aria-hidden="true" />
            </span>
            <h2 className="font-display text-3xl font-semibold">Objetivo</h2>
            <p className="text-pretty text-lg leading-relaxed">
              El jugador busca derrotar a los Líderes rivales o cumplir las condiciones de control mientras administra
              territorio, energía y cartas.
            </p>
          </div>
        </div>
        <div className="reveal rounded-[2rem] border border-border bg-sky/40 p-4">
          <IslandMap />
        </div>
      </section>

      <section aria-labelledby="genero" className="flex flex-col gap-6">
        <SectionHeader id="genero" eyebrow="Clasificación" title="Género" />
        <ul className="reveal flex flex-wrap gap-3">
          {genreTags.map((g, i) => (
            <li key={g}>
              <Tag variant={(['default', 'sky', 'sun', 'accent', 'outline'] as const)[i % 5]} className="px-4 py-2 text-sm">
                {g}
              </Tag>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sistemas" className="flex flex-col gap-8">
        <SectionHeader
          id="sistemas"
          eyebrow={`${systems.length} sistemas`}
          title="Sistemas principales"
          description="Los sistemas marcados como “Por documentar” tendrán su descripción completa en próximas iteraciones."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {systems.map((s) => (
            <BiomeCard key={s.name} {...s} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="lideres" className="flex flex-col gap-8">
        <SectionHeader
          id="lideres"
          eyebrow="Facciones"
          title="Líderes"
          description="Cada jugador controla un Líder de una raza fantástica con una identidad de juego propia."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <li key={l.name}>
              <LeaderCard leader={l} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
