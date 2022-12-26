import React from 'react'
import { useEvent, useStore } from 'effector-react'
import { $theme, themeChanged } from '../model'
import { joinClasses } from '@/7-shared/lib/join-classes'
import s from './style.module.scss'

export const Theme = () => {
  const theme = useStore($theme)
  const setTheme = useEvent(themeChanged)

  return (
    <button
      className={joinClasses(s.theme, theme === 'light' ? s.dark : s.light)}
      onClick={setTheme}
    />
  )
}
