'use client'

import { useState } from 'react'
import type { Evidence } from '@/lib/devlog'
import { MediaPlaceholder } from '@/components/site/media-placeholder'
import { GalleryLightbox } from '@/components/site/gallery-lightbox'

export function EvidenceGallery({ items, version }: { items: Evidence[]; version: string }) {
  const [active, setActive] = useState<number | null>(null)
  const lightboxItems = items.map((e) => ({ ...e, meta: `Evidencia · ${version}` }))

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            <figure className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block w-full rounded-2xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                <MediaPlaceholder type={item.type} label={item.label} src={item.src} alt={item.caption} size="sm" />
                <span className="sr-only">Ampliar: {item.caption}</span>
              </button>
              <figcaption className="px-1 text-xs leading-snug text-muted-foreground">{item.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <GalleryLightbox items={lightboxItems} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </>
  )
}
