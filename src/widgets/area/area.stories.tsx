import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Area, AreaProps } from './area'

export default {
  title: 'Area',
  component: Area,
} as ComponentMeta<typeof Area>

type AreaStory = ComponentStory<typeof Area>
const Template = (args: Omit<AreaProps, 'id'>) => (
  <Area
    id={''}
    {...args}
  />
)

export const Felt: AreaStory = Template.bind({})
Felt.args = {
  cells: [
    { id: '1', value: 1, viewValue: 1, active: false, areaId: '1' },
    { id: '2', value: 2, viewValue: 2, active: false, areaId: '1' },
    { id: '3', value: 3, viewValue: 3, active: false, areaId: '1' },
    { id: '4', value: 4, viewValue: 4, active: false, areaId: '1' },
    { id: '5', value: 5, viewValue: 5, active: false, areaId: '1' },
    { id: '6', value: 6, viewValue: 6, active: false, areaId: '1' },
    { id: '7', value: 7, viewValue: 7, active: false, areaId: '1' },
    { id: '8', value: 8, viewValue: 8, active: false, areaId: '1' },
    { id: '9', value: 9, viewValue: 9, active: false, areaId: '1' },
  ],
}

export const WithEmpties: AreaStory = Template.bind({})
WithEmpties.args = {
  cells: [
    { id: '1', value: 1, viewValue: 1, active: false, areaId: '1' },
    { id: '2', value: 2, active: false, areaId: '1' },
    { id: '3', value: 3, viewValue: 3, active: false, areaId: '1' },
    { id: '4', value: 4, active: false, areaId: '1' },
    { id: '5', value: 5, viewValue: 5, active: false, areaId: '1' },
    { id: '6', value: 6, viewValue: 6, active: false, areaId: '1' },
    { id: '7', value: 7, active: false, areaId: '1' },
    { id: '8', value: 8, viewValue: 8, active: false, areaId: '1' },
    { id: '9', value: 9, active: false, areaId: '1' },
  ],
}

export const WithActive: AreaStory = Template.bind({})
WithActive.args = {
  cells: [
    { id: '1', value: 1, viewValue: 1, active: false, areaId: '1' },
    { id: '2', value: 2, viewValue: 2, active: false, areaId: '1' },
    { id: '3', value: 3, viewValue: 3, active: false, areaId: '1' },
    { id: '4', value: 4, viewValue: 4, active: false, areaId: '1' },
    { id: '5', value: 5, active: true, areaId: '1' },
    { id: '6', value: 6, viewValue: 6, active: false, areaId: '1' },
    { id: '7', value: 7, viewValue: 7, active: false, areaId: '1' },
    { id: '8', value: 8, viewValue: 8, active: false, areaId: '1' },
    { id: '9', value: 9, viewValue: 9, active: false, areaId: '1' },
  ],
}
