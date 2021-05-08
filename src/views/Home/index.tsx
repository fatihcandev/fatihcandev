import { Flex } from "@chakra-ui/react"

import Layout from "../../components/Layout"
import FatihImg from "../../components/FatihImg"
import FatihImgMobile from "../../components/FatihImgMobile"

const Home = () => {
  return (
    <Layout>
      <Flex minH="100%" justify="center" align="center">
        <FatihImgMobile />
        <FatihImg />
      </Flex>
    </Layout>
  )
}

export default Home
