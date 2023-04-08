import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@semog-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
