import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@semog-ui/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Semog UI</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
