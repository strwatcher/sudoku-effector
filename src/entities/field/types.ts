import { FixedArray } from '@/shared/lib/fixed-array'
import { IArea } from '../area/types'

export type IField = {
    areas: FixedArray<IArea, 9>
}
