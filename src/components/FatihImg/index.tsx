import React from "react"
import { Box, Image } from "@chakra-ui/react"

import FatihImgOverlayTexts from "../FatihImgOverlayTexts"

const FatihImg = () => {
  return (
    <Box
      w="100%"
      maxW={[null, null, 300, 460]}
      h={[null, null, 450, 600]}
      pos="relative"
      display={["none", null, "block"]}
    >
      <Image
        src="/images/fatih.jpg"
        pos="absolute"
        w="100%"
        h="100%"
        objectFit="cover"
        alt="Fatih Can"
      />
      <FatihImgOverlayTexts texts={["Fa", "Ca", "Front", "Dev"]} isInner />
      <FatihImgOverlayTexts texts={["tih", "n", "End", "eloper"]} />
    </Box>
  )
}

export default FatihImg
