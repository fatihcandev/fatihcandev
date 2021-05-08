import { ChakraProvider } from "@chakra-ui/react"

import Home from "./views/Home"
import { customTheme } from "./theme"

export const App = () => (
  <ChakraProvider theme={customTheme} resetCSS>
    <Home />
  </ChakraProvider>
)
