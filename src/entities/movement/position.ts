export type IPosition = { x: number; y: number }

export function move(
  position: IPosition,
  vector: 1 | -1,
  axis: keyof IPosition,
  loop: number
) {
  return { ...position, [axis]: (position[axis] + vector + loop) % loop }
}
