import * as React from "react"
import { Global } from "@emotion/react"
import { ChakraProvider } from "@chakra-ui/react"

import Home from "./views/Home"
import { customTheme, fontFace } from "./theme"

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Global styles={fontFace} />
    <Home />
  </ChakraProvider>
)
