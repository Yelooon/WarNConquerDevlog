import type { Metadata } from 'next'
import { Play } from 'lucide-react'
import { ComingSoon } from '@/components/site/coming-soon'
import { Button } from '@/components/site/button'

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Espacio reservado para la versión jugable de War & Conquer.',
}

export default function DemoPage() {
  return (
    <ComingSoon
      status="Demo en desarrollo"
      title="Demo"
      description="La versión jugable se incorporará aquí a medida que avance el desarrollo."
      mediaType="gameplay"
      mediaLabel="Contenedor de la demo"
      mediaHint="Espacio reservado para build jugable"
      formats={['iframe', 'Video', 'Enlace a build', 'WebGL', 'Embed', 'Descarga']}
    >
      <Button disabled aria-disabled="true" className="cursor-not-allowed opacity-50">
        <Play />
        Jugar Demo
      </Button>
      <p className="text-sm text-muted-foreground">Se habilitará cuando exista una versión pública.</p>
    </ComingSoon>
  )
}
