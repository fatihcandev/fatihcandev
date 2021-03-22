import React from "react"
import { Box, Image } from "@chakra-ui/react"

import FatihImgOverlayTexts from "../FatihImgOverlayTexts"

import styles from "./FatihImg.module.css"

const FatihImg = () => {
  return (
    <Box
      w="100%"
      maxW={[null, null, 300, 460]}
      h={[null, null, 450, 600]}
      pos="relative"
      display={["none", null, "block"]}
      className={styles.animated}
    >
      <Image
        src="/images/fatih.jpg"
        pos="absolute"
        w="100%"
        h="100%"
        objectFit="cover"
        alt="Fatih Can"
      />
      <FatihImgOverlayTexts
        texts={["Fa", "Ca", "Front", "Dev"]}
        isInner
        className={styles.animated}
      />
      <FatihImgOverlayTexts
        texts={["tih", "n", "End", "eloper"]}
        className={styles.animated}
      />
    </Box>
  )
}

export default FatihImg
