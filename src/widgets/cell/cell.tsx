import { ICell } from '@/entities/cell/types'
import { joinClasses } from '@/shared/lib/join-classes'

import React from 'react'
import s from './style.module.scss'

export type CellProps = ICell & {
    onClick?: () => void
}

export const Cell: React.FC<CellProps> = (props) => {
    console.log(joinClasses(s.cell))
    const className = React.useMemo(
        () => joinClasses(s.cell, props.active && s.active),
        [props.active]
    )

    return (
        <div className={s.wrapper}>
            <button className={className} onClick={props.onClick}>
                {props.value}
            </button>
        </div>
    )
}
