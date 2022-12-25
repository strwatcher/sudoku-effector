import { Area } from '@/6-entities/area/ui'
import { GridTemplate } from '@/7-shared/ui/grid-template'
import React from 'react'
import { IField } from '../lib'
import s from './style.module.scss'

export type FieldProps = { areas: IField }

export const Field: React.FC<FieldProps> = (props) => {
  return (
    <GridTemplate
      items={props.areas}
      render={(area) => <Area {...area} />}
      ulClass={s.container}
    />
  )
}
