import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@semog-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'by default the heading is `h2`, but we can change that with the as property',
      },
    },
  },
}
