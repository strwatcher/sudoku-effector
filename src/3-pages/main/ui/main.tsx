import React from 'react'

import { $isWon, Game } from '@/4-widgets/game'
import { Mode } from '@/4-widgets/mode/ui/mode'
import { Theme } from '@/4-widgets/theme'
import { useStore } from 'effector-react'
import s from './style.module.scss'

export const Main = () => {
  const isWon = useStore($isWon)

  return (
    <div className={s.main}>
      <span>{isWon && 'Победа'}</span>
      <Game />
      <div className={s.toolbar}>
        <Theme />
        <Mode />
      </div>
    </div>
  )
}
