import type { MediaType } from '@/lib/media'

export const systemTags = [
  'COMBATE',
  'MAPA',
  'CARTAS',
  'ENERGÍA',
  'LÍDERES',
  'UI',
  'BALANCE',
  'PLAYTESTING',
  'TERRAFORMACIÓN',
] as const
export type SystemTag = (typeof systemTags)[number]

export type Evidence = {
  type: MediaType
  label: string
  caption: string
  /** Ruta al archivo real en /public (imagen, GIF o .mp4/.webm). Sin `src` se muestra el placeholder. */
  src?: string
}

export type DevLogEntry = {
  slug: string
  version: string
  title: string
  badge?: string
  /** `null` muestra "Por definir". */
  date: string | null
  week: string | null
  tags: SystemTag[]
  goal: string
  implemented: string[]
  context?: string
  evidence: Evidence[]
  findings: { title: string; body: string }[]
  /** Máximo tres acciones concretas. */
  nextSteps: string[]
}

/**
 * Bitácora de desarrollo. Para agregar una nueva iteración, duplica un objeto,
 * cambia sus datos y colócalo al inicio del arreglo (la más reciente primero).
 */
export const devLog: DevLogEntry[] = [
  {
    slug: 'graybox-v0-1',
    version: 'v0.1',
    title: 'Graybox — Core Loop y estructura del tablero',
    badge: 'Primera iteración',
    date: null,
    week: null,
    tags: ['CARTAS', 'ENERGÍA', 'MAPA', 'LÍDERES', 'TERRAFORMACIÓN', 'PLAYTESTING'],
    goal: 'Queríamos probar la gestión de Estructuras, Unidades y Hechizos dentro del Core Loop y comprobar si la estructura general del mapa permitía tomar decisiones estratégicas claras.',
    implemented: [
      '3 Líderes implementados',
      'Tablero basado en casillas hexagonales',
      'Biomas funcionales',
      'Sistema de energía',
      'Sistema de cartas',
      'Ataques',
      'Sistema de terraformación',
      'UI',
      'IA para jugar en singleplayer y realizar pruebas',
    ],
    context:
      'Inicialmente el tablero era hexagonal y mucho más pequeño. Las primeras pruebas demostraron rápidamente que esta estructura presentaba problemas de diseño y balance, por lo que el tamaño y estructura del tablero se convirtieron en uno de los principales puntos de exploración.',
    evidence: [
      { type: 'screenshot', label: 'Screenshot del graybox', caption: 'Graybox v0.1 — tablero y sistemas principales' },
      { type: 'screenshot', label: 'Screenshot del tablero', caption: 'Estructura del tablero de casillas hexagonales' },
      { type: 'screenshot', label: 'Screenshot de la UI', caption: 'Primera versión de la UI' },
      { type: 'video', label: 'Video corto de gameplay', caption: 'Prueba de combate y gestión de cartas' },
      { type: 'gif', label: 'GIF de una interacción', caption: 'Primera implementación de terraformación' },
      { type: 'diagram', label: 'Diagrama del Core Loop', caption: 'Diagrama del Core Loop' },
    ],
    findings: [
      {
        title: 'El Core Loop resulta comprensible',
        body: 'Las primeras pruebas permitieron entender la estructura general del ciclo de juego y generaron nuevas ideas para organizar el flujo de decisiones.',
      },
      {
        title: 'El tablero continúa en exploración',
        body: 'Las casillas hexagonales requieren decisiones de balance precisas relacionadas con movilidad, alcance de cartas y distribución del territorio.',
      },
      {
        title: 'El orden de los turnos necesita ajustes',
        body: 'El playtesting mostró posibles problemas en el orden de las etapas del turno y en los momentos en que el jugador puede realizar acciones como terraformar.',
      },
      {
        title: 'La economía requiere iteración',
        body: 'El sistema de energía todavía necesita pruebas para determinar si su funcionamiento genera el ritmo adecuado.',
      },
      {
        title: 'Las cartas necesitan ajustes',
        body: 'El poder de las cartas, la claridad de sus efectos y su utilidad dentro de las situaciones de juego todavía requieren iteración.',
      },
      {
        title: 'Los Líderes necesitan balance',
        body: 'Las mecánicas específicas de cada Líder necesitan continuar probándose para asegurar que sus identidades sean claras y que sus habilidades tengan un impacto apropiado.',
      },
    ],
    nextSteps: [
      'Revisar la estructura y orden de las etapas del turno.',
      'Iterar el balance de energía y poder de las cartas.',
      'Ajustar las mecánicas de los Líderes y mejorar la claridad de sus efectos.',
    ],
  },
]
