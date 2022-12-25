import { IPosition } from '@/7-shared/lib/types/position'

export function move(
  position: IPosition,
  vector: 1 | -1,
  axis: keyof IPosition,
  loop: number
) {
  return { ...position, [axis]: (position[axis] + vector + loop) % loop }
}
