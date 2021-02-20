import React from "react"
import { Flex, Text } from "@chakra-ui/react"

interface IFatihImgOverlayTextProps {
  isInner?: boolean
  texts: string[]
}

const FatihImgOverlayTexts = ({
  isInner,
  texts,
}: IFatihImgOverlayTextProps) => {
  return (
    <Flex
      direction="column"
      pos="absolute"
      top={100}
      right={isInner ? 0 : [null, null, -199, -353]}
      align={isInner ? "flex-end" : "flex-start"}
    >
      {texts.map((text, index) => (
        <Text
          key={index}
          fontSize={[null, null, "7xl", "9xl"]}
          lineHeight="1"
          color={isInner ? "white" : undefined}
        >
          {text}
        </Text>
      ))}
    </Flex>
  )
}

export default FatihImgOverlayTexts
