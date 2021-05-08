import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Flex,
  Stack,
} from "@chakra-ui/react"
import SocialLinks from "../SocialLinks"
import MailLink from "../MailLink"
import NavItems from "../NavItems"

interface IDrawerComponentProps {
  isOpen: boolean
  onClose: () => void
}

const DrawerComponent = ({ isOpen, onClose }: IDrawerComponentProps) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody p={6}>
              <Flex direction="column" justify="space-between" h="100%">
                <NavItems />
                <Stack>
                  <SocialLinks />
                  <MailLink />
                </Stack>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default DrawerComponent
