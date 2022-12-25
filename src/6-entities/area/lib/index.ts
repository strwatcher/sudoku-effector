import { ICell } from '@/6-entities/cell'
import { FixedArray } from '@/7-shared/lib/fixed-array'

export type IArea = {
  cells: FixedArray<ICell, 9>
  id: string
}
