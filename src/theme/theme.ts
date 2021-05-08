import { extendTheme, theme } from "@chakra-ui/react"

const customTheme = extendTheme({
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;",
    heading:
      "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;",
  },
  colors: {
    ...theme.colors,
    primary: "#f2f2f2",
    linkedin: "#2867B2",
    github: "#24292e",
    medium: "#1A8917",
    twitter: "#1DA1F2",
  },
})

export default customTheme
