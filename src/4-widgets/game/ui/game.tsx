import React, { useCallback, useEffect } from 'react'
import { useStore } from 'effector-react'
import { $renderField, selectedWithMouse } from '../model'
import { keyPressed } from '@/7-shared/lib/key-pressed-event'
import { Field } from '@/6-entities/field'
import { ICell } from '@/6-entities/cell'

export const Game: React.FC = () => {
  const field = useStore($renderField)
  const onMove = useCallback((e: KeyboardEvent) => {
    keyPressed(e)
  }, [])
  const selectCell = useCallback((cell: ICell) => {
    selectedWithMouse(cell)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onMove)
    return () => document.removeEventListener('keydown', onMove)
  }, [onMove])

  return (
    <Field
      areas={field}
      onCellClick={selectCell}
    />
  )
}
