import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@semog-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident excepturi vero totam praesentium, nulla fugiat quod iure, exercitationem sequi commodi obcaecati modi debitis mollitia! Officiis sint rem nemo hic!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
