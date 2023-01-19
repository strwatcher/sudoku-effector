import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tips, TipsProps } from './tips'

export default {
  title: 'Tips',
  component: Tips,
} as ComponentMeta<typeof Tips>

type TipsStory = ComponentStory<typeof Tips>

const Template = (args: TipsProps) => <Tips {...args} />

export const Default: TipsStory = Template.bind({})
Default.args = {}
