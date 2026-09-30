import type { Tone } from '@/lib/content'

export const toneClasses: Record<Tone, { soft: string; solid: string; text: string }> = {
  leaf: { soft: 'bg-secondary text-secondary-foreground', solid: 'bg-primary text-primary-foreground', text: 'text-primary' },
  sun: { soft: 'bg-sun/60 text-sun-foreground', solid: 'bg-sun text-sun-foreground', text: 'text-sun-foreground' },
  sky: { soft: 'bg-sky/60 text-sky-foreground', solid: 'bg-sky text-sky-foreground', text: 'text-sky-foreground' },
  terracotta: { soft: 'bg-accent/15 text-accent', solid: 'bg-accent text-accent-foreground', text: 'text-accent' },
  earth: { soft: 'bg-muted text-foreground', solid: 'bg-earth text-primary-foreground', text: 'text-earth' },
}
