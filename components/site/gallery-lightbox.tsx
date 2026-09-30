'use client'

import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { MediaType } from '@/lib/media'
import { MediaPlaceholder } from '@/components/site/media-placeholder'

export type LightboxItem = { type: MediaType; label: string; caption: string; src?: string; meta?: string }

export function GalleryLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const open = index !== null && items[index] !== undefined

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const item = open ? items[index] : null
  const go = (delta: number) => {
    if (index === null) return
    onNavigate((index + delta + items.length) % items.length)
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      aria-labelledby="lightbox-caption"
      className="m-auto w-[min(64rem,calc(100%-2rem))] max-w-none rounded-3xl border border-border bg-card p-0 text-foreground backdrop:bg-foreground/55 backdrop:backdrop-blur-sm"
    >
      {item && (
        <div className="flex flex-col gap-4 p-3 md:p-5">
          <MediaPlaceholder type={item.type} label={item.label} src={item.src} alt={item.caption} size="lg" />
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="flex flex-col gap-0.5">
              {item.meta && (
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">{item.meta}</p>
              )}
              <p id="lightbox-caption" className="font-display text-lg font-semibold">
                {item.caption}
              </p>
              <p className="text-xs text-muted-foreground">
                {index! + 1} / {items.length}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <LightboxButton label="Anterior" onClick={() => go(-1)}>
                <ChevronLeft className="size-5" />
              </LightboxButton>
              <LightboxButton label="Siguiente" onClick={() => go(1)}>
                <ChevronRight className="size-5" />
              </LightboxButton>
              <LightboxButton label="Cerrar" onClick={onClose}>
                <X className="size-5" />
              </LightboxButton>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

function LightboxButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  )
}
