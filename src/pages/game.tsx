import React, { useCallback, useEffect } from 'react'
import { $baseField, selectionMoved } from '@/processes/movement/model'
import { Field } from '@/widgets/field'
import { useStore } from 'effector-react'

export const Game: React.FC = () => {
    const fieldData = useStore($baseField)
    const onMove = useCallback(() => {
        selectionMoved('right')
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', onMove)
        return () => document.removeEventListener('keydown', onMove)
    }, [onMove])

    return <Field areas={fieldData.areas} />
}
