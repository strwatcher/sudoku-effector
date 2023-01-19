import { FixedArray } from '@/7-shared/lib/fixed-array'
import { Cell, GridTemplate3x3, ICell } from '@/7-shared/ui'
import React from 'react'
import s from './style.module.scss'

export type IArea = {
  cells: FixedArray<ICell, 9>
  id: string
}

export type AreaProps = IArea & { onCellClick: (cell: ICell) => void }

export const Area: React.FC<AreaProps> = (props) => {
  return (
    <GridTemplate3x3
      items={props.cells}
      render={(cell) => (
        <Cell
          onClick={() => props.onCellClick({ ...cell })}
          {...cell}
        />
      )}
      ulClass={s.container}
    />
  )
}
