import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@semog-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/GustavoGJesus.png',
    alt: 'Gustavo Gomes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
