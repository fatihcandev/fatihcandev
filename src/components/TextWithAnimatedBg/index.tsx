import React from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/react"

interface ITextWithAnimatedBgProps {
  bg: string
  isLink?: boolean
  href?: string
  children: React.ReactNode
}

const TextWithAnimatedBg = ({
  bg,
  isLink,
  href,
  children,
}: ITextWithAnimatedBgProps) => {
  return (
    <Flex
      w="max-content"
      overflowY="hidden"
      pos="relative"
      _hover={{
        "& .bg": {
          bottom: 0,
        },
        "& .text": {
          color: "white",
        },
      }}
    >
      <Box
        className="bg"
        pos="absolute"
        w="100%"
        h="100%"
        bottom="-26.5px"
        bg={bg}
        transition="bottom 0.3s ease-out"
        zIndex={1}
      />

      {isLink && href ? (
        <Link
          className="text"
          mx={2}
          fontSize="lg"
          zIndex={2}
          transition="color 0.3s ease-out"
          _hover={{
            textDecor: "none",
          }}
          href={href}
          isExternal
        >
          {children}
        </Link>
      ) : (
        <Text
          className="text"
          mx={2}
          fontSize="lg"
          zIndex={2}
          transition="color 0.3s ease-out"
          cursor="pointer"
        >
          {children}
        </Text>
      )}
    </Flex>
  )
}

export default TextWithAnimatedBg
