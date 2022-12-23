import { areaToLines } from '@/entities/field/types'
import { Game } from '@/pages/game'
import { field } from '@/shared/lib/generator/field'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

areaToLines(field)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
)
