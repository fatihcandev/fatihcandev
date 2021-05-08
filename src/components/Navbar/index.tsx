import { Box, Flex, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import MailLink from "../MailLink"
import NavItems from "../NavItems"

interface INavbarProps {
  onOpenDrawer: () => void
}

const Navbar = ({ onOpenDrawer }: INavbarProps) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
    >
      <Box display={["none", null, "block"]}>
        <NavItems />
      </Box>
      <Box display={["none", null, "block"]}>
        <MailLink />
      </Box>
      <Box display={[null, null, "none"]} ml="auto">
        <IconButton
          color="white"
          size="lg"
          variant="unstyled"
          aria-label="Open drawer"
          icon={<HamburgerIcon />}
          onClick={onOpenDrawer}
        />
      </Box>
    </Flex>
  )
}

export default Navbar
