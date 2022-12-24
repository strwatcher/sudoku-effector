import { IField } from '@/entities/field'
import React from 'react'
import { Area } from '../area'
import { GridTemplate } from '../grid-template'
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
