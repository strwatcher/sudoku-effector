import React, { useCallback, useEffect } from 'react'
import { useStore } from 'effector-react'
import { $field } from '../model'
import { keyPressed } from '@/7-shared/lib/key-pressed-event'
import { Field } from '@/6-entities/field'

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
