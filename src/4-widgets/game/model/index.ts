import { ICell, ICellValue, isICellValue } from '@/6-entities/cell'
import { IField } from '@/6-entities/field'
import { field } from '@/7-shared/lib/generator/field'
import { createEvent, createStore, sample } from 'effector'
import { setupMovement } from './movement'
import { debug } from 'patronum'
import { keyPressed } from '@/7-shared/lib/key-pressed-event'

const valueChanged = createEvent<ICellValue | null>()
const $field = createStore<IField>(field)
const $currentCell = createStore<ICell | null>(null)
const { positionChanged, selectedWithMouse } = setupMovement($field)

sample({
  clock: positionChanged,
  target: $currentCell,
})

sample({
  clock: $currentCell,
  source: $field,
  filter: (_, cell) => cell !== null,

  fn: (oldField, currentCell) =>
    oldField.map((area) => ({
      id: area.id,
      cells: area.cells.map((cell) =>
        cell.id === (currentCell as ICell).id
          ? { ...currentCell, active: true }
          : { ...cell, active: false }
      ),
    })) as IField,

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
  clock: valueChanged,
  source: $currentCell,
  fn: (cell, value) => ({ ...cell, viewValue: value } as ICell),
  target: $currentCell,
})

debug({
  field: $field,
  currentCell: $currentCell,
  positionChanged: selectedWithKeyboard,
  keyPressed: keyPressed,
  valueChanged: valueChanged,
})

export { selectedWithMouse, $field, $currentCell }
