import { joinClasses } from '@/7-shared/lib/join-classes'

import React from 'react'
import { Tips } from '../tips'
import s from './style.module.scss'

export type ICellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null

export type ICell = {
  id: string
  areaId: string
  value: ICellValue
  viewValue: ICellValue
  active: boolean
  marked: boolean
  tips?: Array<ICellValue>
}

export function isICellValue(n: number | null): n is ICellValue {
  return (
    n === 1 ||
    n === 2 ||
    n === 3 ||
    n === 4 ||
    n === 5 ||
    n === 6 ||
    n === 7 ||
    n === 8 ||
    n === 9 ||
    n === null
  )
}

export type CellProps = ICell & {
  onClick?: () => void
}

export const Cell = (props: CellProps) => {
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
        {props.viewValue || <Tips tips={(props.tips as number[]) ?? []} />}
      </button>
    </div>
  )
}
