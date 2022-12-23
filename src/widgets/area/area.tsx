import { IArea } from '@/entities/area/types'
import React from 'react'
import { Cell } from '../cell'
import { GridTemplate } from '../grid-template'
import s from './style.module.scss'

export type AreaProps = IArea

export const Area: React.FC<AreaProps> = (props) => {
  return (
    <GridTemplate
      items={props.cells}
      render={(cell) => <Cell {...cell} />}
      ulClass={s.container}
    />
  )
}
