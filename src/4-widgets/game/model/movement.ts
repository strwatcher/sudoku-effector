import { keyPressed } from '@/7-shared/lib/key-pressed-event'
import { createEvent, createStore, sample, Store } from 'effector'
import {
  IDirection,
  IDirectionKey,
  IPosition,
  isIDirectionKey,
  move,
} from '../lib'
import { IField } from '@/6-entities/field'
import { ICell } from '@/7-shared/ui'

export const setupMovement = ($field: Store<IField>) => {
  const selectionMoved = createEvent<IDirection>()

  const selectedWithMouse = createEvent<ICell>()

  const $currentPosition = createStore<IPosition | null>(null)

  sample({
    clock: keyPressed,
    filter: (event) => isIDirectionKey(event.key),
    fn: (event) => {
      event.preventDefault()
      event.stopPropagation()

      const key: IDirectionKey = event.key as IDirectionKey
      let result: IDirection | null = null

      if (['l', 'd', 'ArrowRight'].includes(key)) {
        result = 'right'
      }
      if (['h', 'a', 'ArrowLeft'].includes(key)) {
        result = 'left'
      }
      if (['k', 'w', 'ArrowUp'].includes(key)) {
        result = 'up'
      }
      if (['j', 's', 'ArrowDown'].includes(key)) {
        result = 'down'
      }

      return result as IDirection
    },
    target: selectionMoved,
  })

  sample({
    clock: selectedWithMouse,
    source: $field,
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

      if (['right', 'left'].includes(direction)) {
        axis = 'x'
      } else {
        axis = 'y'
      }

      if (['down', 'right'].includes(direction)) {
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

  return { $currentPosition, selectedWithMouse }
}
