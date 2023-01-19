import { IField, areaToLines, field } from '@/6-entities/field'
import { createEvent, createStore, sample } from 'effector'
import { debug } from 'patronum'
import { keyPressed } from '@/7-shared/lib/key-pressed-event'
import { setupMovement } from './movement'
import { fieldToList } from '@/6-entities/field/lib'
import { ICell, ICellValue, isICellValue } from '@/7-shared/ui/cell'

const valueChanged = createEvent<ICellValue>()

const $field = createStore<IField>(field)
const $renderField = $field.map((field) => areaToLines(field))
const $currentCell = createStore<ICell | null>(null)

const $isWon = $field.map(
  (field) => !fieldToList(field).find((cell) => cell.value !== cell.viewValue)
)

const { $currentPosition, selectedWithMouse } = setupMovement($field)

sample({
  clock: $currentPosition,
  source: $field,

  fn: (field, position) => {
    if (!position) return null
    return field[position.y].cells[position.x]
  },
  target: $currentCell,
})

sample({
  clock: $currentCell,
  source: [$field, $currentPosition] as const,
  filter: (_, cell) => cell !== null,

  fn: ([oldField, position], currentCell) => {
    return oldField.map((area, y) => ({
      id: area.id,
      cells: area.cells.map((cell, x) => {
        const marked = x === position?.x || y === position?.y
        return cell.id === (currentCell as ICell).id
          ? { ...currentCell, active: true, marked: false }
          : { ...cell, active: false, marked }
      }),
    })) as IField
  },

  target: $field,
})

sample({
  clock: keyPressed,
  source: $currentCell,
  filter: (cell, event) =>
    isICellValue(Number.parseInt(event.key)) && cell !== null,
  fn: (_, event) => Number.parseInt(event.key) as ICellValue,
  target: valueChanged,
})

sample({
  clock: keyPressed,
  filter: (event) => ['Backspace', 'Delete', 'x'].includes(event.key),
  fn: () => null as ICellValue,
  target: valueChanged,
})

sample({
  clock: valueChanged,
  source: $currentCell,
  fn: (cell, value) => ({ ...cell, viewValue: value } as ICell),
  target: $currentCell,
})

debug({
  // field: $field,
  // currentCell: $currentCell,
  // keyPressed: keyPressed,
  // valueChanged: valueChanged,
  // position: $currentPosition,
  // won: $isWon,
})

export { $field, $renderField, $currentCell, selectedWithMouse, $isWon }
