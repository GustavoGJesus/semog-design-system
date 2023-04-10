import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@semog-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name please',
  },
}

export const Disable: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'woovi.com',
  },
}
