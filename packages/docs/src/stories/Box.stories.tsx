import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@semog-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Semog UI</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
