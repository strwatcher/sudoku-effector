import { $isWon, Game } from '@/4-widgets/game'
import { Theme } from '@/4-widgets/theme'
import { useStore } from 'effector-react'
import React from 'react'
import s from './style.module.scss'

export const Main = () => {
  const isWon = useStore($isWon)

  return (
    <div className={s.main}>
      <span>{isWon && 'Победа'}</span>
      <Game />
      <Theme />
    </div>
  )
}
