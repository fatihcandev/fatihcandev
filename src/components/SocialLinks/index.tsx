import React from "react"
import { Stack } from "@chakra-ui/react"

import TextWithAnimatedBg from "../TextWithAnimatedBg"

const SocialLinks = () => {
  return (
    <Stack>
      <TextWithAnimatedBg
        bg="linkedin"
        href="https://linkedin.com/in/fatihcandev"
        isLink
      >
        LinkedIn
      </TextWithAnimatedBg>
      <TextWithAnimatedBg
        bg="github"
        href="https://github.com/fatihcandev"
        isLink
      >
        GitHub
      </TextWithAnimatedBg>
      <TextWithAnimatedBg
        bg="medium"
        href="https://medium.com/@fatihcandev"
        isLink
      >
        Medium
      </TextWithAnimatedBg>
      <TextWithAnimatedBg
        bg="twitter"
        href="https://twitter.com/fatihcandev"
        isLink
      >
        Twitter
      </TextWithAnimatedBg>
    </Stack>
  )
}

export default SocialLinks
