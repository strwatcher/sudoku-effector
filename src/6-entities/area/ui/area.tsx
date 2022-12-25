import { IArea } from '@/6-entities/area'
import { Cell } from '@/6-entities/cell'
import { GridTemplate } from '@/7-shared/ui/grid-template'
import React from 'react'
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
