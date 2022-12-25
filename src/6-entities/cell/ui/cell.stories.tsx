import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Cell, CellProps } from './cell'

export default {
  argTypes: {
    viewValue: {
      control: {
        type: 'range',
        min: 1,
        max: 9,
        step: 1,
      },
    },
    value: {
      control: {
        type: 'range',
        min: 1,
        max: 9,
        step: 1,
      },
    },
  },
  title: 'Cell',
  component: Cell,
} as ComponentMeta<typeof Cell>

const Template = (args: CellProps) => <Cell {...args} />

export const Rest: ComponentStory<typeof Cell> = Template.bind({})
Rest.args = {
  id: '1',
  value: 1,
  viewValue: 1,
  active: false,
}

export const Active: ComponentStory<typeof Cell> = Template.bind({})
Active.args = {
  id: '1',
  value: 1,
  viewValue: 1,
  active: true,
}

export const Empty: ComponentStory<typeof Cell> = Template.bind({})
Empty.args = {
  id: '1',
  value: 1,
  active: false,
}
