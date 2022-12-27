import React from 'react'
import { ICellValue } from '../../lib'
import s from './style.module.scss'

export type TipsProps = {
  tips: Array<ICellValue>
}

export const Tips: React.FC<TipsProps> = (props) => {
  return (
    <ul className={s.tips}>
      {props.tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>
  )
}
