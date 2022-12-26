import { Game } from '@/4-widgets/game'
import { Theme } from '@/4-widgets/theme'
import React from 'react'
import s from './style.module.scss'

export const Main = () => {
  return (
    <div className={s.main}>
      <Game />
      <Theme />
    </div>
  )
}
