import { createEffect, createEvent, createStore, sample } from 'effector'

export type ITheme = 'dark' | 'light'

const themeChanged = createEvent()
const $theme = createStore<ITheme>('light')

const setThemeFx = createEffect<ITheme, void>()
setThemeFx.use((theme: ITheme) => {
  if (theme === 'light') {
    document.body.classList.remove('dark')
  } else {
    document.body.classList.add('dark')
  }
})

sample({
  clock: themeChanged,
  source: $theme,
  fn: (theme) => (theme === 'dark' ? 'light' : 'dark'),
  target: $theme,
})

sample({
  clock: $theme,
  target: setThemeFx,
})

export { themeChanged, $theme }
