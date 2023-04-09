import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  padding: '0 $4',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green',

        '&:not(:disabled):hover': {
          transition: 'backgroundColor 0.1s',
        },

        '&:disabled': {
          backgroundColor: '#C4C4C4',
          cursor: 'not-allowed',
        },
      },

      secondary: {
        color: '$green',
        backgroundColor: 'transparent',
        border: '1px solid $green',

        '&:disabled': {
          backgroundColor: '#C4C4C4',
          cursor: 'not-allowed',
        },
      },

      tertiary: {
        color: '$blue',

        '&:disabled': {
          backgroundColor: '#C4C4C4',
          cursor: 'not-allowed',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
