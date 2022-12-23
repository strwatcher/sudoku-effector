import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Game } from './game'

export default {
  title: 'Game',
  component: Game,
} as ComponentMeta<typeof Game>

type GameStory = ComponentStory<typeof Game>

const Template = () => <Game />

export const Default: GameStory = Template.bind({})
Default.args = {}
