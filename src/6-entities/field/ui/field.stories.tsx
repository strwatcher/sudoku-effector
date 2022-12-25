import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Field, FieldProps } from './field'
import { field } from '@/7-shared/lib/generator/field'

export default {
  title: 'Field',
  component: Field,
} as ComponentMeta<typeof Field>

type FieldStory = ComponentStory<typeof Field>

const Template = (args: FieldProps) => <Field {...args} />

export const Default: FieldStory = Template.bind({})
Default.args = { areas: field }
