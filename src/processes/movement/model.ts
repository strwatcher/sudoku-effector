import { ICell } from '@/entities/cell/types'
import { IField } from '@/entities/field/types'
import {
    IDirection,
    IDirectionKey,
    isIDirectionKey,
} from '@/entities/movement/types'
import { keyPressed } from '@/shared/base-logic/model'
import { FixedArray } from '@/shared/lib/fixed-array'
import { field } from '@/shared/lib/generator/field'
import { createEvent, createStore, sample } from 'effector'

const selectionMoved = createEvent<IDirection>()

const $baseField = createStore<IField>(field)
const $iterableField = $baseField.map((field) => fieldToIterable(field))
const $kvField = $baseField.map((field) => fieldToKv(field))
const $currentPos = createStore<number | null>(null)
const $currentCellId = createStore<string | null>(null)
const $currentCell = createStore<ICell | null>(null)

sample({
    clock: keyPressed,
    filter: (event) => isIDirectionKey(event.key),
    fn: (event) => {
        const key: IDirectionKey = event.key as IDirectionKey

        switch (key) {
        case 'l':
        case 'd':
        case 'ArrowRight':
            return 'right'
        case 'h':
        case 'a':
        case 'ArrowLeft':
            return 'left'
        case 'k':
        case 'w':
        case 'ArrowUp':
            return 'up'
        case 'j':
        case 's':
        case 'ArrowDown':
            return 'down'
        }
    },
    target: selectionMoved,
})

sample({
    clock: selectionMoved,
    source: [$currentPos, $iterableField] as const,
    fn: ([pos, field], direction) => {
        switch (direction) {
        case 'right':
            return pos !== null ? ((pos + 1) % 9) + pos - (pos % 9) : 0
        case 'left':
            return pos !== null ? ((pos - 1 + 9) % 9) + pos - (pos % 9) : 0
        case 'up':
            return pos !== null
                ? (field.length + pos - 9) % field.length
                : 0
        case 'down':
            return pos !== null
                ? (field.length + pos + 9) % field.length
                : 0
        }
    },
    target: $currentPos,
})

sample({
    clock: $currentPos,
    source: $iterableField,
    filter: (field, pos) => field !== null && pos !== null,
    fn: (field, pos) => field[pos!].id,
    target: $currentCellId,
})

sample({
    clock: $currentCellId,
    source: $kvField,
    fn: (field, id) => (id !== null ? field[id] : null),
    target: $currentCell,
})

sample({
    clock: $currentCell,
    source: $baseField,
    filter: (currentCell) => currentCell !== null,
    fn: (field, currentCell) =>
        ({
            areas: field.areas.map((area) => ({
                ...area,
                cells: area.cells.map((cell) =>
                    cell.id !== currentCell?.id
                        ? { ...cell, active: false }
                        : { ...cell, active: true }
                ),
            })),
        } as IField),
    target: $baseField,
})

export {
    keyPressed,
    selectionMoved,
    $baseField,
    $iterableField,
    $kvField,
    $currentCell,
    $currentCellId,
}

function fieldToIterable(field: IField) {
    const result: FixedArray<ICell, 81> = [] as unknown as FixedArray<ICell, 81>

    for (let areaRow = 0; areaRow < field.areas.length; areaRow += 3) {
        for (let column = 0; column < 3; column++) {
            for (let areaColumn = 0; areaColumn < 3; areaColumn++) {
                result.push(
                    ...field.areas[areaRow + areaColumn].cells.slice(
                        column * 3,
                        column * 3 + 3
                    )
                )
            }
        }
    }

    return result
}

function fieldToKv(field: IField) {
    const result = {} as { [key: string]: ICell }

    for (const area of field.areas) {
        for (const cell of area.cells) {
            result[cell.id] = { ...cell }
        }
    }

    return result
}
