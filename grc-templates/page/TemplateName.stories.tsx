import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TemplateName, TemplateNameProps } from './template-name'

export default {
  title: 'TemplateName',
  component: TemplateName,
} as ComponentMeta<typeof TemplateName>

type TemplateNameStory = ComponentStory<typeof TemplateName>

const Template = (args: TemplateNameProps) => <TemplateName {...args} />

export const Default: TemplateNameStory = Template.bind({})
Default.args = {}
