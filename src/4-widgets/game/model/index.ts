import { ICell } from '@/6-entities/cell'
import { IField } from '@/6-entities/field'
import { field } from '@/7-shared/lib/generator/field'
import { createStore, sample } from 'effector'
import { setupMovement } from './movement'
import { debug } from 'patronum'

const $field = createStore<IField>(field)
const $currentCell = createStore<ICell | null>(null)
const movement = setupMovement($field, $currentCell)

sample({
  clock: $currentCell,
  source: $field,
  filter: (_, cell) => cell !== null,

  fn: (oldField, currentCell) =>
    oldField.map((area) => ({
      id: area.id,
      cells: area.cells.map((cell) =>
        cell.id === (currentCell as ICell).id
          ? { ...cell, active: true }
          : { ...cell, active: false }
      ),
    })) as IField,

  target: $field,
})

debug({
  field: $field,
  currentCell: $currentCell,
  position: movement.$currentPos,
  movementField: movement.$movementField,
  selectionMoved: movement.selectionMoved,
})

export { $field, $currentCell, movement }
