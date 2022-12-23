export type IDirectionKey =
  | 'l'
  | 'd'
  | 'ArrowRight'
  | 'h'
  | 'a'
  | 'ArrowLeft'
  | 'j'
  | 'w'
  | 'ArrowUp'
  | 'k'
  | 's'
  | 'ArrowDown'

export type IDirection = 'up' | 'down' | 'right' | 'left'

export function isIDirectionKey(s: string): s is IDirectionKey {
  return (
    s === 'l' ||
    s === 'd' ||
    s === 'ArrowRight' ||
    s === 'h' ||
    s === 'a' ||
    s === 'ArrowLeft' ||
    s === 'j' ||
    s === 'w' ||
    s === 'ArrowUp' ||
    s === 'k' ||
    s === 's' ||
    s === 'ArrowDown'
  )
}

export function isIDirection(s: string): s is IDirection {
  return s === 'up' || s === 'down' || s === 'right' || s === 'left'
}
