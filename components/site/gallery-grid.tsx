'use client'

import { useState } from 'react'
import { galleryCategories, type GalleryCategory, type GalleryItem } from '@/lib/content'
import { cn } from '@/lib/utils'
import { MediaPlaceholder } from '@/components/site/media-placeholder'
import { GalleryLightbox } from '@/components/site/gallery-lightbox'

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<GalleryCategory | 'Todo'>('Todo')
  const [active, setActive] = useState<number | null>(null)

  const visible = filter === 'Todo' ? items : items.filter((i) => i.category === filter)
  const lightboxItems = visible.map((i) => ({ ...i, meta: i.category }))

  return (
    <div className="flex flex-col gap-6">
      <div role="group" aria-label="Filtrar por categoría" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
        {(['Todo', ...galleryCategories] as const).map((cat) => {
          const count = cat === 'Todo' ? items.length : items.filter((i) => i.category === cat).length
          const selected = filter === cat
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(cat)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40',
                selected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground/80 hover:bg-secondary',
              )}
            >
              {cat}
              <span className={cn('ml-1.5 text-xs', selected ? 'opacity-80' : 'text-muted-foreground')}>{count}</span>
            </button>
          )
        })}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-primary/30 p-10 text-center text-muted-foreground">
          Todavía no hay material en esta categoría.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group flex w-full flex-col gap-3 rounded-3xl border border-border bg-card p-3 text-left transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                <MediaPlaceholder type={item.type} label={item.label} src={item.src} alt={item.caption} />
                <span className="flex flex-col gap-0.5 px-1 pb-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-accent">{item.category}</span>
                  <span className="font-semibold leading-snug">{item.caption}</span>
                  <span className="sr-only">Abrir en vista ampliada</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <GalleryLightbox items={lightboxItems} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </div>
  )
}
