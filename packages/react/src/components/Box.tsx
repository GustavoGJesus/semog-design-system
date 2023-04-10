import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$green',
  color: '$white',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
