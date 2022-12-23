import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Game, GameProps } from './game'

export default {
    title: 'Game',
    component: Game,
} as ComponentMeta<typeof Game>

type GameStory = ComponentStory<typeof Game>

const Template = (args: GameProps) => <Game {...args} />

export const Default: GameStory = Template.bind({})
Default.args = {}
