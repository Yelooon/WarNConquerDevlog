import type { MediaType } from '@/lib/media'

export const site = {
  name: 'War & Conquer',
  tagline: 'Estrategia táctica · Control territorial · 1–4 jugadores',
  pitch: 'Un juego de estrategia donde el territorio no es solo el escenario: es parte de la batalla.',
  about:
    'War & Conquer es un juego de estrategia táctica de 1 a 4 jugadores donde cada participante controla un Líder de una raza fantástica y disputa un tablero de biomas vivos. La energía, las cartas y el territorio se combinan para crear rutas, desplegar unidades, construir estructuras y transformar el campo de batalla.',
}

export const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/concepto', label: 'Concepto' },
  { href: '/galeria', label: 'Galería' },
  { href: '/bitacora', label: 'Bitácora' },
  { href: '/demo', label: 'Demo' },
  { href: '/teaser', label: 'Teaser' },
] as const

/** Datos técnicos. Usa `null` para mostrar "Por definir" hasta que el equipo confirme el dato. */
export const gameInfo: { label: string; value: string | null; icon: 'genre' | 'players' | 'platform' | 'engine' }[] = [
  { label: 'Género', value: 'Estrategia táctica · Control territorial · Construcción de mazos', icon: 'genre' },
  { label: 'Jugadores', value: '1–4', icon: 'players' },
  { label: 'Plataforma', value: null, icon: 'platform' },
  { label: 'Motor', value: null, icon: 'engine' },
]

export type CoreLoopIcon = 'energy' | 'draw' | 'terraform' | 'cards' | 'combat' | 'ash' | 'control'

export const coreLoop: { title: string; description: string; icon: CoreLoopIcon }[] = [
  { title: 'Generar energía', description: 'Obtén la energía que financia las acciones del turno.', icon: 'energy' },
  { title: 'Robar y planear', description: 'Roba cartas y decide la estrategia del turno.', icon: 'draw' },
  { title: 'Terraformar / destruir', description: 'Transforma casillas y biomas del mapa.', icon: 'terraform' },
  { title: 'Jugar cartas', description: 'Invoca Unidades, construye Estructuras o lanza Magias.', icon: 'cards' },
  { title: 'Mover / combatir', description: 'Desplaza tus Unidades y enfrenta a los rivales.', icon: 'combat' },
  { title: 'Purgar / activar ceniza', description: 'Resuelve la purga y los efectos de la Tierra Ceniza.', icon: 'ash' },
  { title: 'Controlar', description: 'Consolida el territorio antes de repetir el ciclo.', icon: 'control' },
]

export const genreTags = ['Estrategia táctica', 'Control territorial', 'Card game', 'Fantasy', '1–4 jugadores']

export type SystemIcon =
  | 'energy'
  | 'units'
  | 'structures'
  | 'magic'
  | 'terraform'
  | 'routes'
  | 'ash'
  | 'latent'
  | 'purge'
  | 'collapse'

/** `pending: true` marca los sistemas cuyo detalle todavía no está documentado. */
export const systems: { name: string; summary: string; icon: SystemIcon; tone: Tone; pending?: boolean }[] = [
  { name: 'Energía', summary: 'Recurso que se genera cada turno y se administra junto con las cartas.', icon: 'energy', tone: 'sun' },
  { name: 'Unidades', summary: 'Se invocan al tablero para moverse y combatir.', icon: 'units', tone: 'leaf' },
  { name: 'Estructuras', summary: 'Se construyen sobre el territorio del mapa.', icon: 'structures', tone: 'earth' },
  { name: 'Magias', summary: 'Cartas de efecto que se lanzan durante el turno.', icon: 'magic', tone: 'sky' },
  { name: 'Terraformación', summary: 'Transforma casillas y biomas, alterando rutas y decisiones.', icon: 'terraform', tone: 'leaf' },
  { name: 'Vías Rápidas', summary: 'Rutas del tablero.', icon: 'routes', tone: 'sky', pending: true },
  { name: 'Yermo / Tierra Ceniza', summary: 'Terrenos especiales del archipiélago.', icon: 'ash', tone: 'terracotta', pending: true },
  { name: 'Cartas Latentes', summary: 'Tipo especial de carta.', icon: 'latent', tone: 'sun', pending: true },
  { name: 'Purgar', summary: 'Etapa del turno junto a la activación de ceniza.', icon: 'purge', tone: 'terracotta', pending: true },
  { name: 'Colapso', summary: 'Mecánica del tablero.', icon: 'collapse', tone: 'earth', pending: true },
]

export type Tone = 'leaf' | 'sun' | 'sky' | 'terracotta' | 'earth'

export type Leader = {
  name: string
  title: string
  focus: string
  tone: Tone
  status: 'prototipo' | 'en-desarrollo'
  image?: string
}

export const leaders: Leader[] = [
  { 
    name: 'Zukgrok', 
    title: 'Líder Hongo', 
    focus: 'Expansión y sinergias acumulativas.', 
    tone: 'leaf', 
    status: 'prototipo',
    image: '/leaders/ZUKGROK-W_C.png'
   },
  { 
    name: 'Xil’thar', 
    title: 'Vasto del Vacío', 
    focus: 'Control, reposicionamiento y sabotaje.', 
    tone: 'sky', 
    status: 'en-desarrollo',
    image: '/leaders/XILTHAR-W_C.png'
  },
  { 
    name: 'Faunar', 
    title: 'Druida del Alba', 
    focus: 'Movilidad, enjambres animales y defensa natural.', 
    tone: 'sun', 
    status: 'prototipo',
    image: '/leaders/FAUNAR-W_C.png'
  },
  { 
    name: 'Sahria', 
    title: 'Reina del Desierto', 
    focus: 'Control territorial y juego avanzado con Tierra Ceniza.', 
    tone: 'terracotta', 
    status: 'prototipo',
    image: '/leaders/SAHRIA-W_C.png'
  },
]

/** Reemplaza `name`, `role` y agrega `avatar` (ruta en /public) cuando el equipo proporcione los datos. */
export const team: { name: string; role: string | null; avatar?: string }[] = [
  { 
    name: 'Sergio Herrera', 
    role: 'developer',
    avatar:'/team/SERGIOFOTO.jpeg'
  },
  { 
    name: 'Diego Rodriguez', 
    role: 'Developer', 
    avatar: '/team/drm.jpeg'
  },
  { 
    name: 'Andres Valencia', 
    role: 'UI Designer',
    avatar: '/team/ANDRESFOTO.png'
  },
  { 
    name: 'David Mena', 
    role: '3D Designer',
    avatar: '/team/davidmenafoto.png'
  },
  { 
    name: 'Integrante 05', 
    role: null 
  },
]

export const galleryCategories = ['Graybox', 'Gameplay', 'UI', 'Arte', 'Mapas', 'Desarrollo'] as const
export type GalleryCategory = (typeof galleryCategories)[number]

export type GalleryItem = {
  id: string
  category: GalleryCategory
  type: MediaType
  label: string
  caption: string
  /** Ruta al archivo real en /public. Mientras no exista se muestra el placeholder. */
  src?: string
}

export const galleryItems: GalleryItem[] = [
  { 
    id: 'g-01', 
    category: 'Graybox', 
    type: 'screenshot', 
    label: 'Screenshot del graybox', 
    caption: 'Graybox v0.1 — vista general', 
    src: 'devlog/v0-1/WarNConquer 1st Iteration.png'
  },
  { 
    id: 'g-02', 
    category: 'Graybox', 
    type: 'screenshot', 
    label: 'Tablero hexagonal', 
    caption: 'Graybox v0.1 — estructura del tablero', 
    src: 'devlog/v0-1/WarNConquer 1st Map.png'
  },
  { id: 'g-03', 
    category: 'Gameplay', 
    type: 'video', 
    label: 'Video de gameplay', 
    caption: 'Prueba de combate y gestión de cartas' 
  
  },
  { 
    id: 'g-04', 
    category: 'Graybox', 
    type: 'screenshot', 
    label: 'Mapa terraformado', 
    caption: 'Primera implementación de terraformación', 
    src: 'devlog/v0-1/WarNConquer 1st Terraformed.png'
  },
  { 
    id: 'g-05', 
    category: 'UI', 
    type: 'screenshot', 
    label: 'Interfaz de juego', 
    caption: 'UI del graybox', 
    src: 'devlog/v0-1/WarNConquer 1st UI.png'
  },
  { 
    id: 'g-06', 
    category: 'Arte', 
    type: 'concept', 
    label: 'Concept art', 
    caption: 'Concept art — por agregar' 
  },
  { 
    id: 'g-07', 
    category: 'Arte', 
    type: 'concept', 
    label: 'Líderes', 
    caption: 'Exploración de Líderes — por agregar' 
  },
  { 
    id: 'g-08', 
    category: 'Mapas', 
    type: 'diagram', 
    label: 'Mapa del archipiélago', 
    caption: 'Mapa de islas y biomas — por agregar' 
  },
  { 
    id: 'g-09', 
    category: 'Desarrollo', 
    type: 'diagram', 
    label: 'Diagrama del Core Loop', 
    caption: 'Diagrama del Core Loop' 
  },
]
