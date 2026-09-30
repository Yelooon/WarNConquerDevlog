import { Clapperboard, Film, Image as ImageIcon, Network, Palette, Gamepad2, Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { isVideoSource, mediaTypeLabel, type MediaType } from '@/lib/media'

const icons: Record<MediaType, React.ComponentType<{ className?: string }>> = {
  screenshot: ImageIcon,
  video: Video,
  gif: Film,
  concept: Palette,
  diagram: Network,
  gameplay: Gamepad2,
  teaser: Clapperboard,
}

const hints: Record<MediaType, string> = {
  screenshot: 'Agregar evidencia aquí',
  video: 'Video — próximamente',
  gif: 'GIF — próximamente',
  concept: 'Arte — por agregar',
  diagram: 'Diagrama — por agregar',
  gameplay: 'Video de gameplay — próximamente',
  teaser: 'Teaser — próximamente',
}

const aspects = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
} as const

/**
 * Contenedor de medios reemplazable. Sin `src` muestra un placeholder
 * intencional; con `src` renderiza la imagen o el video real en el mismo espacio.
 */
export function MediaPlaceholder({
  type,
  label,
  hint,
  src,
  alt,
  aspect = 'video',
  size = 'md',
  className,
}: {
  type: MediaType
  label?: string
  hint?: string
  src?: string
  alt?: string
  aspect?: keyof typeof aspects
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const Icon = icons[type]
  const title = (label ?? mediaTypeLabel[type]).toUpperCase()

  if (src) {
    return (
      <div className={cn('relative overflow-hidden rounded-2xl bg-muted', aspects[aspect], className)}>
        {isVideoSource(src) ? (
          <video src={src} controls preload="metadata" className="size-full object-cover" aria-label={alt ?? label} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? label ?? ''} className="size-full object-cover" loading="lazy" />
        )}
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label ?? mediaTypeLabel[type]}. ${hint ?? hints[type]}`}
      className={cn(
        'relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed border-primary/25 bg-secondary/50 bg-stripes-placeholder p-4 text-center',
        aspects[aspect],
        className,
      )}
    >
      <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
        {mediaTypeLabel[type]}
      </span>
      <span
        className={cn(
          'flex items-center justify-center rounded-full bg-card text-primary shadow-sm',
          size === 'lg' ? 'size-16' : size === 'sm' ? 'size-9' : 'size-12',
        )}
      >
        <Icon className={size === 'lg' ? 'size-7' : size === 'sm' ? 'size-4' : 'size-5'} />
      </span>
      <p
        className={cn(
          'font-mono font-bold tracking-wide text-secondary-foreground',
          size === 'lg' ? 'text-base md:text-lg' : size === 'sm' ? 'text-[11px]' : 'text-xs md:text-sm',
        )}
      >
        {`[ ${title} ]`}
      </p>
      {size !== 'sm' && <p className="text-xs text-muted-foreground">{hint ?? hints[type]}</p>}
    </div>
  )
}

export { MediaPlaceholder as PlaceholderMedia }
