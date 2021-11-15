import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  'html, body ': {
    p: 0,
    m: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  img: {
    maxWidth: '100%',
    height: 'auto',
  },

  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },

  '*': {
    boxSizing: 'border-box',
  },
})
