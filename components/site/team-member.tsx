import { User } from 'lucide-react'

export function TeamMember({ name, role, avatar }: { name: string; role: string | null; avatar?: string }) {
  return (
    <li className="reveal flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatar} alt={`Foto de ${name}`} className="size-20 rounded-full object-cover" loading="lazy" />
      ) : (
        <span
          className="flex size-20 items-center justify-center rounded-full border-2 border-dashed border-primary/30 bg-secondary/60 bg-stripes-placeholder text-primary"
          role="img"
          aria-label="Placeholder de fotografía"
        >
          <User className="size-8" aria-hidden="true" />
        </span>
      )}
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-base font-semibold">{name}</p>
        <p className={role ? 'text-sm text-muted-foreground' : 'text-sm italic text-muted-foreground'}>
          {role ?? 'Rol pendiente'}
        </p>
      </div>
    </li>
  )
}
