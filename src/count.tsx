import React from 'react'
import { useStore } from 'effector-react'
import { $count, buttonClicked } from './model'
export function Count() {
    const count = useStore($count)
    const onClick = () => buttonClicked()

    return <button onClick={onClick}>Нажми: {count}</button>
}
