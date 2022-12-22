import { FixedArray } from '@/shared/lib/fixed-array'
import { ICell } from '../cell/types'

export type IArea = {
    cells: FixedArray<ICell, 9>
    id: string
}
