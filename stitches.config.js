import { createStitches } from '@stitches/react'

export const {
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      text: '#0f1419',
      blue: '#3b82f6',
      background: 'white',
      gray: '#eff3f7',
    },
  },
  media: {
    // inspired from https://tailwindcss.com/docs/breakpoints
    sm: 'screen and (min-width: 640px)',
    md: 'screen and (min-width: 768px)',
    maxMd: 'screen and (max-width: 767px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
    '2xl': 'screen and (min-width: 1536px)',
  },
  utils: {
    m: value => ({
      margin: value,
    }),
    mt: value => ({
      marginTop: value,
    }),
    mr: value => ({
      marginRight: value,
    }),
    mb: value => ({
      marginBottom: value,
    }),
    ml: value => ({
      marginLeft: value,
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: value => ({
      padding: value,
    }),
    pt: value => ({
      paddingTop: value,
    }),
    pr: value => ({
      paddingRight: value,
    }),
    pb: value => ({
      paddingBottom: value,
    }),
    pl: value => ({
      paddingLeft: value,
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: value => ({
      width: value,
      height: value,
    }),
    widthPercent: value => ({
      width: `${value}%`,
    }),
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    text: 'white',
    background: '#15202a',
  },
})
