import { Area } from '@/6-entities/area/ui'
import { GridTemplate3x3, ICell } from '@/7-shared/ui'
import React from 'react'
import { IField } from '../lib'
import s from './style.module.scss'

export type FieldProps = { areas: IField; onCellClick: (cell: ICell) => void }

export const Field: React.FC<FieldProps> = (props) => {
  return (
    <GridTemplate3x3
      items={props.areas}
      render={(area) => (
        <Area
          {...area}
          onCellClick={props.onCellClick}
        />
      )}
      ulClass={s.container}
    />
  )
}
