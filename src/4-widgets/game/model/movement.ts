import { ICell } from '@/6-entities/cell'
import { areaToLines, IField } from '@/6-entities/field'
import { keyPressed } from '@/7-shared/lib/key-pressed-event'
import { createEvent, createStore, sample, Store } from 'effector'
import {
  IDirection,
  IDirectionKey,
  IPosition,
  isIDirectionKey,
  move,
} from '../lib'

export const setupMovement = ($field: Store<IField>) => {
  const selectionMoved = createEvent<IDirection>()

  const selectedWithMouse = createEvent<ICell>()
  const positionChanged = createEvent<ICell>()

  const $movementField = $field.map((field) => areaToLines(field))
  const $currentPosition = createStore<IPosition | null>(null)

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
    clock: selectedWithMouse,
    source: $movementField,
    fn: (field, cell) => {
      for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].cells.length; j++) {
          if (field[i].cells[j].id === cell.id) return { x: j, y: i }
        }
      }
      return { x: 0, y: 0 }
    },
    target: $currentPosition,
  })

  sample({
    clock: selectionMoved,
    source: $currentPosition,
    fn: (position, direction) => {
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

      return position !== null
        ? move(position, vector, axis, 9)
        : { x: 0, y: 0 }
    },
    target: $currentPosition,
  })

  sample({
    clock: $currentPosition,
    source: $movementField,
    filter: (_, position) => position !== null,
    fn: (field, position) =>
      field[(position as IPosition).y].cells[(position as IPosition).x],
    target: positionChanged,
  })

  return { positionChanged, selectedWithMouse }
}
