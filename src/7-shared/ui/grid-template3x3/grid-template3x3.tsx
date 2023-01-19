import { FixedArray } from '@/7-shared/lib/fixed-array'
import { joinClasses } from '@/7-shared/lib/join-classes'
import { WithId } from '@/7-shared/lib/types/with-id'
import React from 'react'
import s from './style.module.scss'

export type GridTemplate3x3Props<T extends WithId> = {
  items: FixedArray<T, 9>
  render: (props: T) => React.ReactNode
  ulClass?: string
  liClass?: string
}

export const GridTemplate3x3: <T extends WithId>(
  props: GridTemplate3x3Props<T>
) => JSX.Element = (props) => {
  console.log(props.items)
  const { containerClass, itemClass } = React.useMemo(
    () => ({
      containerClass: joinClasses(s.container, props.ulClass),
      itemClass: joinClasses(s.item, props.liClass),
    }),
    [props.ulClass, props.liClass]
  )
  props.items
  return (
    <ul className={containerClass}>
      {props.items.map((item) => (
        <li
          key={item.id}
          className={itemClass}>
          {props.render(item)}
        </li>
      ))}
    </ul>
  )
}
