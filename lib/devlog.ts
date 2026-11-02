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
  'TEASER'
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
  findings: { title: string; body: string, link?: string, linkLabel?: string}[]
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
    date: '2026-09-30',
    week: '8',
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
      { 
        type: 'screenshot', 
        label: 'Screenshot del graybox', 
        caption: 'Graybox v0.1 — tablero y sistemas principales', 
        src: '/devlog/v0-1/WarNConquer 1st Iteration.png'
      },
      { 
        type: 'screenshot', 
        label: 'Screenshot del tablero', 
        caption: 'Estructura del tablero de casillas hexagonales', 
        src: '/devlog/v0-1/WarNConquer 1st Map.png'
      },
      { type: 'screenshot', 
        label: 'Screenshot de la UI', 
        caption: 'Primera versión de la UI', 
        src: '/devlog/v0-1/WarNConquer 1st UI.png'
      },
      { 
        type: 'screenshot', 
        label: 'Mapa terraformado', 
        caption: 'Primera implementación de terraformación', 
        src: '/devlog/v0-1/WarNConquer 1st Terraformed.png'
      },
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



  {
    slug: 'Xilthar y Teaser v0-2',
    version: 'v0.2',
    title: 'Interfaz preliminar — Implementacion de los lideres',
    badge: 'Segunda iteración',
    date: '2026-10-20',
    week: '12',
    tags: ['CARTAS', 'ENERGÍA', 'UI', 'LÍDERES', 'TERRAFORMACIÓN', 'TEASER'],
    goal: 'Preparacion del Teaser, Implementar al ultimo lider, una UI preliminar y ultimas cartas',
    implemented: [
      'Ultima lider implementada',
      'Alteraciones en la etapa de los turnos',
      'Nuevo bioma',
      'Modelos 3d de los lideres',
      'UI preliminar',
      'Mazo void',
      'Sistema de terraformación'
    ],
    context:
      'La UI carece de elementos de identidad, los lideres no aparecen presentes en el juego y hay cartas que resultan redundantes en el contexto del juego',
    evidence: [
      { 
        type: 'screenshot', 
        label: 'Screenshot MainMenu v2', 
        caption: 'Main Menu v2. Nuevo background', 
        src: '/devlog/v0-2/MainMenu v2.png'
      },
      { 
        type: 'screenshot', 
        label: 'Screenshot de lideres', 
        caption: 'Modelos de Zukgrok, Faunar y Xilthar', 
        src: '/devlog/v0-2/Leaders Models.png'
      },
      { type: 'screenshot', 
        label: 'Screenshot Eleccion de lider', 
        caption: 'Preparacion de la partida', 
        src: '/devlog/v0-2/WarNConquer PrepGame.png'
      },
    ],
    findings: [
      {
        title: 'Nuevo Lider: Xilthar',
        body: 'Xilthar y la baraja de Void juegan con el posicionamiento y terraformar mucho muy rapido, su plan de juego depende de expandir el vacio por todo el terreno para atacar desde cualquier angulo',
      },
      {
        title: 'Teaser ya disponible!',
        body: 'Pequeño teaser con fragmentos de la jugabilidad desarrollado hasta el momento',
        link: 'https://youtu.be/sfDshZ5ZVqs',
        linkLabel: 'Ver teaser oficial',
      },
      {
        title: 'La UI sigue pendiente de cambios',
        body: 'Debido al trabajo de modelado y animacion de los lideres se propone dejar la UI de forma preliminar mientras se implementan nuevas animaciones',
      },
      {
        title: 'La terraformacion ahora ocurre al final del turno',
        body: 'La etapa de terraformacion ahora ocurre al final del turno para que los jugadores tengan que planear mejor sus territorios, ademas de permitirle al rival reaccionar ante posibles amenazas',
      },
      {
        title: 'Las estructuras resultan dificiles de destruir',
        body: 'Desviarse del camino para destruir una estructura resulta en muchas ocasiones en una perdida de tempo, lo que las hace cartas mas fuertes de lo previsto',
      },
      {
        title: 'Las cartas necesitan mayor claridad',
        body: 'Los tipos de cartas solo se diferencian mediante texto, lo que complica distinguir entre estructuras, magias y unidades',
      },
      {
        title: 'Los Líderes necesitan balance',
        body: 'Los mazos de cada lider juegan a distintos tempos y no se han probado matchups con multiples jugadores',
      },
    ],
    nextSteps: [
      'Implementar las visuales de las cartas',
      'Ajustar la interfaz para mayor claridad .',
      'Ajustes de jugabilidad.',
    ],
  },




  {
    slug: 'Arte de Cartas! v0-3',
    version: 'v0.3',
    title: 'Arte de cartas — Nuevas animaciones',
    badge: 'Tercera iteración',
    date: '2026-11-03',
    week: '14',
    tags: ['CARTAS', 'BALANCE', 'UI', 'LÍDERES', 'PLAYTESTING', 'COMBATE'],
    goal: 'Preparacion del Teaser, Implementar al ultimo lider, una UI preliminar y ultimas cartas',
    implemented: [
      'Nuevos artes para las cartas',
      'Animaciones para lideres',
      'Animaciones de unidades',
      'Cambios en UI',
    ],
    context:
      'Algunas cartas ya cuentan con sus propios sprites, aun faltan bastantes, pero inicialmente permite visualizar mejor el contenido',
    evidence: [
      { 
        type: 'screenshot', 
        label: 'Screenshot Unit', 
        caption: 'Primera carta implementada', 
        src: '/devlog/v0-3/Unit.png'
      },
      { 
        type: 'screenshot', 
        label: 'Screenshot de lideres', 
        caption: 'Modelos de Zukgrok, Faunar y Xilthar', 
        src: '/devlog/v0-3/New BG ingamee.png'
      },
      { type: 'screenshot', 
        label: 'Screenshot Eleccion de lider', 
        caption: 'Preparacion de la partida', 
        src: '/devlog/v0-3/Card Backsprite.png'
      },
    ],
    findings: [
      {
        title: 'Pending',
        body: 'Descripcion pendiente',
      },
    ],
    nextSteps: [
      'Pendiente'
    ],
  }
]
