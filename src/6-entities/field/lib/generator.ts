import { IArea } from '@/6-entities/area/ui/area'
import { IField } from '@/6-entities/field'
import { ICell } from '@/7-shared/ui'
import { ICellValue } from '@/7-shared/ui/cell'

const genCell: (args: {
  areaId: string
  value: ICellValue
  viewValue: ICellValue
}) => ICell = (args) => ({
  id: crypto.randomUUID(),
  ...args,
  active: false,
  marked: false,
})

const genArea: (areaId: string) => IArea = (areaId) => ({
  cells: [
    genCell({ areaId, value: 1, viewValue: 1 }),
    genCell({ areaId, value: 2, viewValue: 2 }),
    genCell({ areaId, value: 3, viewValue: 3 }),
    genCell({ areaId, value: 4, viewValue: 4 }),
    {
      ...genCell({ areaId, value: 5, viewValue: null }),
      tips: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    genCell({ areaId, value: 5, viewValue: 5 }),
    genCell({ areaId, value: 6, viewValue: 6 }),
    genCell({ areaId, value: 7, viewValue: 7 }),
    genCell({ areaId, value: 8, viewValue: 8 }),
  ],
  id: areaId,
})

export const field: IField = [
  genArea('1'),
  genArea('2'),
  genArea('3'),
  genArea('4'),
  genArea('5'),
  genArea('6'),
  genArea('7'),
  genArea('8'),
  genArea('9'),
]
