import { ArrowRight } from 'lucide-react'
import { coreLoop, gameInfo, site, team } from '@/lib/content'
import { devLog } from '@/lib/devlog'
import { Hero } from '@/components/site/hero'
import { SectionHeader } from '@/components/site/section-header'
import { GameInfoCard } from '@/components/site/game-info-card'
import { CoreLoop } from '@/components/site/core-loop'
import { TeamMember } from '@/components/site/team-member'
import { ButtonLink } from '@/components/site/button'
import { Tag } from '@/components/site/tag'

export default function HomePage() {
  const latest = devLog[0]
  return (
    <>
      <Hero />

      <section aria-labelledby="resumen" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <SectionHeader id="resumen" eyebrow="Ficha del proyecto" title="Resumen" />
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gameInfo.map((info) => (
            <GameInfoCard key={info.label} {...info} />
          ))}
        </dl>
      </section>

      <section aria-labelledby="sobre" className="bg-secondary/45">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1fr_1.4fr] md:px-6">
          <SectionHeader id="sobre" eyebrow="Sobre el juego" title="Un tablero de biomas vivos" />
          <p className="reveal text-pretty text-lg leading-relaxed md:text-xl">{site.about}</p>
        </div>
      </section>

      <section aria-labelledby="core-loop" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <SectionHeader
          id="core-loop"
          eyebrow={`Ciclo de juego · ${coreLoop.length} etapas`}
          title="Core Loop"
          description="Cada turno recorre estas etapas antes de volver a comenzar."
        />
        <div className="mt-8">
          <CoreLoop />
        </div>
      </section>

      {latest && (
        <section aria-labelledby="ultima" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <div className="reveal flex flex-col gap-5 rounded-[2rem] bg-primary p-6 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-primary-foreground/15 px-2.5 py-1 font-mono text-sm font-bold">
                  {latest.version}
                </span>
                <Tag variant="sun">Última iteración</Tag>
              </div>
              <h2 id="ultima" className="max-w-xl font-display text-2xl font-semibold leading-tight md:text-3xl">
                {latest.title}
              </h2>
            </div>
            <ButtonLink href={`/bitacora/${latest.slug}`} variant="secondary" className="shrink-0">
              Leer en la bitácora
              <ArrowRight />
            </ButtonLink>
          </div>
        </section>
      )}

      <section aria-labelledby="equipo" className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader
            id="equipo"
            eyebrow={`${team.length} integrantes`}
            title="Equipo"
            description="Desarrolladores involucrados en el proyecto."
          />
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((m) => (
              <TeamMember key={m.name} {...m} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
