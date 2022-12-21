import { createEvent, createStore, sample } from 'effector'

const buttonClicked = createEvent()
const $count = createStore(0)

sample({
    clock: buttonClicked,
    source: $count,
    fn: (count) => count + 1,
    target: $count,
})

export { $count, buttonClicked }
