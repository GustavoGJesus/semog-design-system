import { styled } from '@stitches/react'
import { ComponentProps } from 'react'

export const TextArea = styled('textarea', {
  backgroundColor: '$green',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid #gray200',
  fontFamily: '$default',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    borderColor: '$blue',
    outline: 0,
  },

  '&:placeholder': {
    color: '$gray200',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
