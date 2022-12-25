export type ICellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type ICell = {
  id: string
  areaId: string
  value: ICellValue
  viewValue?: ICellValue
  active: boolean
}
