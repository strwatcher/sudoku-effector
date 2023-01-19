import { createEvent, createStore, sample } from 'effector'

const modeChanged = createEvent()

const $mode = createStore<'default' | 'edit'>('default')
const $isEdit = $mode.map((mode) => mode === 'edit')

sample({
  clock: modeChanged,
  source: $mode,
  fn: (mode) => (mode === 'edit' ? 'default' : 'edit'),
  target: $mode,
})

export { $mode, $isEdit, modeChanged }
