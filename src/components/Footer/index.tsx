import { Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react"

import ChakraUILogo from "../ChakraUILogo"

const Footer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)")
  return (
    <Flex justify="center" align="center">
      <HStack>
        <Text fontSize="lg" color={["white", null, "gray.800"]}>
          Made with
        </Text>
        <Link href="https://chakra-ui.com/" isExternal>
          <ChakraUILogo textColor={isDesktop ? "#2D3748" : "#fff"} />
        </Link>
      </HStack>
    </Flex>
  )
}

export default Footer
