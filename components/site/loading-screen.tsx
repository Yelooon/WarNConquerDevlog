'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const steps = ['Neutro', 'Bioma', 'Territorio']

/**
 * Transición breve de entrada. Vive en el layout raíz, por lo que solo aparece
 * en la carga inicial y nunca durante la navegación interna.
 */
export function LoadingScreen() {
  const [phase, setPhase] = useState<'visible' | 'leaving' | 'gone'>('visible')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hold = reduced ? 150 : 900
    const fade = reduced ? 0 : 450
    const t1 = window.setTimeout(() => setPhase('leaving'), hold)
    const t2 = window.setTimeout(() => setPhase('gone'), hold + fade)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background bg-leaf-pattern transition-opacity duration-450 ease-out',
        phase === 'leaving' && 'pointer-events-none opacity-0',
      )}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true" className="float-soft size-20">
        <path
          d="M50 6 88 28v44L50 94 12 72V28Z"
          className="terraform-hex"
          strokeWidth="5"
          strokeLinejoin="round"
          style={{ fill: 'oklch(0.88 0.02 90)', stroke: 'oklch(0.75 0.03 100)' }}
        />
      </svg>
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">WAR &amp; CONQUER</p>
        <p className="text-sm font-semibold text-muted-foreground">Preparando el mundo...</p>
      </div>
      <ol className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary" aria-hidden="true">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="terraform-step" style={{ animationDelay: `${i * 0.6}s` }}>
              {step}
            </span>
            {i < steps.length - 1 && <span className="text-muted-foreground">→</span>}
          </li>
        ))}
      </ol>
      <span className="sr-only">Cargando War &amp; Conquer</span>
    </div>
  )
}
