import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$green',
  padding: '$3 $4',
  borderRadius: '$small',
  boxSizing: 'border-box',
  border: '2px solid #gray200',
  display: 'flex',
  alignItems: 'baseLine',

  '&:has(input:focus)': {
    borderColor: '$blue',
  },

  '&:has(input: disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$small',
  color: '$blue',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$small',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$blue',
  },
})
