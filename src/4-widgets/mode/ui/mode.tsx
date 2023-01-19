import React from 'react'
import { useEvent, useStore } from 'effector-react'
import { $mode, modeChanged } from '../model'
import s from './style.module.scss'

export const Mode = () => {
  const mode = useStore($mode)
  const changeMode = useEvent(modeChanged)

  return (
    <button
      className={s.mode}
      onClick={changeMode}>
      {mode}
    </button>
  )
}
