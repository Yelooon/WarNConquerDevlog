import type { Metadata } from 'next'
import { ComingSoon } from '@/components/site/coming-soon'

export const metadata: Metadata = {
  title: 'Teaser',
  description: 'Una mirada al mundo, las facciones y las batallas de War & Conquer. Disponible en la semana 11.',
}

export default function TeaserPage() {
  return (
    <ComingSoon
      status="Teaser"
      badge="Primer vistazo"
      title="Teaser"
      description="Una mirada al mundo, las facciones y las batallas de War & Conquer."
      mediaType="teaser"
      mediaLabel="Teaser"
      mediaHint="Espacio reservado para el teaser oficial"
      src="https://www.youtube.com/embed/sfDshZ5ZVqs"
      formats={['Teaser']}
      //formats={['Video', 'Teaser', 'Trailer', 'Imágenes promocionales']}
    />
  )
}
