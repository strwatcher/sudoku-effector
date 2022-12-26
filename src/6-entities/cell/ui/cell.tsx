import { ICell } from '@/6-entities/cell'
import { joinClasses } from '@/7-shared/lib/join-classes'

import React from 'react'
import s from './style.module.scss'

export type CellProps = ICell & {
  onClick?: () => void
}

export const Cell: React.FC<CellProps> = (props) => {
  const className = React.useMemo(
    () =>
      joinClasses(s.cell, props.active && s.active, props.marked && s.marked),
    [props.active, props.marked]
  )

  return (
    <div className={s.wrapper}>
      <button
        className={className}
        onClick={props.onClick}>
        {props.viewValue}
      </button>
    </div>
  )
}
