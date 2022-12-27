import { IArea } from '@/6-entities/area'
import { ICell } from '@/6-entities/cell'
import { FixedArray } from '@/7-shared/lib/fixed-array'

export type IField = FixedArray<IArea, 9>

export function areaToLines(field: IField): IField {
  const result = [] as unknown as IField
  for (let row = 0; row < 9; row += 3) {
    for (let lineRow = 0; lineRow < 3; lineRow++) {
      const area = { id: `${row + lineRow}`, cells: [] } as unknown as IArea
      for (let column = 0; column < 3; column++) {
        const line = field[row + column].cells.slice(
          lineRow * 3,
          (lineRow + 1) * 3
        )
        area.cells.push(...line)
      }
      result.push(area)
    }
  }
  return result
}

export function fieldToList(field: IField): FixedArray<ICell, 81> {
  const result = [] as unknown as FixedArray<ICell, 81>

  field.forEach((area) =>
    area.cells.forEach((cell) => result.push({ ...cell }))
  )

  return result
}
