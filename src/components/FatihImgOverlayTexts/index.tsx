import { Flex, Heading } from "@chakra-ui/react"

interface IFatihImgOverlayTextProps {
  isInner?: boolean
  texts: string[]
  className?: string
}

const FatihImgOverlayTexts = ({
  isInner,
  texts,
  className,
}: IFatihImgOverlayTextProps) => {
  return (
    <Flex
      direction="column"
      pos="absolute"
      top={100}
      right={isInner ? 0 : [null, null, -208, -369]}
      align={isInner ? "flex-end" : "flex-start"}
    >
      {texts.map((text, index) => (
        <Heading
          key={index}
          fontSize={[null, null, "7xl", "9xl"]}
          lineHeight="1"
          color={isInner ? "white" : undefined}
          className={className}
        >
          {text}
        </Heading>
      ))}
    </Flex>
  )
}

export default FatihImgOverlayTexts
