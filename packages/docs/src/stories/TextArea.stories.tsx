import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Text } from '@semog-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your observations',
  },
}

export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
