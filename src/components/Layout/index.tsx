import { Box, useDisclosure } from "@chakra-ui/react"

import SocialLinks from "../SocialLinks"
import DrawerComponent from "../DrawerComponent"
import Navbar from "../Navbar"

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure()

  return (
    <Box w="100vw" h="100vh" pos="fixed" bg="primary">
      <Navbar onOpenDrawer={onOpenDrawer} />
      <Box
        display={["none", null, "block"]}
        pos="fixed"
        left={4}
        bottom={4}
        zIndex={3}
      >
        <SocialLinks />
      </Box>
      {children}
      {isDrawerOpen && (
        <DrawerComponent isOpen={isDrawerOpen} onClose={onCloseDrawer} />
      )}
    </Box>
  )
}

export default Layout
