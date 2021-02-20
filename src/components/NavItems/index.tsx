import React from "react"
import { Stack, Tooltip } from "@chakra-ui/react"

import TextWithAnimatedBg from "../TextWithAnimatedBg"

const NavItems = () => {
  return (
    <Stack direction={["column", null, "row"]}>
      <TextWithAnimatedBg bg="github">
        <Tooltip label="Coming soon..." aria-label="Coming soon...">
          About
        </Tooltip>
      </TextWithAnimatedBg>
      <TextWithAnimatedBg
        bg="github"
        isLink
        href="https://docs.google.com/document/d/1SmMjxxQrKnHyS4Tk1sQeaI88VH7C0D21REJuEKz-OsU/edit?usp=sharing"
      >
        Resume
      </TextWithAnimatedBg>
    </Stack>
  )
}

export default NavItems
