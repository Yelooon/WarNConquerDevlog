import type { Metadata } from 'next'
import { galleryItems } from '@/lib/content'
import { SectionHeader } from '@/components/site/section-header'
import { GalleryGrid } from '@/components/site/gallery-grid'

export const metadata: Metadata = {
  title: 'Galería',
  description: 'Archivo visual del desarrollo de War & Conquer: graybox, gameplay, UI, arte, mapas y diagramas.',
}

export default function GaleriaPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-6 md:py-16">
      <div className="page-enter">
        <SectionHeader
          as="h1"
          eyebrow="Archivo visual"
          title="Galería"
          description="Registro visual del desarrollo. Las casillas marcadas como placeholder se reemplazarán por capturas, videos y GIFs reales."
        />
      </div>
      <GalleryGrid items={galleryItems} />
    </div>
  )
}
