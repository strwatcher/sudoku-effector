import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Mode, ModeProps } from './mode'

export default {
  title: 'Mode',
  component: Mode,
} as ComponentMeta<typeof Mode>

type ModeStory = ComponentStory<typeof Mode>

const Template = (args: ModeProps) => <Mode {...args} />

export const Default: ModeStory = Template.bind({})
Default.args = {}
