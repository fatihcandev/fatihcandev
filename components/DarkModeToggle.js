import { styled } from 'stitches.config'

const DarkModeToggle = props => {
  const { checked } = props
  return (
    <Container checked={checked}>
      <Ball checked={checked} />
      <input type="checkbox" {...props} />
    </Container>
  )
}

export default DarkModeToggle

const Container = styled('div', {
  width: 38,
  height: 20,
  borderRadius: '9999px',
  display: 'flex',
  alignItems: 'center',
  px: 2,
  backgroundColor: 'white',
  position: 'relative',
  transition: 'all 0.2s ease',
  border: '1px solid black',

  '& input': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    cursor: 'pointer',
  },

  variants: {
    checked: {
      true: {
        backgroundColor: 'black',
        pl: 20,
      },
    },
  },
})

const Ball = styled('span', {
  size: 16,
  backgroundColor: 'black',
  borderRadius: '50%',

  variants: {
    checked: {
      true: {
        backgroundColor: 'white',
      },
    },
  },
})
