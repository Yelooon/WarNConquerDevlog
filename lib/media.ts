export type MediaType = 'screenshot' | 'video' | 'gif' | 'concept' | 'diagram' | 'gameplay' | 'teaser'

export const mediaTypeLabel: Record<MediaType, string> = {
  screenshot: 'Screenshot',
  video: 'Video',
  gif: 'GIF',
  concept: 'Concept Art',
  diagram: 'Diagrama',
  gameplay: 'Gameplay',
  teaser: 'Teaser',
}

export function isVideoSource(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src)
}
