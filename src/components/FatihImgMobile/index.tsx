import React from "react"
import { Box, Heading, Image, Text } from "@chakra-ui/react"

const FatihImgMobile = () => {
  return (
    <Box display={[null, null, "none"]} pos="relative" w="100%" h="100vh">
      <Heading
        fontSize="4xl"
        pos="absolute"
        zIndex={2}
        color="white"
        top={4}
        left={4}
      >
        Fatih Can
      </Heading>
      <Text
        fontSize="2xl"
        pos="absolute"
        zIndex={2}
        color="white"
        top={16}
        left={4}
      >
        Front End Developer
      </Text>
      <Image
        src="images/fatih.jpg"
        pos="absolute"
        w="100%"
        h="100%"
        objectFit="cover"
        alt="Fatih Can"
      />
    </Box>
  )
}

export default FatihImgMobile
