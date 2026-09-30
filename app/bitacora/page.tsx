import type { Metadata } from 'next'
import { devLog } from '@/lib/devlog'
import { SectionHeader } from '@/components/site/section-header'
import { Timeline } from '@/components/site/timeline'

export const metadata: Metadata = {
  title: 'Bitácora de desarrollo',
  description: 'Cada iteración de War & Conquer: qué probamos, qué implementamos, qué observamos y qué cambiaremos.',
}

export default function BitacoraPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12 md:px-6 md:py-16">
      <div className="page-enter">
        <SectionHeader
          as="h1"
          eyebrow={`${devLog.length} ${devLog.length === 1 ? 'iteración' : 'iteraciones'} registradas`}
          title="Bitácora del desarrollo"
          description="Una timeline de versiones que crece durante todo el semestre."
        />
      </div>
      <Timeline entries={devLog} />
    </div>
  )
}
