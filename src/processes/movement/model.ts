import { ICell } from '@/entities/cell/types'
import { areaToLines, IField } from '@/entities/field/types'
import {
  IDirection,
  IDirectionKey,
  isIDirectionKey,
} from '@/entities/movement/direction'
import { IPosition, move } from '@/entities/movement/position'
import { keyPressed } from '@/shared/base-logic/model'
import { field } from '@/shared/lib/generator/field'
import { createEvent, createStore, sample } from 'effector'

const selectionMoved = createEvent<IDirection>()

const $field = createStore<IField>(field)
const $movementField = $field.map((field) => areaToLines(field))

const $currentPos = createStore<IPosition | null>(null)
const $currentCell = createStore<ICell | null>(null)

sample({
  clock: keyPressed,
  filter: (event) => isIDirectionKey(event.key),
  fn: (event) => {
    event.preventDefault()
    event.stopPropagation()

    const key: IDirectionKey = event.key as IDirectionKey
    let result: IDirection | null = null

    if (['l', 'd', 'ArrowRight'].find((k) => key === k)) {
      result = 'right'
    }
    if (['h', 'a', 'ArrowLeft'].find((k) => key === k)) {
      result = 'left'
    }
    if (['k', 'w', 'ArrowUp'].find((k) => key === k)) {
      result = 'up'
    }
    if (['j', 's', 'ArrowDown'].find((k) => key === k)) {
      result = 'down'
    }

    return result as IDirection
  },
  target: selectionMoved,
})

sample({
  clock: selectionMoved,
  source: $currentPos,
  fn: (pos, direction) => {
    let axis: keyof IPosition
    let vector: 1 | -1

    if (['right', 'left'].find((d) => direction === d)) {
      axis = 'x'
    } else {
      axis = 'y'
    }

    if (['down', 'right'].find((d) => direction === d)) {
      vector = 1
    } else {
      vector = -1
    }

    return pos !== null ? move(pos, vector, axis, 9) : { x: 0, y: 0 }
  },
  target: $currentPos,
})

sample({
  clock: $currentPos,
  source: $movementField,
  filter: (_, pos) => pos !== null,
  fn: (field, pos) => field[(pos as IPosition).y].cells[(pos as IPosition).x],
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
          ? { ...cell, active: true }
          : { ...cell, active: false }
      ),
    })) as IField,
  target: $field,
})

export { keyPressed, selectionMoved, $field, $currentCell }
