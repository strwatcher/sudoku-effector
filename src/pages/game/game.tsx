import React, { useCallback, useEffect } from 'react'
import { $field, keyPressed } from '@/processes/movement/model'
import { Field } from '@/widgets/field'
import { useStore } from 'effector-react'

export const Game: React.FC = () => {
  const field = useStore($field)
  const onMove = useCallback((e: KeyboardEvent) => {
    keyPressed(e)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onMove)
    return () => document.removeEventListener('keydown', onMove)
  }, [onMove])

  return <Field areas={field} />
}
