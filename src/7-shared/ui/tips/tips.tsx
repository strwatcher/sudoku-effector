import React from 'react'
import s from './style.module.scss'

export type TipsProps = {
  tips: Array<number>
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
