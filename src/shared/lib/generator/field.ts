import { IArea } from '@/entities/area/types'
import { IField } from '@/entities/field/types'
import { v4 } from 'uuid'

const genArea: (areaId: string) => IArea = (areaId) => ({
    cells: [
        { id: v4(), value: 1, viewValue: 1, active: false, areaId },
        { id: v4(), value: 2, viewValue: 2, active: false, areaId },
        { id: v4(), value: 3, viewValue: 3, active: false, areaId },
        { id: v4(), value: 4, viewValue: 4, active: false, areaId },
        { id: v4(), value: 5, active: false, areaId },
        { id: v4(), value: 6, viewValue: 6, active: false, areaId },
        { id: v4(), value: 7, viewValue: 7, active: false, areaId },
        { id: v4(), value: 8, viewValue: 8, active: false, areaId },
        { id: v4(), value: 9, viewValue: 9, active: false, areaId },
    ],
    id: areaId,
})

export const field: IField = {
    areas: [
        genArea('1'),
        genArea('2'),
        genArea('3'),
        genArea('4'),
        genArea('5'),
        genArea('6'),
        genArea('7'),
        genArea('8'),
        genArea('9'),
    ],
}
