export type ICellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null

export type ICell = {
  id: string
  areaId: string
  value: ICellValue
  viewValue: ICellValue
  active: boolean
  marked: boolean
  tips?: Array<ICellValue>
}

export function isICellValue(n: number | null): n is ICellValue {
  return (
    n === 1 ||
    n === 2 ||
    n === 3 ||
    n === 4 ||
    n === 5 ||
    n === 6 ||
    n === 7 ||
    n === 8 ||
    n === 9 ||
    n === null
  )
}
