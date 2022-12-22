import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Field, FieldProps } from './field'
import { IArea } from '@/entities/area/types'

export default {
    title: 'Field',
    component: Field,
} as ComponentMeta<typeof Field>

type FieldStory = ComponentStory<typeof Field>

const Template = (args: FieldProps) => <Field {...args} />

const area = {
    cells: [
        { id: '1', value: 1, viewValue: 1, active: false },
        { id: '2', value: 2, viewValue: 2, active: false },
        { id: '3', value: 3, viewValue: 3, active: false },
        { id: '4', value: 4, viewValue: 4, active: false },
        { id: '5', value: 5, active: true },
        { id: '6', value: 6, viewValue: 6, active: false },
        { id: '7', value: 7, viewValue: 7, active: false },
        { id: '8', value: 8, viewValue: 8, active: false },
        { id: '9', value: 9, viewValue: 9, active: false },
    ],
} as IArea

export const Default: FieldStory = Template.bind({})
Default.args = {
    areas: [
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
        { ...area, id: '1' },
    ],
}
