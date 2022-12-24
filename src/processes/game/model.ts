import { IArea } from '@/entities/area'
import { ICell } from '@/entities/cell'
import { IField } from '@/entities/field'
import { field } from '@/shared/lib/generator/field'
import { createStore, sample } from 'effector'
import { setupMovement } from '../movement/model'

const $field = createStore<IField>(field)
const $currentCell = createStore<ICell | null>(null)
const movement = setupMovement($field, $currentCell)

sample({
  clock: $currentCell,
  source: $field,
  filter: (_, cell) => cell !== null,

  fn: (oldField, currentCell) =>
    oldField.map((area: IArea) => ({
      id: area.id,
      cells: area.cells.map((cell) =>
        cell.id === (currentCell as ICell).id
          ? { ...cell, active: true }
          : { ...cell, active: false }
      ),
    })) as IField,

  target: $field,
})

export { $field, $currentCell, movement }
