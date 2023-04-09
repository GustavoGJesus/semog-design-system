import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$green',
  color: '$white',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
