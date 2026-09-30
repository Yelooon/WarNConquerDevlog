import { cn } from '@/lib/utils'

const biomeFill = {
  prado: 'oklch(0.78 0.11 140)',
  bosque: 'oklch(0.55 0.09 152)',
  flor: 'oklch(0.9 0.1 95)',
  agua: 'oklch(0.84 0.06 225)',
  ceniza: 'oklch(0.7 0.1 45)',
  neutro: 'oklch(0.9 0.025 90)',
} as const
type Biome = keyof typeof biomeFill

type Island = {
  cx: number
  cy: number
  tiles: [q: number, r: number, biome: Biome][]
  delay: string
}

const R = 16

function hexPoints(x: number, y: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30)
    return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

function axialToPixel(q: number, r: number) {
  return { x: R * Math.sqrt(3) * (q + r / 2), y: R * 1.5 * r }
}

const islands: Island[] = [
  {
    cx: 150,
    cy: 150,
    delay: '0s',
    tiles: [
      [0, 0, 'bosque'], [1, 0, 'prado'], [-1, 0, 'prado'], [0, -1, 'flor'], [1, -1, 'prado'],
      [0, 1, 'prado'], [-1, 1, 'bosque'], [2, -1, 'agua'], [-1, -1, 'neutro'], [1, 1, 'flor'],
    ],
  },
  {
    cx: 330,
    cy: 110,
    delay: '-2s',
    tiles: [[0, 0, 'ceniza'], [1, 0, 'ceniza'], [0, -1, 'neutro'], [-1, 1, 'prado'], [0, 1, 'ceniza'], [1, -1, 'flor']],
  },
  {
    cx: 300,
    cy: 260,
    delay: '-4s',
    tiles: [[0, 0, 'prado'], [1, 0, 'bosque'], [-1, 0, 'agua'], [0, -1, 'prado'], [0, 1, 'flor'], [1, -1, 'bosque'], [-1, 1, 'prado']],
  },
  {
    cx: 110,
    cy: 290,
    delay: '-1s',
    tiles: [[0, 0, 'flor'], [1, 0, 'prado'], [0, -1, 'bosque'], [1, -1, 'neutro']],
  },
]

export function IslandMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 380"
      role="img"
      aria-label="Ilustración provisional de un archipiélago de islas flotantes divididas en casillas de biomas"
      className={cn('h-auto w-full', className)}
    >
      <g fill="oklch(0.99 0.01 100)" opacity="0.9">
        <rect x="30" y="40" width="90" height="22" rx="11" />
        <rect x="60" y="28" width="46" height="22" rx="11" />
        <rect x="320" y="310" width="96" height="22" rx="11" />
        <rect x="350" y="298" width="42" height="22" rx="11" />
      </g>

      {islands.map((island, i) => {
        const pts = island.tiles.map(([q, r, b]) => ({ ...axialToPixel(q, r), b }))
        const minX = Math.min(...pts.map((p) => p.x)) - R
        const maxX = Math.max(...pts.map((p) => p.x)) + R
        const maxY = Math.max(...pts.map((p) => p.y)) + R * 0.6
        const width = maxX - minX
        const mid = minX + width / 2
        return (
          <g key={i} className="float-soft" style={{ animationDelay: island.delay }}>
            <g transform={`translate(${island.cx} ${island.cy})`}>
              <path
                d={`M ${minX + 4} ${maxY - 6} Q ${mid} ${maxY + width * 0.75} ${maxX - 4} ${maxY - 6} Z`}
                fill="oklch(0.52 0.07 60)"
              />
              <path
                d={`M ${minX + 14} ${maxY} Q ${mid} ${maxY + width * 0.45} ${maxX - 14} ${maxY} Z`}
                fill="oklch(0.44 0.06 55)"
              />
              {pts.map((p, j) => (
                <polygon
                  key={j}
                  points={hexPoints(p.x, p.y, R - 1)}
                  fill={biomeFill[p.b]}
                  stroke="oklch(0.99 0.01 100)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              ))}
            </g>
          </g>
        )
      })}

      <g stroke="oklch(0.57 0.13 42)" strokeWidth="2" strokeDasharray="4 6" fill="none" strokeLinecap="round">
        <path d="M 190 140 Q 250 90 300 108" />
        <path d="M 170 190 Q 230 250 270 258" />
      </g>
    </svg>
  )
}
